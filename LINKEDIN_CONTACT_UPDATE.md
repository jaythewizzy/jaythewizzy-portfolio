# LinkedIn and Contact Page Update

This surgical patch adds the official LinkedIn profile to the site's shared social-profile data and makes the Contact page clearer about social direct messages.

## Changes
- Adds `https://www.linkedin.com/in/jaythewizzy/` to `data/site.ts`.
- Adds a LinkedIn icon to the shared social icon component, so it appears in the site's shared social link rows, including the footer.
- Adds a dedicated LinkedIn contact row and a professional connection/direct-message explanation on `/contact/`.
- The Person structured data automatically includes LinkedIn in `sameAs`, because it is generated from `site.socials`. No separate structured-data edit is needed.
- No routes, page layout structure, other copy, or metadata are changed.

## Apply
Extract this ZIP into the project root, then run `npm run typecheck` and `npm run build`.
