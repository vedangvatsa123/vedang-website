import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: 'On the Measure of Intelligence',
    authors: 'F. Chollet',
    journal: 'arXiv preprint arXiv:1911.01547',
    year: '2019',
    url: '#',
  },
  {
    title: 'Attention Is All You Need',
    authors: 'A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, I. Polosukhin',
    journal: 'Advances in neural information processing systems',
    year: '2017',
    url: '#',
  },
  {
    title: 'Language Models are Few-Shot Learners',
    authors: 'T. Brown, B. Mann, N. Ryder, M. Subbiah, J. D. Kaplan, P. Dhariwal, A. Neelakantan, ... & J. Amodei',
    journal: 'Advances in neural information processing systems',
    year: '2020',
    url: '#',
  },
];

export function PublicationsList() {
  return (
    <section id="publications">
      <h2 className="font-headline mb-8 text-4xl font-bold tracking-tight text-primary">
        Recent Publications
      </h2>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {publications.map((pub, index) => (
          <Card key={index} className="flex flex-col justify-between shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-xl leading-snug">
                {pub.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{pub.authors}</p>
              <p className="mt-1 text-sm italic text-muted-foreground">
                {pub.journal}, {pub.year}
              </p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild variant="link" className="p-0 h-auto font-semibold">
                <Link href={pub.url} target="_blank" rel="noopener noreferrer">
                  Read Paper <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
