# AI Translator Landing

English landing page for AI Translator, built as a static Vite site that can be published on GitHub Pages.

## Stack

- Vite
- Vanilla JavaScript
- CSS
- Vitest + jsdom

## Local Development

```bash
npm install
npm run dev
```

Open the local Vite URL in your browser.

## Test

```bash
npm test
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This project already includes `.github/workflows/deploy.yml`.

To publish:

1. Put this directory inside a GitHub repository.
2. Push the project to the `main` branch.
3. In GitHub, enable `Settings > Pages > Build and deployment > GitHub Actions`.
4. The workflow will build the site and deploy the `dist/` output automatically.

## Content Sources

The landing page uses four local screenshots from the Translator project:

- `live Translate.png`
- `识物.png`
- `offline.png`
- `dark.png`

It also links to the provided YouTube Shorts demo:

- `https://youtube.com/shorts/5CNDHGiT3Po?si=4o5JamEPmshbP7kq`
