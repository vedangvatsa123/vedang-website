import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, BarChart3, Lightbulb, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web3 & Crypto Guides - Market Making, Tokenomics, Taxation',
  description: 'Expert guides on market making in crypto, token economics, taxation of digital assets, influencer outreach, and blockchain ecosystem dynamics.',
  openGraph: {
    title: 'Web3 & Crypto Guides',
    description: 'Expert guides on market making, tokenomics, taxation, and Web3 strategies.',
    url: '/guides',
    images: [
      {
        url: '/images/icon.png',
        width: 1200,
        height: 630,
        alt: 'Web3 Guides by Vedang Vatsa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 & Crypto Guides - Market Making, Tokenomics, Taxation',
    description: 'Expert guides on market making in crypto, token economics, taxation, and blockchain strategies.',
    images: ['/images/icon.png'],
  },
};

const guides = [
  {
    title: 'Market Making in Cryptocurrency',
    description: 'Complete guide to market making strategies, token launches, market maker roles in DeFi, and how to become a crypto market maker.',
    icon: BarChart3,
    tags: ['Market Making', 'DeFi', 'Token Launches'],
    topics: ['What is market making?', 'Token project market making', 'Strategies for market makers', 'Market making in DeFi', 'AMM vs traditional MM'],
    href: '#market-making',
  },
  {
    title: 'Token Economics (Tokenomics)',
    description: 'Understanding token supply, distribution mechanisms, token utility, and how tokenomics determines a crypto asset\'s long-term viability.',
    icon: Zap,
    tags: ['Tokenomics', 'Token Design', 'Economics'],
    topics: ['Supply and distribution', 'Token utility models', 'Vesting schedules', 'Incentive alignment', 'Token launches'],
    href: '#tokenomics',
  },
  {
    title: 'Taxation of Digital Assets',
    description: 'Guide to crypto taxation, digital economy taxation policies, tax treatment of tokens, staking rewards, and cross-jurisdiction tax implications.',
    icon: Lightbulb,
    tags: ['Taxation', 'Compliance', 'DeFi Tax'],
    topics: ['Capital gains treatment', 'Staking & airdrops', 'DeFi transaction taxes', 'Cross-border taxation', 'Record keeping'],
    href: '#taxation',
  },
  {
    title: 'Influencer Outreach in Web3',
    description: 'Strategies for influencer partnerships, community building, content marketing, and how to effectively reach crypto audiences.',
    icon: Users,
    tags: ['Marketing', 'Community', 'Growth'],
    topics: ['Finding Web3 influencers', 'Outreach templates', 'Partnership structures', 'Content strategies', 'Community engagement'],
    href: '#influencer',
  },
  {
    title: 'Blockchain Ecosystem Dynamics',
    description: 'Understanding blockchain ecosystems, Layer 1 vs Layer 2, ecosystem maturity, developer communities, and how ecosystems compete.',
    icon: BookOpen,
    tags: ['Blockchain', 'Ecosystem', 'L1/L2'],
    topics: ['Ecosystem structure', 'Network effects', 'Developer incentives', 'Liquidity fragmentation', 'Cross-chain bridges'],
    href: '#ecosystem',
  },
];

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="text-center pt-16 pb-12 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-3 h-3 mr-1.5" />
              Expert Guides
            </Badge>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-primary">
              Web3 & Crypto Guides
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              In-depth guides on market making, token economics, taxation, community building, and blockchain ecosystem dynamics. Written by Vedang Vatsa.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 max-w-5xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {guide.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {guide.topics.slice(0, 3).map((topic) => (
                        <li key={topic} className="flex items-center">
                          <span className="mr-2">→</span> {topic}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={guide.href}>
                        Read Guide <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Content sections */}
          <div className="mt-20 space-y-16">
            {/* Market Making */}
            <section id="market-making" className="scroll-mt-20">
              <h2 className="text-3xl font-semibold mb-6">Market Making in Cryptocurrency</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Market making is essential to the crypto ecosystem. Market makers provide liquidity, reduce spreads, and enable efficient price discovery. Understanding market making is crucial if you're involved with token launches, DeFi protocols, or trading.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-secondary/30 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">For Token Projects</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>Market makers help your token launch succeed by:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Providing immediate liquidity</li>
                        <li>Reducing bid-ask spreads</li>
                        <li>Preventing large price swings</li>
                        <li>Building trading volume</li>
                        <li>Supporting exchange listings</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/30 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">For Market Makers</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>Market makers profit through:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Bid-ask spreads</li>
                        <li>Volume-based rebates</li>
                        <li>Token allocations</li>
                        <li>Partnerships with projects</li>
                        <li>Automated trading strategies</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-muted-foreground">
                  Learn more about market making strategies, finding market makers for your token, and how liquidity pools are changing traditional market making dynamics.
                </p>
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="scroll-mt-20">
              <h2 className="text-3xl font-semibold mb-6">Understanding Token Economics (Tokenomics)</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Tokenomics is the science of a cryptocurrency's economic model. It determines whether a token has lasting value or becomes worthless. Good tokenomics aligns incentives; poor tokenomics leads to failure.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {['Supply & Distribution', 'Utility & Demand', 'Incentive Alignment'].map((item) => (
                    <Card key={item} className="bg-secondary/30">
                      <CardContent className="pt-6">
                        <p className="font-semibold mb-2">{item}</p>
                        <p className="text-sm text-muted-foreground">How tokens are created, distributed, used, and what mechanisms reward early adopters and long-term holders.</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Taxation */}
            <section id="taxation" className="scroll-mt-20">
              <h2 className="text-3xl font-semibold mb-6">Taxation of Digital Assets & The Digital Economy</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Tax treatment of cryptocurrency and digital assets is complex and varies by jurisdiction. Understanding your obligations is critical for compliance and financial planning.
                </p>
                <div className="bg-secondary/30 border border-primary/20 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold mb-4">Key Tax Areas for Crypto</h3>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Capital Gains:</strong> Profit from selling crypto is taxable at short-term or long-term rates</li>
                    <li><strong>Income:</strong> Staking rewards, mining, and airdrops are taxable income</li>
                    <li><strong>DeFi Transactions:</strong> Swaps, liquidity pools, and yield farming have tax implications</li>
                    <li><strong>Record Keeping:</strong> You must maintain detailed transaction records with dates and values</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Influencer Outreach */}
            <section id="influencer" className="scroll-mt-20">
              <h2 className="text-3xl font-semibold mb-6">Influencer Outreach & Web3 Community Growth</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Building communities and reaching audiences in Web3 requires understanding influencers, content creators, and community dynamics. Successful outreach combines authenticity with strategic partnerships.
                </p>
                <Card className="bg-secondary/30 border-primary/20 p-6">
                  <h3 className="font-semibold mb-4">Effective Influencer Outreach Strategies</h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Find creators genuinely interested in your project</li>
                    <li>Personalize outreach messages</li>
                    <li>Offer clear value propositions</li>
                    <li>Build long-term partnerships vs. one-off promotions</li>
                    <li>Measure impact with clear metrics</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Blockchain Ecosystem */}
            <section id="ecosystem" className="scroll-mt-20">
              <h2 className="text-3xl font-semibold mb-6">Blockchain Ecosystem Dynamics</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  A blockchain's ecosystem includes its network of applications, developers, users, and infrastructure providers. Strong ecosystems have network effects that create competitive advantages.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Card className="bg-secondary/30 border-primary/20 p-6">
                    <h3 className="font-semibold mb-2">Ecosystem Components</h3>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Core protocol & validators</li>
                      <li>dApps & smart contracts</li>
                      <li>Developer tools & SDKs</li>
                      <li>Infrastructure providers</li>
                      <li>User communities</li>
                    </ul>
                  </Card>
                  <Card className="bg-secondary/30 border-primary/20 p-6">
                    <h3 className="font-semibold mb-2">Ecosystem Growth Drivers</h3>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Developer incentive programs</li>
                      <li>Liquidity provisions</li>
                      <li>Interoperability & bridges</li>
                      <li>Community engagement</li>
                      <li>Real-world use cases</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-lg text-center">
            <p className="text-muted-foreground mb-4">
              Looking for more specific information about Web3 and crypto topics?
            </p>
            <Button asChild>
              <Link href="/writings">Read Full Essays & Research</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
