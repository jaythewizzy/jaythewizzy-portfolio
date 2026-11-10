# Current site audit notes

Reviewed against the committed source baseline `0f209ea` (`main`) on November 10, 2026, with the surgical content/documentation update in this working archive layered on top.

## Confirmed current state

- Next.js App Router site configured for static export (`output: 'export'`) with trailing-slash URLs.
- The supplied production validation log confirms `npm run typecheck` passed and `npm run build` passed on Next.js 16.4.5.
- The production build generated all 36 static/SSG route entries (36/36 static-page generation completed).
- Sitemap includes the `/play/` route and current detail routes; `robots.txt` allows crawling and advertises the sitemap.
- Page metadata is defined for the static page routes; app, project, game, music and book detail routes derive metadata from their data records.
- LUXEN is positioned consistently as a discovery platform for **movies, anime and TV series** across web and mobile. Its app and project summaries feed the relevant page-intro and metadata descriptions.
- Coinwell is live on Google Play and remains published by GrowthOS. Its publishing and privacy arrangement is not transferred to JaytheWizzy.
- Telegram uses the public handle `@jaythewizzy` (`https://t.me/jaythewizzy`).
- LUXEN project credit links to `https://luxen.watch`.
- The `/play/` developer-platform page links to Google Play. The public Apple App Store developer destination is still labelled Coming soon; the page does not imply that an Apple developer-profile URL is available.

## Remaining items (planned work, not defects in this patch)

1. **Localization is not implemented.** There are no `/fr/`, `/ru/`, `/de/` or `/es/` route trees, translated content dictionaries, or `hreflang` alternates in this snapshot. English remains the only published website language.
2. **Apple App Store developer destination is pending.** Add the public developer-profile URL to the `/play/` page when it is ready. Keep the current Coming soon wording until then.
3. **Future JaytheWizzy-published games need their own privacy and support destinations before release.** There is no dedicated privacy-policy route in this repository. Coinwell's policy remains with GrowthOS, its current publisher. LifeLeague is still labelled Release candidate; add release-specific documentation when its publishing plan is confirmed.

Historical patch notes in `docs/change-history/` intentionally retain handles and statuses that were accurate when those changes were made. Current values are defined in `data/site.ts` and `data/games.ts`; this audit and the active README are the present source of truth for current project state.

## Validation provenance

The successful typecheck and production-build results above are recorded from the PowerShell output supplied with the `0f209ea` source handoff (before this surgical copy patch). In this workspace, a TypeScript/TSX syntax transpilation pass parsed 43 source files with zero syntax diagnostics. A fresh dependency-backed typecheck/build could not be run here because `npm ci` could not reach `registry.npmjs.org` (DNS `EAI_AGAIN`). Revalidate the completed patch locally with:

```powershell
npm run typecheck
npm run build
```

This surgical update changes only portfolio copy and project documentation; it does not change routing, page structure, styles, navigation, integrations or runtime behavior.
