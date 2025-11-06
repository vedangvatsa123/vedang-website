
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';
import { MoreArticles } from '@/components/more-articles';
import type { Essay } from '@/lib/essays';

const VEDANG_VATSA_URL = 'https://veda.ng';

type ArticleLayoutProps = {
  article: Essay;
  children: React.ReactNode;
};

export function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${VEDANG_VATSA_URL}${article.url}`,
    },
    headline: article.title,
    description: article.summary,
    image: `${VEDANG_VATSA_URL}/og-images/${article.url.split('/').pop()}.png`,
    author: {
      '@type': 'Person',
      name: 'Vedang Vatsa',
      url: VEDANG_VATSA_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vedang Vatsa',
      logo: {
        '@type': 'ImageObject',
        url: `${VEDANG_VATSA_URL}/icon.png`,
      },
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow py-12">
        <article className="container mx-auto px-4 md:px-6 prose dark:prose-invert lg:prose-xl">
          <h1 className="text-5xl font-semibold tracking-tight">{article.title}</h1>
          {children}
        </article>
      </main>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Separator />
          <div className="mt-12">
            <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight">Read More</h2>
            <MoreArticles currentArticleUrl={article.url} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
