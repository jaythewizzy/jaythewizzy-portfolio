# Site polish update — November 10, 2026

This surgical update covers four confirmed requests:

- Coinwell is labelled **Live on Google Play** on its game detail data and the WizzyLux Global Concepts venture list. Its descriptions no longer say closed testing.
- Telegram now points to `https://t.me/jaythewizzy` and displays `@jaythewizzy`. Shared social links, Contact and Person `sameAs` structured data read from `data/site.ts`.
- Theme preference is applied synchronously in the document head before the page is painted, preventing the initial dark-to-light flash for visitors who saved light mode. Dark remains the default when no preference is saved.
- Google Fonts CSS `@import` is removed. Manrope, DM Sans and Playfair Display are loaded through `next/font/google`, self-hosted by Next.js at build time and preloaded/optimized by the framework.

The existing theme toggle and `jw-theme` localStorage key are preserved. Both public WhatsApp numbers, the Investors navigation item, page content and visual design are unchanged. The About page is not included in this patch, so the separately applied age-removal change is preserved.

## Files in this patch

- `app/layout.tsx`
- `app/globals.css`
- `components/theme-toggle.tsx`
- `data/site.ts`
- `data/games.ts`
- `app/wizzy-lux-global-concepts/page.tsx`
- `SITE_POLISH_UPDATE.md`

## Validation

Source syntax was checked for the changed TypeScript/TSX files and the patch archive was verified. A full dependency-backed Next.js build must be run in the project environment, particularly because `next/font/google` fetches font files during the build and then bundles them locally.
