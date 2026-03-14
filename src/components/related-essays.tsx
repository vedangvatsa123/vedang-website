
import Link from 'next/link';
import { essays } from '@/lib/essays';

// AI-related topic keywords for intelligent linking
const AI_TOPICS = {
  'ai-superintelligence-timeline': ['artificial-intuition', 'are-we-in-a-simulation', 'governance-in-the-age-of-agi', 'rationality-in-ai'],
  'artificial-intuition': ['ai-superintelligence-timeline', 'rationality-in-ai', 'the-ai-agent-economy'],
  'are-we-in-a-simulation': ['ai-superintelligence-timeline', 'artificial-intuition'],
  'the-ai-agent-economy': ['artificial-intuition', 'the-attention-refinery', 'programmable-trust'],
  'computational-constitutions': ['api-states', 'governance-in-the-age-of-agi', 'programmable-trust'],
  'api-states': ['computational-constitutions', 'governance-in-the-age-of-agi'],
  'computational-social-science-at-scale': ['artificial-intuition', 'rationality-in-ai', 'the-ai-agent-economy'],
  'governance-in-the-age-of-agi': ['ai-superintelligence-timeline', 'computational-constitutions', 'api-states'],
  'programmable-trust': ['computational-constitutions', 'api-states', 'the-ai-agent-economy'],
  'rationality-in-ai': ['artificial-intuition', 'ai-superintelligence-timeline', 'computational-social-science-at-scale'],
  'ambient-intelligence': ['artificial-intuition', 'the-ai-agent-economy', 'synthetic-empathy'],
  'synthetic-empathy': ['ambient-intelligence', 'artificial-intuition'],
  'the-attention-refinery': ['the-ai-agent-economy', 'the-cognitive-load-crisis'],
  'the-cognitive-load-crisis': ['the-attention-refinery', 'digital-monasticism'],
};

export function RelatedEssays({ currentSlug }: { currentSlug: string }) {
  // Get related essays based on topic mapping, fallback to recent essays
  const relatedSlugs = AI_TOPICS[currentSlug as keyof typeof AI_TOPICS] || [];
  
  let relatedEssays = essays
    .filter(essay => essay.slug !== currentSlug && relatedSlugs.includes(essay.slug))
    .slice(0, 3);

  // If not enough related essays, fill with recent essays
  if (relatedEssays.length < 3) {
    const otherEssays = essays
      .filter(essay => essay.slug !== currentSlug && !relatedSlugs.includes(essay.slug))
      .slice(0, 3 - relatedEssays.length);
    relatedEssays = [...relatedEssays, ...otherEssays];
  }

  if (relatedEssays.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold tracking-tight mb-6">Related Essays</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedEssays.map((essay) => (
          <Link
            key={essay.slug}
            href={essay.url}
            className="group block rounded-lg border bg-card p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
          >
            <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
              {essay.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{essay.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
