# Telegram and creative identity update

Applied to the JaytheWizzy portfolio source baseline `91220fc`.

## Telegram
- Added Telegram to `data/site.ts` as `https://t.me/jaythewizz`.
- Kept its display handle distinct as `@jaythewizz`; other profiles continue to use `@Jaythewizzy`.
- Added the Telegram icon to the shared social-link component, so it appears in the site footer and shared social rows.
- Added an explicit Telegram contact row on `/contact/`.
- The Person `sameAs` structured data is generated from `site.socials`, so the Telegram profile is included automatically.

The supplied Telegram handle is being used provisionally. The Contact-page row and shared social links both read from `data/site.ts`, so when account access is restored, verify the exact public username and update the Telegram entry there if it changes.

## About page
- Added the user's musical interests: piano, flutes and drums, with continued learning of other instruments.
- Added the personal motto: “Jack of All Trades, Master of All.”
- Kept both additions within the existing About page layout. No Contact-page biography copy or global age data was added.
