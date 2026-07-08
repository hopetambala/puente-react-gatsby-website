---
name: dlite-design-system
description: >
  Use when writing, reviewing, or refactoring any UI styling on the Puente
  website — building a page/component or editing any `*.module.(css|scss)` /
  JSX `className`. Enforces use of the dlite design tokens (`--tk-dlite-*` CSS
  variables) and dlite utility/component classes (`.cl-dlite-*`) shipped by
  `style-dictionary-dlite-tokens`, instead of custom one-off styling (raw
  hex/rgb colors, magic px spacing, hand-rolled flex/grid/positioning CSS,
  inline `style={{}}`). Also flags when a dlite token or utility is itself
  wrong, missing, or degrading the experience so it gets fixed in the token
  source, not worked around.
---

# dlite tokens & utilities — use them, don't reinvent them

This is the **same** `style-dictionary-dlite-tokens` package (`puente` brand)
that the Puente Manage (Next.js) app consumes — same tokens, same
`.cl-dlite-*` classes, so the two Puente properties can eventually share one
visual language instead of drifting.

Five of the six stylesheets are imported globally in
[src/styles/styles.scss](../../../src/styles/styles.scss), so the tokens and
utility/component classes are available in every component and every
`*.module.scss` file with no extra import:

```scss
@import "~style-dictionary-dlite-tokens/web/puente/default/variables.css";
@import "~style-dictionary-dlite-tokens/web/puente/default/primitives.css";
@import "~style-dictionary-dlite-tokens/web/puente/default/semantics.css";
@import "~style-dictionary-dlite-tokens/web/puente/default/utilities.css";
@import "~style-dictionary-dlite-tokens/web/puente/default/components.css";
```

**`reset.css` is deliberately NOT imported here** (unlike the Next.js app). It
applies global `a`/`button`/`body` element selectors that would fight this
site's existing Bootstrap + hand-rolled reset already in `styles.scss` — e.g.
it strips default button styling site-wide, which would visibly break
Bootstrap-based buttons across every page. If the site ever migrates off
Bootstrap, revisit adopting it; until then this is a deliberate gap, not an
oversight.

The rule: **style with dlite tokens and utility/component classes. Don't
hand-roll values the system already defines. If a token/utility is missing or
broken, flag it — don't quietly route around it.**

---

## This site's old palette *is* the dlite primitive palette

Before this skill existed, every `*.module.scss` file redeclared its own
`$white`/`$black`/`$off-white`/`$yellow`/`$blue` — and they turn out to be
exact matches for existing dlite primitives:

| Old local variable | Value | dlite token |
|---|---|---|
| `$white` | `#fff` | `--tk-dlite-primitive-color-white` |
| `$black` | `#000` | `--tk-dlite-primitive-color-black` |
| `$off-white` | `#f7f7f7` | `--tk-dlite-primitive-color-neutral-100` |
| `$yellow` | `#ffe680` | `--tk-dlite-primitive-color-yellow-200` |
| `$blue` | `#3d80fc` | `--tk-dlite-primitive-color-blue-500` |

New/edited styles should use the token, not the old `$variable` — the scanner
below auto-fixes exact matches like these.

---

## When to apply this skill

- Writing or editing any `*.module.scss`.
- Adding/changing `className` or inline `style={{}}` in JSX.
- Reviewing a diff that touches `src/components/`, `src/pages/`, or any
  stylesheet.
- A user asks "is this using dlite tokens?", "audit the token usage", etc.

For a fast sweep of the app surface, run the scanner:

```
node .claude/skills/dlite-design-system/scan.mjs
```

It prints every violation grouped by rule, with `file:line` locations and the
dlite token/utility replacement. Use it to triage, then open the flagged files
and fix or escalate each one. (It scans `src/components` and `src/pages`; the
token source package is not scanned.)

### Auto-fixing the safe cases

Findings marked `🔧` are **safe auto-fixes**: a literal whose value is
identical to a dlite token (an exact hex color, or an exact px/rem spacing or
radius match), so swapping it for `var(--tk-dlite-…)` is value-preserving. The
token tables are read live from the installed `style-dictionary-dlite-tokens`
`variables.css`, so they always match the package version.

When you run the report and there are `🔧` items, **offer to apply them**, then:

```
node .claude/skills/dlite-design-system/scan.mjs --fix          # whole app
node .claude/skills/dlite-design-system/scan.mjs --fix src/components/EventCard   # one component
```

