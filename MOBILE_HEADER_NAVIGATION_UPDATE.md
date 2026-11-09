# Mobile Header and Navigation Update

This patch is based on the final verified source baseline `91220fc` and includes the previously prepared Telegram + musical-identity update as well as the new mobile-header improvements. It is designed to be overlaid into the existing project root.

## Included changes

- Adds Telegram `@jaythewizz` to the central social-profile list, footer links and Person `sameAs` data (through the existing shared social-data pipeline).
- Adds a Telegram icon and a Telegram direct-message row on the Contact page.
- Adds the piano, flute and drums interests plus the “Jack of All Trades, Master of All” personal motto to the About page.
- Adds a clearly visible mobile navigation action row with **CV / Résumé** and **Get in touch** side by side, beneath the page links. The contact action routes to `/contact/`.
- Closes the mobile menu when a user taps outside the menu, scrolls the page, or presses Escape. Tapping the menu toggle or a navigation link continues to work normally.
- Preserves existing desktop header behavior and the current site design.

## Theme behavior

The site starts in **dark mode by default**. The theme toggle reads `jw-theme` from local storage; if the visitor previously selected light mode, that saved preference is restored. Otherwise, dark mode remains the initial theme.

## Apply

Extract this ZIP into the existing project root, preserving `.git`, `.vercel`, `node_modules` and any local-only files. Then run `npm run typecheck` and `npm run build` before committing.

The ZIP includes only source files changed for these features and this README; it does not include Git history or dependencies.
