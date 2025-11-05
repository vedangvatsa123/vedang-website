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

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <section className="text-center">
            <Image
              src={'https://veda.ng/profile-photo.png'}
              alt="Vedang Vatsa"
              width={96}
              height={96}
              className="mx-auto h-24 w-24 rounded-full object-cover"
              priority
            />
            <h1 className="mt-6 text-5xl font-semibold tracking-tight">Vedang Vatsa FRSA</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Founder of a 100,000+ member Web3 community, Vedang Vatsa is featured in Favikon’s Top 50 Fintech &
              Crypto Creators and Thinkers360’s Top 50 Metaverse Thought Leaders. With over 80 million LinkedIn post
              views, he is an experienced researcher in AI and Web3. He has published extensively and partnered with
              global tech conferences and academic institutions.
            </p>
            <div className="mt-8 flex justify-center items-center space-x-4">
              <Link
                href="mailto:vedangvats@gmail.com"
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
              <Link
                href="https://www.instagram.com/vedangvatsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                 <span className="text-sm">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@vedangvatsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-2"
              >
                <Youtube className="h-5 w-5" />
                 <span className="text-sm">YouTube</span>
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

          <Separator className="my-16" />

          <div className="space-y-16">
            <section id="experience">
              <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-3">
                <Briefcase className="w-7 h-7" /> Professional Experience
              </h2>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">Growth Advisory</CardTitle>
                        <p className="text-muted-foreground">Hashtag Web3</p>
                      </div>
                      <p className="text-sm text-muted-foreground flex-shrink-0">October 2022 - Present</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Served as Head of Marketing and Growth Lead for several Web3 companies.</li>
                      <li>
                        Built a 100k+ member networking community for Web3 professionals. It is a social-messaging-first
                        forum and one of the largest Telegram channels for Web3 jobs, achieving 55 million post views in
                        its first year.
                      </li>
                      <li>
                        Featured among the top 3 Web3 products of the week by Smoothie (a ProductHunt for Web3) and
                        supported by Microsoft for Startups.
                      </li>
