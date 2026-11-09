# Route scroll reset

The site uses the Next.js App Router, which performs client-side navigation while keeping the shared root layout mounted. In some navigation cases, the browser/router can retain the previous document scroll position. The global route-scroll component makes page-to-page navigation return to the top consistently.

## Behavior

- Resets the document to the top when the pathname changes.
- Does not reset on the initial page load.
- Does not interfere with same-page hash/anchor navigation because the pathname does not change.
- Leaves the sticky site header and all page layouts/styles unchanged.
- Also resets when moving between history entries with different pathnames, matching the requested start-at-top behavior.

The change is limited to `components/route-scroll-reset.tsx` and its mount in `app/layout.tsx`.
