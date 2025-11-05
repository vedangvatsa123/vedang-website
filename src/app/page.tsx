import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import { EssaysList } from '@/components/essays-list';
import { ThemeToggle } from '@/components/theme-toggle';
import { Footer } from '@/components/footer';

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
    title: 'Identification and Mitigation of Algorithmic Bias Through Policy Instruments',
    url: 'https://dx.doi.org/10.21474/IJAR01/11418',
  },
];

export default function Home() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-photo');

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            veda.ng
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
              <Link href="/writings" className="text-foreground transition-colors hover:text-primary">
                Writings
              </Link>
              <Link href="#" className="text-foreground transition-colors hover:text-primary">
                Profile
              </Link>
              <Link href="#" className="text-foreground transition-colors hover:text-primary">
                Media
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-8 md:py-12 text-center">
          <div className="container mx-auto px-4 md:px-6">
            {profileImage && (
              <Image
                src={'https://veda.ng/profile-photo.png'}
                alt={profileImage.description}
                width={96}
                height={96}
                className="mx-auto h-24 w-24 rounded-full object-cover"
                data-ai-hint={profileImage.imageHint}
                priority
              />
            )}
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">Vedang Vatsa</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Founder, Hashtag Web3 (100,000+ member community of AI & Web3 professionals)
              <br />
              BE, Mtech, MBA, Chartered Engineer, IIT Kanpur alumnus, Fellow of the Royal Society of Arts
            </p>
            <Button asChild className="mt-6 rounded-full" size="sm">
              <Link href="#">
                View Full Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="papers" className="py-8 md:py-12 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">Recent Papers</h2>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {recentPapers.map((paper, index) => (
                <Link href={paper.url || '#'} key={index} className="group" target={paper.url ? '_blank' : undefined} rel={paper.url ? 'noopener noreferrer' : undefined}>
                  <div className="relative overflow-hidden flex h-full flex-col justify-between rounded-lg bg-card border p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <p className="font-medium relative z-10">{paper.title}</p>
                    <MoveUpRight className="mt-4 h-5 w-5 self-end text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 relative z-10" />
                  </div>
                </Link>
              ))}
            </div>
             <div className="mt-8 text-center">
               <Button variant="outline" asChild className="rounded-full" size="sm">
                 <Link href="https://scholar.google.com/citations?user=aW2dd0IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Read More on Google Scholar <MoveUpRight className="ml-2 h-4 w-4" /></Link>
               </Button>
            </div>
          </div>
        </section>

        <section id="essays" className="py-8 md:py-12">
           <div className="container mx-auto px-4 md:px-6">
             <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">Essays</h2>
              <EssaysList />
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
