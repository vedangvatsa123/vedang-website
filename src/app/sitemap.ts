import { essays } from '@/lib/essays';
import { MetadataRoute } from 'next';

const BASE_URL = 'https://veda.ng';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/profile`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/writings`,
      lastModified: new Date(),
    },
     {
      url: `${BASE_URL}/media`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/seo`,
      lastModified: new Date(),
    },
  ];

  const articlePages = essays
    .filter((essay) => essay.url.startsWith('/'))
    .map((essay) => ({
      url: `${BASE_URL}${essay.url}`,
      lastModified: new Date(),
    }));

  return [...staticPages, ...articlePages];
}
