# Puente Website (Gatsby + Contentful)

Public marketing site for Puente Desarrollo Internacional. Gatsby 5 static site,
content pulled from Contentful via GraphQL at build time, deployed to S3
(and mirrored on Netlify — see README).

## Stack

- **Gatsby 5** (React 18) — file-based-ish pages under `src/pages/`, each page
  a directory with `index.js` + `index.module.scss`.
- **Contentful** — content source (`gatsby-source-contentful`); queried via
  `useStaticQuery`/`graphql` in each page/component. Space ID + access token
  come from `.env.development` / `.env.production` (see `.contentful.json`
  for local fallback) — never commit real values.
- **Bootstrap 4** + **react-bootstrap** for base UI primitives, layered with
  **SCSS modules** (`*.module.scss`) per component/page for custom styling.
- **style-dictionary-dlite-tokens** (`puente` brand) — the same design-token
  package the Puente Manage (Next.js) app uses: `--tk-dlite-*` CSS variables
  and `.cl-dlite-*` utility/component classes, imported globally in
  `src/styles/styles.scss`. See "Styling conventions" below.
- **lottie-web** for the JSON animations in `src/animations/`.
- **gatsby-plugin-i18n** for locale handling; **gatsby-plugin-mailchimp** for
  the newsletter form in the footer; **@stripe/stripe-js** /
  **gatsby-source-stripe** for donation/checkout flows.
- No linter or formatter is configured. Match existing style in the file
  you're editing.

## Commands

```
yarn develop          # gatsby develop against .env.development
yarn build-dev        # gatsby build against .env.development
yarn build-prod       # gatsby build against .env.production
yarn build            # plain gatsby build (uses whatever env is in shell)
yarn deploy-dev       # build-dev + deploy to S3
yarn deploy           # build-prod + deploy to S3
yarn clean            # gatsby clean (clears .cache/ and public/)
```

## Structure

- `src/pages/<route>/index.js` — one directory per route, co-located
  `index.module.scss`. Nested dirs (e.g. `about/MemberBio/`) are
  sub-components of that page, not separate routes, unless they themselves
  contain a file directly under `src/pages/`.
- `src/components/` — shared components, same co-location pattern
  (`index.js` + `index.module.scss`).
- `src/styles/styles.scss` — global reset + Bootstrap import + dlite tokens/
  utilities import, loaded once from `components/layout`.
- `src/animations/*.json` — Lottie animation data.
- `src/images/` — static images referenced via import or `gatsby-plugin-image`.

## Styling conventions

Every existing `*.module.scss` file currently **redeclares** the same five
color variables and font stack at the top (`$white`, `$black`, `$off-white`,
`$yellow`, `$blue`, `$font`) instead of sharing one source — that's how two
files (`EventCard`, `header/bannerAd`) already drifted to their own one-off
hex values (`#ffc107`, `#333`, `#28a745`, `#007bff`, `#fffcef`, etc.). Those
five colors turn out to be exact matches for existing dlite primitives
(`--tk-dlite-primitive-color-{white,black,neutral-100,yellow-200,blue-500}`).

For **new or edited** stylesheets, use dlite tokens/utilities instead of the
old local `$variable`s or a new hex literal — see the `dlite-design-system`
skill for the full token/utility reference and the audit script
(`node .claude/skills/dlite-design-system/scan.mjs`) that catches drift.

## Skills in this repo

- `dlite-design-system` — audits `*.module.scss`/JSX for hardcoded colors,
  spacing, and layout CSS that should use `--tk-dlite-*` tokens or
  `.cl-dlite-*` utility/component classes from `style-dictionary-dlite-tokens`
  (same package the Next.js app uses).
- `ux-review` — orchestrates `dlite-auditor` (tokens), `web-motion-auditor`
  (CSS transitions), and `web-delight-auditor` (empty states, copy,
  loading/error states, a11y) after any UI-touching change.
- `visual-qa` — Playwright screenshot audit of the public pages (no login —
  this is a public marketing site, unlike the sibling Next.js app).

A `UserPromptSubmit` hook (`.claude/hooks/skill-eval.mjs`) forces evaluation
of these skills before any implementation work.
