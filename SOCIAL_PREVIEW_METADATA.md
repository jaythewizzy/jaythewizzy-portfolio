# Social preview metadata

## What this changes

The site now emits page-specific metadata for Open Graph and X/Twitter cards. Shared URLs should show the correct page title and description rather than inheriting only the homepage title.

Each route also points to a branded 1200 × 630 JPEG social preview in `public/og/`. The assets are typographic, charcoal-and-gold JaytheWizzy designs; they do not introduce profile photography or product screenshots into the visible website.

## Static pages

Static route metadata is created with `createPageMetadata()` from `lib/seo.ts`. Example:

```ts
export const metadata = createPageMetadata({
  title: 'Apps & Digital Products',
  description: 'Mobile and web applications created and shipped by JaytheWizzy.',
  path: '/apps/',
  image: '/og/apps.jpg',
});
```

## Detail pages

Apps, books, games, music releases and projects call the same helper from `generateMetadata()`. Their title, description, canonical URL and image are generated from the corresponding typed data entry and slug.

When adding a new entry to `data/apps.ts`, `data/books.ts`, `data/games.ts`, `data/music.ts` or `data/projects.ts`, add its corresponding social image to `public/og/` using the existing slug-based naming convention.

## Canonical and social URL consistency

- Canonical URLs continue to use `https://jaythewizzy.com`.
- Trailing slashes are intentional and match `trailingSlash: true`.
- Open Graph `url` matches the canonical URL.
- Open Graph and X/Twitter images use absolute HTTPS URLs and 1200 × 630 dimensions.
- Twitter uses `summary_large_image` with the same page-specific title, description and image.

## After deployment

Social platforms cache link previews. After the new deployment is live, share a URL in a fresh conversation to test it. If a platform still shows an old card, use that platform's URL-inspection or sharing-debugger tool to request a re-scrape. A cached old preview does not necessarily mean the metadata deployment failed.
