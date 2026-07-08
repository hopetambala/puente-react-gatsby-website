#!/usr/bin/env node
// dlite-design-system scanner.
// Flags custom styling that should use dlite tokens (--tk-dlite-*) or
// dlite utility classes (.cl-dlite-*) instead of hand-rolled values.
//
//   node .claude/skills/dlite-design-system/scan.mjs [--fix] [root ...]
//
// Without --fix: report only (read-only).
// With    --fix: also rewrite the SAFE cases — a literal whose value is
//                identical to a dlite token (exact hex color, or an exact
//                px/rem spacing/radius match). Value-preserving swaps only.
//                Ambiguous cases (rgba/hsl alpha, box-shadow, inline styles,
//                hand-written flex/grid CSS) are never auto-fixed.
//
// Defaults to scanning src/components and src/pages. node_modules and the
// Gatsby build/cache dirs are never scanned.

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, extname } from 'node:path';

const argv = process.argv.slice(2);
const FIX = argv.includes('--fix');
const ROOTS = argv.filter((a) => !a.startsWith('--'));
if (!ROOTS.length) ROOTS.push('src/components', 'src/pages');

const CWD = process.cwd();
const STYLE_EXT = new Set(['.css', '.scss']);
const JSX_EXT = new Set(['.js', '.jsx', '.ts', '.tsx']);
const SKIP_DIR = new Set(['node_modules', '.cache', 'public', '.git']);

// ---- token tables ----------------------------------------------------------
// Built from the dlite-tokens variables.css so the maps always match the
// installed package version.
const TOKEN_CANDIDATES = [
  'node_modules/style-dictionary-dlite-tokens/dist/web/puente/default/variables.css',
  'node_modules/style-dictionary-dlite-tokens/web/puente/default/variables.css',
];

