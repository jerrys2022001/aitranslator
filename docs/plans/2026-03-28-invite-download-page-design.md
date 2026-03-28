# AI Translator Invite Download Page Design

**Date:** 2026-03-28

**Goal:** Add a standalone `/invite` static page that gives users a simple one-screen download destination for AI Translator with a QR code, App Store button, and short product introduction.

## Approved Direction

### Delivery Format

- Standalone static page at `/invite/`
- Separate from the marketing homepage
- Built with the same Vite + Vanilla setup already used by the project

### Page Purpose

The page is meant for direct sharing, invitation links, and quick download conversion. It should feel lighter and more focused than the homepage:

- No long feature narrative
- No screenshot carousel
- No multi-section layout
- One screen, one primary action

### Content Structure

1. Brand mark: `AI Translator`
2. Main headline: `Download AI Translator`
3. Short product introduction emphasizing text, voice, photo, and offline translation
4. Large QR code as the visual center of the page
5. Primary App Store download button
6. Short helper text explaining that users can either scan the QR code or tap the button

### Visual Direction

- Clean, centered, premium layout
- Bright product-card presentation instead of a full marketing page
- Soft atmospheric background tied to the app icon colors
- White QR card to keep the code readable
- Strong dark download button for immediate contrast
- Mobile-first spacing with the button staying easy to tap

### Interaction Rules

- Both the QR code and the primary button open the App Store listing:
  - `https://apps.apple.com/app/id6757105258`
- Brand text links back to the site homepage
- The page should work without any routing framework

## Asset Plan

### QR Code

Source asset:

- `/Users/jerry/workspace/AI/Translator/TranslatorDoc/Design/qrcode.png`

Project destination:

- `src/assets/invite/qrcode.png`

Usage:

- Display at large size in the center card
- Keep the QR image undistorted
- Provide accessible alt text describing its download purpose

## Technical Approach

- Add `invite/index.html` as a second static HTML entry for direct `/invite/` access
- Add `src/invite.js` to render the invite page
- Add `src/invite.css` for isolated styles
- Reuse the existing App Store URL already used by homepage download CTAs
- Extend postbuild asset copying so the QR image exists in `dist/` for static hosting compatibility

## Verification Plan

- Add a focused Vitest suite for the invite page
- Verify the invite page renders:
  - headline
  - QR image
  - App Store button
  - helper text
- Verify the QR image link and button link both target the App Store URL
- Run `npm test`
- Run `npm run build`
