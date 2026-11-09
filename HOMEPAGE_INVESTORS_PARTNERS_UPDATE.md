# Homepage Investors & Strategic Partners Update

## Change
- Adds a distinct `INVESTORS & STRATEGIC PARTNERS` invitation inside the existing WizzyLux Global Concepts homepage panel.
- Explains that the company welcomes conversations with investors and strategic partners interested in the wider ecosystem.
- Adds a clear `Explore opportunities` link to `/investors/`.
- Removes the smaller duplicate `Investor relations` link from the existing row, while retaining `Explore the company` and `View its ventures`.
- Uses a CSS Module so this patch does not overwrite or disturb the site's latest global typography, font, theme, responsive, or desktop styling updates.

## Scope
Only `app/page.tsx`, the new `app/homepage-partnership-callout.module.css`, and this note are included. No pricing, valuation, investment terms, returns, or promises are introduced.

## Apply
Extract this ZIP into the project root, then run `npm run typecheck` and `npm run build`. Review the homepage at desktop and mobile widths before committing.