`--fix` rewrites only the safe matches and reports what changed; always
re-run `yarn test` / `yarn build` afterward. Everything ambiguous is **never**
auto-fixed and stays a manual decision: `rgba`/`hsl` colors (alpha or
non-token values), `box-shadow`, inline `style={{}}`, and hand-written
flex/grid CSS. Those still appear in the report for you to handle by hand —
or to flag upstream if the reason they can't use a token is that the token is
missing.

---

## The tokens — reach for these (CSS `var(--tk-dlite-…)`)

Use **semantic** tokens by default (they carry intent and theme correctly).
Drop to **primitive** tokens only when no semantic token fits — this site's
old palette (see table above) maps to primitives, so new code touching those
same colors should still prefer the semantic equivalent if one fits (e.g.
`--tk-dlite-semantic-color-text-primary` instead of
`--tk-dlite-primitive-color-black` for body text).

### Semantic (prefer these)
- **Text color** — `--tk-dlite-semantic-color-text-{primary,secondary,tertiary,on-primary,on-brand}`
- **Surface/bg** — `--tk-dlite-semantic-color-surface-{base,raised,sunken,overlay}`
- **Action color** — `--tk-dlite-semantic-color-action-{primary,secondary}` (+ `-active`)
- **Feedback** — `--tk-dlite-semantic-color-feedback-{success,danger,warning,info}` (+ `-active`)
- **Border / muted** — `--tk-dlite-semantic-color-{border,muted}`
- **Spacing** — `--tk-dlite-semantic-spacing-{xxxs,xxs,xs,sm,md,lg,xl,xxl,xxxl}`
- **Radius** — `--tk-dlite-semantic-border-radius-{sm,md,lg,full}`
- **Elevation** — `--tk-dlite-semantic-elevation-{low,medium,high}`
- **Type** — `--tk-dlite-semantic-typography-font-{body,heading,mono}`, `--tk-dlite-semantic-typography-size-*`

### Primitive (fallback only)
- **Color** — `--tk-dlite-primitive-color-{blue,green,mint,teal,red,orange,yellow,pink,purple,neutral}-{100…1000}`, plus `-black` / `-white`
- **Letter-spacing** — `--tk-dlite-primitive-dimension-letter-spacing-{tight,wide,widest}`
- **Opacity** — `--tk-dlite-primitive-number-opacity-*`

```css
/* ❌ old local variable / custom       /* ✅ dlite tokens */
color: $black;                          color: var(--tk-dlite-semantic-color-text-primary);
background: $yellow;                    background: var(--tk-dlite-primitive-color-yellow-200);
padding: 16px;                          padding: var(--tk-dlite-semantic-spacing-md);
border-radius: 8px;                     border-radius: var(--tk-dlite-semantic-border-radius-md);
box-shadow: 0 2px 8px rgba(0,0,0,.1);   box-shadow: var(--tk-dlite-semantic-elevation-low);
```

---

## The utility & component classes — reach for these (JSX `className`)

53 single-purpose layout utilities ship in `utilities.css`, plus ready-made
components in `components.css` (`.cl-dlite-btn`, `.cl-dlite-badge`,
`.cl-dlite-card`, `.cl-dlite-input`, `.cl-dlite-table`, …) — all prefixed
`cl-dlite-`. Use them instead of writing the equivalent CSS by hand or
reaching for `react-bootstrap` where a dlite equivalent already exists.

| Need | Utility class |
|---|---|
| flexbox | `cl-dlite-flex` · `cl-dlite-inline-flex` · `cl-dlite-flex-row` / `-col` · `cl-dlite-flex-1` / `-auto` · `cl-dlite-flex-wrap` / `-nowrap` · `cl-dlite-flex-shrink-0` |
| align/justify | `cl-dlite-items-{start,center,end,stretch}` · `cl-dlite-justify-{start,center,end,between}` |
| display | `cl-dlite-block` · `cl-dlite-inline-block` · `cl-dlite-grid` · `cl-dlite-hidden` |
| position | `cl-dlite-relative` · `cl-dlite-absolute` · `cl-dlite-fixed` · `cl-dlite-sticky` · `cl-dlite-{top,right,bottom,left}-0` · `cl-dlite-z-10` |
| sizing | `cl-dlite-w-full` / `-fit` · `cl-dlite-max-w-full` · `cl-dlite-min-w-0` / `-full` · `cl-dlite-min-h-screen` · `cl-dlite-mx-auto` |
| overflow | `cl-dlite-overflow-{hidden,x-auto,y-auto}` |
| text | `cl-dlite-text-{left,center,right}` · `cl-dlite-truncate` · `cl-dlite-whitespace-nowrap` · `cl-dlite-underline` / `cl-dlite-no-underline` · `cl-dlite-line-through` |
| cursor/disabled | `cl-dlite-cursor-pointer` / `-not-allowed` · `cl-dlite-disabled-cursor-not-allowed` · `cl-dlite-disabled-opacity-{25,50}` |
| components | `cl-dlite-btn` (+ `-primary`/`-secondary`/`-danger`/`-success`/`-link`/`-sm`/`-lg`) · `cl-dlite-badge` (+ `-danger`/`-info`/`-neutral`/`-success`/`-warning`) · `cl-dlite-card` · `cl-dlite-input` (+ `-lg`) · `cl-dlite-table` · `cl-dlite-toggle-btn` |

