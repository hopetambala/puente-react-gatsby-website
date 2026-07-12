// Audit the Contentful space against what the Gatsby code actually queries.
// Read-only. Usage: CONTENTFUL_MANAGEMENT_TOKEN=... yarn contentful:audit
import {
  getEnvironment,
  getAllContentTypes,
  getAllEntries,
  getDefaultLocale,
  graphqlName,
  USED_TYPES,
} from "./lib/client.mjs";

const environment = await getEnvironment();
const locale = await getDefaultLocale(environment);
const types = await getAllContentTypes(environment);

const rows = [];
for (const ct of types) {
  const entries = await getAllEntries(environment, ct.sys.id);
  const published = entries.filter((e) => e.isPublished()).length;
  rows.push({
    id: ct.sys.id,
    name: ct.name,
    graphql: graphqlName(ct),
    entries: `${published}/${entries.length}`,
    status: USED_TYPES.includes(graphqlName(ct)) ? "USED" : "ORPHAN?",
  });
}
rows.sort((a, b) => a.status.localeCompare(b.status) || a.name.localeCompare(b.name));
console.log(`Content types: ${types.length} (default locale: ${locale})\n`);
console.table(rows);

const orphans = rows.filter((r) => r.status === "ORPHAN?");
const missing = USED_TYPES.filter((n) => !rows.some((r) => r.graphql === n));
if (missing.length) {
  console.log(`\n!! Types the code queries but the space lacks: ${missing.join(", ")}`);
}
if (orphans.length) {
  console.log(
    `\nCandidate orphans (VERIFY before deleting):\n  yarn contentful:delete-types --types ${orphans
      .map((r) => r.id)
      .join(",")} --yes\n`
  );
}

// --- Details needed by the migration ---

const detail = async (name, fn) => {
  const ct = types.find((t) => graphqlName(t) === name);
  if (!ct) return console.log(`\n[${name}] not found in this environment`);
  await fn(ct);
};

await detail("newsPage", async (ct) => {
  const [entry] = await getAllEntries(environment, ct.sys.id);
  const asset = entry?.fields?.headerImage?.[locale];
  console.log(`\n[newsPage] headerImage asset id: ${asset?.sys?.id ?? "NOT SET"}`);
});

await detail("teamMemberModel", async (ct) => {
  const team = ct.fields.find((f) => f.id === "team");
  console.log(
    `\n[teamMemberModel] team field validations:`,
    JSON.stringify(team?.validations ?? [], null, 2)
  );
});

await detail("projectTypes", async (ct) => {
  const entries = await getAllEntries(environment, ct.sys.id);
  console.log(`\n[projectTypes] ${entries.length} entries — explosion preview:`);
  const ordinals = ["One", "Two", "Three", "Four", "Five"];
  for (const entry of entries) {
    const category = entry.fields[`projectTypeFour`]?.[locale]
      ? "signature-project"
      : "program";
    console.log(`  entry ${entry.sys.id} -> category "${category}"`);
    ordinals.forEach((ord, i) => {
      const name = entry.fields[`projectType${ord}`]?.[locale];
      if (!name) return;
      const hasImage = !!entry.fields[`project${ord}Image`]?.[locale];
      const hasDesc = !!entry.fields[`project${ord}LongDescription`]?.[locale];
      console.log(
        `    order ${i + 1}: "${name}" (image: ${hasImage}, description: ${hasDesc})`
      );
    });
  }
});
