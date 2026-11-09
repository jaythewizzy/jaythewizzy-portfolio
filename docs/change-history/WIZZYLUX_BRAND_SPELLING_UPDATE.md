# WizzyLux brand spelling update

Apply this ZIP at the root of the existing JaytheWizzy Next.js repository.

Changes are limited to consistent display spelling: **WizzyLux** (and **WizzyLux Global Concepts**). This updates visible labels and the clothing-brand project name. All 31 Open Graph preview cards have been refreshed so their shared footer uses `WIZZYLUX GLOBAL CONCEPTS`; the investor preview kicker and clothing-brand preview title are also corrected.

The URL slugs `/wizzy-lux-global-concepts/` and `/projects/wizzylux/`, the image filenames, and the external domain `wizzylux.com` are intentionally unchanged. They are URL/domain identifiers, not spaced display names, and changing them would be an unnecessary URL migration.

No layout, styling, page structure, page metadata, or business content has otherwise been changed. After overlaying, run `npm run typecheck` and `npm run build`, then commit and push.
