# Project Card Layout Fix

This focused patch repairs the project and app catalogue cards.

## What changed
- Makes the project technology-tag wrapper an explicit wrapping flex container.
- Keeps each technology label together as a pill; names such as "React Native" no longer split across lines.
- Prevents long tag rows such as GrowthOS's stack from overflowing or being clipped.
- Uses a consistent two-line metadata block (status then category), aligning project titles.
- Reserves consistent title, description and tag areas so card actions align along the bottom.
- Uses a clear sans-serif face for card metadata, descriptions and technology pills.
- Keeps mobile cards naturally sized while preserving proper tag wrapping.

## Files
- `app/globals.css`
- `components/project-card.tsx`

No page content, project data, URLs, navigation, theme or global font configuration is changed.

## Apply
Extract the ZIP at the project root, then run `npm run typecheck` and `npm run build` before committing.
