# Canonical URL policy

The site intentionally uses trailing-slash URLs because `next.config.ts` sets `trailingSlash: true` with a static export. This makes `/about` normalize to `/about/` and emits directory-style static files such as `about/index.html`. This is a valid, consistent URL policy.

The root layout now declares the homepage canonical, each static route declares its own canonical, and each generated detail page (`apps`, `books`, `games`, `music`, `projects`) builds a self-referencing canonical from its slug. The sitemap already uses the same trailing-slash format.

Canonical tags use relative paths and `metadataBase` (`https://jaythewizzy.com`) resolves them to absolute production URLs.
