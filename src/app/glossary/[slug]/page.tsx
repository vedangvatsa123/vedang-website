import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getTermBySlug, glossaryTerms } from '@/lib/glossary';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/page-layout';
import { BreadcrumbSchema } from '@/components/breadcrumb-schema';
import { RelatedEssaysForTerm } from '@/lib/cross-links';

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
    return { title: 'Term Not Found' };
  }

  const truncatedDescription = term.definition.length > 160 
    ? term.definition.substring(0, 157) + '...' 
    : term.definition;

  return {
    title: `${term.term} - Glossary | Vedang Vatsa`,
    description: truncatedDescription,
    alternates: { canonical: `/glossary/${term.slug}` },
    openGraph: {
      title: `${term.term} - Glossary`,
      description: truncatedDescription,
      url: `/glossary/${term.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${term.term} - Glossary`,
      description: truncatedDescription,
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

  const definitionSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term.term,
    "description": term.definition,
    "inDefinedTermSet": "https://veda.ng/glossary",
    "url": `https://veda.ng/glossary/${term.slug}`,
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: "Glossary", url: "https://veda.ng/glossary" },
        { name: term.term, url: `https://veda.ng/glossary/${term.slug}` },
      ]} />

      <section className="text-center pt-12 pb-8 border-b border-border/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link 
            href="/glossary" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Glossary
          </Link>
          <h1 className="text-5xl font-semibold tracking-tight text-primary mb-4">
            {term.term}
          </h1>
        </div>
      </section>

      <article className="container mx-auto px-4 md:px-6 max-w-3xl py-16">
        <div className="space-y-6 mb-12">
          {term.definition.split('\n\n').filter(Boolean).map((paragraph, i) => (
            <p key={i} className="text-lg text-foreground leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {relatedTermObjects.length > 0 && (
          <div className="border-t border-border/50 pt-12">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">Related Terms</h2>
            <div className="flex flex-wrap gap-3">
              {relatedTermObjects.map((relatedTerm) => (
                <Link 
                  key={relatedTerm!.slug} 
                  href={`/glossary/${relatedTerm!.slug}`}
                  className="inline-flex px-3 py-2 text-sm font-medium border border-border/50 rounded-md hover:border-primary hover:text-primary transition-colors"
                >
                  {relatedTerm!.term}
                </Link>
              ))}
            </div>
          </div>
        )}

        <RelatedEssaysForTerm termSlug={params.slug} />
      </article>
    </PageLayout>
  );
}
