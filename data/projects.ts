export type Project = {
  slug: string;
  name: string;
  category: string;
  status: string;
  statusTone: 'live' | 'testing' | 'development' | 'brand' | 'research';
  summary: string;
  description: string[];
  stack: string[];
  highlights: string[];
  externalUrl?: string;
  relationship?: string;
};

export const projects: Project[] = [
  {
    slug: 'luxen',
    name: 'LUXEN',
    category: 'Web & mobile product',
    status: 'Live · Web, Android & iOS',
    statusTone: 'live',
    summary: 'A movie and television discovery platform built to help people find their next obsession.',
    description: [
      'LUXEN brings movie and television discovery, search, trailers, watchlists and viewing information together across web and mobile. It is a production product built end to end, with a shared backend supporting its web and mobile experiences.',
      'The product includes timed rewarded-ad access, VIP subscriptions and access codes. A server-side RevenueCat sync reconciles store purchases to the right account, including purchases first recorded under anonymous IDs.',
      'Reliability work includes cached status endpoints, rate limiting, push notifications, consent-gated advertising and analytics, SEO and repeatable release checks. The app has shipped through multiple Android production builds and is available internationally.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Expo', 'React Native', 'RevenueCat', 'Paystack', 'AdMob', 'Firebase', 'Vercel'],
    highlights: ['Web and mobile applications built around one product experience', 'Subscription, rewarded-access and access-code systems', 'Server-side purchase reconciliation and account handling', 'Push notifications, SEO, consent and release workflows'],
    externalUrl: 'https://luxen.watch',
    relationship: 'Independent product developed within the wider WizzyLux Global Concepts ecosystem.',
  },
  {
    slug: 'growthos',
    name: 'GrowthOS',
    category: 'Web platform & marketplace',
    status: 'Live platform',
    statusTone: 'live',
    summary: 'A digital services and product platform with wallet funding, order tracking and provider operations.',
    description: [
      'GrowthOS provides a marketplace and operating layer for digital services and products. Customers fund an internal wallet through Paystack, place orders and track them from one account.',
      'A provider router handles verification requests and records activations. Supabase supports authentication and administration, while support requests and transactional email are handled through Resend.',
      'GrowthOS also serves as the publisher behind Coinwell and hosts public app-ads.txt and privacy resources used by the game.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Paystack', 'Resend', 'Vercel'],
    highlights: ['Funded wallet and transaction history', 'Order creation and tracking', 'Verification-provider routing and activation records', 'Admin tools, customer support and transactional email'],
    externalUrl: 'https://www.thegrowthos.app',
    relationship: 'Platform and publisher within the WizzyLux Global Concepts ecosystem.',
  },
  {
    slug: 'the-foundry',
    name: 'The Foundry',
    category: 'Digital studio',
    status: 'Studio development',
    statusTone: 'development',
    summary: 'A multidisciplinary digital studio for products, UI/UX, e-commerce, AI, 3D and interactive work.',
    description: [
      'The Foundry is being shaped as a digital studio for turning ideas into useful, polished digital experiences. Its planned capabilities span digital product design and engineering, UI and UX, e-commerce, AI, 3D, interactive work, content and quality assurance.',
      'The studio website and inquiry workflow are in development. The focus is on practical execution: understanding a brief, designing the experience, building the system and supporting it after launch.',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Resend'],
    highlights: ['Digital products and software', 'UI/UX and e-commerce experiences', 'AI and workflow automation', '3D, interactive work, content and QA'],
    relationship: 'Digital studio initiative under WizzyLux Global Concepts.',
  },
  {
    slug: 'wizzylux',
    name: 'WizzyLux',
    category: 'Clothing & lifestyle brand',
    status: 'Live brand',
    statusTone: 'brand',
    summary: 'A clothing and lifestyle brand built around a clean identity and the promise “Only the best. Always.”',
    description: [
      'WizzyLux is the clothing and lifestyle brand in the wider portfolio. It has its own visual identity, storefront and audience, separate from the software products and the JaytheWizzy personal brand.',
      'The brand is intentionally maintained as its own business identity rather than being folded into the personal portfolio.',
    ],
    stack: ['Shopify', 'E-commerce', 'Brand development'],
    highlights: ['Independent brand identity', 'Online storefront', 'Clothing and lifestyle products'],
    externalUrl: 'https://wizzylux.com',
    relationship: 'Brand within the wider WizzyLux Global Concepts portfolio.',
  },
  {
    slug: 'eurusd-trading-system',
    name: 'EURUSD Trading System',
    category: 'Python · research & trading automation',
    status: 'Research system · live deployment',
    statusTone: 'research',
    summary: 'A research-driven EURUSD backtester and MetaTrader 5-connected system with defined risk controls.',
    description: [
      'The system combines a backtester with more than 20 documented research iterations. Reports include win rate, profit factor and expectancy in R, while frozen parameters are checked against independent data.',
      'Paper trading and a full trade journal record each signal, order and exit. The MetaTrader 5 connection applies spread, position and volume limits alongside a daily-loss lock.',
    ],
    stack: ['Python', 'pandas', 'NumPy', 'MetaTrader 5'],
    highlights: ['20+ numbered research iterations', 'Independent-data validation of frozen parameters', 'Paper-trading and trade-journal workflow', 'Spread, position, volume and daily-loss controls'],
  },
  {
    slug: 'appointment-booking-platform',
    name: 'Appointment Booking Platform',
    category: 'Web application prototype',
    status: 'Prototype',
    statusTone: 'development',
    summary: 'A scheduling workflow with service selection, date and time picking, travel fees and protected administration.',
    description: [
      'The prototype supports service selection, date and time picking, configurable home-visit travel fees, conflict checks and protected administration.',
      'The checkout is a prototype and does not collect payments. It is presented as an engineering project rather than a live commercial booking service.',
    ],
    stack: ['Web application', 'Scheduling', 'Availability logic', 'Protected administration'],
    highlights: ['Service selection and scheduling flow', 'Home-visit travel fee configuration', 'Conflict and availability checks', 'Protected administration area'],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
