# Mobile Hero Roles & Page Spacing Update

This is a focused CSS-only patch for the latest JaytheWizzy site baseline.

## Changes
- On mobile, the homepage roles are laid out deliberately across two centered rows: `SOFTWARE & AI ENGINEER` first, then `CREATIVE BUILDER` and `FOUNDER` centered beneath it. Bullet separators are hidden only in this compact mobile layout to avoid a dangling bullet or an isolated final word.
- Reduces the shared page-intro top and bottom padding and tightens the breadcrumb-to-heading gap, making interior pages start closer to the sticky header.
- Slightly reduces homepage hero top padding, including large-monitor overrides, without removing the spacious hero composition.
- No page copy, routes, colors, type scale, contact links, or shared navigation behavior are changed.

## Apply
Overlay this archive at the project root. It contains only `app/globals.css` plus this note.

Run `npm run typecheck` and `npm run build` before committing and pushing.
