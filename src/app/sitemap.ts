
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
    '/vibe-coding-101',
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
  
  const vibeCodingLessonsDirectory = path.join(process.cwd(), 'src', 'content', 'vibe-coding');
  let vibeCodingRoutes: MetadataRoute.Sitemap = [];
    try {
    if (fs.existsSync(vibeCodingLessonsDirectory)) {
        const lessonFiles = fs.readdirSync(vibeCodingLessonsDirectory).filter(file => file.endsWith('.mdx'));
        vibeCodingRoutes = lessonFiles.map(file => {
            const slug = file.replace(/\.mdx$/, '');
            return {
                url: `${BASE_URL}/courses/vibe-coding/${slug}`,
                lastModified: new Date(),
            };
        });
    }
    } catch (error) {
        console.error("Could not read vibe coding lessons directory for sitemap:", error);
    }


  return [...staticPages, ...essayRoutes, ...vibeCodingRoutes];
}
