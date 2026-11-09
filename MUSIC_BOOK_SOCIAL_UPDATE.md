# Music, social identity and book-content update

This update builds on the existing Next.js App Router project and its previous music-catalogue update.

## Music
- Retains the released catalogue: The Life We Made (Afrobeats EP), Beyond the Horizon (five-track cinematic/fantasy orchestral EP), and four standalone Pop/Soul singles.
- Retains the four primary artist profile links (Spotify, Apple Music, YouTube Music, Amazon Music) and the See more platforms disclosure (Deezer, TIDAL, Boomplay).
- TikTok is correctly described as a DistroKid-delivered social music-library destination; no unprovided TikTok artist-catalogue URL is invented.

## Social identity
- Shared site data now declares the single social handle `@Jaythewizzy`.
- Existing platform profile URLs are preserved and accessible labels/link titles identify the same handle.
- Contact page label reads `FOLLOW @JAYTHEWIZZY`.

## Books
- The Second Life of Julian Vale is explicitly marked as in progress.
- Book One is Play the Game. The other three volumes are shown as planned, not released.
- The public story page incorporates the supplied story summary: Julian "Jay" Vale, Valemont, the first-life/second-life premise, the governing rule, the four-book emotional arc, themes and recurring motifs.
- No publication date, purchase link or reading access is invented.

## Files changed
- `data/site.ts`
- `components/social-links.tsx`
- `app/contact/page.tsx`
- `data/books.ts`
- `app/books/page.tsx`
- `app/books/[slug]/page.tsx`
- `app/globals.css`
- `README.md`
- `CONTENT_GUIDE.md`

The previous music catalogue changes remain in this package, including `data/music.ts`, the music page, release detail page, platform links component and responsive music styles.
