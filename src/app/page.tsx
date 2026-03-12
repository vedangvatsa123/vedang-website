

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { EssaysList } from '@/components/essays-list';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MoveUpRight } from 'lucide-react';
import { AsSeenIn } from '@/components/as-seen-in';
import { Metadata } from 'next';
import { pageMetadata, generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  url: pageMetadata.home.url,
  ogImageAlt: 'Vedang Vatsa - AI & Web3 Innovator, Community Founder',
});

const recentPapers = [
  {
    title: 'Device-to-Device Economics and AI Agent Transactions',
    url: 'https://dx.doi.org/10.2139/ssrn.5660270',
  },
  {
    title: 'Stablecoin Growth and Market Dynamics',
    url: 'https://dx.doi.org/10.2139/ssrn.5325570',
  },
  {
    title: 'Stablecoins in the Modern Financial System',
    url: 'https://dx.doi.org/10.2139/ssrn.5329957',
  },
  {
    title: 'Global Stablecoin Regulations and Policies',
    url: 'https://dx.doi.org/10.2139/ssrn.5386707',
  },
  {
    title: 'Blockchain Ecosystem Evolution',
    url: 'https://dx.doi.org/10.2139/ssrn.5357534',
  },
  {
    title: "Estonia's e-gov and digital public service delivery solutions",
    url: 'https://ieeexplore.ieee.org/document/9515004',
  },
  {
    title: 'Analysis of Global Research Proceedings in AI',
    url: 'https://ieeexplore.ieee.org/document/9514979',
  },
  {
    title: 'Identification of Algorithmic Bias Through Policy Instruments',
    url: 'https://dx.doi.org/10.21474/IJAR01/11418',
  },
];

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        <section className="py-12 text-center">
          <div className="container mx-auto px-4 md:px-6">
            
            <Image
              src="/images/icon.png"
              alt="Vedang Vatsa"
              width={96}
              height={96}
              className="mx-auto h-24 w-24 rounded-full object-cover"
              priority
            />
            
            <h1 className="mt-4 text-5xl font-semibold tracking-tight">Vedang Vatsa</h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
              Founder, <Link href="https://hashtagweb3.com" className="underline hover:text-foreground">Hashtag Web3</Link> (120k community of AI & Web3 professionals)
              <br />
              BE, Mtech, MBA, Chartered Engineer, IIT Kanpur alumnus, Fellow of the Royal Society of Arts
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild className="min-w-64 px-8">
                <Link href="/profile">
                  View Full Profile
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="papers" className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight">Recent Papers</h2>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {recentPapers.map((paper, index) => (
                <Link
                  href={paper.url || '#'}
                  key={index}
                  className="group"
                  target={paper.url ? '_blank' : undefined}
                  rel={paper.url ? 'noopener noreferrer' : undefined}
                >
                  <div className="flex h-full flex-col justify-between overflow-hidden rounded-lg border bg-card p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <p className="font-medium relative z-10">{paper.title}</p>
                    <MoveUpRight className="h-5 w-5 self-end text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
             <div className="mt-8 flex justify-center">
               <Button variant="outline" asChild className="min-w-64 px-8">
                 <Link href="https://scholar.google.com/citations?user=aW2dd0IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Read More on Google Scholar</Link>
               </Button>
            </div>
          </div>
        </section>

        <section id="essays" className="py-12">
           <div className="container mx-auto px-4 md:px-6">
             <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight">Recent Essays</h2>
              <EssaysList limit={10} />
              <div className="mt-8 flex justify-center">
                <Button variant="outline" asChild className="min-w-64 px-8">
                  <Link href="/writings">View all essays</Link>
                </Button>
              </div>
           </div>
        </section>

        <AsSeenIn />

        <section className="pb-12 text-center">
            <div className="flex justify-center">
                <Button asChild size="lg" className="min-w-64 px-8">
                    <Link href="/media">Speaking Engagements &amp; Media Mentions</Link>
                </Button>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
