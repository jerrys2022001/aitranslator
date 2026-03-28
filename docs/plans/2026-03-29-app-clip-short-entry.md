# App Clip Short Entry Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the old `/invite/` landing page entry with a shorter root-level `i.html` page for App Clip usage.

**Architecture:** Keep the existing invite page renderer and stylesheet, but swap the standalone HTML entry from `invite/index.html` to `i.html`. Update tests first so the new route is enforced by automation, then remove the old entry from Vite build inputs.

**Tech Stack:** Vite, Vanilla JavaScript, Vitest, jsdom

---

### Task 1: Move the standalone entry to `i.html`

**Files:**
- Create: `i.html`
- Modify: `src/invite.test.js`
- Modify: `vite.config.js`
- Delete: `invite/index.html`

**Step 1: Write the failing test**

Update `src/invite.test.js` so it expects:
- `i.html` to exist
- `invite/index.html` to be absent
- Vite to register `i.html` as the standalone build entry
- The stylesheet and script links in `i.html` to use `./src/...`

**Step 2: Run test to verify it fails**

Run: `npm test -- src/invite.test.js`
Expected: FAIL because the repo still uses `invite/index.html`.

**Step 3: Write minimal implementation**

- Create `i.html` with the current invite page markup
- Update `vite.config.js` input from `invite/index.html` to `i.html`
- Delete `invite/index.html`

**Step 4: Run test to verify it passes**

Run: `npm test -- src/invite.test.js`
Expected: PASS

### Task 2: Verify production output

**Files:**
- Modify: `README.md`

**Step 1: Update docs**

Replace any references that still describe `/invite/` as the standalone page entry so they reflect `i.html`.

**Step 2: Run build verification**

Run: `npm run build`
Expected: PASS and emit `dist/i.html`.
