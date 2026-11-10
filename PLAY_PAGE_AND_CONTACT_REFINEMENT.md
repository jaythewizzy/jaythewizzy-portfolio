# Play page and Contact page refinement

- Adds `/play/` as a single developer-platform destination.
- Adds a primary-navigation item named **Play** and a footer link to the same route.
- Google Play opens the official JaytheWizzy developer profile.
- Apple App Store is shown as **Coming soon** until the public developer profile URL is available; no URL is guessed.
- LUXEN remains highlighted and links to its existing app detail page and Google Play app listing.
- Coinwell is not presented as a JaytheWizzy-published title; its GrowthOS publishing and privacy setup remain unchanged.
- Removes Google Play from the generic social-network list and stores it as a developer-platform profile. The Person `sameAs` structured data still includes the official Google Play developer profile.
- Contact page replaces the direct Google Play row with one internal Developer Platforms link.
- Spotify remains in the site footer and music ecosystem, but is excluded from the Contact page's social strip.
- The Contact page removes repeated LinkedIn, GitHub and Telegram detail rows; those destinations remain in the social strip.
- Adds `/play/` to the sitemap.

## Notes

The Apple developer profile is intentionally a non-clickable coming-soon card until its real public URL is supplied. Update `site.developerProfiles.appStore` and the card when that URL is available.
