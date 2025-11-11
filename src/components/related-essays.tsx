
import Link from 'next/link';
import { essays } from '@/lib/essays';

export function RelatedEssays({ currentSlug }: { currentSlug: string }) {
  const otherEssays = essays.filter(essay => essay.slug !== currentSlug).slice(0, 3);

  if (otherEssays.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold tracking-tight mb-6">Read More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {otherEssays.map((essay) => (
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
