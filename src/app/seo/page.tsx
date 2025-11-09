
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  BookOpen,
  Briefcase,
  Globe,
  Linkedin,
  MessageSquare,
  Send,
  Star,
  TrendingUp,
  Twitter,
  Users,
  Wrench,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Vedang Vatsa | SEO & Growth Marketing',
    description: 'Data-driven growth leader with 8+ years of experience scaling organic and paid acquisition channels for high-growth mobile and Web3 products. Proven track record in SEO, ASO, community building, and cross-functional leadership.',
    alternates: {
      canonical: '/seo',
    },
};

const asSeenInLogos = [
    { name: 'Business Insider', logo: '/images/press/Business_Insider_2023_logo.svg.png' },
    { name: 'Yahoo Finance', logo: '/images/press/Yahoo!_Finance_logo_2021 (1).png' },
    { name: 'YourStory', logo: '/images/press/image-23.webp' },
    { name: 'The Tribune', logo: '/images/press/The_Tribune_India_IPRD_Indian_PR_Distribution.png' },
    { name: 'ET', logo: '/images/press/et-logo4px.png' },
    { name: 'Business Standard', logo: '/images/press/business-standard-logo-2.png' },
    { name: 'Inc42', logo: '/images/press/68296-business-media-company-inc42-startup-marketing.png' },
    { name: 'The Print', logo: '/images/press/ThePrint_logo.png' },
    { name: 'Decrypt', logo: '/images/press/Decrypt_logo.svg' },
    { name: 'ANI', logo: '/images/press/Ani-logo-black.png' },
    { name: 'Dainik Bhaskar', logo: '/images/press/Dainik_Bhaskar_Logo.png' },
    { name: 'IEEE Computer', logo: '/images/press/IEEE_Computer.png' },
    { name: 'KPMG', logo: '/images/press/1718209067639.jpeg' },
    { name: 'Business Today', logo: '/images/press/bt_business_today_vedang%20vatsa-min%20(1).png' },
];

