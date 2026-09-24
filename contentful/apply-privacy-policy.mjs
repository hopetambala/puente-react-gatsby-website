// Update and publish the public privacy-policy entry in Contentful.
//
// Dry-run by default:
//   yarn contentful:apply-privacy-policy
//
// Publish after reviewing the summary:
//   yarn contentful:apply-privacy-policy --publish

import {
  getEnvironment,
  getAllEntries,
  getDefaultLocale,
} from "./lib/client.mjs";

const SHOULD_PUBLISH = process.argv.includes("--publish");

const POLICY_BODY = `Last updated: September 24, 2026

This Privacy Policy explains how Puente Desarrollo Internacional ("Puente," "we," or "us") collects, uses, stores, and shares information when you use our websites, software, and services, including the Puente Collect mobile application (collectively, the "Services").

If you use the Services for an organization, you represent that you are authorized to provide information to Puente on that organization's behalf. Organizations that use Puente to create forms and collect records determine what information they collect, who may access it, and how it is used within their organization.

__Information we collect__

__Account and organization information__

We collect information used to create and administer accounts, such as a user's name, email address, telephone number when provided, organization, and account or user identifiers.

__Resident, survey, and form information__

Puente Collect is a field-data collection service. Authorized users may submit information about residents or survey participants, including:

- names and telephone numbers;
- date of birth or age, sex, marital status, occupation, education, and household identifiers;
- community, city, province, region, country, and other location information;
- precise location information, including latitude, longitude, and altitude, when location collection is used;
- photographs;
- health and medical information, such as vital signs, blood pressure, blood oxygen, blood sugar, hemoglobin measurements, medical conditions, treatment information, and health-related notes; and
- answers, notes, and other content entered into standard or organization-configured forms.

Records may be associated with the submitting user's account and organization so the Services can authenticate access, synchronize records, support offline work, and allow authorized users to find and safely edit records.

__Technical information__

We may collect technical information needed to operate and secure the Services, such as the application version, operating-system type, server request information, and diagnostic information generated when a request fails. Puente Collect does not collect advertising identifiers for advertising or tracking.

__Website, communications, and donation information__

Our websites may use cookies and similar technologies to operate the site, remember preferences, understand website use, and improve our communications. Website and communication providers may include Google Analytics and Mailchimp. If you donate, payment information is processed by the payment provider shown at checkout, which may include Stripe, Donorbox, Square, Givebutter, or PayPal. Puente does not receive full payment-card details when they are entered directly with those providers.

__How we use information__

We use information to:

- provide the features requested by users and their organizations;
- authenticate accounts and administer organization access;
- create, synchronize, search, display, export, and edit authorized records;
- support offline data collection and later synchronization;
- maintain security, prevent fraud or abuse, troubleshoot failures, and improve reliability;
- respond to support requests and send service, security, and administrative communications;
- comply with law and protect the rights, safety, and property of Puente, our users, and others; and
- carry out another purpose disclosed at the time information is collected.

Puente Collect uses the data described in its App Store privacy disclosure for app functionality. Puente Collect does not use that data for third-party advertising, Puente advertising or marketing, product personalization, or tracking, and we do not sell resident or survey responses to advertisers or data brokers.

__How we share information__

We may share information only as needed in the following circumstances:

- __With the organization using the Services.__ Records submitted for an organization may be available to that organization's authorized administrators and users according to their access rights.
- __With service providers.__ Trusted hosting, infrastructure, email, analytics, support, and payment providers may process information only to perform services for Puente and subject to appropriate contractual or legal obligations.
- __At an organization's direction.__ An organization may export or share records it controls. Users should follow their organization's policies and applicable law when collecting or sharing information.
- __For legal and safety reasons.__ We may disclose information when reasonably necessary to comply with law, legal process, or valid government requests; enforce agreements; investigate fraud or abuse; or protect the rights, safety, and property of Puente, our users, or others.
- __In a business transaction.__ Information may be transferred as part of a merger, acquisition, financing, reorganization, or sale of assets, subject to applicable law and notice requirements.

__Data retention__

We retain account information while an account is active and as reasonably necessary to provide the Services, meet legal obligations, resolve disputes, enforce agreements, maintain security, and honor documented privacy requests. Resident, survey, and form records are retained according to the needs and instructions of the organization that controls them, subject to applicable law and Puente's operational and legal requirements.

__Security__

We use administrative, technical, and physical safeguards designed to protect information against unauthorized access, loss, misuse, alteration, or disclosure. No method of transmission or electronic storage is completely secure. Users are also responsible for protecting their devices and account credentials.

__International processing__

To provide the Services, Puente and its service providers may store, process, and transmit information in the United States and other countries, including countries outside the place where the information was collected. Information may also be stored locally on devices used for offline collection.

__Your choices and rights__

Depending on your location and relationship with Puente, you may have rights to request access to, correction of, deletion of, restriction of, objection to processing of, or portability of personal information. When Puente processes resident or survey information on behalf of an organization, that organization may be the appropriate first contact for a request. We may need to verify a request and may retain information where permitted or required by law.

You may configure your browser to reject cookies, although some website features may not work correctly. You may also opt out of marketing communications by following the instructions in those messages or contacting us.

__Changes to this policy__

We may update this Privacy Policy from time to time. We will post the current version on this page and update the date above. If a change materially reduces your rights, we will provide additional notice when required.

__Contact__

Questions, concerns, or privacy requests may be sent to info@puente-dr.org.
`;

const environment = await getEnvironment();
const locale = await getDefaultLocale(environment);
const entries = await getAllEntries(environment, "legalPage");
const entry = entries.find(
  (candidate) => candidate.fields?.slug?.[locale] === "privacy-policy"
);

if (!entry) {
  throw new Error('Contentful legalPage entry with slug "privacy-policy" was not found.');
}

const currentBody = entry.fields?.bodyText?.[locale] ?? "";
const unchanged = currentBody === POLICY_BODY;

console.log(`Privacy policy entry: ${entry.sys.id}`);
console.log(`Current Contentful version: ${entry.sys.version}`);
console.log(`Current length: ${currentBody.length} characters`);
console.log(`Proposed length: ${POLICY_BODY.length} characters`);

if (unchanged) {
  console.log("Privacy policy is already current; no changes needed.");
  process.exit(0);
}

console.log("Planned changes:");
console.log("  - add a September 24, 2026 last-updated date");
console.log("  - disclose account, survey, location, photo, health, form, and technical data");
console.log("  - document app-functionality purposes and organization access");
console.log("  - state that Puente Collect does not use data for ads, personalization, or tracking");
console.log("  - distinguish website analytics and donation processors from the mobile app");
console.log("  - update the privacy contact to info@puente-dr.org");

if (!SHOULD_PUBLISH) {
  console.log("Dry run complete. Re-run with --publish to update and publish the entry.");
  process.exit(0);
}

entry.fields.bodyText = {
  ...(entry.fields.bodyText || {}),
  [locale]: POLICY_BODY,
};

let updated = await entry.update();
updated = await updated.publish();

console.log(
  `Updated and published privacy-policy (Contentful version ${updated.sys.version}).`
);
