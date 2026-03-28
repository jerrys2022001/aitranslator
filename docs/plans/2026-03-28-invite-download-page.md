# Invite Download Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a standalone `/invite` download page with a QR code, App Store button, and short introduction for AI Translator.

**Architecture:** Add a second static HTML entry at `invite/index.html`, render the page from `src/invite.js`, and keep styles isolated in `src/invite.css`. Copy the QR asset into the project and ensure the build output also contains that asset for direct static hosting.

**Tech Stack:** Vite, vanilla JavaScript, CSS, Vitest, jsdom

---

### Task 1: Document the new invite page entrypoints

**Files:**
- Create: `invite/index.html`
- Create: `src/invite.js`
- Create: `src/invite.css`

**Step 1: Write the failing test**

Add a test file that checks:

- `invite/index.html` exists
- `src/invite.js` exists and exports a page-rendering function
- `src/invite.css` exists
- the page contains a download heading, QR image, App Store button, and helper text

**Step 2: Run test to verify it fails**

Run: `npm test -- src/invite.test.js`
Expected: FAIL because the invite page files do not exist yet.

**Step 3: Write minimal implementation**

Create the HTML entry, render function, and styles with a centered single-screen layout.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/invite.test.js`
Expected: PASS.

**Step 5: Commit**

```bash
git add invite/index.html src/invite.js src/invite.css src/invite.test.js
git commit -m "feat: add invite download page"
```

### Task 2: Wire the shared App Store link and QR asset

**Files:**
- Modify: `src/content.js`
- Modify: `scripts/postbuild.mjs`
- Create: `src/assets/invite/qrcode.png`

**Step 1: Write the failing test**

Extend the invite page test to assert:

- the QR image uses the committed asset path
- the QR wrapper link targets `https://apps.apple.com/app/id6757105258`
- the App Store button targets the same URL

**Step 2: Run test to verify it fails**

Run: `npm test -- src/invite.test.js`
Expected: FAIL because the asset and shared URL wiring are missing.

**Step 3: Write minimal implementation**

Export the App Store URL from `src/content.js`, copy the QR asset into the repo, and update `scripts/postbuild.mjs` to copy the invite asset into `dist/`.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/invite.test.js`
Expected: PASS.

**Step 5: Commit**

```bash
git add src/content.js scripts/postbuild.mjs src/assets/invite/qrcode.png
git commit -m "feat: wire invite QR download flow"
```

### Task 3: Run full verification

**Files:**
- Modify: none

**Step 1: Run the full test suite**

Run: `npm test`
Expected: PASS.

**Step 2: Run the production build**

Run: `npm run build`
Expected: PASS and emit both the homepage and `invite/index.html` entrypoints.
