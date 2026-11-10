# Technology page readability update

## What changed
- Increased only the Technology page toolkit labels from 10px to 14px on desktop and 13px on screens up to 760px.
- Increased font weight to 600 and set readable line-height and text colour.
- Scoped the change to the Technology toolkit via a CSS Module. Project tags and other small metadata elsewhere on the site are untouched.
- No change to the homepage “Build with me / Or hire me to build for you” section; the latest screenshot shows that hierarchy is strong and readable.

## Apply
Overlay these files into the project root, then run:

```powershell
npm run typecheck
npm run build
```

Commit the page and CSS module:

```powershell
git add app/technology/page.tsx app/technology/technology.module.css
git diff --cached --check
git commit -m "Improve technology toolkit readability"
git push origin main
```
