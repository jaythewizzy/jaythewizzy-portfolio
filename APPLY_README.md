# JaytheWizzy Play destination, Contact correction & LUXEN credit

This patch is based on the supplied `jaythewizzy-source-20261110-030908-348985a.zip` snapshot and includes the previously prepared Play developer hub and LUXEN Google Play listing updates.

## What it changes

1. Adds `/play/` as the central developer-platform destination, with the official Google Play developer profile and an App Store card clearly marked “Coming soon”.
2. Adds Play to the main navigation and footer. The Contact page does not carry a separate developer-profile card.
3. Restores Spotify to the Contact page. The social grid now uses all eight current social profiles from `data/site.ts`, including Spotify and Telegram. Google Play is not counted as a Contact social link.
4. Keeps Spotify in the footer/music presence and keeps the Google Play developer profile in the Person structured data.
5. Adds a Google Play install link to the LUXEN app detail page.
6. Adds “Created by JaytheWizzy Creative Studio” and a direct `https://luxen.watch` link to the LUXEN project case study at `/projects/luxen/` only.
7. Adds `/play/` to the sitemap.

Coinwell's GrowthOS publisher relationship, GrowthOS privacy policy, and existing Coinwell store listing are not changed.

## Apply

Extract this ZIP into the repository root, preserving the existing `.git`, `.vercel`, `node_modules` and all other local files. Then run:

```powershell
npm run typecheck
npm run build
```

If both pass:

```powershell
git add -A
git diff --cached --check
git commit -m "Add developer hub and credit LUXEN creator"
git push origin main
```

This patch was syntax-checked and inspected for the intended links, but a dependency-backed Next.js build has not been run here.
