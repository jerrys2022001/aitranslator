# App Clip Short Entry Design

**Goal:** Replace the current `/invite/` landing entry with a shorter root-level `i.html` page for App Clip URL registration.

**Context:** The current `invite/index.html` route depends on GitHub Pages directory handling, so `https://aitranslator.velocai.net/invite` redirects to `/invite/`. That redirect is a poor fit for App Clip experience URLs and increases URL length for App Clip Code compatibility.

## Decision

Use a root-level `i.html` entry that renders the existing invite page content.

## Why

- `https://aitranslator.velocai.net/i.html` returns a direct `200` instead of a redirect.
- The path is shorter than `/invite/` or `/invite/index.html`, which is better for App Clip Code compatibility.
- The UI content, styles, and JS can stay mostly unchanged, so the migration risk is low.

## Scope

- Add `i.html` as the standalone invite page entry.
- Update tests and Vite build input to use `i.html`.
- Remove the old `invite/index.html` entry from the build input and repository.

## Verification

- Focused Vitest coverage for the new `i.html` entry.
- Production build emits `dist/i.html`.
