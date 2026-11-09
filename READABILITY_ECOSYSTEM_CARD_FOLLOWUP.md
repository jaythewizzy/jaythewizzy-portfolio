# Readability and Ecosystem Card Spacing Follow-up

This is a surgical CSS-only follow-up to the existing typography/responsive update.

## Changes

- Raises normal page-reading copy to a consistent 16px desktop baseline and about 15.5px on mobile, with a slightly stronger weight and comfortable line-height.
- Increases the small text used for card descriptions, navigation-adjacent links, footer links and useful metadata while preserving deliberately small decorative labels.
- Fixes the Home page “Wider Ecosystem” cards: card content now flows vertically, and the action link (“Listen to music”, etc.) sits beneath the description instead of being absolutely positioned over it.
- Allows cards to grow naturally when larger type wraps onto additional lines, including narrow mobile widths.
- Does not change page content, fonts, branding, color palette, routes, navigation behavior or metadata.

## Files

- `app/globals.css` only.

## Validation

- CSS parsed with `tinycss2`; no parser errors.
- Brace balance checked.
- Full Next.js build and visual testing on physical devices still need to be run in the project environment.
