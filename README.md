# Ishani Biswas — Events, Brand & Creative Portfolio

A creative, routed portfolio for Ishani Biswas built with React, TypeScript, Vite and `HashRouter`. It presents her events and branding experience, strategic and AI-enabled working process, résumé and expandable project archive.

## Pages

- Home moodboard
- About
- Experience
- Work archive
- Individual work case studies
- Approach + AI playbook
- Résumé and education
- Contact

## Local development

```bash
npm install
npm run dev
```

Run a production check with:

```bash
npm run build
npm run preview
```

## Adding future work

1. Put the new PDF in `public/documents/`.
2. Put its cover and preview images in `public/images/work/`.
3. Add one new item to the `workItems` array in `src/portfolio.ts`.

The Work archive and case-study route will use that entry automatically.

## Deployment

Pushing `main` runs `.github/workflows/deploy.yml`, builds the Vite app and publishes `dist/` through GitHub Pages.

Required one-time repository setting: open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. If **Deploy from a branch** is selected, GitHub serves the raw Vite source and the browser shows a blank page.
