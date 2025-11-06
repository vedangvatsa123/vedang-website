
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { essays } from '@/lib/essays';
import { ArticleLayout } from '@/components/article-layout';

// Generate static pages for each essay at build time
export async function generateStaticParams() {
  return essays
    .filter((essay) => essay.url.startsWith('/writings/'))
    .map((essay) => ({
      slug: essay.url.split('/').pop(),
    }));
}

// Generate metadata for each article page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = essays.find((e) => e.url === `/writings/${params.slug}`);

  if (!article) {
    return {};
  }

  const ogImageUrl = `/og-images/${params.slug}.png`;

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `/writings/${params.slug}`,
      type: 'article',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: article.url,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = essays.find((e) => e.url === `/writings/${params.slug}`);

  if (!article) {
    notFound();
  }

  // Dynamically require the MDX content file based on the slug
  const PageContent = require(`../${params.slug}/content.mdx`).default;

  return (
    <ArticleLayout article={article}>
      <PageContent />
    </ArticleLayout>
  );
}
