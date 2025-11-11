
import Link from 'next/link';
import { Separator } from './ui/separator';
import { essays } from '@/lib/essays';

export function EssaysList({ limit }: { limit?: number }) {
  const essaysToShow = limit ? essays.slice(0, limit) : essays;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-4">
        {essaysToShow.map((essay, index) => (
          <div key={index}>
            <Link href={essay.url} className="group grid grid-cols-1 md:grid-cols-3 md:gap-6">
              <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-primary md:col-span-1">
                {essay.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground md:mt-0 md:col-span-2">{essay.summary}</p>
            </Link>
            {index < essaysToShow.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>
    </div>
  );
}
