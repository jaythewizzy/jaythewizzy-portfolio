# JaytheWizzy — software, games, music and original stories

A multi-page static portfolio for Stephen Omojola, known creatively as JaytheWizzy.

## Routes
- `/` — Home and selected work
- `/about` — Background, experience, education, languages and working principles
- `/technology` — Full technology stack and software engineering portfolio
- `/games` — Coinwell and LifeLeague
- `/projects` — Products, platforms and ventures
- `/media` — Media hub for music, books and screen development
- `/music` — Released music and streaming platform links
- `/books` — The Second Life of Julian Vale
- `/studio` — Capabilities and collaboration process
- `/cv` — CV summary, PDF preview and download
- `/contact` — Email, WhatsApp and social links

Each route is a folder containing `index.html`. `vercel.json` maps clean routes to folder index files and redirects legacy `.html` routes.

## CV
`/stephen-omojola-cv.pdf` is the canonical CV download and is linked from the header menu, homepage, About page and dedicated CV page.

## Portrait assets
- `assets/profile.jpg` is the original photograph. It is used as a small circular portrait on About only.
- `assets/profile-cutout.png` is preserved as an alternate source asset but is not used in the page layouts.
- No generated studio portrait or oversized cutout is used.

## Stack
Plain HTML, CSS and JavaScript. No package manager, build step, secrets or environment variables are required.

## Local preview
From the project root:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`. Python serves folder index pages directly; Vercel applies the clean route rewrites from `vercel.json`.

## Deploy
The repository is connected to Vercel. Push to `main` to trigger a production deployment.

## Domain
`https://jaythewizzy.com` is primary. `www.jaythewizzy.com` redirects permanently to it.

## Content maintenance
- Add a software product to `/technology` and `/projects`.
- Add a game to `/games` and `/projects`.
- Add a music release and platform links to `/music`.
- Add a book or story to `/books`.
- Add any new public page to `vercel.json` rewrites and `sitemap.xml`.
- Update the PDF in the root when the CV changes.

## Status policy
Project status labels distinguish live products from closed testing, release candidates, prototypes and work in development. Update these labels when the real release status changes.
