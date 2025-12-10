
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://veda.ng';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '/',
    '/writings',
    '/vibe-coding-101',
    '/prompt-engineering-101',
    '/about/profile',
    '/about/media',
    '/about/seo',
    '/about/community',
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
  
  const allRoutes = [...staticPages, ...essayRoutes];

  // A simple way to remove duplicates and ensure canonical URLs are correct
  const uniqueRoutes = allRoutes.reduce((acc, current) => {
    if (!acc.find(item => item.url === current.url)) {
      acc.push(current);
    }
    return acc;
  }, [] as MetadataRoute.Sitemap);

  return uniqueRoutes;
}
