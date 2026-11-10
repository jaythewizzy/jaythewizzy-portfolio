# Google Play profile and LUXEN listing update

Baseline source archive: `jaythewizzy-source-20261110-030908-348985a.zip`

## Changes

- Added JaytheWizzy's Google Play Developer Profile URL to `data/site.ts` as a shared profile link.
- Added a Google Play mark to the shared social icon component. Because the links are rendered from `site.socials`, the developer profile appears in the homepage/footer social row and the Contact page social row.
- Added a clearly labelled Google Play Developer Profile row to the Contact page.
- The existing Person/ProfilePage structured data automatically includes the developer profile URL in `sameAs`, because it already reads from `site.socials`.
- Added the LUXEN Google Play listing URL to its app data and a dedicated "Get LUXEN on Google Play" action on `/apps/luxen/`.
- Coinwell is unchanged. It remains published by GrowthOS and its existing publisher relationship and privacy setup are not modified.

## URLs used

- Developer profile: https://play.google.com/store/apps/dev?id=6171921839772798418
- LUXEN listing: https://play.google.com/store/apps/details?id=watch.luxen.app

## Files changed

- `data/site.ts`
- `components/icons.tsx`
- `app/contact/page.tsx`
- `data/apps.ts`
- `app/apps/[slug]/page.tsx`

## Validation

This is a small source patch. Run `npm run typecheck` and `npm run build` locally before committing. No build result is claimed by this update package.
