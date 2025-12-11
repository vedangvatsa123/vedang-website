
import { essays } from '@/lib/essays';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { RelatedEssays } from '@/components/related-essays';
import { Separator } from '@/components/ui/separator';

type Props = {
  params: { slug: string };
};

const essaysDirectory = path.join(process.cwd(), 'src', 'content', 'essays');

export function generateStaticParams() {
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }
  const files = fs.readdirSync(essaysDirectory);
  return files.map(file => ({
    slug: file.replace('.mdx', ''),
  }));
}

function getEssay(slug: string) {
  const filePath = path.join(essaysDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdown);
  return {
    frontmatter,
    content,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const essay = getEssay(params.slug);

  if (!essay) {
    return {};
  }

  const siteUrl = 'https://veda.ng';
  const essayUrl = `${siteUrl}/${params.slug}`;
  const imageUrl = `${siteUrl}/images/icon.png`;

  const publishedTime = essay.frontmatter.date ? new Date(essay.frontmatter.date).toISOString() : new Date().toISOString();

  return {
    title: essay.frontmatter.title,
    description: essay.frontmatter.summary,
    alternates: {
      canonical: `/${params.slug}`,
    },
    openGraph: {
      title: essay.frontmatter.title,
      description: essay.frontmatter.summary,
      url: essayUrl,
      type: 'article',
      publishedTime: publishedTime,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: essay.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: essay.frontmatter.title,
      description: essay.frontmatter.summary,
      images: [imageUrl],
    },
  };
}

export default function EssayPage({ params }: { params: { slug: string } }) {
  const essay = getEssay(params.slug);

  if (!essay) {
    notFound();
  }

  const datePublished = essay.frontmatter.date ? new Date(essay.frontmatter.date).toISOString() : new Date().toISOString();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: essay.frontmatter.title,
    author: {
      '@type': 'Person',
      name: essay.frontmatter.author || 'Vedang Vatsa',
      url: 'https://veda.ng',
    },
    description: essay.frontmatter.summary,
    image: 'https://veda.ng/images/icon.png',
    publisher: {
      '@type': 'Organization',
      name: 'Vedang Vatsa',
      logo: {
        '@type': 'ImageObject',
        url: 'https://veda.ng/images/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://veda.ng/${params.slug}`,
    },
    datePublished: datePublished,
    dateModified: datePublished,
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="flex-grow py-8">
        <article className="prose dark:prose-invert mx-auto px-4 md:px-6">
          <h1>{essay.frontmatter.title}</h1>
          {essay.frontmatter.date && <p className="text-sm text-muted-foreground">{new Date(essay.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>}
          <MDXRemote source={essay.content} />
        </article>

        <div className="mx-auto max-w-4xl px-4 md:px-6 mt-12">
            <Separator />
            <RelatedEssays currentSlug={params.slug} />
        </div>

      </main>
      <Footer />
    </div>
  );
}
