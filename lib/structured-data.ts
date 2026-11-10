import { musicArtistPlatforms } from '@/data/music';
import { site } from '@/data/site';

const SITE_URL = site.url;
const PERSON_ID = `${SITE_URL}/#person`;
const ORGANIZATION_ID = `${SITE_URL}/wizzy-lux-global-concepts/#organization`;
const ABOUT_URL = `${SITE_URL}/about/`;
const ORGANIZATION_URL = `${SITE_URL}/wizzy-lux-global-concepts/`;

// Strip referral parameters while preserving each official profile's canonical path.
function cleanProfileUrl(href: string): string {
  const url = new URL(href);
  url.search = '';
  url.hash = '';
  return url.toString();
}

const personProfileUrls = Array.from(new Set([
  ...site.socials.map(({ href }) => cleanProfileUrl(href)),
  cleanProfileUrl(site.developerProfiles.googlePlay),
  ...musicArtistPlatforms.primary.map(({ href }) => cleanProfileUrl(href)),
  ...musicArtistPlatforms.more.map(({ href }) => cleanProfileUrl(href)),
]));

export const personProfileStructuredData: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${ABOUT_URL}#profile`,
  url: ABOUT_URL,
  name: 'About Stephen Omojola | JaytheWizzy',
  mainEntity: {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.name,
    alternateName: [site.brand, site.socialHandle],
    url: ABOUT_URL,
    mainEntityOfPage: ABOUT_URL,
    jobTitle: ['Software & AI Engineer', 'Founder', 'Independent Music Artist', 'Creative Builder'],
    description: 'Software & AI Engineer and founder of WizzyLux Global Concepts, working across web and mobile applications, software platforms, games, music and original writing.',
    knowsAbout: [
      'Software engineering',
      'Artificial intelligence applications',
      'Web application development',
      'Mobile application development',
      'Backend systems and databases',
      'Game development',
      'Music production and distribution',
      'Creative writing and storytelling',
    ],
    sameAs: personProfileUrls,
    affiliation: { '@id': ORGANIZATION_ID },
  },
};

export const websiteStructuredData: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: site.brand,
  alternateName: 'JaytheWizzy Creative Studio',
  inLanguage: 'en',
  creator: { '@id': PERSON_ID },
  about: { '@id': PERSON_ID },
};

export const organizationStructuredData: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: site.parentCompany,
  url: ORGANIZATION_URL,
  description: 'The parent company founded by Stephen Omojola to build and manage independent software products, platforms, games, digital services, brands, music and creative ventures.',
  founder: { '@id': PERSON_ID },
};
