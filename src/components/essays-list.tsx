import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const essays = [
  {
    title: 'The Algorithmic Mind: Where AI and Cognition Converge',
    summary: 'An exploration of how modern AI architectures mirror human cognitive processes, and what this means for the future of intelligent systems.',
    url: '#',
  },
  {
    title: 'Beyond the Turing Test: A New Framework for Machine Understanding',
    summary: 'Proposing a novel set of benchmarks to evaluate true language comprehension in machines, moving past simple conversational mimicry.',
    url: '#',
  },
  {
    title: 'The Ethics of Emotionally-Aware AI',
    summary: 'A critical look at the development of AI that can perceive and react to human emotions, and the ethical guardrails we must establish.',
    url: '#',
  },
   {
    title: 'Semantic Spaces: Navigating the Nuances of Meaning',
    summary: 'Diving deep into vector embeddings and how they represent meaning, from single words to complex, multi-modal concepts.',
    url: '#',
  },
];

export function EssaysList() {
  return (
    <section id="essays">
      <h2 className="font-headline mb-8 text-4xl font-bold tracking-tight text-primary">
        Essays
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {essays.map((essay, index) => (
          <Card key={index} className="flex flex-col justify-between shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl leading-tight">
                  {essay.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{essay.summary}</CardDescription>
              </CardContent>
            </div>
            <CardFooter>
              <Button asChild variant="link" className="p-0 h-auto font-semibold">
                <Link href={essay.url}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
