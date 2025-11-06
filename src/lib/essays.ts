
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Essay = {
  title: string;
  summary: string;
  url: string;
  slug: string;
};

const essaysDirectory = path.join(process.cwd(), 'src', 'content', 'essays');

function getEssays(): Essay[] {
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(essaysDirectory);
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

  return allEssaysData;
}

export const essays = getEssays();
