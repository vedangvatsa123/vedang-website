import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import { EssaysList } from '@/components/essays-list';

const recentPapers = [
  { title: 'Device-to-Device Economics and AI Agent Transactions' },
  { title: 'Stablecoin Growth and Market Dynamics' },
  { title: 'Stablecoins in the Modern Financial System' },
  { title: 'Global Stablecoin Regulations and Policies' },
  { title: 'Blockchain Ecosystem Evolution' },
  { title: "Estonia's e-gov and digital public service delivery solutions" },
  { title: 'Analysis of Global Research Proceedings in AI' },
  { title: 'Identification and Mitigation of Algorithmic Bias Through Policy Instruments' },
];

export default function Home() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-photo');

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            veda.ng
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              Writings
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              Profile
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
              Media
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={128}
                height={128}
                className="mx-auto h-32 w-32 rounded-full object-cover"
                data-ai-hint={profileImage.imageHint}
                priority
              />
            )}
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">Vedang Vatsa</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Founder, Hashtag Web3 (100,000+ member community of AI & Web3 professionals)
              <br />
              BE, Mtech, MBA, Chartered Engineer, IIT Kanpur alumnus, Fellow of the Royal Society of Arts
            </p>
            <Button asChild className="mt-8">
              <Link href="#">
                View Full Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="papers" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Recent Papers</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {recentPapers.map((paper, index) => (
                <Link href="#" key={index} className="group">
                  <div className="flex h-full flex-col justify-between rounded-lg border bg-card p-6 transition-shadow hover:shadow-md">
                    <p className="font-semibold">{paper.title}</p>
                    <MoveUpRight className="mt-4 h-5 w-5 self-end text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
             <div className="mt-12 text-center">
               <Button variant="outline" asChild>
                 <Link href="#">Read More on Google Scholar <MoveUpRight className="ml-2 h-4 w-4" /></Link>
               </Button>
            </div>
          </div>
        </section>

        <section id="essays" className="py-16 md:py-24 bg-secondary">
           <div className="container mx-auto px-4 md:px-6">
             <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">Essays</h2>
              <EssaysList />
           </div>
        </section>
      </main>

      <footer className="py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground md:px-6">
          &copy; {new Date().getFullYear()} veda.ng
        </div>
      </footer>
    </div>
  );
}
