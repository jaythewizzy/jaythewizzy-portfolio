export type AppProduct = {
  slug: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  description: string[];
  platforms: string[];
  stack: string[];
  highlights: string[];
  websiteUrl?: string;
  engineeringCaseStudy?: string;
};

/**
 * Installable applications are maintained separately from broader projects,
 * games and creative ventures. Add one entry here to generate its /apps/[slug]
 * detail route automatically.
 */
export const apps: AppProduct[] = [
  {
    slug: 'luxen',
    name: 'LUXEN',
    category: 'Movie & TV discovery application',
    status: 'Live · Android, iOS & web',
    summary: 'A movie and television discovery experience across web and mobile, helping people find their next obsession.',
    description: [
      'LUXEN is a movie and television discovery product available as a web platform and mobile application. It brings discovery, search, trailers, watchlists and viewing information into one connected experience.',
      'The mobile applications are built with Expo and React Native for Android and iOS, including support for phones and tablets. The web experience is built with Next.js, with a shared Supabase-backed product ecosystem.',
      'The product includes timed rewarded-ad access, VIP subscriptions and access codes. Its wider engineering work includes server-side RevenueCat purchase reconciliation, push notifications, consent-gated advertising and analytics, cached status endpoints, rate limiting and SEO.',
    ],
    platforms: ['Web', 'Android · Google Play', 'iPhone · App Store', 'iPad & tablets'],
    stack: ['Expo', 'React Native', 'TypeScript', 'Next.js', 'Supabase', 'RevenueCat', 'Paystack', 'AdMob', 'Firebase', 'Vercel'],
    highlights: [
      'Native mobile experiences for Android and iOS, alongside the web platform',
      'Movie and TV discovery, search, trailers, watchlists and viewing information',
      'Rewarded-access, VIP subscription and access-code systems',
      'Server-side purchase reconciliation and account handling',
      'Push notifications, consent-aware advertising, analytics and SEO',
    ],
    websiteUrl: 'https://luxen.watch',
    engineeringCaseStudy: '/projects/luxen',
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
