# StreetBite Empire — JaytheWizzy.com integration handoff

**Date:** 10 November 2026
**Website source baseline:** `jaythewizzy-source-20261110-073711-acb4a4a.zip`
**Publisher:** JaytheWizzy Games
**Game title:** StreetBite Empire (working title; trademark/title clearance remains outstanding)

## Implemented in this source

- Added StreetBite Empire to `data/games.ts` with status `In development`.
- Featured StreetBite Empire on `/games/` while retaining Coinwell and LifeLeague as separate catalogue entries.
- Added the individual game overview at `/games/streetbite-empire/`.
- Added the public policy page at `/games/streetbite-empire/privacy/`.
- Added the player-support page at `/games/streetbite-empire/support/`.
- Added both new legal/support paths to the static sitemap.
- Copied the StreetBite Empire game icon and store feature graphic into `public/games/streetbite-empire/`.
- Added a dedicated 1200×630 social preview at `public/og/game-streetbite-empire.jpg`.
- Added responsive styles for the featured game, detail artwork, policy document and support layout.

## Before production deployment

1. Run `npm ci`, `npm run typecheck` and `npm run build` from the website repository root.
2. Review the policy against the exact release SDK configuration and store Data Safety / App Privacy answers.
3. Confirm target age audience and child-directed ad settings before store submission.
4. Deploy the website to `https://jaythewizzy.com`.
5. Verify these URLs return public pages without authentication:
   - `https://jaythewizzy.com/games/`
   - `https://jaythewizzy.com/games/streetbite-empire/`
   - `https://jaythewizzy.com/games/streetbite-empire/privacy/`
   - `https://jaythewizzy.com/games/streetbite-empire/support/`
6. Confirm canonical metadata, Open Graph image, mobile layout and links.
7. Do not publish `app-ads.txt` until the actual AdMob publisher ID is known. Then add the exact Google-supplied seller declaration at `/app-ads.txt` and verify it from the public root.

## Identity note

The selected application/bundle identifier for this game is `app.jaythewizzy.streetbiteempire`. This is a reverse-DNS-style identifier, not a URL. It is configured in the game source for Android and iOS. Confirm availability and register it before creating store records; keep it unchanged after store registration/build distribution.

The site's existing GrowthOS and Coinwell references have not been renamed.
