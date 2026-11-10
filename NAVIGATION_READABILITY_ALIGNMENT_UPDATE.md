# Navigation, readability and project-card alignment update

Based on source commit `22cfe50`.

## Changes

- Makes **Media** a visible top-level navigation destination instead of hiding it in the Work dropdown.
- Keeps **Work** focused on Projects and Studio.
- Ensures the Play and Work dropdowns close their sibling when opened or keyboard-focused.
- Keeps the existing Play page's **See all apps** and **See all games** links intact.
- Gives the homepage's three primary actions one line on wide desktop screens; tablet and mobile retain natural wrapping.
- Aligns project catalogue cards by standardizing the metadata, title, description and tag rows.
- Increases the readability of project technology tags, detail facts, status/category text and supporting details across devices.
- Changes the LUXEN creator credit to **Created by JaytheWizzy** and retains the direct `https://luxen.watch` link.

## Files

- `components/site-header.tsx`
- `app/globals.css`
- `app/projects/[slug]/page.tsx`

## Apply

Extract this ZIP into the project root, then run:

```powershell
npm run typecheck
npm run build
```

After both pass:

```powershell
git add components/site-header.tsx app/globals.css "app/projects/[slug]/page.tsx"
git diff --cached --check
git commit -m "Refine navigation and improve portfolio readability"
git push origin main
```

The patch does not alter routes, project data, the Play developer hub, Contact links, publishing ownership, or the existing colour/font identity.
