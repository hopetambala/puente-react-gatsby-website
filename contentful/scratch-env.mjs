// Create the model-migration scratch environment cloned from master and
// grant the site's existing delivery API key access to it. Idempotent.
import { createClient } from "contentful-management";
import { getConfig } from "./lib/client.mjs";

const ENV_ID = "model-migration";
const { spaceId, managementToken } = getConfig();
const client = createClient({ accessToken: managementToken }, { type: "legacy" });
const space = await client.getSpace(spaceId);

let env;
try {
  env = await space.getEnvironment(ENV_ID);
  console.log(`environment "${ENV_ID}" already exists`);
} catch (_) {
  env = await space.createEnvironmentWithId(ENV_ID, { name: ENV_ID }, "master");
  console.log(`created "${ENV_ID}" from master, waiting for it to be ready...`);
}

for (;;) {
  env = await space.getEnvironment(ENV_ID);
  const status = env.sys.status.sys.id;
  if (status === "ready") break;
  if (status === "failed") throw new Error("environment clone failed");
  await new Promise((r) => setTimeout(r, 3000));
}
console.log(`environment "${ENV_ID}" is ready`);

const keys = await space.getApiKeys();
const deliveryKey = keys.items.find(
  (k) => k.accessToken === process.env.CONTENTFUL_ACCESS_TOKEN
);
if (!deliveryKey) {
  console.log(
    `! No API key matches CONTENTFUL_ACCESS_TOKEN — grant "${ENV_ID}" access manually (Settings > API keys). Keys found: ${keys.items
      .map((k) => k.name)
      .join(", ")}`
  );
} else if (deliveryKey.environments?.some((e) => e.sys.id === ENV_ID)) {
  console.log(`API key "${deliveryKey.name}" already has access to ${ENV_ID}`);
} else {
  deliveryKey.environments = [
    ...(deliveryKey.environments ?? [
      { sys: { type: "Link", linkType: "Environment", id: "master" } },
    ]),
    { sys: { type: "Link", linkType: "Environment", id: ENV_ID } },
  ];
  await deliveryKey.update();
  console.log(`granted API key "${deliveryKey.name}" access to ${ENV_ID}`);
}