function loadTokens() {
  let css = '';
  for (const c of TOKEN_CANDIDATES) {
    try { css = readFileSync(join(CWD, c), 'utf8'); break; } catch { /* next */ }
  }
  const colorByHex = new Map();   // "#rrggbb" -> token name (primitive preferred)
  const spacingByPx = new Map();  // px number string -> token name
  const radiusByPx = new Map();   // px number string -> token name

  const norm6 = (hex) => {
    let h = hex.toLowerCase().replace('#', '');
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    return h.length === 6 ? `#${h}` : null;
  };
  const toPx = (val) => {
    const m = val.trim().match(/^(-?\d*\.?\d+)(px|rem)$/);
    if (!m) return null;
    const n = parseFloat(m[1]);
    return String(m[2] === 'rem' ? Math.round(n * 16 * 1000) / 1000 : n);
  };

  for (const line of css.split('\n')) {
    const m = line.match(/(--tk-dlite-[a-z0-9-]+)\s*:\s*([^;]+);/i);
    if (!m) continue;
    const [, name, rawVal] = m;
    const val = rawVal.trim();
    const hex = val.match(/^#[0-9a-fA-F]{3,6}$/) ? norm6(val) : null;
    if (hex && /color/.test(name)) {
      // prefer primitive palette tokens (pure value, no intent)
      if (!colorByHex.has(hex) || name.includes('primitive-color')) colorByHex.set(hex, name);
    }
    const px = toPx(val);
    if (px && name.includes('semantic-spacing')) {
      // prefer t-shirt names (xs/sm/md…) over the numeric scale (100/200…)
      const isTshirt = (n) => /-(xxxs|xxs|xs|sm|md|lg|xl|xxl|xxxl)$/.test(n);
      const cur = spacingByPx.get(px);
      if (!cur || (!isTshirt(cur) && isTshirt(name))) spacingByPx.set(px, name);
    }
    if (px && name.includes('semantic-border-radius')) {
      if (!radiusByPx.has(px)) radiusByPx.set(px, name);
    }
  }
  return { colorByHex, spacingByPx, radiusByPx, norm6, toPx };
}

const TK = loadTokens();

// ---- layout declaration -> cl-dlite-* utility class -------------------------
// Only value-exact mappings; anything not here means a rule isn't purely
// convertible and is left alone.
const UTIL = new Map(Object.entries({
  'display:flex': 'cl-dlite-flex', 'display:inline-flex': 'cl-dlite-inline-flex',
  'display:grid': 'cl-dlite-grid', 'display:block': 'cl-dlite-block',
  'display:inline-block': 'cl-dlite-inline-block', 'display:none': 'cl-dlite-hidden',
  'flex-direction:row': 'cl-dlite-flex-row', 'flex-direction:column': 'cl-dlite-flex-col',
  'flex-wrap:wrap': 'cl-dlite-flex-wrap', 'flex-wrap:nowrap': 'cl-dlite-flex-nowrap',
  'flex:1': 'cl-dlite-flex-1', 'flex-shrink:0': 'cl-dlite-flex-shrink-0',
  'align-items:center': 'cl-dlite-items-center', 'align-items:flex-start': 'cl-dlite-items-start',
  'align-items:flex-end': 'cl-dlite-items-end', 'align-items:stretch': 'cl-dlite-items-stretch',
  'align-items:start': 'cl-dlite-items-start', 'align-items:end': 'cl-dlite-items-end',
  'justify-content:center': 'cl-dlite-justify-center', 'justify-content:flex-start': 'cl-dlite-justify-start',
  'justify-content:flex-end': 'cl-dlite-justify-end', 'justify-content:space-between': 'cl-dlite-justify-between',
  'justify-content:start': 'cl-dlite-justify-start', 'justify-content:end': 'cl-dlite-justify-end',
  'position:relative': 'cl-dlite-relative', 'position:absolute': 'cl-dlite-absolute',
  'position:fixed': 'cl-dlite-fixed', 'position:sticky': 'cl-dlite-sticky',
  'top:0': 'cl-dlite-top-0', 'right:0': 'cl-dlite-right-0',
  'bottom:0': 'cl-dlite-bottom-0', 'left:0': 'cl-dlite-left-0',
  'overflow:hidden': 'cl-dlite-overflow-hidden', 'overflow-x:auto': 'cl-dlite-overflow-x-auto',
  'overflow-y:auto': 'cl-dlite-overflow-y-auto', 'white-space:nowrap': 'cl-dlite-whitespace-nowrap',
  'text-align:left': 'cl-dlite-text-left', 'text-align:center': 'cl-dlite-text-center',
  'text-align:right': 'cl-dlite-text-right', 'width:100%': 'cl-dlite-w-full', 'max-width:100%': 'cl-dlite-max-w-full',
}));

// Find rules whose declarations are ENTIRELY layout primitives that map to
// utilities — those (and only those) are clean className conversions.
// Skips descendant/compound selectors that aren't a single class.
function pureLayoutRules(css) {
  const rules = [];
  const re = /([^{}]+)\{([^{}]*)\}/g;
  let m;
  while ((m = re.exec(css))) {
    const sel = m[1].trim().split('\n').pop().trim();
    const decls = m[2].split(';').map((s) => s.trim()).filter(Boolean);
    if (!decls.length) continue;
    const classes = [];
    let allMapped = true;
    for (const d of decls) {
      const i = d.indexOf(':');
      if (i < 0) { allMapped = false; break; }
      const key = `${d.slice(0, i).trim()}:${d.slice(i + 1).trim().replace(/\s*!important/, '')}`;
      const u = UTIL.get(key);
      if (u) classes.push(u); else { allMapped = false; break; }
    }
    const singleClass = /^\.[A-Za-z0-9_-]+$/.test(sel); // element-controllable via className
    if (allMapped && singleClass) {
      const line = css.slice(0, m.index).split('\n').length;
      rules.push({ sel, line, classes: [...new Set(classes)] });
    }
  }
  return rules;
}

// ---- findings ---------------------------------------------------------------
const findings = {
  hex:    { sev: 'violation', label: 'raw hex/rgb/hsl color', fix: 'use a --tk-dlite-…-color-* token' },
  spacing:{ sev: 'violation', label: 'magic px/rem spacing',  fix: 'use --tk-dlite-semantic-spacing-*' },
  radius: { sev: 'violation', label: 'hard-coded border-radius', fix: 'use --tk-dlite-semantic-border-radius-*' },
  shadow: { sev: 'violation', label: 'hard-coded box-shadow', fix: 'use --tk-dlite-semantic-elevation-*' },
  inline: { sev: 'review',    label: 'inline style={{…}}',    fix: 'move to a class w/ tokens (dynamic values OK)' },
  flexcss:{ sev: 'review',    label: 'pure-layout rule → cl-dlite-* utility', fix: 'delete the rule, put the classes on the element' },
};
for (const k of Object.keys(findings)) findings[k].hits = [];
let autoFixable = 0;
let autoFixed = 0;

function walk(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const name of entries) {
    if (SKIP_DIR.has(name)) continue;
    const full = join(dir, name);
    let st;
    try { st = statSync(full); } catch { continue; }
    if (st.isDirectory()) walk(full);
    else scanFile(full);
  }
}

