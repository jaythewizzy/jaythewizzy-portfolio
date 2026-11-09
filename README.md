# JaytheWizzy — Creative Studio, Media & Technology

A Next.js App Router portfolio for Stephen Omojola (JaytheWizzy), positioned first as a Software & AI Engineer and founder of WizzyLux Global Concepts.

## Stack

- Next.js 16.4.5 App Router
- React 19
- TypeScript
- Custom CSS based on the approved JaytheWizzy Creative Studio design
- Static export for Vercel (`output: "export"`)

## Local development

Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Validation and production build

```bash
npm run typecheck
npm run build
```

The build statically exports the site to `out/`. Vercel detects Next.js from `package.json` and uses the Next build output automatically.

## Route structure

- `/` — Home
- `/about/` — Stephen's background and experience
- `/technology/` — software and AI engineering stack
- `/apps/` and `/apps/[slug]/` — installable and web applications, each with its own product page
- `/studio/` — services and client work
- `/projects/` — all software, platform and brand projects
- `/projects/[slug]/` — an individual project detail page
- `/games/` and `/games/[slug]/` — games and individual game pages
- `/music/` and `/music/[slug]/` — music catalogue and individual releases
- `/books/` and `/books/[slug]/` — books and individual works; The Second Life of Julian Vale is in progress, with Book One titled Play the Game and a planned four-book arc
- `/media/` — media hub
- `/film-tv/` — developing film and television direction
- `/wizzy-lux-global-concepts/` — parent company overview
- `/cv/` — CV details and direct PDF download (no embedded preview)
- `/contact/` — employment, freelance, WhatsApp and general enquiries

## Content editing

Portfolio content is data-driven. See `CONTENT_GUIDE.md` for the exact files to edit when adding projects, games, music, books or company ventures. All social destinations share the `@Jaythewizzy` identity and are maintained in `data/site.ts`.

## Images

There are no profile photos, cut-out portraits or project-image grids in this version. The homepage uses the approved CSS monogram/orbit treatment only. The CV PDF and favicon are the only image/document assets included in `public/`.

For safe deployment over the current repository, follow `MIGRATION_GUIDE.md`. It uses a separate Git branch first so the existing production site stays live while the preview is reviewed.
