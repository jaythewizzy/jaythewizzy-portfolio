# Typography and Responsive Layout Update

This is a surgical CSS-only update for the current JaytheWizzy site-polish baseline.

## What changes

- Raises the global reading size from 15px to 16px.
- Brings small body-copy styles across About, projects, games, contact, company, music, books and investor content up to a more comfortable 14–16px range.
- Improves small labels, metadata, navigation, button and footer text without enlarging decorative monograms or major headings indiscriminately.
- Slightly strengthens body-copy weight and line height for readability.
- Expands the centered content shell on wide and ultrawide monitors, while keeping a controlled maximum line width.
- Collapses the crowded desktop navigation into the existing menu control between 761px and 1100px, covering tablets and narrower laptops.
- Adds tablet-specific layout adjustments for 761–900px widths.
- Retains the existing mobile layouts at 760px and below, with more readable text sizes.

## Files

- `app/globals.css` only.

## Notes

This patch does not change page content, component behavior, branding, theme behavior, navigation logic, metadata or assets. It only adjusts typography and responsive CSS. It has been parsed with PostCSS and brace-checked, but a full Next.js build and visual device testing must still be run in the project environment.
