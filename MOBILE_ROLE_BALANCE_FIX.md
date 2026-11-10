# Mobile role alignment fix

This CSS-only adjustment keeps the desktop role-label row unchanged and gives narrow screens a balanced two-row layout:

- Row one: Software & AI Engineer
- Row two: Creative Builder · Founder

The second row is centered as one grouped unit, rather than pinning the short Founder label to the far right edge. The rule is limited to viewports at or below 760px.

Apply this `app/globals.css` over the current repository. No content, routes, theme, typography, or desktop styling is changed.
