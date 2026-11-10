# All-device readability update

Baseline: the desktop readability update already pushed from `e64984c` (the current repository also includes the previously applied navigation/readability work).

## Why this follow-up exists
The previous follow-up added its primary reading-size rules inside `@media (min-width: 761px)`, so it primarily affected desktop. This update applies readable type sizes at every viewport width instead of leaving mobile/tablet on older smaller rules.

## Changes
- Uses the existing Manrope / DM Sans stack explicitly for reading copy, detail text, technology labels, and action links. Playfair Display remains for display headings.
- Sets body copy with fluid sizing and a 16px minimum, scaling towards 18px on wider screens.
- Applies fluid sizes to hero and page introductions, cards, project details, timelines, contact panels, and supporting copy on phones, tablets, laptops, and large monitors.
- Increases project metadata and project stack tags so they remain legible without competing with headings.
- Increases LUXEN/project detail technology pills and the Technology toolkit labels at every viewport width. The Technology CSS Module no longer reduces the label size on mobile.
- Keeps heading styles, brand colours, component layouts, navigation, and the existing mobile composition intact.

## Validation
CSS brace-balance and source-level checks passed. A full Next.js build/typecheck must still be run in the local project before committing.
