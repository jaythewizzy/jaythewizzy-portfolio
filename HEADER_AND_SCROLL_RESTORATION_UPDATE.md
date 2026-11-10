# Header and scroll restoration update

## Header
- Removed the desktop-only CV shortcut from the header to reduce visual crowding.
- Kept the CV / Résumé action in the mobile navigation, where it remains a useful explicit action.
- Increased desktop navigation labels to a legible 14.5–15.5px and centered the navigation group in the space between the brand and header actions.
- Tablet navigation uses 14px labels; the mobile layout remains at its established 14px sizing.
- No navigation destinations or routes were removed.

## Scroll behavior
- Removed the custom `RouteScrollReset` component from the root layout. It forced `window.scrollTo(0, 0)` on every pathname change, including browser Back and Forward navigation, overriding Next.js scroll restoration.
- Internal navigation links continue to use Next.js `Link` defaults (scroll enabled). New route navigation follows Next.js's built-in scroll-to-page behavior; browser Back and Forward can restore the prior history entry's scroll position.
- Same-page anchor navigation remains native.

The old `components/route-scroll-reset.tsx` file is no longer imported or mounted. It can be deleted after applying this patch; leaving the unused file in the repository has no runtime effect.

Reference: Next.js Link documentation describes default scroll behavior and restoration for back/forward navigation: https://nextjs.org/docs/app/api-reference/components/link
