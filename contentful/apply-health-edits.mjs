// Apply Greg & Emma's finalized Puente Health copy edits (Aug 2026) to the
// healthPage singleton, the three healthStat entries, the three health
// `project` entries, and the donor CTA.
//
// Source of truth: the Google Doc Greg shared in Slack
//   https://docs.google.com/document/d/1L5d6hSmDyhCFI2gIq4ZfQ0Hkrz2RcJeClC5Ftl2t79s/edit
// Only the sections Greg marked "done" (pages 1-3, through the Special Patient
// intro) plus the one CTA he explicitly labeled "Edited version" are applied
// here. Tracked-change fragments in the doc were resolved to clean final copy.
//
// Deliberately NOT touched (the doc still carries "Placeholder: Greg/Emma to
// supply..." for these, so there is no real content to apply yet):
//   - healthPage.byTheNumbersValues[2..3]  (Operativos conducted / patients seen)
//   - the 3 healthStory entries             (patient/volunteer quotes)
//   - healthPage.ctaStudentsBody            (open pre-med/pre-health comment thread)
//
// Idempotent: reads each entry, only updates+publishes fields that actually
// changed, and prints a before -> after diff. Pass --dry-run to preview
// without writing. Mirrors the other scripts in this directory.

import {
  getEnvironment,
  findTypeByGraphqlName,
  getAllEntries,
  getDefaultLocale,
} from "./lib/client.mjs";

const DRY_RUN = process.argv.includes("--dry-run");

// ---- Finalized copy from the doc -------------------------------------------

const HEALTH_PAGE_EDITS = {
  // Added "evidence-based, sustainable" up front. The doc's literal
  // "sustainable, and consistent, compassionate" is rendered here as a clean
  // 4-item serial list.
  heroSubText:
    "Bringing evidence-based, sustainable, consistent, and compassionate healthcare directly to families in Constanza, Dominican Republic.",

  // "Edit:" version chosen over the "Original:" line in the doc.
  programsSubtext:
    "We have developed three ongoing initiatives, each designed with input from local community leaders and grounded in evidence-based practices.",

  // Real two-paragraph intro; the doc's trailing "*Placeholder: ...*" line is
  // dropped so the section carries no placeholder text.
  specialPatientProgramText:
    "Some patients in our Casa a Casa program require a level of care that goes beyond our standard monthly visits: individuals managing complex chronic conditions who need more intensive monitoring, medication support, or specialist referrals.\n\nOur Special Patient Program provides this elevated, individualized care.",

  // "Edited version:" line from the doc (Support Puente Health).
  ctaDonorsBody:
    "Your contribution keeps our work going, house by house, mom by mom, patient by patient. Donations fund our key programs that serve hundreds of families each year.",
};

// healthStat entries, matched by their `order`. The doc gives each statistic
// as one sentence; split here into the entry's value / description / source
// shape. "124/100,000" and "22/1000" are rendered as per-births rates.
const STAT_EDITS = {
  1: {
    value: "49%",
    description: "of adults in the DR have hypertension",
    source: "1.5× the U.S. rate",
  },
  2: {
    value: "124",
    description: "maternal deaths per 100,000 births in the DR",
    source: "7× the U.S. rate",
  },
  3: {
    value: "22",
    description: "neonatal deaths per 1,000 births in the DR",
    source: "6× the U.S. rate",
  },
};

// project (category "program") longDescription edits, matched by name. Doc
// tracked-changes resolved to clean copy (e.g. "pop-upmobile" -> "mobile",
// "onin nutrition" -> "in nutrition", "chronic -disease" -> "chronic-disease",
// "entry point  bridge" -> "bridge", "long-term support sustainable progress"
// -> "sustainable progress").
const PROGRAM_EDITS = {
  "Casa a Casa":
    "Launched in 2019, Casa a Casa (“House to House”) brings consistent health monitoring directly to those most in need. Puente’s trained health promoters visit at-risk patients each month, offering free blood-pressure and glucose checks, education, and early detection of complications related to chronic conditions such as hypertension and diabetes. Today, Casa a Casa supports more than 300 patients a month across multiple Dominican communities, helping them manage their health with dignity and consistency. By combining compassionate personal outreach with reliable data collection, the program strengthens long-term outcomes and reduces preventable hospital visits, one household at a time.",

  "Maternal Health":
    "Introduced in 2023, the Maternal Health Program nurtures healthier mothers and children through culturally grounded, evidence-based care and education. It empowers women with practical knowledge, emotional support, and a strong sense of community, ensuring that every pregnancy is met with dignity, confidence, and well-being.\n\nEach group includes 12-15 women, and to date, the program has supported more than 50 mothers in Constanza. Each course includes hands-on cooking and nutrition information, prenatal and birth guidance, domestic violence education, and family planning. By pairing accessible education with compassionate accompaniment, Puente helps families lay the groundwork for stronger, healthier futures.",

  Operativos:
    "Puente’s operativos are mobile community clinics that bring essential healthcare to families in and around Constanza. Conducted several times a year in partnership with local hospitals, health authorities, and community leaders, these pop-up events provide free medical consultations, medications, screenings, and health education to residents who otherwise face barriers to care.\n\nEach operativo transforms a school, church, or community center into a fully functioning clinic staffed by health care professionals and students from the Dominican Republic and the United States. Patients receive services ranging from primary care and pediatrics to women’s health, dentistry, and preventive education in nutrition and chronic-disease management. Beyond immediate treatment, operativos serve as a bridge to ongoing programs such as Casa a Casa and Maternal Health, linking short-term care to sustainable progress. In every setting, these clinics reflect Puente’s commitment to access, partnership, and long-term community wellness.",
};

