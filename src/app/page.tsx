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
      <header className="sticky top-0 z-50 bg-background/30 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="font-semibold tracking-tight text-lg">
            veda.ng
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="#" className="text-foreground transition-colors hover:text-primary">
              Writings
            </Link>
            <Link href="#" className="text-foreground transition-colors hover:text-primary">
              Profile
            </Link>
            <Link href="#" className="text-foreground transition-colors hover:text-primary">
              Media
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-12 md:py-16 text-center">
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

        <section id="papers" className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">Recent Papers</h2>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {recentPapers.map((paper, index) => (
                <Link href="#" key={index} className="group">
                  <div className="relative overflow-hidden flex h-full flex-col justify-between rounded-lg bg-black/30 border border-white/10 p-5 transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.2)]">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <p className="font-medium relative z-10">{paper.title}</p>
                    <MoveUpRight className="mt-4 h-5 w-5 self-end text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 relative z-10" />
                  </div>
                </Link>
              ))}
            </div>
             <div className="mt-8 text-center">
               <Button variant="outline" asChild className="rounded-full" size="sm">
                 <Link href="#">Read More on Google Scholar <MoveUpRight className="ml-2 h-4 w-4" /></Link>
               </Button>
            </div>
          </div>
        </section>

        <section id="essays" className="py-12 md:py-16">
           <div className="container mx-auto px-4 md:px-6">
             <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight">Essays</h2>
              <EssaysList />
           </div>
        </section>
      </main>

      <footer className="py-6">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground md:px-6">
          &copy; {new Date().getFullYear()} veda.ng
        </div>
      </footer>
    </div>
  );
}
