// Copy entry data into the consolidated model (idempotent):
//   1. 3 legal singletons          -> 3 legalPage entries (by slug)
//   2. 2 projectTypes entries      -> ~8 project entries (exploded, by name+category)
//   3. healthStat / healthStory    -> backfill context = "health"
// Run create-types.mjs first.
import {
  getEnvironment,
  findTypeByGraphqlName,
  getAllEntries,
  getDefaultLocale,
} from "./lib/client.mjs";

const environment = await getEnvironment();
const locale = await getDefaultLocale(environment);
const loc = (value) => ({ [locale]: value });

async function createPublished(contentTypeId, fields) {
  const entry = await environment.createEntry(contentTypeId, { fields });
  await entry.publish();
  return entry;
}

// --- 1. Legal pages ---------------------------------------------------------
const LEGAL = [
  ["acceptableUsePage", "acceptable-use"],
  ["privacyPolicy", "privacy-policy"],
  ["termsOfServicePage", "terms-of-service"],
];
const existingLegal = await getAllEntries(environment, "legalPage");
for (const [sourceName, slug] of LEGAL) {
  if (existingLegal.some((e) => e.fields.slug?.[locale] === slug)) {
    console.log(`= legalPage "${slug}" already exists`);
    continue;
  }
  const sourceType = await findTypeByGraphqlName(environment, sourceName);
  if (!sourceType) {
    console.log(`! ${sourceName}: source type not found, skipping "${slug}"`);
    continue;
  }
  const [source] = await getAllEntries(environment, sourceType.sys.id);
  if (!source) {
    console.log(`! ${sourceName}: no entry found, skipping "${slug}"`);
    continue;
  }
  await createPublished("legalPage", {
    slug: loc(slug),
    heroText: loc(source.fields.heroText?.[locale] ?? ""),
    bodyText: loc(source.fields.bodyText?.[locale] ?? ""),
  });
  console.log(`+ legalPage "${slug}" created from ${sourceName}`);
}

// --- 2. projectTypes -> project ---------------------------------------------
const ORDINALS = ["One", "Two", "Three", "Four", "Five"];
const projectTypes = await findTypeByGraphqlName(environment, "projectTypes");
if (!projectTypes) {
  console.log("! projectTypes: type not found, skipping project explosion");
} else {
  const sources = await getAllEntries(environment, projectTypes.sys.id);
  const existingProjects = await getAllEntries(environment, "project");
  console.log(`\nprojectTypes -> project (${sources.length} source entries):`);
  const table = [];
  for (const source of sources) {
    // Same discriminator the pages use: the programs entry has no 4th group.
    const category = source.fields.projectTypeFour?.[locale]
      ? "signature-project"
      : "program";
    for (const [i, ord] of ORDINALS.entries()) {
      // trim: master data has e.g. "Maternal Health " with a trailing space
      const name = source.fields[`projectType${ord}`]?.[locale]?.trim();
      if (!name) continue;
      const already = existingProjects.some(
        (e) =>
          e.fields.name?.[locale] === name &&
          e.fields.category?.[locale] === category
      );
      table.push({ category, order: i + 1, name, status: already ? "exists" : "created" });
      if (already) continue;
      const fields = {
        name: loc(name),
        category: loc(category),
        order: loc(i + 1),
      };
      const description = source.fields[`project${ord}LongDescription`]?.[locale];
      if (description) fields.longDescription = loc(description);
      const image = source.fields[`project${ord}Image`]?.[locale];
      if (image) fields.image = loc(image);
      await createPublished("project", fields);
    }
  }
  console.table(table);
  console.log(
    'Check the "program" names above against PROGRAM_META in src/pages/model/health/index.js — they must match exactly.'
  );
}

// --- 3. healthStat / healthStory context backfill ----------------------------
for (const name of ["healthStat", "healthStory"]) {
  const ct = await findTypeByGraphqlName(environment, name);
  if (!ct) {
    console.log(`! ${name}: type not found, skipping backfill`);
    continue;
  }
  const entries = await getAllEntries(environment, ct.sys.id);
  let updated = 0;
  for (let entry of entries) {
    if (entry.fields.context?.[locale] === "health") continue;
    const wasPublished = entry.isPublished();
    entry.fields.context = loc("health");
    entry = await entry.update();
    if (wasPublished) await entry.publish();
    updated++;
  }
  console.log(`${name}: context="health" backfilled on ${updated}/${entries.length} entries`);
}

console.log("\nDone.");
