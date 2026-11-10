# Navbar scroll-to-top and history restoration update

## Why the previous behavior was inconsistent

The App Router's default `Link` scroll behavior uses a visibility heuristic: if the new route's first visible page element is already in the viewport, it may keep the current scroll position rather than reset to the document top. This is why successive navbar clicks could land at slightly different vertical offsets.

## Changes

- Navbar links now opt out of Next's visibility-based scroll heuristic with `scroll={false}`.
- A navbar click explicitly scrolls the destination route to document position `0, 0` after the pathname changes. Clicking the current navbar item also returns to the top.
- Browser `popstate` clears any pending navbar scroll request, leaving Next.js to restore the saved Back/Forward position.
- The root `<html>` declares `data-scroll-behavior="smooth"` so Next.js can suppress smooth scrolling during router history restoration while retaining smooth in-page scrolling.
- Desktop navigation labels are increased to 15.5–16.5px; tablet/mobile menu labels are increased to 15–15.5px.
- The active README now documents `/play/` and the current Telegram handle.

## Expected behavior

| Action | Result |
|---|---|
| Click any navbar destination | New page starts at the very top |
| Click the active navbar destination | Current page returns to the top |
| Browser Back | Previous page and its saved scroll position are restored |
| Browser Forward | Forward page and its saved scroll position are restored |
| Open a navbar link in a new tab | Browser handles it normally |

## Validation

Run `npm run typecheck` and `npm run build` locally before committing. Verify in production by scrolling down a page, using two different navbar links in sequence, then testing browser Back and Forward.
