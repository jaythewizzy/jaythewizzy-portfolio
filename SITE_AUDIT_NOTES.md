# Current site audit notes

Reviewed against source snapshot `d9c5aa1` on November 10, 2026.

## Confirmed current state

- Static Next.js export with trailing-slash URLs.
- Sitemap includes the `/play/` route and all current detail routes.
- `robots.txt` allows crawling and advertises the sitemap.
- Page metadata is defined for all static page routes; dynamic detail routes use `generateMetadata`.
- Coinwell is represented as live on Google Play and published by GrowthOS. Its publishing/privacy arrangement is not transferred to JaytheWizzy.
- Telegram currently points to `@jaythewizzy`.
- LUXEN project credit links to `https://luxen.watch`.

## Remaining items (not defects in this patch)

1. **Localization is not implemented yet.** There are no `/fr/`, `/ru/`, `/de/` or `/es/` route trees, translated content dictionaries, or `hreflang` alternates in this snapshot. English remains the only published website language.
2. **Apple App Store developer profile is still marked Coming soon.** Add the public profile URL when it exists.
3. **Future JaytheWizzy-published games need their own privacy and support destinations before release.** There is no privacy-policy route in this repository. Coinwell's policy remains with GrowthOS, its existing publisher. LifeLeague is still labelled Release candidate, so its release documentation can be added when its publishing plan is ready.
4. **Production build still needs local confirmation after applying the patch.** This environment has no installed project dependencies, so it cannot certify a full Next.js build.

Historical patch notes in `docs/change-history/` intentionally retain the handles and statuses that were accurate when those changes were made. The current values are recorded in `data/site.ts` and `data/games.ts`; the active README and current-state changelog should be treated as the present source of truth.
