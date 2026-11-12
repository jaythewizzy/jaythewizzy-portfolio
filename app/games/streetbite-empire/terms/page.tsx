import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'StreetBite Empire Terms of Service',
  description: 'Terms governing the use of StreetBite Empire, published by JaytheWizzy Games.',
  path: '/games/streetbite-empire/terms/',
  image: '/og/game-streetbite-empire.jpg',
});

export default function StreetBiteTermsPage() {
  return (
    <>
      <PageIntro eyebrow="JAYTHEWIZZY GAMES · STREETBITE EMPIRE" title={<>Terms of <em>service.</em></>} description="The terms that apply when you install or use StreetBite Empire." breadcrumb="StreetBite Empire" />
      <section className="section game-legal-section">
        <div className="shell legal-document">
          <Link className="game-back-link" href="/games/streetbite-empire/">Back to StreetBite Empire</Link>
          <p className="legal-updated">Effective date: 12 November 2026</p>
          <p>These Terms of Service (“Terms”) apply to your use of the <strong>StreetBite Empire</strong> mobile game (the “Game”), published by JaytheWizzy Games (“we”, “us” or “our”). By installing or using the Game, you agree to these Terms. If you do not agree, do not use the Game.</p>
          <p>If you are not legally able to agree to these Terms where you live, your parent or legal guardian must review and agree to them on your behalf where required by law.</p>

          <section>
            <h2>1. The Game and permitted use</h2>
            <p>StreetBite Empire is a casual food-truck and business-management game. We grant you a personal, limited, non-exclusive, non-transferable and revocable licence to install and use the Game for your own non-commercial entertainment, subject to these Terms and the rules of the app store through which you obtained it.</p>
            <p>You must not, except where applicable law allows it, copy, modify, distribute, sell, lease, sublicense, reverse engineer, decompile or attempt to extract the source code of the Game. You must not interfere with the Game, its security or its intended operation, or use cheats, exploits, bots or unauthorised tools to manipulate gameplay, advertising or purchases.</p>
          </section>
          <section>
            <h2>2. Game progress and device storage</h2>
            <p>The Game&apos;s core gameplay is designed to work offline. Game progress, settings, achievements and virtual balances are stored locally on your device in the current version. The Game does not currently promise account-based cloud saves or automatic transfer of local progress between devices.</p>
            <p>Uninstalling the Game, clearing its app data, changing devices or losing access to the device may permanently remove locally stored progress. Keep this limitation in mind before deleting the Game or resetting your device. This section does not limit any rights you may have under mandatory consumer law.</p>
          </section>
          <section>
            <h2>3. Virtual currency and in-game rewards</h2>
            <p>The Game may include virtual currency, gems, upgrades, boosts, items, achievements and other digital gameplay benefits (“Virtual Items”). Virtual Items are licensed for use within the Game; they are not money, deposits, securities or property redeemable for cash. They have no cash value, cannot be withdrawn, transferred, gifted, sold or exchanged for money, cryptocurrency, gift cards or other real-world value, and may only be used as permitted by the Game.</p>
            <p>Sponsor Cash and rewards from optional rewarded advertisements are virtual in-game rewards only. They are not real cash, do not represent an offer of employment or investment, and cannot be cashed out or redeemed outside the Game.</p>
            <p>We may balance, modify or discontinue gameplay mechanics and Virtual Items where reasonably necessary to operate, maintain, secure or improve the Game, subject to applicable law and any rights attached to purchases under the relevant app-store rules.</p>
          </section>
          <section>
            <h2>4. In-app purchases</h2>
            <p>The Game may offer optional in-app purchases, including digital items or permanent gameplay features. Prices, product descriptions and applicable taxes are shown by Google Play or another applicable app store before you confirm a purchase.</p>
            <p>Purchases are processed by the app store, not directly by JaytheWizzy Games. Your purchase is subject to the app store&apos;s payment, refund and cancellation terms and applicable law. We do not receive or store your full payment-card or bank-account details. Eligible purchases may be restorable through the Game&apos;s restore-purchases feature and the relevant store account.</p>
            <p>Virtual Items are intended for use in the Game and generally cannot be transferred to another account or device. Because the current Game stores gameplay balances locally, restoring a purchase entitlement does not necessarily restore a local gem balance or previously elapsed or unused boost time after app data is cleared or lost. Contact support if a purchase entitlement is not recognised; include the store order reference but never send payment-card details or passwords.</p>
          </section>
          <section>
            <h2>5. Advertising</h2>
            <p>The Game may display banner and interstitial advertisements and offer optional rewarded video advertisements through third-party advertising providers. Rewarded videos are optional; you choose whether to start each one. A reward is granted only when the advertising provider confirms that the required video event has been completed and the Game successfully processes the reward.</p>
            <p>Ad availability can depend on your connection, region, consent choices, device settings and provider inventory. We do not guarantee that an advertisement will always be available. Advertising providers process information under their own terms and privacy policies. See our <Link href="/games/streetbite-empire/privacy/">StreetBite Empire Privacy Policy</Link> for details about advertising and consent.</p>
          </section>
          <section>
            <h2>6. Third-party services</h2>
            <p>The Game may rely on third-party services such as Google Play, Google Mobile Ads (AdMob), Google&apos;s User Messaging Platform and RevenueCat for advertising, consent, payments and purchase-entitlement management. Those services are provided under their respective terms and privacy policies. We are not responsible for third-party services that we do not operate, but this does not affect rights you may have against the relevant provider or under applicable law.</p>
          </section>
          <section>
            <h2>7. Updates, availability and changes</h2>
            <p>We may update the Game to fix issues, improve performance, adjust gameplay, maintain compatibility, respond to security concerns or comply with legal and platform requirements. Features, content and availability may change over time. We will take reasonable steps to provide updates where appropriate, but we do not guarantee that every feature or service will be available without interruption or in every location.</p>
          </section>
          <section>
            <h2>8. Intellectual property</h2>
            <p>The Game, including its software, artwork, graphics, characters, names, interface, audio and other content, is owned by or licensed to JaytheWizzy Games and is protected by applicable intellectual-property laws. These Terms do not transfer ownership of the Game or its content to you. All rights not expressly granted are reserved.</p>
          </section>
          <section>
            <h2>9. Suspension and termination</h2>
            <p>You may stop using the Game at any time by uninstalling it. We may suspend or restrict access to features where reasonably necessary to protect the Game, players, service providers or the integrity of gameplay, including in response to cheating, fraud, abuse, security threats or a breach of these Terms. Where appropriate and legally required, we will provide notice or an opportunity to resolve the issue.</p>
          </section>
          <section>
            <h2>10. Disclaimers and liability</h2>
            <p>We provide the Game with reasonable care, but except for promises expressly made in these Terms or rights that cannot lawfully be excluded, the Game is provided on an “as available” basis. We do not guarantee uninterrupted or error-free operation, compatibility with every device, continuous advertising inventory or the permanent availability of any third-party service.</p>
            <p>Nothing in these Terms excludes or limits liability, warranties or consumer rights that cannot be excluded or limited under applicable law. Subject to that restriction, we are not liable for indirect or consequential loss that was not reasonably foreseeable when you began using the Game. We are not responsible for loss of locally stored progress caused by uninstalling the Game, clearing app data, device failure or a device reset, except to the extent applicable law requires otherwise.</p>
          </section>
          <section>
            <h2>11. Privacy</h2>
            <p>Our handling of information is described in the <Link href="/games/streetbite-empire/privacy/">StreetBite Empire Privacy Policy</Link>. The Privacy Policy should be read together with these Terms and is available from the Game&apos;s store listing and in-game Settings where the relevant public page is linked.</p>
          </section>
          <section>
            <h2>12. Changes to these Terms</h2>
            <p>We may update these Terms when the Game, its services or legal requirements change. We will update the effective date above when we publish a revised version. If a change materially affects your rights, we will provide notice where required by law. Continued use after revised Terms take effect means you accept them to the extent permitted by applicable law.</p>
          </section>
          <section>
            <h2>13. Contact</h2>
            <p><strong>JaytheWizzy Games</strong><br />Game: StreetBite Empire<br />Email: <a href="mailto:jaythewizzy@gmail.com">jaythewizzy@gmail.com</a></p>
          </section>
          <div className="legal-contact-panel">
            <h2>Questions about these Terms?</h2>
            <p>Contact JaytheWizzy Games at <a href="mailto:jaythewizzy@gmail.com">jaythewizzy@gmail.com</a>, or visit the <Link href="/games/streetbite-empire/support/">StreetBite Empire support page</Link>.</p>
            <p><Link href="/games/streetbite-empire/privacy/">Read the Privacy Policy</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
