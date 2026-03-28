# AI Translator Landing Page Design

**Date:** 2026-03-28

**Goal:** Build an English marketing homepage for AI Translator that can be published on GitHub Pages and uses the provided product screenshots as the primary proof of product quality.

## Product Framing

The page should present AI Translator as a modern translation companion for real-world moments. It should feel premium, fast, and trustworthy without claiming unsupported features. Messaging must stay aligned with the confirmed product capabilities already documented in the Translator project:

- Text translation
- Voice translation
- Photo and OCR translation
- AI context-aware translation
- Offline language packs
- Meanings, examples, synonyms, and pronunciation
- Object recognition for vocabulary learning
- Light and dark UI support

The page must not claim unsupported abilities such as browser translation, AR mode, widgets, Siri flows, or enterprise features.

## Reference Research

The reference site [iTranslate](https://itranslate.com/) uses a direct app-marketing structure:

- Immediate hero statement
- App-store style trust and product proof
- Feature-led sections for translation modes
- Additional benefit grid
- Platform and final CTA sections

This landing page should borrow the pacing of that structure, but not the visual design. The target page will use a more vivid, motion-led visual language built around the supplied gradient-heavy product screenshots.

## Approved Direction

### Delivery Format

- Static website
- Built with `Vite + Vanilla`
- Output suitable for GitHub Pages

### Visual Direction

- Chosen style: `Neon Gradient Motion`
- Mood: luminous, energetic, premium, mobile-first
- Visual anchors: saturated gradients, glass surfaces, glowing accents, soft radial lighting, floating product phone frames

### Core Structure

1. Hero
2. Proof strip
3. Feature grid
4. Real-life scenarios
5. Demo band
6. Final CTA
7. Footer

## Content Architecture

### 1. Hero

Purpose:

- State the value proposition immediately
- Show real app screens above the fold
- Create a premium first impression

Content:

- Navigation with brand, section links, and CTA
- Eyebrow copy emphasizing AI-powered translation
- Main headline focused on text, voice, photos, and offline use
- Supporting paragraph grounded in travel, conversation, reading, and learning
- Primary CTA for app download
- Secondary CTA for watching the YouTube Shorts demo
- Animated phone showcase cycling through the four supplied screenshots

### 2. Proof Strip

Purpose:

- Compress the strongest product facts into a fast-scanning section

Content:

- AI-aware wording
- Photo and OCR capture
- Offline language packs
- Vocabulary and object learning

### 3. Feature Grid

Purpose:

- Map each supplied screenshot to a distinct feature story

Cards:

- Live Translate
- Object Learning
- Offline Anywhere
- Dark AI Workspace

Each card should include:

- Small label
- Strong feature title
- Short benefit-oriented paragraph
- Screenshot

### 4. Real-Life Scenarios

Purpose:

- Make the product feel useful in common daily contexts

Scenarios:

- Travel with confidence
- Talk naturally in conversations
- Read signs, menus, labels, and notes
- Turn daily moments into language learning

### 5. Demo Band

Purpose:

- Give motion-based proof without making the page depend on brittle Shorts embeds

Approach:

- Present a visually strong demo card
- Link out to the provided YouTube Shorts URL
- Explain that the short video shows the app in motion

### 6. Final CTA

Purpose:

- Close the page with one clear action

Content:

- Short conversion headline
- Download CTA
- Demo CTA

## Motion System

The page should feel alive, but not noisy.

### Hero Motion

- Slow automatic screenshot rotation
- Gentle floating motion on the phone stack
- Soft glow pulses behind the hero

### Scroll Motion

- Staggered fade and rise transitions on section entry
- Slight card lift on hover
- Sticky header background transition on scroll

### Accessibility

- Respect `prefers-reduced-motion`
- Reduce or disable float, stagger, and autoplay behavior when requested

## Visual System

### Palette

- Deep ink background for hero and footer
- Warm neon accents using coral, pink, violet, and electric blue
- Soft off-white surfaces for readable content zones
- Glass overlays for selected UI containers

### Typography

- Display font with a confident, wide presence
- Clean body font optimized for legibility
- Large type scale in hero and CTA sections

### Layout

- Desktop: asymmetrical hero, alternating section compositions
- Tablet: stacked but spacious compositions
- Mobile: single-column flow with preserved screenshot prominence

## Assets

Source screenshots:

- `/Users/jerry/workspace/AI/Translator/TranslatorDoc/Design/screenshot/素材/live Translate.png`
- `/Users/jerry/workspace/AI/Translator/TranslatorDoc/Design/screenshot/素材/识物.png`
- `/Users/jerry/workspace/AI/Translator/TranslatorDoc/Design/screenshot/素材/offline.png`
- `/Users/jerry/workspace/AI/Translator/TranslatorDoc/Design/screenshot/素材/dark.png`

Usage rules:

- Use real screenshots as the main proof visuals
- Crop only for layout fit, never distort
- Keep enough whitespace around screenshots so they remain readable

## Technical Plan

- Create a Vite vanilla app structure
- Render content from JavaScript data structures instead of hard-coding repeated HTML blocks
- Keep the screenshot carousel logic isolated for testability
- Use CSS custom properties for color, spacing, and glow tokens
- Configure Vite with a relative base for GitHub Pages compatibility
- Add a GitHub Actions Pages workflow so the project can be deployed directly from GitHub

## Verification Plan

- Run unit tests for landing-page rendering and carousel behavior
- Run production build
- Run local preview and inspect rendered HTML output
- Confirm responsive layout behavior at mobile and desktop widths

## Notes

This directory is not currently inside a Git repository, so the design document cannot be committed from here until the user places it in a Git-backed project or initializes Git locally.
