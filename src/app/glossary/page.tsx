import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';
import { pageMetadata, generateMetadata } from '@/lib/metadata';
import { getAllTermsSorted } from '@/lib/glossary';
import { GlossaryFilter } from '@/components/glossary-filter';

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.glossary.title,
  description: pageMetadata.glossary.description,
  url: pageMetadata.glossary.url,
});

export default function GlossaryPage() {
  const terms = getAllTermsSorted();

  const categoryOrder = ["AI", "Web3", "Tech", "Other"];

  const categories = [...new Set(terms.map((t) => t.category || "Other"))].sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://veda.ng/glossary",
    "name": "Glossary - AI, Web3 & Tech Terms",
    "description": "Definitions of AI, Web3, and technical terms.",
    "url": "https://veda.ng/glossary",
    "hasDefinedTerm": terms.map((term) => ({
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.definition,
      "url": `https://veda.ng/glossary/${term.slug}`
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://veda.ng"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Glossary",
        "item": "https://veda.ng/glossary"
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="flex-grow">
        <section className="text-center pt-16 pb-12 border-b border-border/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-tight text-primary mb-2">
              Glossary
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Deep dives into the terminology shaping AI, Web3, and deep tech.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16">
          <GlossaryFilter terms={terms} categories={categories} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
