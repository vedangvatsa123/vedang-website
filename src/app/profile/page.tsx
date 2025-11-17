
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
  Twitter,
  Youtube,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Profile',
    description: 'Founder of a 100,000+ member Web3 community, Vedang Vatsa is featured in Favikon’s Top 50 Fintech & Crypto Creators and Thinkers360’s Top 50 Metaverse Thought Leaders.',
    alternates: {
      canonical: '/profile',
    },
};

export default function ProfilePage() {
  
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow py-10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <section className="text-center">
            
              <Image
                src="/images/icon.png"
                alt="Vedang Vatsa"
                width={96}
                height={96}
                className="mx-auto h-24 w-24 rounded-full object-cover"
                priority
              />
            
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">Vedang Vatsa FRSA</h1>
            <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground">
              Computer Engineer, MBA | Young Researcher 2020 Awardee (22 publications)
            </p>
            <div className="mt-6 flex justify-center items-center space-x-4 flex-wrap gap-y-2">
              <Link
                href="mailto:vedangvatsa.2019@iitkalumni.org"
                className="text-muted-foreground hover:text-primary flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">Email</span>
              </Link>
              <Link
                href="https://linkedin.com/in/vedangvatsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                 <span className="text-sm">LinkedIn</span>
              </Link>
               <Link href="https://x.com/vedangvatsa" className="text-muted-foreground hover:text-primary" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://t.me/vedangvatsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
                 <span className="text-sm">Telegram</span>
              </Link>
              <Link
                href="https://scholar.google.com/citations?user=aW2dd0IAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                 <span className="text-sm">Google Scholar</span>
              </Link>
            </div>
          </section>

          <Separator className="my-10" />

          <div className="space-y-10">
            <section id="experience">
              <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                <Briefcase className="w-7 h-7" /> Professional Experience
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap">
                      <div>
                        <CardTitle className="text-xl">Growth Advisory (Founder)</CardTitle>
                        <p className="text-muted-foreground">Hashtag Web3</p>
                      </div>
                      <p className="text-sm text-muted-foreground flex-shrink-0">October 2022 - Present</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Served as Head of Marketing and Growth Lead for several Web3 companies.</li>
                        <li>Built a 100k+ member networking community for Web3, a social-messaging-first forum, and one of the largest Telegram channels for Web3 jobs, achieving 55 million post views in the first year.</li>
                        <li>Featured among the top 3 Web3 products of the week by Smoothie and supported by Microsoft for Startups.</li>
                        <li>Hosted weekly Twitter Spaces with high-profile guests (including a band member of Pink Floyd, partners of Big4 firms, the father of digital twin technology, and the CSO of Microsoft), attracting 20-30k live attendees.</li>
                        <li>Partnered with leading organizations like Harvard Blockchain Club, ETH Oxford, Token 2049, ETH Vietnam, Taipei Blockchain Week, Oxford Blockchain Conference, Malaysia Blockchain Week, ETH Brussels, EDCON Tokyo, Global Blockchain Show, and many others.</li>
                        <li>Published popular crash courses on NFT, Metaverse, Tokenomics, DAO, Blockchain, and DeFi, with 50,000 accesses in the first month and gaining 11,000 newsletter subscribers in 11 editions.</li>
                        <li>Created a closed community for Indian Web3 executives from Gemini, Circle, Hedera, Chainalysis, KPMG, Coinbase, Polygon, Aptos, Avalanche, EY, Algorand, PwC, etc.</li>
                        <li>Among top 100 thought leaders & influencers in Metaverse and Smart Cities by Thinkers360.</li>
                        <li>Research reporting on AI and Web3 resulted in 80 million yearly LinkedIn post views and features by LinkedIn News UK & Europe.</li>
                    </ul>
                  </CardContent>
                </Card>
                 <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap">
                      <div>
                        <CardTitle className="text-xl">Country Head</CardTitle>
                        <p className="text-muted-foreground">Prosple</p>
                      </div>
                      <p className="text-sm text-muted-foreground flex-shrink-0">September 2021 - October 2022</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Led user growth from 5,000 to 200,000 through content and social media, generating over 1.5 million geo-targeted web hits.</li>
                      <li>Hosted events with executives from top companies like Microsoft and Bain & Company.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap">
                      <div>
                        <CardTitle className="text-xl">Consultant</CardTitle>
                        <p className="text-muted-foreground">KPMG</p>
                      </div>
                      <p className="text-sm text-muted-foreground flex-shrink-0">September 2019 - September 2021</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Program Management (Minister's Office, Ministry of Electronics and IT, India):</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                        <li>Served as Program Manager for Digital India projects under the Ministry.</li>
                        <li>Worked on the Minister's social media strategy, created a personal website, and liaised with scientists, state officials, startup founders, CXOs, and bureaucrats.</li>
                        <li>Served as an evaluation committee member for a national government innovation challenge.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Research and Due Diligence:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                         <li>Conducted Commercial Due Diligence (e-commerce with $2B valuation, Digital Payments with 2500Mn transaction volume) and Technical Due Diligence (HealthTech app with 220 million downloads, social media with $100 million valuation).</li>
                         <li>Researched key policy areas like Responsible AI, Data Protection Bill, and proceedings on BigTechs.</li>
                      </ul>
                    </div>
                     <div>
                      <h4 className="font-semibold">Business Strategy & Analysis:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                         <li>Designed strategies for KPMG's Analytics Centre of Excellence.</li>
                         <li>Prepared process architecture for contactless tracking in India Post, the world's largest postal network.</li>
                         <li>Received multiple Kudos and a Top Scorer award in KPMG's Digital Premier League on Emerging Technologies.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap">
                      <div>
                        <CardTitle className="text-xl">Project Manager (Co-Founder)</CardTitle>
                        <p className="text-muted-foreground">Studio Tesseract</p>
                      </div>
                      <p className="text-sm text-muted-foreground flex-shrink-0">April 2013 - June 2017</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Led a 30-member team to deliver 27 web and mobile products across the full development lifecycle.</li>
                      <li>Expanded business development globally, serving clients on five continents.</li>
                      <li>Secured recommendations from an Oscars screenwriter and a CPA+ founder.</li>
                    </ul>
  </CardContent>
                </Card>
              </div>
            </section>

             <div className="grid md:grid-cols-2 gap-8">
                <section id="education">
                  <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <GraduationCap className="w-7 h-7" /> Education
                  </h2>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">BE - Computer Engineering & MBA</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Nominated for the President's Gold Medal at the Indian Institute of Technology Kanpur.</li>
                        <li>Represented over 100 students as the department student representative.</li>
                        <li>Headed a 40-member Entrepreneurship Cell team and grew internship offers by 73%.</li>
                        <li>Finished a Management Development Program on leadership from the Indian Institute of Management Indore.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <section id="achievements">
                  <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <Award className="w-7 h-7" /> Key Achievements
                  </h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Awarded as a Fellow of the Royal Society for the Encouragement of Arts, Manufactures and Commerce.</li>
                        <li>Issued Japan’s special visa for Intellectual Figures.</li>
                        <li>Presented a low-cost laptop prototype at IIT Delhi, earning praise from the Head of MIT Media Labs and a Nobel Laureate.</li>
                        <li>Received the Young Researcher Award 2020 and Young Achiever Award 2020-21.</li>
                        <li>Honored with a medal by the Former Director of India’s Prime Minister's Office.</li>
                        <li>Represented the Indian delegation in numerous international dialogues, including the Harvard Project for Asian & International Relations.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>
            </div>

            <section id="publications">
                <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <BookOpen className="w-7 h-7" /> Selected Publications & Articles
                </h2>
                 <Card>
                    <CardContent className="pt-6">
                         <p className="text-sm text-muted-foreground mb-4">Published research for Gov Blockchain Association, KPMG, IEEE, EY, Economic Times, Financial Express, Business Insider, Yourstory, Inc42, IndiaAI, etc.</p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground columns-1 md:columns-2 lg:columns-3 md:gap-6">
                            <li>Analysis of Global Research Proceedings in AI</li>
                            <li>Estonia’s e-governance and digital public service delivery solutions</li>
                            <li>Digital Nomadism & The Future of Work</li>
                            <li>Perspectives on Rationality for AI</li>
                            <li>Computational Social Science</li>
                            <li>Bias in Algorithms</li>
                            <li>Data-fluent Ecosystems</li>
                            <li>Landscape of AI Regulations</li>
                            <li>Digital Rupee & CBDCs</li>
                            <li>The Network State</li>
                            <li>Web3 Gaming Market</li>
                            <li>Identities in the Metaverse</li>
                            <li>Careers in Web3</li>
                            <li>Trust in a Pseudonymous World</li>
                            <li>Citizens of the Metaverse</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
            
            <section id="projects">
                <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <Lightbulb className="w-7 h-7" /> Other Projects
                </h2>
                 <Card>
                    <CardContent className="pt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold">ERNST & YOUNG</h4>
                            <p className="text-muted-foreground mt-1 text-sm">Analyzed the sectoral impact of OECD's action plans on Base Erosion & Profit Shifting.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold">OMIDYAR NETWORK</h4>
                            <p className="text-muted-foreground mt-1 text-sm">Led creative strategy for startups in a CivicTech event, where three received funding.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold">HINDUSTAN PETROLEUM</h4>
                            <p className="text-muted-foreground mt-1 text-sm">Developed an analytics tool to monitor sales data for over 50 petrol pumps.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold">JOURNALISM WEEK by University of Chicago</h4>
                            <p className="text-muted-foreground mt-1 text-sm">Led media and content for the 7-day multi-city event.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold">DELL</h4>
                            <p className="text-muted-foreground mt-1 text-sm">Created an intranet portal for micro-project management via manual update submissions.</p>
                        </div>
                    </CardContent>
                </Card>
            </section>

             <section id="interests">
                <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <Heart className="w-7 h-7" /> Interests
                </h2>
                 <Card>
                    <CardContent className="pt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold">Photography</h4>
                            <p className="text-muted-foreground mt-1 text-sm">Selected among a few global photographers to cover the world's largest festival by gathering.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold">Adventure Sports</h4>
                            <p className="text-muted-foreground mt-1 text-sm">Completed the world's highest canyon swing and a National Mountain Biking Expedition.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold">Public Speaking</h4>
                            <p className="text-muted-foreground mt-1 text-sm">Conducted workshops on topics like Computational Social Science, China’s Approach to AI, and Responsible AI. Speaker at IIT Delhi, IIT Kanpur, OP Jindal University, TUM Munich, ISB Hyderabad, ETH Enugu, etc.</p>
                        </div>
                    </CardContent>
                </Card>
            </section>

            <section id="testimonials">
                <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center gap-3">
                    <MessageSquare className="w-7 h-7" /> Testimonials
                </h2>
                 <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                    <Card>
                        <CardContent className="pt-6">
                            <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
                            "I always find his work to be of just the absolute high quality. He is always timely, so easy to work with, responsive to notes and always able to explain things to me when it's hard for me to get things. He has my highest endorsement."
                            </blockquote>
                            <p className="mt-4 font-semibold text-right">Jack Alison</p>
                            <p className="text-sm text-muted-foreground text-right">Screenwriter for Academy Awards (Oscars)</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardContent className="pt-6">
                            <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
                            "I am very comfortable to recommend him for any job that requires strict deadlines, taking on new challenges at short notice and dealing with altering priorities, efficient client communication and good analytical capabilities."
                            </blockquote>
                            <p className="mt-4 font-semibold text-right">Bharath Visweswariah</p>
                            <p className="text-sm text-muted-foreground text-right">Director Investments, Omidyar Network</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardContent className="pt-6">
                            <blockquote className="border-l-2 pl-6 italic text-muted-foreground">
                            "He helped me a lot in working closely with me and understand my requirements even though we had some language barriers between us but Vedang has never let these barriers be the reason of any delay in the work."
                            </blockquote>
                            <p className="mt-4 font-semibold text-right">Eran Malovani</p>
                            <p className="text-sm text-muted-foreground text-right">Founder of CPA+</p>
                        </CardContent>
                    </Card>
                 </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

    