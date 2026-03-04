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

  const relatedTermNames = relatedTermObjects.map((relatedTerm) => relatedTerm!.term);
  const relatedTermsSentence =
    relatedTermNames.length > 0
      ? relatedTermNames.join(', ')
      : 'other core terms in this glossary';

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <article className="container mx-auto px-4 md:px-6 max-w-3xl py-16">
          <Link 
            href="/glossary" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Glossary
          </Link>

          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-3 h-3 mr-1.5" />
            Definition
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight text-primary mb-6">
            {term.term}
          </h1>

          <p className="text-lg text-foreground leading-relaxed mb-12">
            {term.definition}
          </p>

          <section className="space-y-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-3">What this means in simple words</h2>
              <p className="text-base text-foreground/90 leading-relaxed">
                {term.term} is a core idea used in modern software, AI, and Web3 work.
                The definition above gives the direct meaning.
                In daily work, this term explains how a system works,
                how data moves, and who controls each step.
                Good teams use one clear meaning so everyone stays aligned.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Why this matters</h2>
              <p className="text-base text-foreground/90 leading-relaxed">
                Clear language improves execution.
                When a team agrees on the meaning of {term.term}, planning gets faster,
                handoffs get cleaner, and technical decisions stay consistent.
                It also helps writing, interviews, and product docs.
                This term connects closely with {relatedTermsSentence}.
                Knowing these links builds stronger technical judgment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Simple example</h2>
              <p className="text-base text-foreground/90 leading-relaxed">
                Imagine a small team shipping one feature in one sprint.
                They add a short note in their docs with the meaning of {term.term}
                and one real use in their stack.
                Designers, engineers, and founders then use the same language in meetings.
                That removes confusion, cuts rework, and improves delivery quality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Common mistake</h2>
              <p className="text-base text-foreground/90 leading-relaxed">
                A common mistake is using {term.term} as a buzzword.
                Buzzwords sound smart but hide weak thinking.
                Keep the term tied to a real user problem,
                a real workflow, and a real technical choice.
                If the explanation feels vague, simplify it until every sentence is direct.
              </p>
            </div>
          </section>

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
