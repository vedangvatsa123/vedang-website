import Link from 'next/link';
import { essays } from '@/lib/essays';
import { Card, CardContent } from './ui/card';
import { MoveUpRight } from 'lucide-react';

export function MoreArticles({ currentArticleUrl }: { currentArticleUrl: string }) {
  const otherEssays = essays.filter((essay) => essay.url !== currentArticleUrl).slice(0, 3);

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {otherEssays.map((essay, index) => (
             <Link href={essay.url || '#'} key={index} className="group" target={essay.url === '#' ? '_self' : undefined}>
                 <Card className="relative overflow-hidden flex h-full flex-col justify-between rounded-lg p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <div>
                        <h3 className="font-medium relative z-10 text-lg">{essay.title}</h3>
                        <p className="font-normal text-sm text-muted-foreground mt-2 relative z-10">{essay.summary}</p>
                    </div>
                    <MoveUpRight className="mt-4 h-5 w-5 self-end text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 relative z-10" />
                </Card>
             </Link>
        ))}
    </div>
  );
}
