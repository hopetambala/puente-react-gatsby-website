# Contentful model consolidation scripts

The Starter-plan space caps content types at 25 and we were at 24. These
scripts consolidate the model to ~15 types. See the plan in the PR that
introduced them for the full rationale.

## Model changes

| Before | After |
|---|---|
| `acceptableUsePage`, `privacyPolicy`, `termsOfServicePage` | one `legalPage` collection keyed by `slug` |
| `projectTypes` (numbered fields `projectTypeOne..Five`, null-check discriminator) | `project` collection: `{ name, longDescription, image, category: program \| signature-project, order }` |
| `featuredVolunteers` | deleted (the volunteer page fetched it but never rendered it) |
| `newsPage` (single `headerImage` field) | deleted; `src/pages/news/index.js` queries the asset by `contentful_id` |
| `healthStat`, `healthStory` | kept, gained optional `context` field (`"health"`) so they can be reused on other pages |
| ~5 orphaned starter-blog types | deleted after audit confirmation |

Do **not** rename existing content types: `gatsby-source-contentful` derives
GraphQL type names from the content type *name* (`useNameForId` default), so a
display-name change breaks queries.

## Scripts

All read `CONTENTFUL_SPACE_ID` (falls back to `.env.development` /
`.contentful.json`), `CONTENTFUL_MANAGEMENT_TOKEN` (required — a CMA token,
never committed), and `CONTENTFUL_ENVIRONMENT` (default `master`).

```
yarn contentful:audit            # read-only: types vs what the code queries,
                                 # orphan candidates, newsPage asset id,
                                 # projectTypes explosion preview
yarn contentful:create-types     # idempotent: legalPage + project types,
                                 # context field on healthStat/healthStory
yarn contentful:migrate-entries  # idempotent: copies/explodes entry data,
                                 # publishes, prints mapping table
yarn contentful:delete-types --types a,b,c [--yes] [--allow-used]
                                 # dry-run without --yes; refuses types the
                                 # code still queries unless --allow-used
```

## Runbook (order matters — the 25-type cap)

1. Backup: `npx contentful space export --space-id <id> --management-token <token>`
2. `yarn contentful:audit` → confirm orphan list
3. Delete orphans on master (frees slots BEFORE creating new types)
4. Create scratch env `model-migration` (Settings → Environments), grant the
   delivery API key access to it
5. `CONTENTFUL_ENVIRONMENT=model-migration yarn contentful:create-types && CONTENTFUL_ENVIRONMENT=model-migration yarn contentful:migrate-entries`
6. Fill the news header asset id into `src/pages/news/index.js`
   (`NEWS_HEADER_IMAGE_ASSET_ID` placeholder), then
   `CONTENTFUL_ENVIRONMENT=model-migration yarn develop` and check all pages
7. Replay create + migrate against master; merge + deploy the code
8. Only after the deployed site is verified:
   `yarn contentful:delete-types --types <the 6 retired types> --allow-used --yes`
9. Delete the `model-migration` environment
