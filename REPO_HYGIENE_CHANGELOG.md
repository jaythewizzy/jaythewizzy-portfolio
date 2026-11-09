# About age removal and repository hygiene

Based on source baseline `251b224`.

## Changes

- Removed the age statement from `/about/`; no other About copy was changed.
- Removed the sitemap `lastModified: new Date()` value. It changed every build even when the underlying pages had not changed. `lastmod` is optional in XML sitemaps, so omitting an unreliable timestamp is more accurate.
- Added `*.tsbuildinfo` to `.gitignore` and included a cleanup script to stop tracking the generated `tsconfig.tsbuildinfo` cache.
- Updated `README.md` to reflect the current Investors route, current Contact journey, the provisional Telegram handle, and the 31 social-preview assets under `public/og/`.
- Added a cleanup script that moves one-off patch notes into `docs/change-history/` rather than deleting useful project history. Operational documents remain at the repository root.

## Deliberately not changed

- Coinwell's public status remains as currently written (`Google Play · Closed testing`) until its current Play Console availability is confirmed.
- Telegram remains `@jaythewizz` because that is the handle currently chosen for temporary use. Update `data/site.ts` when the preferred account is recovered; verify the link belongs to the user before keeping it in Person `sameAs`.
- Public WhatsApp contact numbers remain unchanged; removing them is a business/privacy choice for the site owner.
- The Investors navigation link remains; it is an intentional route for the wider WizzyLux ecosystem.
- CSS font loading and theme flash are not changed in this patch because they require separate performance/visual QA.

## Apply

Overlay the ZIP into the project root, then run:

```powershell
.\REPO_HYGIENE_CLEANUP.ps1
npm run typecheck
npm run build
```

Review `git status`, then stage and commit the full cleanup.
