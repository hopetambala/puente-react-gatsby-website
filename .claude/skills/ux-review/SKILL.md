---
name: ux-review
description: >
  Use when any UI page or component on the Puente website is complete or
  needs a quality pass. Orchestrates three narrow agents in parallel —
  dlite-auditor (token compliance), web-motion-auditor (CSS transitions), and
  web-delight-auditor (empty states, copy, loading/error states, a11y) — then
  synthesizes their reports into a unified fix plan before each agent applies
  its own fixes sequentially.
---

# UX Review Orchestration

## Core Principle

Every UI touchpoint must satisfy three design layers simultaneously. No layer
can be fixed in isolation — a cohesive fix plan prevents agents from working
against each other (e.g., fixing a color while breaking a transition, or
adding an empty-state icon with a hardcoded hex instead of a token).

**Three layers, one review:**

| Agent | Layer | Owns |
|---|---|---|
| `dlite-auditor` | Visual tokens | Colors, spacing, border-radius, box-shadow, layout CSS |
| `web-motion-auditor` | Animation system | CSS transition durations, easing, transform scale |
| `web-delight-auditor` | UX delight | Empty states, copy, loading/error states, accessibility |

This site is web-only (Gatsby), so all three agents apply to every review —
there's no mobile/React Native branch to consider here (unlike the sibling
Puente Manage Next.js app, which also ships a React Native companion).

---

## Three-Phase Pipeline

### Phase 1 — PARALLEL AUDIT

Launch all three agents simultaneously. Each audits the target file(s)
independently and returns a structured violation report. Do NOT let agents
fix anything yet.

Instruct each agent:
> "Audit only — do not fix. Report all violations in the format: `<file:line> — <rule> — fix: <what>`"

Collect all three reports before proceeding.

**Gate:** Cannot advance to SYNTHESIZE until all three agents have returned
their reports.

---

### Phase 2 — SYNTHESIZE

Read all three reports together. Produce a single, cohesive fix plan that
resolves all violations without conflicts. Consider:

- **Order dependencies** — a color/token fix might need to happen before a
  transition rule references the same element.
- **Cross-cutting fixes** — an element that needs a token fix, a transition
  duration fix, AND a copy/a11y fix should be described as one atomic edit,
  not three separate ones.
- **Priority** — violations that affect real visitor flows (a broken donate
  form, a dead-end 404) outrank cosmetic ones (a hardcoded hex that matches
  the token exactly).

Output the unified plan in this format:

```
=== UNIFIED FIX PLAN ===

PRIORITY 1 — [file]
  [dlite] line N: replace #hex with the matching dlite color token
  [motion] line N: replace hardcoded transition duration with the matching duration token
  [delight] line N: add an aria-label / fix the empty-state copy

PRIORITY 2 — [file]
  ...

SEQUENTIAL FIX ORDER:
1. dlite-auditor fixes tokens first (color/spacing changes may affect layout)
2. web-motion-auditor fixes transitions second (durations/easing reference the same elements)
3. web-delight-auditor fixes delight/a11y layer last (copy/aria sit on top)
```

**Gate:** Cannot advance to FIX until the unified plan is complete and
coherent. If two agents' fixes would conflict, resolve the conflict in the
plan before proceeding.

---

### Phase 3 — SEQUENTIAL FIX

Invoke each agent in order, passing it the relevant section of the unified
fix plan. Each agent applies ONLY its fixes and confirms clean.

1. `dlite-auditor` — fixes token violations → must confirm `dlite-auditor: DONE`
2. `web-motion-auditor` — fixes transition violations → must confirm `web-motion-auditor: DONE`
3. `web-delight-auditor` — fixes delight/a11y gaps → must confirm `web-delight-auditor: DONE`

**Gate:** Cannot mark the review complete until all three agents confirm
DONE.

---

## Critical Rules

- Agents must not be skipped even if their report is "clean" — a clean
  report is a gate pass.
- Never weaken a fix to avoid conflict — resolve the conflict properly in
  the synthesis step.
- If an agent finds a violation it cannot fix (requires a new component,
  upstream token/package change, or a content decision from Hope/Greg/Emma),
  it documents it; the review still completes but the gap is surfaced for
  follow-up.
- The delight layer is not optional — "it renders" is not the same as "it
  feels right for a first-time donor or volunteer."

---

## When to invoke

**Automatically:** After completing any page, component, or significant UI
feature.

**Manually:** `/ux-review` — runs the full pipeline on the files you specify
or, if no files specified, on all recently modified files in
`src/components`/`src/pages`.

After a screenshot-driven pass with the [visual-qa skill](../visual-qa/SKILL.md),
run `ux-review` on anything you touched to catch token/motion/delight issues
that aren't visible in a static screenshot (a11y, copy tone, missing
`prefers-reduced-motion`).

---

## Definition of Done

A UI touchpoint is done when:

1. `dlite-auditor` reports zero violations — no hardcoded colors, spacing, or
   radius.
2. `web-motion-auditor` reports zero violations — no hardcoded durations,
   easing, or scale values.
3. `web-delight-auditor` reports zero critical gaps — human copy, an escape
   hatch on every error/empty state, and the accessibility basics covered.
4. All three agents have confirmed `DONE` in this session.