<li>Published articles for Government Blockchain Association, KPMG, IEEE, EY, and major news outlets.</li>
                      <li>Hosted weekly Twitter Spaces sessions with high-profile guests, attracting 20-30k live attendees.</li>
                      <li>Partnered with leading organizations like Harvard Blockchain Club, ETH Oxford, and Token 2049.</li>
                      <li>
                        Published popular crash courses on Web3 topics, gaining 50,000 accesses in the first month and 11,000
                        newsletter subscribers in 11 editions.
                      </li>
                      <li>
                        Created a closed community for Indian Web3 executives from top companies like Gemini, Circle, and
                        KPMG.
                      </li>
                      <li>
                        Delivered guest lectures at IIT Delhi, IIT Kanpur, and The Responsible AI Forum, among others.
                      </li>
                      <li>Ranked among the top 100 thought leaders in Metaverse and Smart Cities by Thinkers360.</li>
                      <li>
                        Conducted research on AI and Web3, leading to over 80 million yearly LinkedIn post views and
                        publications on topics like Digital Rupee, Web3 Gaming, and AI regulations.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">Country Head</CardTitle>
                        <p className="text-muted-foreground">Prosple (Oceania based career-tech company)</p>
                      </div>
                      <p className="text-sm text-muted-foreground flex-shrink-0">September 2021 - October 2022</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Led user growth from 5,000 to 200,000 through content and social media, generating over 1.5
                        million geo-targeted web hits.
                      </li>
                      <li>Hosted events with executives from top companies like Microsoft and Bain & Company.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
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
                        <li>Worked on the Minister's social media strategy and liaised with state officials, startup founders, and CXOs.</li>
                        <li>Gathered data, built dashboards, and led growth initiatives for high-level reviews.</li>
                        <li>Served as an evaluation committee member for a national government innovation challenge.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">Research and Due Diligence:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                         <li>Conducted Commercial Due Diligence for major e-commerce and digital payment firms.</li>
                         <li>Performed Technical Due Diligence for high-valuation HealthTech and social media apps.</li>
                         <li>Researched key policy areas like Responsible AI and the Data Protection Bill.</li>
                      </ul>
                    </div>
                     <div>
                      <h4 className="font-semibold">Business Strategy & Analysis:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                         <li>Designed strategies for KPMG's Analytics Centre of Excellence.</li>
                         <li>Monitored projects in Language Translation, Digital Villages, and AI.</li>
                         <li>Prepared process architecture for contactless tracking in India Post, the world's largest postal network.</li>
                         <li>Received multiple Kudos and a Top Scorer award in KPMG's Digital Premier League on Emerging Technologies.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
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
                  <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-3">
                    <GraduationCap className="w-7 h-7" /> Education
                  </h2>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">BE - Computer Engineering (2009-13) & MBA (2017-19)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Nominated for the President's Gold Medal at the Indian Institute of Technology Kanpur.</li>
                        <li>Represented over 100 students as the department student representative.</li>
                        <li>Headed a 40-member Entrepreneurship Cell team and grew internship offers by 73%.</li>
                        <li>Won 'Freshman of the Year' and served as Training and Placement Cell Executive Head.</li>
                        <li>Finished a Management Development Program on leadership from the Indian Institute of Management Indore.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <section id="achievements">
                  <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-3">
                    <Award className="w-7 h-7" /> Key Achievements
                  </h2>
                  <Card>
                    <CardContent className="pt-6">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Awarded as a Fellow of the Royal Society for the Encouragement of Arts, Manufactures and Commerce. Past Fellows include Stephen Hawking and Charles Dickens.</li>
                        <li>Issued Japan’s special visa for Intellectual Figures.</li>
                        <li>Presented a low-cost laptop prototype at IIT Delhi, earning praise from the Head of MIT Media Labs and a Nobel Laureate.</li>
                        <li>Received the Young Researcher Award 2020 and Young Achiever Award 2020-21.</li>
                        <li>Honored with a medal by the Former Director of India’s Prime Minister's Office for winning the Beat Plastic Hackathon.</li>
                        <li>Represented the Indian delegation in numerous international dialogues, including the Harvard Project for Asian & International Relations.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>
            </div>

            <section id="publications">
                <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-3">
                    <BookOpen className="w-7 h-7" /> Selected Publications
                </h2>
                 <Card>
                    <CardContent className="pt-6">
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground columns-2">
                            <li>A literature review on internet of things (iot)</li>
                            <li>Estonia’s e-governance and digital public service delivery solutions</li>
                            <li>Raspberry Pi based Implementation of Internet of Things using mobile messaging application-‘Telegram’</li>
                            <li>Growth of Digital Payments and the emergence of FinTech in India</li>
                            <li>Current Trends and Approaches of Network Intrusion Detection System</li>
                            <li>Base erosion and profit shifting in multinational corporations.</li>
                            <li>Blockchain Ecosystem Evolution</li>
                            <li>Stablecoins in the Modern Financial System</li>
                            <li>Stablecoin Growth and Market Dynamics</li>
                            <li>The Emerging Internet Of Value</li>
                            <li>Analysis of Global Research Proceedings in Artificial Intelligence</li>
                            <li>Computational Social Science in the Age of Big Data</li>
                            <li>Decoding identity in the Metaverse</li>
                            <li>A simulated reality with silicon consciousness</li>
                            <li>Navigating through a data-fluent ecosystem</li>
                            <li>Bias-free algorithm is essential for trustworthy Artificial Intelligence</li>
                            <li>Digital service delivery will bolster an Atmanirbhar Bharat</li>
                            <li>Catalysing the National Infrastructure Pipeline: Project India</li>
                            <li>Identification and Mitigation of Algorithmic Bias Through Policy Instruments</li>
                            <li>Emergence of TechFin in the emerging economies</li>
                            <li>Digital Lending: A $1 Trillion opportunity for India</li>
                            <li>Coronavirus Outbreak: Trillion-Dollar Crisis and Evolution of New Global Order</li>
                            <li>Leadership Effectiveness, Spiritual Values and the Paths to Happiness</li>
                            <li>A Case Study on ‘The Mobile Applications Industry’</li>
                            <li>A Review on the Multi Modal Biometric Systems</li>
                            <li>Comparative Analysis of Coverage Schemes in WSN (Wireless Sensor Network)</li>
                            <li>Emerging of New Service Oriented Approach Based on Internet of Things</li>
                            <li>Study and Analysis of security threats and attacks in MANET</li>
                            <li>Security in Ubiquitous Computing - Location Based Applications</li>
                            <li>Global Stablecoin Regulations and Policies</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
            
            <section id="projects">
                <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-3">
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
                            <h4 className="font-semibold">HINDUSTAN PETROLEUM (a Fortune 500 company)</h4>
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
                <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-3">
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
                            <p className="text-muted-foreground mt-1 text-sm">Conducted workshops on topics like Computational Social Science, China’s Approach to AI, and Responsible AI.</p>
                        </div>
                    </CardContent>
                </Card>
            </section>

            <section id="testimonials">
                <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-3">
                    <MessageSquare className="w-7 h-7" /> Testimonials
                </h2>
                 <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
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
