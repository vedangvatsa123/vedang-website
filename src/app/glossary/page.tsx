import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';
import { pageMetadata, generateMetadata } from '@/lib/metadata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { getAllTermsSorted } from '@/lib/glossary';

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.glossary.title,
  description: pageMetadata.glossary.description,
  url: pageMetadata.glossary.url,
});

export default function GlossaryPage() {
  const terms = getAllTermsSorted();
  
  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Glossary - AI, Web3 & Tech Terms",
    "description": "Definitions of AI, Web3, and technical terms. Clear explanations without jargon.",
    "url": "https://vedangvatsa.com/glossary",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": terms.map((term, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://vedangvatsa.com/glossary/${term.slug}`,
        "name": term.term,
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vedangvatsa.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Glossary",
        "item": "https://vedangvatsa.com/glossary"
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
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-3 h-3 mr-1.5" />
              Reference Guide
            </Badge>
            <h1 className="text-5xl font-semibold tracking-tight text-primary mb-2">
              Glossary
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Definitions of AI, Web3, and technical terms. Clear explanations without jargon.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 max-w-3xl py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {terms.map((item) => (
              <Link key={item.slug} href={`/glossary/${item.slug}`}>
                <Card className="hover:border-primary/50 transition-colors h-full cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.term}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.definition}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
