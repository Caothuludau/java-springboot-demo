# Khu Mo Brochure Web (Next.js)

Public brochure website for Khu Mo Distillery, implemented with Next.js App
Router, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20+
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000` by default.

## Build

```bash
npm run build
npm run start
```

## Environment variables

- `NEXT_PUBLIC_SITE_URL` (optional): canonical site URL for metadata and SEO
  files; defaults to `http://localhost:3000` in development.
- `LEADS_WEBHOOK_URL` (optional): future forwarding target for contact leads.
  If unset, the contact API route safely logs/handles payloads with a local
  stub behavior.

## Included v1 pages/routes

- `/` redirects to default locale `/vi`
- `/{locale}` brochure homepage (`/vi`, `/en`)
- `/{locale}/legal/privacy` legal placeholder
- `/{locale}/legal/terms` legal placeholder
- `/api/contact` POST contact endpoint (validated input)

## Locale language settings

- Default locale: `vi` (Vietnamese)
- Additional locale: `en` (English)
- Locale switcher appears in header (desktop and mobile)
- Locale routing is handled by `middleware.ts`

## Change banner and section images

- Edit `content/site-config.json` to swap images per section.
- Image files should be placed in `public/images/`.
- Current keys:
  - `hero.backgroundImage`
  - `story.image`
  - `product.items[].image`
  - `process.backgroundImage`
  - `gallery.images[]`
  - `contact.backgroundImage`
