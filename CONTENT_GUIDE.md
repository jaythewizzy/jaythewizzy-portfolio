# Content guide — surgical updates

The site layout is shared. Most content updates should happen in the data files rather than editing page layouts.

## Add or update an app

Edit `data/apps.ts`. The `/apps/` catalogue and `/apps/[slug]/` detail routes are generated from this file. Each entry records its platforms, live status, product description, highlights, stack and official website. Add a new entry with a unique `slug` to create its own page and sitemap entry. Keep games in `data/games.ts`; this Apps catalogue is for installable/web applications such as LUXEN.

## Add or update a software project

Edit `data/projects.ts`.

Each entry contains:
- `slug`: URL segment, e.g. `new-platform` → `/projects/new-platform/`
- `name`, `category`, `status`, `statusTone`
- `summary`: short card copy
- `description`: full detail page paragraphs
- `stack`: technology tags
- `highlights`: capabilities / work delivered
- `externalUrl`: optional public product link
- `relationship`: optional relationship to WizzyLux Global Concepts

The `/projects/` index and `/projects/[slug]/` detail pages are generated from this data. Add one object and the new route is included automatically in static generation and the sitemap.

## Add or update a game

Edit `data/games.ts`. The `/games/` index and `/games/[slug]/` pages are generated from the entries.

## Add a music release

Edit `data/music.ts`. Add a release object with a unique `slug`, `title`, `format` (`EP` or `Single`), `genre`, `status`, `description` and a `tracks` array. Each track stores its `title`, `performance` and `note`. It will appear on `/music/` and receive its own `/music/[slug]/` page. Artist profile destinations are maintained separately in `musicArtistPlatforms`: the four primary links appear directly, while the remaining profile links are in the “See more platforms” disclosure. Only add confirmed artist-profile URLs; TikTok music-library delivery is currently noted separately because no dedicated artist-catalogue URL was supplied.

## Add a book or original story

Edit `data/books.ts`. Each story has its own `/books/[slug]/` page. For `The Second Life of Julian Vale`, keep `status`/`statusLabel` accurate (Book One is in progress), and maintain the planned four-book arc, synopsis, Valemont setting, themes and recurring motifs in the same data object. Do not describe the manuscript as published or available to read until that changes.

## Update contact details or social accounts

Edit `data/site.ts`. Social destinations and the two WhatsApp lines are shared across the site. All the supplied social profiles use the single public handle `@Jaythewizzy`; the shared social-link component uses that handle consistently in accessible labels and link titles. Update the destination URLs in this one file if a profile changes.

## Update the CV

Replace `public/stephen-omojola-cv.pdf` with the new PDF using the same filename. The CV page links directly to the file and intentionally does not embed a preview.

## Update the parent company portfolio

Edit the `ventures` array in `app/wizzy-lux-global-concepts/page.tsx`. The parent-company narrative is in the same page.

## Update global layout or visual style

- Header: `components/site-header.tsx`
- Footer: `components/site-footer.tsx`
- Theme toggle: `components/theme-toggle.tsx`
- Social icons: `components/icons.tsx` and destinations in `data/site.ts`
- Shared design system: `app/globals.css`

Keep project-specific copy in data files whenever possible so a single page can be updated without changing the shared shell.

## Apps and investors
- Maintain customer-facing application catalogue entries in `data/apps.ts`. Each app creates `/apps/[slug]/` automatically.
- Apps are also linked from the homepage ecosystem and the Projects overview. Keep Apps distinct from engineering case studies and Games.
- The Investors page lives at `app/investors/page.tsx` (`/investors`). Keep statements factual: do not add unaudited revenue, user counts, valuations, investment terms or projected returns. Investment discussions are venture-specific.
