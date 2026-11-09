# JaytheWizzy — Creative Studio, Media & Technology

A multi-page static website for Stephen Omojola, known as JaytheWizzy.

## Routes
- `/` — Home
- `/about` — About
- `/studio` — Studio and capabilities
- `/projects` — Ventures and products
- `/games` — Games and interactive projects
- `/media` — Music, books and screen development
- `/contact` — Email and WhatsApp contacts

Each route is a folder containing `index.html`. `vercel.json` maps the clean routes to those files, disables trailing slashes, and redirects legacy `.html` URLs.

## Stack
Plain HTML, CSS and JavaScript. No package manager, build step or environment variables are required.

## Local preview
From the project root run:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`. The Python server uses directory index pages; Vercel applies the clean route rewrites in `vercel.json`.

## Deploy
Connected to Vercel via GitHub. Push commits to `main` to create a production deployment.

## Domain
`https://jaythewizzy.com` is primary; `www.jaythewizzy.com` permanently redirects to it.

## Portrait assets
- `assets/profile.jpg` is the selected small circular profile portrait used on About and Contact only.
- `assets/profile-cutout.png` is retained as an alternate transparent cutout asset and is not shown as a large hero image.

## Projects
Project statuses are intentionally clear: LUXEN and GrowthOS are live; Coinwell is in Google Play closed testing; The Foundry is in development.

## Contact
Email: jaythewizzy@gmail.com
WhatsApp line 1: +375 25 742 25 96
WhatsApp line 2: +234 813 084 7252
