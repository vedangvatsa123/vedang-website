import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';
import { pageMetadata, generateMetadata } from '@/lib/metadata';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { getAllTermsSorted, GlossaryTerm } from '@/lib/glossary';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.glossary.title,
  description: pageMetadata.glossary.description,
  url: pageMetadata.glossary.url,
});

export default function GlossaryPage() {
  const terms = getAllTermsSorted();

  const categoryOrder = ["AI", "Web3", "Tech", "Other"];

  const termsByCategory = terms.reduce((acc, term) => {
    const category = term.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  const categories = Object.keys(termsByCategory).sort((a, b) => {
    return categoryOrder.indexOf(a) - categoryOrder.indexOf(b);
  });

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

        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16 space-y-16">
          <Accordion type="multiple" className="w-full space-y-6" defaultValue={categories}>
            {categories.map((category) => (
              <AccordionItem key={category} value={category} className="border-b-0 rounded-lg px-6 bg-secondary/10 shadow-sm border border-border/50">
                <AccordionTrigger className="text-3xl font-semibold tracking-tight text-primary/80 hover:no-underline py-6">
                  {category} Terms
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {termsByCategory[category].map((item) => (
                      <div key={item.slug} className="relative group">
                        <Link href={`/glossary/${item.slug}`} className="absolute inset-0 z-10" aria-label={`Read definition for ${item.term}`}>
                          <span className="sr-only">Read definition for {item.term}</span>
                        </Link>
                        <Card className="hover:border-primary/50 transition-colors h-full flex flex-col group-hover:border-primary/50">
                          <CardHeader className="pb-3">
                            <dt className="text-lg font-semibold leading-none tracking-tight">{item.term}</dt>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <dd className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                              {item.definition}
                            </dd>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </dl>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
