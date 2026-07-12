// Create the consolidated content types (idempotent — safe to run on the
// scratch environment, then again on master).
//
// - legalPage: replaces acceptableUsePage / privacyPolicy / termsOfServicePage
// - project:   replaces the overloaded projectTypes numbered-field type
// - healthStat / healthStory: gain an optional "context" field
//
// NOTE: content type *names* matter — gatsby-source-contentful derives
// GraphQL types from the name ("Legal Page" -> contentfulLegalPage), so do
// not rename existing types here.
import {
  getEnvironment,
  findTypeByGraphqlName,
} from "./lib/client.mjs";

const environment = await getEnvironment();

async function ensureType(id, definition) {
  try {
    const existing = await environment.getContentType(id);
    console.log(`= content type "${id}" already exists, skipping create`);
    return existing;
  } catch (_) {}
  let ct = await environment.createContentTypeWithId(id, definition);
  ct = await ct.publish();
  console.log(`+ created content type "${id}" (${definition.name})`);
  return ct;
}

async function setMarkdownWidget(contentTypeId, fieldIds) {
  const ei = await environment.getEditorInterfaceForContentType(contentTypeId);
  let changed = false;
  for (const control of ei.controls) {
    if (fieldIds.includes(control.fieldId) && control.widgetId !== "markdown") {
      control.widgetId = "markdown";
      control.widgetNamespace = "builtin";
      changed = true;
    }
  }
  if (changed) {
    await ei.update();
    console.log(`  set markdown editor on ${contentTypeId}: ${fieldIds.join(", ")}`);
  }
}

await ensureType("legalPage", {
  name: "Legal Page",
  description:
    "Shared shape for acceptable-use, privacy-policy and terms-of-service pages.",
  displayField: "slug",
  fields: [
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      required: true,
      validations: [
        { unique: true },
        { in: ["acceptable-use", "privacy-policy", "terms-of-service"] },
      ],
    },
    { id: "heroText", name: "Hero Text", type: "Symbol", required: false },
    { id: "bodyText", name: "Body Text", type: "Text", required: true },
  ],
});
await setMarkdownWidget("legalPage", ["bodyText"]);

await ensureType("project", {
  name: "Project",
  description:
    "A single program or signature project card (replaces the numbered fields on Project Types).",
  displayField: "name",
  fields: [
    { id: "name", name: "Name", type: "Symbol", required: true },
    {
      id: "longDescription",
      name: "Long Description",
      type: "Text",
      required: false,
    },
    {
      id: "image",
      name: "Image",
      type: "Link",
      linkType: "Asset",
      required: false,
    },
    {
      id: "category",
      name: "Category",
      type: "Symbol",
      required: true,
      validations: [{ in: ["program", "signature-project"] }],
    },
    { id: "order", name: "Order", type: "Integer", required: true },
  ],
});
await setMarkdownWidget("project", ["longDescription"]);

// Add optional "context" field to healthStat / healthStory so they can be
// reused beyond the health page later.
for (const name of ["healthStat", "healthStory"]) {
  const ct = await findTypeByGraphqlName(environment, name);
  if (!ct) {
    console.log(`! ${name}: content type not found, skipping`);
    continue;
  }
  if (ct.fields.some((f) => f.id === "context")) {
    console.log(`= ${name}: "context" field already present`);
    continue;
  }
  ct.fields.push({
    id: "context",
    name: "Context",
    type: "Symbol",
    required: false,
    localized: false,
    validations: [],
  });
  const updated = await ct.update();
  await updated.publish();
  console.log(`+ ${name}: added "context" field`);
}

console.log("\nDone.");
