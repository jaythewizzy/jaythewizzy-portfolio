import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'StreetBite Empire Privacy Policy',
  description: 'Privacy information for StreetBite Empire, published by JaytheWizzy Games.',
  path: '/games/streetbite-empire/privacy/',
  image: '/og/game-streetbite-empire.jpg',
});

export default function StreetBitePrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="JAYTHEWIZZY GAMES · STREETBITE EMPIRE" title={<>Privacy <em>policy.</em></>} description="How StreetBite Empire handles local game data, advertising, consent and purchases." breadcrumb="StreetBite Empire" />
      <section className="section game-legal-section"><div className="shell legal-document">
        <Link className="game-back-link" href="/games/streetbite-empire/">Back to StreetBite Empire</Link>
        <p className="legal-updated">Last updated: 10 November 2026</p>
        <p>This policy applies to the mobile game <strong>StreetBite Empire</strong>, published by JaytheWizzy Games. It also explains how to contact us about privacy. The game is in development; the policy and the app-store disclosures will be checked against the exact release build and enabled services before public release.</p>

        <section><h2>1. Game progress and device storage</h2><p>StreetBite Empire is designed so its core game can be played offline. Game progress, virtual currency, achievements, settings and other save information are stored locally on the device using app storage. The current release plan does not require a player account or a publisher-operated cloud-save account.</p><p>Uninstalling the game or clearing its app data may remove locally stored progress. If cloud saves or account features are added in a future version, this policy will be updated before that version is released.</p></section>

        <section><h2>2. Advertising and consent</h2><p>When advertising is enabled, StreetBite Empire uses Google Mobile Ads (AdMob) to request and display banner, interstitial, app-open and optional rewarded advertisements. Google and its advertising partners may process device or advertising identifiers, IP address, device and app information, ad requests and interactions, approximate location inferred from IP address, and diagnostic or fraud-prevention information. The information processed can depend on your device settings, region, consent choices and the advertising SDK configuration.</p><p>Google's User Messaging Platform (UMP) is used to request and manage consent where applicable. Ad requests are made only when the consent SDK reports that requests are permitted. Where Google requires it, an in-game Privacy Choices control is available in Settings. You can also review your device's advertising and privacy settings.</p><p>Rewarded advertisements are optional and require a separate action from the player before each video. Any associated reward is virtual game currency or an in-game benefit only. It is not cash, has no cash-out value, cannot be transferred to another person and cannot be exchanged for money, gift cards or cryptocurrency.</p><p>Google's information about its advertising services is available at <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">How Google uses information from sites or apps that use its services</a> and the <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>.</p></section>

        <section><h2>3. In-app purchases</h2><p>If in-app purchases are enabled, payments are processed by Google Play or the Apple App Store, according to the platform used. The game does not receive or store your full payment-card or bank-account details. RevenueCat may be used to manage product information, purchase transactions, restore flows and entitlement status. This can involve purchase and product identifiers, transaction records, app user identifiers and entitlement information.</p><p>Store purchases are also subject to the applicable store's terms and privacy policy. You can manage eligible purchases and subscriptions through your store account.</p></section>

        <section><h2>4. Analytics and remote configuration</h2><p>In the current development configuration, Firebase Analytics and Firebase Remote Config are disabled. The app uses in-code defaults and does not rely on Firebase for its core gameplay. If analytics, remote configuration, crash reporting or another data-processing service is enabled before a future release, this policy and the relevant app-store privacy disclosures will be updated to describe that service.</p></section>

        <section><h2>5. Information you send to support</h2><p>We do not ask for your name, email address, contacts, photos or precise location to play the game. If you email support, we receive the email address and the information you choose to include so that we can respond and investigate the issue. Please do not send payment-card details, passwords or other sensitive account credentials.</p></section>

        <section><h2>6. Third-party services</h2><p>Depending on the features enabled in the version you use, the game may connect to these providers:</p><ul><li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a> and <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noreferrer">AdMob information</a>.</li><li><a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noreferrer">RevenueCat Privacy Policy</a> for purchase-management services, if enabled.</li><li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple Privacy Policy</a> for Apple platform services.</li><li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Play privacy information</a> for Google Play services.</li></ul><p>These providers process information under their own policies and terms.</p></section>

        <section><h2>7. Children and age-related settings</h2><p>The final target age, store age rating and child-directed status will be declared for the published build. Advertising configurations will be set to match those declarations and the requirements that apply in each distribution region. Parents or guardians with questions about the game or information sent to our support address can contact us.</p></section>

        <section><h2>8. Retention and privacy requests</h2><p>Local save information remains on your device until you delete the game or clear its app data. Support emails are retained only as reasonably necessary to respond to and document the request. Information handled independently by Google, Apple or RevenueCat is subject to the relevant provider's retention and privacy processes.</p><p>For questions or requests relating to information you sent directly to JaytheWizzy Games, contact <a href="mailto:jaythewizzy@gmail.com">jaythewizzy@gmail.com</a>.</p></section>

        <section><h2>9. International processing</h2><p>Third-party providers may process information on systems located in countries other than your own. Those providers describe their applicable safeguards and processing arrangements in their privacy documentation.</p></section>

        <section><h2>10. Changes to this policy</h2><p>This policy may be updated when the game, its SDKs, features or applicable requirements change. The date at the top of this page will be updated when a material change is made.</p></section>

        <div className="legal-contact-panel"><h2>Questions about privacy?</h2><p>Contact JaytheWizzy Games at <a href="mailto:jaythewizzy@gmail.com">jaythewizzy@gmail.com</a>, or visit the <Link href="/games/streetbite-empire/support/">StreetBite Empire support page</Link>.</p><p><Link href="/games/streetbite-empire/terms/">Read the Terms of Service</Link></p></div>
        <p className="legal-footnote">This page describes the current planned release architecture. The publisher will verify it against the final SDK configuration, app-store declarations, audience settings and release build before the game is submitted.</p>
      </div></section>
    </>
  );
}
