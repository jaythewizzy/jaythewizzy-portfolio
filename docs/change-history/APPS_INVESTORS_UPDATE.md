# JaytheWizzy Apps Discovery & Investor Relations Update

This is a surgical update to the existing Next.js App Router project.

## Changes
- Adds Apps & Digital Products as the sixth card in the homepage's Wider Ecosystem grid.
- Adds a dedicated Applications section to `/projects`, separate from broader project case studies and Games.
- Adds the dedicated `/investors` page for WizzyLux Global Concepts, with factual portfolio areas, an investor enquiry route and clear wording that no investment terms or returns are offered on the page.
- Adds Investors to the main navigation, footer and parent-company/homepage calls to action.
- Adds `/investors` to the sitemap.
- Changes the homepage ecosystem from five to six cards and uses a balanced three-column desktop layout.

## Files included
- `app/page.tsx`
- `app/projects/page.tsx`
- `app/investors/page.tsx` (new)
- `app/sitemap.ts`
- `app/globals.css`
- `app/wizzy-lux-global-concepts/page.tsx`
- `components/site-header.tsx`
- `components/site-footer.tsx`
- `CONTENT_GUIDE.md`

## Important
This update deliberately does not include `next.config.ts`, package files, lockfiles, environment files, `.vercel`, or `.git`. Keep the working Vercel configuration already in the user's repository.

No dependencies are added.
