
import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://veda.ng';

function getEssayRoutes(): MetadataRoute.Sitemap {
  const essaysDirectory = path.join(process.cwd(), 'src', 'content', 'essays');
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }
  
  try {
    const essayFiles = fs.readdirSync(essaysDirectory);
    return essayFiles
      .filter(file => file.endsWith('.mdx'))
      .map(file => ({
        url: `${BASE_URL}/${file.replace(/\.mdx$/, '')}`,
        lastModified: new Date(),
      }));
  } catch (error) {
    console.error("Could not read essays directory for sitemap:", error);
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    '/',
    '/writings',
    '/vibe-coding',
    '/prompt-engineering-101',
    '/web3-101',
    '/agentic-web',
    '/profile',
    '/media',
    '/seo',
    '/community',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const essayRoutes = getEssayRoutes();
  
  const allRoutes = [...staticPages, ...essayRoutes];

  const uniqueRoutes = allRoutes.reduce((acc, current) => {
    if (!acc.find(item => item.url === current.url)) {
      acc.push(current);
    }
    return acc;
  }, [] as MetadataRoute.Sitemap);

  return uniqueRoutes;
}