```jsx
/* ❌ custom CSS module just to center a row */
<div className={styles.row}>…</div>          // .row { display:flex; align-items:center; justify-content:space-between; }

/* ✅ dlite utilities */
<div className="cl-dlite-flex cl-dlite-items-center cl-dlite-justify-between">…</div>
```

The `EventCard` status-badge markup (currently one-off hex per status —
`#ffc107` warning, `#28a745` success, `#6c757d` neutral) is a strong candidate
for `.cl-dlite-badge-{warning,success,neutral}` instead of hand-rolled colors.

A `*.module.scss` rule that does **nothing but** layout primitives
(`display:flex; align-items:center`, etc.) is a custom reimplementation of
utilities that already exist — delete the rule and put the `cl-dlite-*`
classes on the element. The scanner only flags these *fully-convertible*
rules (with a single-class selector). It deliberately **does not** flag mixed
rules where layout sits alongside `gap`/`padding`/`color`: dlite ships no
`gap` utility, so those rules must keep a module block regardless, and
splitting them across a `className` string and the module just fragments the
styling. Leave mixed rules as a single module rule.

---

## Anti-patterns — what counts as "custom"

The scanner flags these; each has a dlite replacement.

1. **Raw hex / rgb / hsl colors** in CSS → a `--tk-dlite-…-color-*` token.
2. **Magic px/rem spacing** (`padding`, `margin`, `gap`) → `--tk-dlite-semantic-spacing-*`.
3. **Hard-coded `border-radius` / `box-shadow`** → radius / elevation tokens.
4. **Inline `style={{…}}`** with static values → a class using tokens, or a
   `cl-dlite-*` utility. (Genuinely dynamic values like `width: ${pct}%` are the
   only legitimate inline styles — keep them to the dynamic property only.)
5. **Hand-written flex/grid/positioning CSS** that duplicates a `cl-dlite-*`
   utility (a module rule that's just `display:flex; align-items:center;` etc.).
6. **Redeclaring the old `$white`/`$black`/`$off-white`/`$yellow`/`$blue`
   local variables** instead of using the dlite token they map to (see table
   above) — every existing `*.module.scss` still does this; new/edited files
   should switch to tokens rather than propagate the old pattern further.

---

## Flagging a broken or degrading token / utility

Using dlite is the goal — **but not blindly**. If a token resolves to the wrong
value, a needed token/utility is missing, or applying one visibly degrades the
UI, the right move is to **flag it**, not to fork a custom hex/px value that
hides the problem.

Surface it when:
- A token's value looks wrong (e.g. `--tk-dlite-semantic-color-text-primary`
  doesn't match the site's design) — confirm visually with the
  [visual-qa skill](../visual-qa/SKILL.md) before/after.
- The design needs a value the token set doesn't cover (a missing shade,
  spacing step, or a utility that doesn't exist).
- Applying a utility class breaks layout (overflow, misalignment).

**How to flag:**
1. Name the exact token/utility and the file
   (`style-dictionary-dlite-tokens/.../<file>.css`).
2. Describe the defect concretely (expected vs. actual; screenshot path from
   `.claude/screenshots/` if visual).
3. State the impact (which page/component degrades, how badly).
4. Recommend the fix at the **token source** (the dlite-tokens package / its
   build) so every consumer — including the Next.js app — benefits, not a
   local hard-coded override.
5. Only if an upstream fix is out of scope right now: add a `// TODO(dlite):
   <issue>` at the call site with the smallest local workaround, and report it
   to the user. Never let a silent custom value become the new norm.

The distinction that matters: a custom value **because it was easier** is a
violation to fix at the call site. A custom value **because the token/utility is
broken or missing** is a bug to file against `style-dictionary-dlite-tokens`.

---

## Output when auditing

Lead with a one-line verdict (`clean` / `N violations` / `dlite token bug
found`). Then, per finding:

```
<file:line> — <rule> — <dlite token/utility to use, or escalation>
```

Group "use a dlite token/utility instead" violations separately from "the dlite
token/utility itself is broken" findings — they get fixed in opposite places
(the call site vs. the dlite-tokens package).
