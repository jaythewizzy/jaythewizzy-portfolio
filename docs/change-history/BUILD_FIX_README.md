# JaytheWizzy static-export metadata fix

This is a surgical fix for the Next.js 16.4.5 static-export build error reported for /sitemap.xml.

Replace these two files in the existing project:
- app/sitemap.ts
- app/robots.ts

Both metadata routes explicitly declare `dynamic = 'force-static'`, ensuring they are generated during `next build` for `output: 'export'`. No dependencies or other source files are changed.

After extraction into the project root, run:

```powershell
npm run typecheck
npm run build
```