export default function SeoProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow py-10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <section className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <Image
                src="/images/icon.png"
                alt="Vedang Vatsa"
                width={128}
                height={128}
                className="h-32 w-32 rounded-full object-cover border-4 border-card"
                priority
              />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-semibold tracking-tight">Vedang Vatsa</h1>
              <p className="mt-1 text-lg font-medium text-muted-foreground">Growth Marketing Specialist | Web3 & FinTech</p>
              <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
                Data-driven growth leader with 8+ years of experience scaling organic and paid acquisition channels for high-growth mobile and Web3 products. Proven track record in SEO, ASO, community building, and cross-functional leadership.
              </p>
              <div className="mt-4 flex justify-center md:justify-start items-center space-x-4">
                <Link href="https://linkedin.com/in/vedangvatsa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://x.com/vedangvatsa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://t.me/vedangvatsa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center gap-1.5">
                  <Send className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </section>

          <section className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="text-center p-4 bg-secondary/30">
              <TrendingUp className="h-8 w-8 mx-auto text-primary"/>
              <p className="text-3xl font-bold mt-2">40x</p>
              <p className="text-sm text-muted-foreground">User Growth (5k to 200k in 1 year)</p>
            </Card>
            <Card className="text-center p-4 bg-secondary/30">
              <Users className="h-8 w-8 mx-auto text-primary"/>
              <p className="text-3xl font-bold mt-2">100k+</p>
              <p className="text-sm text-muted-foreground">Web3 Community Founded (#web3)</p>
            </Card>
            <Card className="text-center p-4 bg-secondary/30">
              <Globe className="h-8 w-8 mx-auto text-primary"/>
              <p className="text-3xl font-bold mt-2">~90M</p>
              <p className="text-sm text-muted-foreground">Annual Content Reach (LinkedIn + Telegram)</p>
            </Card>
          </section>

          <div className="space-y-12">
            <section id="competencies">
                <h2 className="text-2xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6 text-primary" /> Core Competencies & Experience
                </h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                        <h3 className="font-semibold text-lg">SEO & Website Management</h3>
                        <p className="text-muted-foreground mt-1">Achieved top 3 Google SERP rankings for target keywords within 4 months through advanced SEO roadmap execution. Managed web properties achieving 2.3M+ views and a Google PageSpeed score of 98.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">ASO & Mobile Growth</h3>
                        <p className="text-muted-foreground mt-1">Optimized app visibility and conversion using App Store Connect and Sensor Tower, driving user acquisition and retention for iOS and Android platforms.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Data-driven Experimentation</h3>
                        <p className="text-muted-foreground mt-1">Executed high-velocity A/B testing, funnel optimization, and lifecycle initiatives using GA4, Adjust, and Firebase to drive continuous performance improvements.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Paid Acquisition & Performance Media</h3>
                        <p className="text-muted-foreground mt-1">Planned and executed paid campaigns across Meta, Google, and YouTube, focusing on cost-effective user acquisition and measurable ROI.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Community & Content Marketing</h3>
                        <p className="text-muted-foreground mt-1">Founded and scaled a 100,000+ member Web3 professional community, leveraging a content strategy that generates ~90 million annual impressions to drive organic user acquisition.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Cross-Functional Leadership</h3>
                        <p className="text-muted-foreground mt-1">8 years of professional experience, including growing a team from 3 to 28. Ex-KPMG & EY consultant with extensive experience working with product, engineering, and brand teams in fast-paced remote environments.</p>
                    </div>
                </div>
            </section>
            
            <section id="toolkit">
              <h2 className="text-2xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-primary" /> Technical & Creative Toolkit
              </h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground">
                  <ul className="space-y-2 list-disc list-inside">
                    <li><span className="font-semibold text-foreground">Analytics & ASO:</span> GA4, Firebase, Adjust, Sensor Tower, GSC, App Store Connect, Plausible, Ahrefs</li>
                    <li><span className="font-semibold text-foreground">Technical SEO:</span> Full-stack audits, schema markup, log analysis, site speed optimization, Screaming Frog</li>
                    <li><span className="font-semibold text-foreground">Paid Media & Ad Platforms:</span> Google Ads, Meta Ads (Facebook/Instagram), X (Twitter) Ads, YouTube Ads</li>
                  </ul>
                  <ul className="space-y-2 list-disc list-inside">
                    <li><span className="font-semibold text-foreground">Creative & Design:</span> Figma, Canva, Adobe Photoshop, Adobe Express</li>
                    <li><span className="font-semibold text-foreground">Web & CMS:</span> WordPress, Webflow, HTML/CSS, React, Wix, Shopify, Replit, Firebase Studio</li>
                    <li><span className="font-semibold text-foreground">AI Tools:</span> Advanced use of GPT-4, Claude, Midjourney for content and creative workflows</li>
                  </ul>
              </div>
            </section>

            <section id="experience">
              <h2 className="text-2xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" /> Professional Experience
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Growth Advisory | Hashtag Web3</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Established one of the largest global communities for Web3 professionals.</li>
                      <li>Grew community to 100,000+ members, creating a powerful organic acquisition channel.</li>
                      <li>Revamped and SEO-optimized website (Firebase Studio), publishing 700 keyword-targeted pages and acquiring 1,500+ backlinks in 4 months, achieving full Google indexation within 30 days.</li>
                      <li>Served as a growth advisor for clients including Zeeve, Talent Protocol, Bobble AI, Bless Network, Cypher (YC), Super Protocol, and Changelly, assisting The Hashgraph Association with social media strategy and organic marketing for portfolio companies, including exchange listings, website setup, and social media management on LinkedIn and X.</li>
                      <li>Hosted Twitter Spaces with up to 32,000 live listeners and partnered with top-tier organizations like Harvard Blockchain Club, ETH Oxford, London Business School, Token 2049, etc.</li>
                      <li>Content strategy results in ~90 million annual impressions, establishing strong thought leadership in the Web3 space.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Marketing Lead | Routespring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Led end-to-end growth marketing for a B2B SaaS travel platform, achieving significant organic growth.</li>
                        <li>Built a 100% SEO-compliant website from scratch using AI tools, achieving 150k+ monthly impressions.</li>
                        <li>Increased Domain Rating from 9 to 43 and grew backlinks from 109 to over 2,300.</li>
                        <li>Drove a 50% increase in qualified sales leads through organic channels.</li>
                        <li>Positioned the product among the top 5 in its category on G2, the world's largest tech marketplace.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Country Head (Growth) | Prosple</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Led growth strategy for an Australian career-tech company in the South Asia and SEA market.</li>
                      <li>Scaled user base from 5,000 to ~200,000 within one year, a 40x increase, generating over 1.5M geo-targeted web hits.</li>
                      <li>Hosted events with executives from top companies like Microsoft, Google, KPMG, and Bain & Company, and formed partnerships with numerous educational institutions.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Consultant | KPMG & EY</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Served in the Minister’s Office, Ministry of Electronics & IT, India, working on national digital initiatives, social media strategy, a personal website for the IT Minister of India, and growth dashboards.</li>
                      <li>Conducted Commercial, Technical, and Policy research for high-value e-commerce, fintech, blockchain, and social media firms.</li>
                      <li>Received multiple "Kudos" and a Top Scorer award in KPMG's Digital Premier League on Emerging Technologies.</li>
                    </ul>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader>
                      <CardTitle className="text-xl">Project Manager | Studio Tesseract</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Co-founded and managed a web and mobile app development company.</li>
                        <li>Led a 30-member team to deliver 27 web and mobile products for clients across 5 continents.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <section id="qualifications">
                <h2 className="text-2xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-primary" /> Qualifications & Recognition
                </h2>
                <Card>
                    <CardContent className="pt-6">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li><span className="font-semibold text-foreground">Education:</span> Computer Engineer + MBA from IIT Kanpur.</li>
                            <li><span className="font-semibold text-foreground">Fellow of the Royal Society for Arts (FRSA):</span> Recognized for contributions to social progress and development.</li>
                            <li><span className="font-semibold text-foreground">Top 50 Global Metaverse Influencer (2022 & 2023):</span> Ranked by Thinkers360 & featured in Favikon's Top 50 Fintech & Crypto Creators.</li>
                            <li><span className="font-semibold text-foreground">Crypto-Native & Web3 Expert:</span> 22 published manuscripts on technology and economics, with deep knowledge of financial sovereignty and emerging markets (LATAM, Africa, SEA, India).</li>
                            <li><span className="font-semibold text-foreground">Global Experience:</span> Worked with companies across 5 continents and issued Japan’s special visa for Intellectual Figures.</li>
                            <li><span className="font-semibold text-foreground">Strong Recommendations:</span> Endorsed by leaders from Google, EY, KPMG, Accenture, Omidyar Network, and the entertainment industry (Jack Allison, Oscars Screenwriter).</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>

            <section className="py-8">
                <h2 className="text-2xl font-semibold tracking-tight text-center mb-6">As Seen In</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center justify-center">
                {asSeenInLogos.map((media, index) => (
                    <div key={index} className="flex justify-center grayscale-0 opacity-100 transition-all">
                    <Image
                        src={media.logo}
                        alt={media.name}
                        width={120}
                        height={40}
                        className="object-contain"
                        />
                    </div>
                ))}
                </div>
            </section>

            <section id="testimonials">
                <h2 className="text-2xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-primary" /> Testimonials
                </h2>
                 <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                    <Card>
                        <CardContent className="pt-6">
                            <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
                            "I always find his work to be of just the absolute high quality. He is always timely, so easy to work with, responsive to notes and always able to explain things to me when it's hard for me to get things. He has my highest endorsement."
                            </blockquote>
                            <p className="mt-4 font-semibold text-right">- Jack Alison</p>
                            <p className="text-sm text-muted-foreground text-right">Screenwriter for Academy Awards (Oscars)</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardContent className="pt-6">
                            <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
                            "I am very comfortable to recommend him for any job that requires strict deadlines, taking on new challenges at short notice and dealing with altering priorities, efficient client communication and good analytical capabilities."
                            </blockquote>
                            <p className="mt-4 font-semibold text-right">- Bharath Visweswariah</p>
                            <p className="text-sm text-muted-foreground text-right">Director Investments, Omidyar Network</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardContent className="pt-6">
                            <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
                            "He helped me a lot in working closely with me and understand my requirements even though we had some language barriers between us but Vedang has never let these barriers be the reason of any delay in the work."
                            </blockquote>
                            <p className="mt-4 font-semibold text-right">- Eran Malovani</p>
                            <p className="text-sm text-muted-foreground text-right">Founder of CPA+</p>
                        </CardContent>
                    </Card>
                 </div>
            </section>

             <section id="papers-essays">
                <h2 className="text-2xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary" /> Recent Papers & Essays
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Papers</h3>
                        <div className="space-y-3">
                           <Link href="https://dx.doi.org/10.2139/ssrn.5660270" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary">Device-to-Device Economics and AI Agent Transactions</Link>
                           <Link href="https://dx.doi.org/10.2139/ssrn.5325570" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary">Stablecoin Growth and Market Dynamics</Link>
                           <Link href="https://dx.doi.org/10.2139/ssrn.5329957" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary">Stablecoins in the Modern Financial System</Link>
                           <Link href="https://dx.doi.org/10.2139/ssrn.5386707" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary">Global Stablecoin Regulations and Policies</Link>
                           <Link href="https://scholar.google.com/citations?user=aW2dd0IAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 inline-block">Read More on Google Scholar</Link>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg mb-3">Essays</h3>
                         <div className="space-y-3">
                           <Link href="/writings/the-ai-agent-economy" className="block text-muted-foreground hover:text-primary">The AI Agent Economy</Link>
                           <Link href="/writings/from-attention-to-intention" className="block text-muted-foreground hover:text-primary">From Attention to Intention, The Next Evolution of the Web</Link>
                           <Link href="/writings/an-internet-of-lies" className="block text-muted-foreground hover:text-primary">An Internet of Lies and How We Can Fix It</Link>
                           <Link href="/writings/tracing-blockchains-journey" className="block text-muted-foreground hover:text-primary">Tracing Blockchain’s Decade Long Journey from Hype to Maturity</Link>
                           <Link href="/writings" className="text-primary hover:underline mt-2 inline-block">Read More Essays</Link>
                        </div>
                    </div>
                </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

    