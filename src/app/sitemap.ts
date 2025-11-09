
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
      url: `${BASE_AURL}/seo`,
      lastModified: new Date(),
    },
  ];

  // Here you could fetch dynamic routes e.g., from a CMS
  // and add them to the sitemap.
  // Example:
  // const essays = await fetchEssaysFromCMS();
  // const essayRoutes = essays.map(essay => ({
  //   url: `${BASE_URL}/writings/${essay.slug}`,
  //   lastModified: new Date(essay.lastModified),
  // }));

  return [...staticPages];
}

    