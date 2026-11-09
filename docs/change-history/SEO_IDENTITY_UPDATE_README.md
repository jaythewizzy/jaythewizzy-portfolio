# JaytheWizzy identity and SEO update

Baseline source: `bca6beb` plus the already-deployed sitemap correction `3d64ba1`.

## Scope
- Adds the age statement only to `/about/`. It is not added to global metadata, homepage content or shared layout.
- Adds a short, fact-based About-page overview linking LUXEN, GrowthOS, Coinwell, LifeLeague, the released music catalogue and The Second Life of Julian Vale.
- Adds `ProfilePage` + `Person` structured data on `/about/`, including the official social and music-artist profile URLs already recorded in `data/site.ts` and `data/music.ts`.
- Adds `WebSite` structured data on `/`.
- Adds `Organization` structured data on `/wizzy-lux-global-concepts/`.
- Does not alter the visual design, routing, sitemap, robots rules, purchase flows, forms, or product data.
- Does not add a profile photo or expose the age in JSON-LD.

## Files
- `app/about/page.tsx`
- `app/page.tsx`
- `app/wizzy-lux-global-concepts/page.tsx`
- `components/json-ld.tsx` (new)
- `lib/structured-data.ts` (new)

Apply from the project root, then run `npm run typecheck` and `npm run build`.
