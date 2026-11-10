# Desktop content readability update

Baseline source: `jaythewizzy-source-20261110-054715-e64984c.zip` (commit `e64984c`).

## What changed
- Kept the existing Playfair display treatment for headings.
- Explicitly uses the site's existing Manrope/DM Sans sans-serif stack for reading copy, technical tags, project detail values and actionable links.
- Increased desktop body copy to 17px, hero intro copy to 18px, project/detail copy to 16.5–17px, and technology stack pills to 15.5px.
- Makes large desktop/ultrawide copy 18px and skill pills 16px.
- Gives tablets a slightly more compact 16px body size.
- Leaves mobile typography rules unchanged.

## Scope
Only `app/globals.css` is modified. No route, page content, navigation, branding, app listing, social profile, or mobile layout is changed.

Run `npm run typecheck` and `npm run build` locally before committing and pushing.
