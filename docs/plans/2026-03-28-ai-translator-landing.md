# AI Translator Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a GitHub Pages-ready marketing homepage for AI Translator with a neon-gradient visual style, screenshot-driven storytelling, and a tested hero carousel.

**Architecture:** The site will be a Vite vanilla application with a small DOM-rendering layer and content defined in plain JavaScript data objects. Styling will live in a single CSS file driven by design tokens, while the hero carousel behavior will stay in a dedicated render function so it can be covered with unit tests.

**Tech Stack:** Vite, Vanilla JavaScript, CSS, Vitest, jsdom

---

### Task 1: Scaffold The Static Site

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/app.js`
- Create: `src/content.js`
- Create: `src/style.css`
- Create: `src/app.test.js`
- Create: `.gitignore`
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`

**Step 1: Write the failing test**

Add a test that expects the landing page renderer to create:

- a hero heading
- four feature cards
- a demo link
- a final CTA section

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because the renderer module does not exist yet.

**Step 3: Write minimal implementation**

Create the Vite scaffold, export a renderer function from `src/app.js`, and make it render the required high-level sections into a supplied mount node.

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS for the structure test.

**Step 5: Commit**

Not possible in the current directory until Git is initialized or the project is moved into a Git repository.

### Task 2: Add Screenshot Carousel Behavior

**Files:**
- Modify: `src/app.js`
- Modify: `src/content.js`
- Modify: `src/app.test.js`

**Step 1: Write the failing test**

Add tests that expect:

- the hero starts on the first screenshot
- clicking next advances to the next screenshot
- clicking previous goes back
- autoplay rotates to the next slide

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because the controls and timer behavior are not implemented.

**Step 3: Write minimal implementation**

Add carousel state, render the screenshot stack, wire up previous and next controls, and start an interval-based autoplay loop that updates the active slide.

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS for all carousel tests.

**Step 5: Commit**

Not possible in the current directory until Git is initialized or the project is moved into a Git repository.

### Task 3: Implement The Visual System

**Files:**
- Modify: `src/style.css`
- Modify: `src/app.js`

**Step 1: Write the failing test**

Add a test that verifies section anchor links and CTA links are rendered with accessible labels and expected targets.

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because the accessible labels or targets are incomplete.

**Step 3: Write minimal implementation**

Implement the full page layout, the neon gradient hero, proof strip, feature grid, scenario section, demo band, CTA section, footer, and the interactive header links.

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS with the link coverage test.

**Step 5: Commit**

Not possible in the current directory until Git is initialized or the project is moved into a Git repository.

### Task 4: Add Deployment Support

**Files:**
- Modify: `vite.config.js`
- Modify: `.github/workflows/deploy.yml`
- Modify: `README.md`

**Step 1: Write the failing test**

Use a build verification step instead of a unit test for this task.

**Step 2: Run verification to prove the gap**

Run: `npm run build`
Expected: FAIL until all deployment-safe asset paths and configuration are correct.

**Step 3: Write minimal implementation**

Set Vite `base` to a relative path, add a GitHub Pages workflow, and document the local and GitHub deployment flow in the README.

**Step 4: Run verification to prove it passes**

Run: `npm run build`
Expected: PASS with generated static assets in `dist/`.

**Step 5: Commit**

Not possible in the current directory until Git is initialized or the project is moved into a Git repository.

### Task 5: Verify Final Output

**Files:**
- Verify: `dist/**/*`
- Verify: `src/**/*`

**Step 1: Run tests**

Run: `npm test`
Expected: PASS

**Step 2: Run production build**

Run: `npm run build`
Expected: PASS

**Step 3: Run preview**

Run: `npm run preview -- --host 127.0.0.1 --port 4173`
Expected: local preview server starts successfully

**Step 4: Check page output**

Run: `curl -I http://127.0.0.1:4173`
Expected: `HTTP/1.1 200 OK`

**Step 5: Commit**

Not possible in the current directory until Git is initialized or the project is moved into a Git repository.
