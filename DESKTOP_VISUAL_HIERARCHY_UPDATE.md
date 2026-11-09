# Desktop visual hierarchy update

Based on the latest supplied JaytheWizzy source baseline and the existing readability/ecosystem spacing follow-up.

## Changes
- Enlarges the WL company monogram on desktop and gives it a subtle gold fill plus a stronger outline.
- Enlarges the JW hero monogram on desktop and improves its contrast so it reads as a prominent brand mark rather than a tiny outline.
- Restores hierarchy in the “Open to the Right Opportunities” block with a larger heading, eyebrow, supporting paragraph and buttons.
- Adds restrained tablet sizing for the WL mark and opportunity section.
- Leaves mobile-specific typography and mobile layout rules unchanged.
- Retains the previous Music & Sound / Wider Ecosystem card spacing correction from the supplied follow-up patch.

## Files
- `app/globals.css` only, plus this note.

## Validation
CSS text and archive integrity checked. A full Next.js build and live visual device testing have not been run here. Run `npm run typecheck` and `npm run build` locally before committing.
