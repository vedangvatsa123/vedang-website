import Link from 'next/link';
import crossLinksData from './cross-links.json';

type CrossLinks = {
  essayToTerms: Record<string, string[]>;
  termToEssays: Record<string, string[]>;
  essayTitles: Record<string, string>;
};

const data = crossLinksData as CrossLinks;

/**
 * Get glossary terms related to an essay
 */
export function getRelatedTermsForEssay(essaySlug: string): string[] {
  return data.essayToTerms[essaySlug] || [];
}

/**
 * Get essays that mention a glossary term
 */
export function getRelatedEssaysForTerm(termSlug: string): { slug: string; title: string }[] {
  const essaySlugs = data.termToEssays[termSlug] || [];
  return essaySlugs.map(slug => ({
    slug,
    title: data.essayTitles[slug] || slug,
  }));
}

/**
 * Component: Shows related glossary terms at the bottom of an essay
 */
export function RelatedGlossaryTerms({ essaySlug, terms }: { essaySlug: string; terms: { slug: string; term: string }[] }) {
  const relatedSlugs = getRelatedTermsForEssay(essaySlug);
  
  if (relatedSlugs.length === 0) return null;

  // Filter to only terms we have data for
  const relatedTerms = relatedSlugs
    .map(slug => terms.find(t => t.slug === slug))
    .filter(Boolean) as { slug: string; term: string }[];

  if (relatedTerms.length === 0) return null;

  return (
    <div className="mt-8 pt-6 border-t border-border/50">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
        Related Glossary Terms
      </h3>
      <div className="flex flex-wrap gap-2">
        {relatedTerms.map(term => (
          <Link
            key={term.slug}
            href={`/glossary/${term.slug}`}
            className="inline-flex px-3 py-1.5 text-sm border border-border/50 rounded-md hover:border-primary hover:text-primary transition-colors bg-card"
          >
            {term.term}
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Component: Shows related essays on a glossary term page
 */
export function RelatedEssaysForTerm({ termSlug }: { termSlug: string }) {
  const relatedEssays = getRelatedEssaysForTerm(termSlug);
  
  if (relatedEssays.length === 0) return null;

  return (
    <div className="border-t border-border/50 pt-8 mt-8">
      <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
        Related Essays
      </h2>
      <div className="space-y-3">
        {relatedEssays.map(essay => (
          <Link
            key={essay.slug}
            href={`/${essay.slug}`}
            className="block text-base font-medium hover:text-primary transition-colors"
          >
            {essay.title} →
          </Link>
        ))}
      </div>
    </div>
  );
}