// ---- Apply -----------------------------------------------------------------

const env = await getEnvironment();
const locale = await getDefaultLocale(env);

let changedCount = 0;

function getField(entry, name) {
  const v = entry.fields?.[name];
  if (v == null) return undefined;
  return v[locale] !== undefined ? v[locale] : undefined;
}

function preview(value, n = 140) {
  const s = String(value).replace(/\n/g, "↵");
  return s.length > n ? s.slice(0, n) + "…" : s;
}

// Stage a field change on an entry, logging the diff. Returns true if changed.
function stage(entry, label, name, next) {
  const cur = getField(entry, name);
  if (cur === next) {
    console.log(`  = ${label}.${name} (unchanged)`);
    return false;
  }
  console.log(`  ✎ ${label}.${name}`);
  console.log(`      - ${preview(cur)}`);
  console.log(`      + ${preview(next)}`);
  entry.fields[name] = { ...(entry.fields[name] || {}), [locale]: next };
  return true;
}

// Persist + publish an entry if any field on it changed.
async function commit(entry, label) {
  if (DRY_RUN) {
    console.log(`  (dry-run: not writing ${label})\n`);
    return;
  }
  let updated = await entry.update();
  updated = await updated.publish();
  console.log(`  ✓ updated & published ${label} (v${updated.sys.version})\n`);
}

// healthPage singleton
{
  const ct = await findTypeByGraphqlName(env, "healthPage");
  const [page] = await getAllEntries(env, ct.sys.id);
  console.log(`healthPage ${page.sys.id}`);
  let dirty = false;
  for (const [name, next] of Object.entries(HEALTH_PAGE_EDITS)) {
    if (stage(page, "healthPage", name, next)) dirty = true;
  }
  if (dirty) {
    changedCount++;
    await commit(page, "healthPage");
  } else {
    console.log("  (no changes)\n");
  }
}

// healthStat entries, matched by order
{
  const ct = await findTypeByGraphqlName(env, "healthStat");
  const entries = await getAllEntries(env, ct.sys.id);
  for (const [order, edit] of Object.entries(STAT_EDITS)) {
    const entry = entries.find((e) => getField(e, "order") === Number(order));
    if (!entry) {
      console.log(`healthStat order=${order}: NOT FOUND (skipping)\n`);
      continue;
    }
    console.log(`healthStat ${entry.sys.id} (order ${order})`);
    let dirty = false;
    for (const [name, next] of Object.entries(edit)) {
      if (stage(entry, `stat[${order}]`, name, next)) dirty = true;
    }
    if (dirty) {
      changedCount++;
      await commit(entry, `healthStat order=${order}`);
    } else {
      console.log("  (no changes)\n");
    }
  }
}

// project (category program) longDescription, matched by name
{
  const ct = await findTypeByGraphqlName(env, "project");
  const entries = await getAllEntries(env, ct.sys.id);
  for (const [name, next] of Object.entries(PROGRAM_EDITS)) {
    const entry = entries.find((e) => getField(e, "name") === name);
    if (!entry) {
      console.log(`project "${name}": NOT FOUND (skipping)\n`);
      continue;
    }
    console.log(`project ${entry.sys.id} ("${name}")`);
    const dirty = stage(entry, `program "${name}"`, "longDescription", next);
    if (dirty) {
      changedCount++;
      await commit(entry, `project "${name}"`);
    } else {
      console.log("  (no changes)\n");
    }
  }
}

console.log(
  DRY_RUN
    ? `Dry run complete. ${changedCount} entr${changedCount === 1 ? "y" : "ies"} would change.`
    : `Done. ${changedCount} entr${changedCount === 1 ? "y" : "ies"} updated & published.`
);
