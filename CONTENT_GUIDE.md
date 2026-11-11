Edit `data/apps.ts`. The `/apps/` catalogue and `/apps/[slug]/` detail routes are generated from this file. Each entry records its platforms, live status, product description, highlights, stack and official website. Add a new entry with a unique `slug` to create its own page and sitemap entry. Keep games in `data/games.ts`; this Apps catalogue is for installable/web applications such as LUXEN.

For LUXEN, keep the product positioning consistent across summaries, descriptions and highlights: it is a discovery platform for **movies, anime and TV series** across web and mobile. Do not narrow the description to movies and television only.


For the games portfolio, edit `data/games.ts`. StreetBite Empire has dedicated website routes at `/games/streetbite-empire/`, `/games/streetbite-empire/privacy/` and `/games/streetbite-empire/support/`. Keep the published policy aligned with the SDKs and data actually enabled in the release build.
