
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { essays } from '@/lib/essays';
import { ArticleLayout } from '@/components/article-layout';

const VEDANG_VATSA_URL = 'https://veda.ng';

// Generate static pages for each essay at build time
export async function generateStaticParams() {
  return essays
    .filter((essay) => essay.url.startsWith('/'))
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

  const ogImageUrl = `${VEDANG_VATSA_URL}/og-images/${params.slug}.png`;

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `${VEDANG_VATSA_URL}${article.url}`,
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

export default function ArticlePage({ children, params }: { children: React.ReactNode, params: { slug: string } }) {
  const article = essays.find((e) => e.url === `/writings/${params.slug}`);

  if (!article) {
    notFound();
  }

  const PageContent = require(`@/app${article.url}/content.mdx`).default;

  return (
    <ArticleLayout article={article}>
      <PageContent />
    </ArticleLayout>
  );
}