const isComment = (s) => /^\s*(\/\/|\/\*|\*)/.test(s);

// Replace any length literal in a value string that exactly matches a token.
// Returns { value, changed }.
function fixLengths(value, map) {
  let changed = false;
  const out = value.replace(/(-?\d*\.?\d+)(px|rem)/g, (full) => {
    const px = TK.toPx(full);
    const tok = px && map.get(px);
    if (tok) { changed = true; return `var(${tok})`; }
    return full;
  });
  return { value: out, changed };
}

// Replace exact hex literals (outside var(...) fallbacks) with their token.
function fixHex(text) {
  let changed = false;
  // mask var(...) groups so fallback hexes are left alone
  const masks = [];
  const masked = text.replace(/var\((?:[^()]|\([^()]*\))*\)/g, (m) => {
    masks.push(m); return ` ${masks.length - 1} `;
  });
  const swapped = masked.replace(/#[0-9a-fA-F]{3,6}\b/g, (hex) => {
    const key = TK.norm6(hex);
    const tok = key && TK.colorByHex.get(key);
    if (tok) { changed = true; return `var(${tok})`; }
    return hex;
  });
  const out = swapped.replace(/ (\d+) /g, (_, i) => masks[+i]);
  return { value: out, changed };
}

function scanFile(file) {
  const ext = extname(file);
  const isStyle = STYLE_EXT.has(ext);
  const isJsx = JSX_EXT.has(ext);
  if (!isStyle && !isJsx) return;

  const rel = relative(CWD, file);
  const lines = readFileSync(file, 'utf8').split('\n');
  let fileChanged = false;

  lines.forEach((raw, i) => {
    const ln = i + 1;
    const text = raw.trim();
    if (!text || isComment(text)) return;
    const hasVar = text.includes('var(--');
    let newLine = raw;

    if (isStyle) {
      // ----- colors -----
      const noVar = text.replace(/var\((?:[^()]|\([^()]*\))*\)/g, '');
      const hasHex = /#[0-9a-fA-F]{3,8}\b/.test(noVar);
      const hasFn = /\b(rgb|rgba|hsl|hsla)\(/.test(noVar);
      if (hasHex || hasFn) {
        const fixed = hasHex ? fixHex(newLine) : { value: newLine, changed: false };
        if (fixed.changed) { autoFixable++; if (FIX) { newLine = fixed.value; fileChanged = true; } }
        // still a violation if any raw color literal remains after a fix attempt
        const after = newLine.trim().replace(/var\((?:[^()]|\([^()]*\))*\)/g, '');
        if (/#[0-9a-fA-F]{3,8}\b/.test(after) || /\b(rgb|rgba|hsl|hsla)\(/.test(after)) {
          push('hex', rel, ln, newLine.trim(), fixed.changed && !FIX);
        } else if (fixed.changed && !FIX) {
          push('hex', rel, ln, newLine.trim(), true);
        }
      }

      // ----- spacing -----
      const spProp = text.match(/^\s*(padding|margin|gap|row-gap|column-gap)[a-z-]*\s*:\s*([^;]+);?/);
      if (spProp && /\b[1-9]\d*(\.\d+)?(px|rem)\b/.test(spProp[2]) && !spProp[2].includes('var(')) {
        const f = fixLengths(spProp[2], TK.spacingByPx);
        if (f.changed) {
          autoFixable++;
          if (FIX) { newLine = newLine.replace(spProp[2], f.value); fileChanged = true; }
        }
        const remaining = (FIX ? f.value : spProp[2]).replace(/var\([^)]*\)/g, '');
        if (/\b[1-9]\d*(\.\d+)?(px|rem)\b/.test(remaining)) push('spacing', rel, ln, newLine.trim(), false);
        else if (f.changed && !FIX) push('spacing', rel, ln, spProp[2].trim(), true);
      }

      // ----- radius -----
      const rad = text.match(/^\s*border-radius\s*:\s*([^;]+);?/);
      if (rad && /\b\d+(\.\d+)?(px|rem|%)\b/.test(rad[1]) && !rad[1].includes('var(')) {
        const f = fixLengths(rad[1], TK.radiusByPx);
        if (f.changed) {
          autoFixable++;
          if (FIX) { newLine = newLine.replace(rad[1], f.value); fileChanged = true; }
        }
        const remaining = (FIX ? f.value : rad[1]).replace(/var\([^)]*\)/g, '');
        if (/\b\d+(\.\d+)?(px|rem|%)\b/.test(remaining)) push('radius', rel, ln, newLine.trim(), false);
        else if (f.changed && !FIX) push('radius', rel, ln, rad[1].trim(), true);
      }

      // ----- shadow (never auto-fixed) -----
      if (/^\s*box-shadow\s*:/.test(text) && !/\bnone\b/.test(text) && !hasVar) {
        push('shadow', rel, ln, text);
      }

    }

    if (isJsx && /style=\{\{/.test(text)) push('inline', rel, ln, text);

    if (FIX && newLine !== raw) lines[i] = newLine;
  });

  // rule-aware: only flag rules that are ENTIRELY layout primitives (clean
  // className conversions). Mixed rules — flex + gap/padding/color — are left
  // alone; splitting them across className + module hurts readability and
  // there is no gap utility, so the module rule would survive anyway.
  if (isStyle) {
    for (const r of pureLayoutRules(lines.join('\n'))) {
      push('flexcss', rel, r.line, `{${r.sel}} → className="${r.classes.join(' ')}"`);
    }
  }

  if (FIX && fileChanged) {
    writeFileSync(file, lines.join('\n'));
    autoFixed += 1;
  }
}

function push(rule, file, line, text, fixable = false) {
  findings[rule].hits.push({ file, line, text: text.slice(0, 100), fixable });
}

ROOTS.forEach((r) => walk(join(CWD, r)));

// ---- report ----------------------------------------------------------------
const order = ['hex', 'spacing', 'radius', 'shadow', 'flexcss', 'inline'];
let total = 0, violations = 0;
const out = [];

for (const key of order) {
  const f = findings[key];
  if (!f.hits.length) continue;
  total += f.hits.length;
  if (f.sev === 'violation') violations += f.hits.length;
  out.push('');
  out.push(`### ${f.sev === 'violation' ? '✗' : '⚠'} ${f.label}  (${f.hits.length}) — ${f.fix}`);
  for (const h of f.hits) out.push(`  ${h.fixable ? '🔧 ' : '   '}${h.file}:${h.line}  ${h.text}`);
}

const head = FIX
  ? `applied ${autoFixed ? autoFixed : 'no'} file change(s); ${violations} violation(s), ${total - violations} review item(s) remain`
  : (total === 0
      ? '✓ clean — no custom styling found; using dlite tokens/utilities'
      : `${violations} violation(s), ${total - violations} review item(s) across ${ROOTS.join(', ')}`);

console.log(`\ndlite scan — ${head}`);
console.log(out.join('\n'));

if (FIX) {
  console.log(`\n🔧 auto-fixed ${autoFixable} safe value(s) in ${autoFixed} file(s). Re-run \`yarn test\` / \`yarn build\` to confirm.`);
} else if (autoFixable) {
  console.log(`\n🔧 ${autoFixable} of these are SAFE auto-fixes (exact token-value matches, marked 🔧).`);
  console.log('   Re-run with --fix to apply them:  node .claude/skills/dlite-design-system/scan.mjs --fix');
}
console.log('\nViolations (✗) should adopt a dlite token; review items (⚠) need a judgment call.');
console.log('If a token/utility is itself wrong or missing, flag it against style-dictionary-dlite-tokens — do not hard-code around it.\n');

process.exit(violations > 0 ? 1 : 0);
