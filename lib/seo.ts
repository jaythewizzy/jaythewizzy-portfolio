import type { Metadata } from 'next';

const SITE_URL = 'https://jaythewizzy.com';

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt?: string;
  socialTitle?: string;
};

/**
 * Build page-specific search and social metadata from one consistent source.
 * Keep `path` canonical and trailing-slashed to match next.config.ts.
 */
export function createPageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  socialTitle,
}: PageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image, SITE_URL).toString();
  const resolvedSocialTitle = socialTitle ?? `${title} | JaytheWizzy`;
  const resolvedImageAlt = imageAlt ?? `${title} — JaytheWizzy`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'JaytheWizzy',
      url: canonicalUrl,
      title: resolvedSocialTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: resolvedImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@jaythewizzy',
      creator: '@jaythewizzy',
      title: resolvedSocialTitle,
      description,
      images: [imageUrl],
    },
  };
}
