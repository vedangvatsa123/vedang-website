
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Essay = {
  title: string;
  summary: string;
  url:string;
  slug: string;
};

const essaysDirectory = path.join(process.cwd(), 'src', 'content', 'essays');

// This function reads the file system to get all essays.
// It will be re-evaluated on each request in development.
// A comment to force re-evaluation: 2024-08-01
function getEssays(): Essay[] {
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(essaysDirectory).filter(file => file.endsWith('.mdx'));
  const allEssaysData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(essaysDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      title: data.title,
      summary: data.summary,
      url: `/${slug}`,
      slug,
    };
  });

  // Sort essays by title in alphabetical order
  return allEssaysData.sort((a, b) => a.title.localeCompare(b.title));
}

export const essays = getEssays();
