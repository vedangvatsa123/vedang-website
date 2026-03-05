import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { getTermBySlug, glossaryTerms } from '@/lib/glossary';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return glossaryTerms.map((term) => ({
    slug: term.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const term = getTermBySlug(params.slug);
  
  if (!term) {
    return {
      title: 'Term Not Found',
    };
  }

  return {
    title: `${term.term} - Glossary | Vedang Vatsa`,
    description: term.definition,
    alternates: {
      canonical: `/glossary/${term.slug}`,
    },
    openGraph: {
      title: `${term.term} - Glossary`,
      description: term.definition,
      url: `/glossary/${term.slug}`,
      type: 'article',
    },
  };
}

export default function GlossaryTermPage({ params }: PageProps) {
  const term = getTermBySlug(params.slug);

  if (!term) {
    notFound();
  }

  const relatedTermObjects = term.relatedTerms
    ? term.relatedTerms.map(slug => getTermBySlug(slug)).filter(Boolean)
    : [];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl py-16">
          <Link 
            href="/glossary" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Glossary
          </Link>
        </div>

        <article className="container mx-auto px-4 md:px-6 max-w-3xl pb-16">
          <div className="mb-8">
            <h1 className="text-5xl font-semibold tracking-tight text-primary mb-4">
              {term.term}
            </h1>
            <Badge variant="secondary">
              <BookOpen className="w-3 h-3 mr-1.5" />
              Definition
            </Badge>
          </div>

          <p className="text-lg text-foreground leading-relaxed mb-12">
            {term.definition}
          </p>

          {relatedTermObjects.length > 0 && (
            <div className="border-t border-border/50 pt-8">
              <h2 className="text-xl font-semibold mb-4">Related Terms</h2>
              <div className="flex flex-wrap gap-2">
                {relatedTermObjects.map((relatedTerm) => (
                  <Link 
                    key={relatedTerm!.slug} 
                    href={`/glossary/${relatedTerm!.slug}`}
                    className="inline-flex px-3 py-1.5 text-sm border border-border/50 rounded-md hover:border-primary hover:text-primary transition-colors"
                  >
                    {relatedTerm!.term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
