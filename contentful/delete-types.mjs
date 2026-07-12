// Delete content types AND all their entries.
//
//   node contentful/delete-types.mjs --types typeA,typeB          (dry run)
//   node contentful/delete-types.mjs --types typeA,typeB --yes    (execute)
//
// Types can be given as content type ids or camelCased names. Types the
// Gatsby code still queries are refused unless --allow-used is passed
// (needed for the final cleanup after the code switchover is deployed).
import {
  getEnvironment,
  findTypeByGraphqlName,
  getAllEntries,
  graphqlName,
  unpublishAndDeleteEntry,
  USED_TYPES,
} from "./lib/client.mjs";

const args = process.argv.slice(2);
const typesArg = args[args.indexOf("--types") + 1];
const confirmed = args.includes("--yes");
const allowUsed = args.includes("--allow-used");

if (!typesArg || args.indexOf("--types") === -1) {
  console.error("Usage: node contentful/delete-types.mjs --types a,b,c [--yes] [--allow-used]");
  process.exit(1);
}

const environment = await getEnvironment();
const requested = typesArg.split(",").map((s) => s.trim()).filter(Boolean);

const resolved = [];
for (const name of requested) {
  const ct = await findTypeByGraphqlName(environment, name);
  if (!ct) {
    console.error(`! "${name}" not found — aborting (nothing deleted).`);
    process.exit(1);
  }
  if (USED_TYPES.includes(graphqlName(ct)) && !allowUsed) {
    console.error(
      `! "${ct.name}" (${ct.sys.id}) is still queried by the Gatsby code. ` +
        "Pass --allow-used only after the code switchover is deployed. Aborting."
    );
    process.exit(1);
  }
  resolved.push(ct);
}

for (const ct of resolved) {
  const entries = await getAllEntries(environment, ct.sys.id);
  console.log(`${ct.name} (${ct.sys.id}): ${entries.length} entries`);
  if (!confirmed) continue;
  for (const entry of entries) {
    await unpublishAndDeleteEntry(entry);
  }
  let type = ct;
  if (type.isPublished()) type = await type.unpublish();
  await type.delete();
  console.log(`  deleted.`);
}

if (!confirmed) {
  console.log("\nDry run only — re-run with --yes to delete the above.");
}
