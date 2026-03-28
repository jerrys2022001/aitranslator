# App Store CTA Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make every download-focused `Get the app` CTA on the landing page open the AI Translator App Store listing directly.

**Architecture:** Keep the change content-driven. Store the App Store URL once in `src/content.js`, update the three download CTA definitions to reuse it, and verify the rendered anchors in `src/app.test.js`.

**Tech Stack:** Vite, vanilla JavaScript, Vitest, jsdom

---

### Task 1: Redirect download CTAs to the App Store

**Files:**
- Modify: `src/app.test.js`
- Modify: `src/content.js`
- Modify: `src/app.js`

**Step 1: Write the failing test**

Add a Vitest case that renders the landing page and asserts these anchors use `https://apps.apple.com/app/id6757105258`:

- `.site-header__cta`
- `.hero .button--primary`
- `.final-cta .button--primary`

**Step 2: Run test to verify it fails**

Run: `npm test -- src/app.test.js`
Expected: FAIL because the download CTAs still point to in-page fragment links.

**Step 3: Write minimal implementation**

Add a single App Store URL constant in `src/content.js`, point the hero and final primary CTA config to it, and update the header CTA rendering in `src/app.js` to use the same URL and an App-Store-specific accessible label.

**Step 4: Run test to verify it passes**

Run: `npm test -- src/app.test.js`
Expected: PASS with the CTA href assertions green.

**Step 5: Run full verification**

Run: `npm test`
Expected: PASS with the full suite green.
