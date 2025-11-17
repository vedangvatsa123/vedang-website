
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://veda.ng';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '/',
    '/profile',
    '/writings',
    '/media',
    '/seo',
    '/community',
    '/json-to-toon',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const essaysDirectory = path.join(process.cwd(), 'src', 'content', 'essays');
  let essayRoutes: MetadataRoute.Sitemap = [];
  try {
    if (fs.existsSync(essaysDirectory)) {
      const essayFiles = fs.readdirSync(essaysDirectory);
      essayRoutes = essayFiles.map(file => ({
        url: `${BASE_URL}/${file.replace(/\.mdx$/, '')}`,
        lastModified: new Date(),
      }));
    }
  } catch (error) {
    console.error("Could not read essays directory for sitemap:", error);
  }
  

  return [...staticPages, ...essayRoutes];
}
