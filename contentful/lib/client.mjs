import { createClient } from "contentful-management";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  ".."
);

// The 19 content types the Gatsby code actively queries, as the camelCased
// GraphQL-ish names gatsby-source-contentful derives from the content type
// *name* (useNameForId defaults to true).
export const USED_TYPES = [
  "landingPage",
  "aboutPage",
  "projectPage",
  "healthPage",
  "technologyPage",
  "volunteerPage",
  "donationPage",
  "merchandisePage",
  "newsPage",
  "acceptableUsePage",
  "privacyPolicy",
  "termsOfServicePage",
  "featuredVolunteers",
  "projectTypes",
  "eventPage",
  "teamMemberModel",
  "healthStat",
  "healthStory",
  "footer",
];

// Minimal .env parser so scripts share Gatsby's .env.development values
// without adding a dotenv dependency.
function loadEnvFile(file) {
  const p = path.join(repoRoot, file);
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const [, key, raw] = m;
    if (process.env[key] !== undefined) continue;
    process.env[key] = raw.replace(/^["']|["']$/g, "");
  }
}

export function getConfig() {
  loadEnvFile(".env.development");
  let fileConfig = {};
  try {
    fileConfig = JSON.parse(
      readFileSync(path.join(repoRoot, ".contentful.json"), "utf8")
    );
  } catch (_) {}
  const spaceId = process.env.CONTENTFUL_SPACE_ID || fileConfig.spaceId;
  const managementToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
  const environmentId = process.env.CONTENTFUL_ENVIRONMENT || "master";
  if (!spaceId) {
    throw new Error(
      "CONTENTFUL_SPACE_ID not found (env var or .contentful.json)."
    );
  }
  if (!managementToken) {
    throw new Error(
      "CONTENTFUL_MANAGEMENT_TOKEN env var is required (create one under Settings > API keys > Content management tokens)."
    );
  }
  return { spaceId, managementToken, environmentId };
}

export async function getEnvironment() {
  const { spaceId, managementToken, environmentId } = getConfig();
  // contentful-management v12 defaults to the "plain" client; these scripts
  // use the chained (legacy) API, so opt back in. Prints a deprecation
  // warning — fine for one-off migration tooling.
  const client = createClient({ accessToken: managementToken }, { type: "legacy" });
  const space = await client.getSpace(spaceId);
  const environment = await space.getEnvironment(environmentId);
  console.log(`Space ${spaceId} / environment ${environmentId}\n`);
  return environment;
}

// lodash-style camelCase, matching how gatsby-source-contentful turns a
// content type name like "Team Member Model" into contentfulTeamMemberModel.
export function camelCase(str) {
  const words = String(str)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);
  return words
    .map((w, i) =>
      i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()
    )
    .join("");
}

export function graphqlName(contentType) {
  return camelCase(contentType.name);
}

export async function getAllContentTypes(environment) {
  const res = await environment.getContentTypes({ limit: 1000 });
  return res.items;
}

export async function findTypeByGraphqlName(environment, name) {
  const types = await getAllContentTypes(environment);
  return (
    types.find((ct) => graphqlName(ct) === name) ||
    types.find((ct) => ct.sys.id === name) ||
    null
  );
}

export async function getAllEntries(environment, contentTypeId) {
  const items = [];
  let skip = 0;
  for (;;) {
    const res = await environment.getEntries({
      content_type: contentTypeId,
      skip,
      limit: 100,
    });
    items.push(...res.items);
    skip += res.items.length;
    if (skip >= res.total || res.items.length === 0) break;
  }
  return items;
}

export async function getDefaultLocale(environment) {
  const locales = await environment.getLocales();
  return locales.items.find((l) => l.default).code;
}

export async function unpublishAndDeleteEntry(entry) {
  if (entry.isPublished()) {
    entry = await entry.unpublish();
  }
  await entry.delete();
}
