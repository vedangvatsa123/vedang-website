
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Essay = {
  title: string;
  summary: string;
  url:string;
  slug: string;
  date: string;
};

const essaysDirectory = path.join(process.cwd(), 'src', 'content', 'essays');

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
      date: data.date,
      url: `/${slug}`,
      slug,
    };
  });

  return allEssaysData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const essays = getEssays();
