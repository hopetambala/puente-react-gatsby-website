/**
 * Puente website — visual QA screenshot runner
 * Usage: node .claude/skills/visual-qa/screenshot.mjs [--url=http://localhost:8000]
 *
 * This is a public marketing site — no login. Screenshots every public page.
 * Saves PNGs to .claude/screenshots/ with a timestamp prefix.
 */

import { chromium } from '@playwright/test';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..', '..');
const OUT = join(ROOT, '.claude', 'screenshots');

const BASE_URL = process.argv.find((a) => a.startsWith('--url='))?.split('=')[1] ?? 'http://localhost:8000';

// gatsby-plugin-page-creator turns every src/pages/**/index.js into a route
// matching its directory path. This list covers the standalone content pages;
// it skips dynamic/detail routes that need a real Contentful id
// (src/pages/news/event needs `?id=<contentful-id>`) and page-creator
// artifacts that are really sub-components living under src/pages
// (about/MemberBio, about/MemberBio/Modal).
const PAGES = [
  { name: '00-landing', path: '/' },
  { name: '01-about', path: '/about' },
  { name: '02-programs', path: '/programs' },
  { name: '03-technology', path: '/technology' },
  { name: '04-donate', path: '/donate' },
  { name: '05-donate-monthly', path: '/donate-monthly' },
  { name: '06-volunteer', path: '/volunteer' },
  { name: '07-merchandise', path: '/merchandise' },
  { name: '08-news', path: '/news' },
  { name: '09-news-events', path: '/news/events' },
  { name: '10-privacy-policy', path: '/privacy-policy' },
  { name: '11-terms-of-service', path: '/terms-of-service' },
  { name: '12-acceptable-use', path: '/acceptable-use' },
];

mkdirSync(OUT, { recursive: true });

const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  for (const { name, path } of PAGES) {
    console.log(`→ ${name}  (${path})`);
    await page.goto(`${BASE_URL}${path}`);
    await page.waitForLoadState('networkidle').catch(() => {});
    // Let Lottie animations and fonts settle.
    await page.waitForTimeout(600);

    const file = join(OUT, `${ts}_${name}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`  ✓ saved ${file}`);
  }

  await browser.close();
  console.log('\nDone. Screenshots in .claude/screenshots/');
})();
