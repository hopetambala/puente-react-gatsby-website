---
name: visual-qa
description: >
  Use when: taking screenshots of the running Puente website to audit visual
  quality, spot layout or typography regressions, or verify that a styling
  change (including a dlite-design-system migration) looks correct in the
  browser. Runs Playwright headlessly and screenshots every public page — no
  login, this is a public marketing site. Saves PNGs to .claude/screenshots/
  then reads them back so issues can be diagnosed and fixed immediately.
---

# Visual QA — screenshot + fix workflow

## Steps

1. Confirm `yarn develop` is running on port 8000 (start it in background if
   not — it needs real `.env.development` Contentful credentials, already
   present in this repo).
2. Run the screenshot script:
   ```
   node .claude/skills/visual-qa/screenshot.mjs
   ```
   Pass `--url=http://localhost:PORT` if the dev server isn't on the default
   port.
3. Read each PNG from `.claude/screenshots/` using the Read tool.
4. For each screenshot, list every visual defect (spacing, typography, colour,
   alignment, overflow, broken layout).
5. Fix defects in order of severity — layout breaks first, then spacing, then
   colour/type. If the fix involves styling, check it against the
   [dlite-design-system skill](../dlite-design-system/SKILL.md) — use a dlite
   token/utility instead of a new hard-coded value.
6. After fixing, re-run the script and compare before/after screenshots.
7. Repeat until no defects remain.

## Pages captured

| File prefix | Route |
|---|---|
| 00-landing | / |
| 01-about | /about |
| 02-programs | /programs |
| 03-technology | /technology |
| 04-donate | /donate |
| 05-donate-monthly | /donate-monthly |
| 06-volunteer | /volunteer |
| 07-merchandise | /merchandise |
| 08-news | /news |
| 09-news-events | /news/events |
| 10-privacy-policy | /privacy-policy |
| 11-terms-of-service | /terms-of-service |
| 12-acceptable-use | /acceptable-use |

Not captured by default:
- `/news/event` — a detail page that needs a real Contentful entry id as a
  `?id=` query param; screenshot it manually with an id from Contentful when
  you need to check that template specifically.
- `about/MemberBio` and `about/MemberBio/Modal` — these live under
  `src/pages/` (so Gatsby's page-creator does route them), but they're really
  sub-components of the About page, not pages meant for standalone review.

## No auth

Unlike the sibling Next.js app (Puente Manage), this is a public marketing
site — there's no login step before screenshotting.

## Output

Screenshots saved to `.claude/screenshots/<timestamp>_<page>.png` at 2×
device pixel ratio (1440 × 900 viewport, full page) so text is sharp. This
directory is gitignored — screenshots are local review artifacts, not
committed source.
