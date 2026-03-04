import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Clock, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI, Rationality & The Singularity - Essays & Perspectives',
  description: 'Explore essays on artificial intelligence, rationality, AI superintelligence, technological singularity, and the future of intelligent systems. By Vedang Vatsa.',
  openGraph: {
    title: 'AI, Rationality & The Singularity',
    description: 'Essays on AI, rationality in artificial intelligence, technological singularity, and the future of superintelligence.',
    url: '/perspectives/ai-singularity',
    images: [
      {
        url: '/images/icon.png',
        width: 1200,
        height: 630,
        alt: 'AI and Singularity Perspectives',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI, Rationality & The Singularity - Essays by Vedang Vatsa',
    description: 'Explore perspectives on artificial intelligence, rationality, and technological singularity.',
    images: ['/images/icon.png'],
  },
};

const topics = [
  {
    title: 'What is the Singularity?',
    description: 'Understanding the technological singularity, when AI surpasses human intelligence, and what it means for humanity.',
    subtopics: ['Definition and timeline', 'Hard vs soft singularity', 'Implications for society', 'Existential considerations'],
  },
  {
    title: 'The Singularity Paradox',
    description: 'Examining the contradictions in singularity predictions and what we can and cannot know about post-singularity futures.',
    subtopics: ['Prediction challenges', 'Knowledge limitations', 'Paradoxes in thinking', 'Speculative futures'],
  },
  {
    title: 'AI Superintelligence Timeline',
    description: 'Analyzing expert opinions on when artificial superintelligence might emerge and the factors that determine timelines.',
    subtopics: ['Expert predictions', 'Capability scaling', 'Hardware constraints', 'Research acceleration'],
  },
  {
    title: 'Rationality in AI',
    description: 'What does it mean for AI systems to be "rational"? Exploring definitions, challenges, and philosophical implications.',
    subtopics: ['Rational agents', 'Decision theory', 'Value alignment', 'Goal specification'],
  },
  {
    title: 'Are We in a Computer Simulation?',
    description: 'The simulation hypothesis, philosophical considerations, and what modern AI tells us about this possibility.',
    subtopics: ['Simulation theory', 'Philosophical arguments', 'Computational feasibility', 'Implications if true'],
  },
];

export default function AISingularityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="text-center pt-16 pb-12 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <Brain className="w-3 h-3 mr-1.5" />
              Deep Dives
            </Badge>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-primary">
              AI, Rationality & The Singularity
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Exploring artificial intelligence, rationality in AI systems, the technological singularity, and fundamental questions about intelligence and consciousness.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 max-w-5xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {topics.map((topic, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {topic.subtopics.map((subtopic) => (
                      <li key={subtopic} className="flex items-center">
                        <span className="mr-2 text-primary">→</span> {subtopic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-semibold mb-6">Why These Questions Matter</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  As AI capabilities advance exponentially, fundamental questions about intelligence, rationality, and the future become increasingly urgent. Understanding these concepts is essential for researchers, policymakers, and anyone thinking about the future.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-secondary/30 border-primary/20">
                    <CardContent className="pt-6">
                      <Zap className="w-6 h-6 text-primary mb-2" />
                      <h3 className="font-semibold mb-2">Urgency</h3>
                      <p className="text-sm text-muted-foreground">
                        AI development is accelerating. The decisions we make now will shape the future.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/30 border-primary/20">
                    <CardContent className="pt-6">
                      <Brain className="w-6 h-6 text-primary mb-2" />
                      <h3 className="font-semibold mb-2">Understanding</h3>
                      <p className="text-sm text-muted-foreground">
                        We need clearer thinking about what intelligence means and what superintelligence implies.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/30 border-primary/20">
                    <CardContent className="pt-6">
                      <Share2 className="w-6 h-6 text-primary mb-2" />
                      <h3 className="font-semibold mb-2">Impact</h3>
                      <p className="text-sm text-muted-foreground">
                        These ideas affect individuals, organizations, and humanity's future.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6">Key Concepts</h2>
              <div className="space-y-6">
                <Card className="bg-secondary/30 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">Rationality in Artificial Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Rationality is the foundation of AI. But what does it mean for an AI system to be rational?
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Optimal Decision-Making:</strong> A rational agent makes decisions that maximize expected utility given available information.</li>
                      <li><strong>Consistency:</strong> Rational agents follow consistent preferences and don't make contradictory choices.</li>
                      <li><strong>Adaptability:</strong> Rational agents update beliefs based on new evidence and adjust strategies accordingly.</li>
                      <li><strong>Goal Alignment:</strong> The challenge: how do we specify goals for AI systems that remain stable and beneficial as capability increases?</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">The Technological Singularity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      The singularity is the hypothetical moment when artificial superintelligence surpasses human intelligence and becomes capable of recursive self-improvement.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><strong>The Intelligence Explosion:</strong> Once AI reaches a certain capability threshold, it could improve itself, leading to explosive growth in intelligence.</li>
                      <li><strong>Unpredictability:</strong> A superintelligent AI might pursue goals in ways humans can't predict or understand.</li>
                      <li><strong>Control Problem:</strong> How do we ensure a superintelligent AI remains aligned with human values?</li>
                      <li><strong>Timeline Uncertainty:</strong> We don't know if the singularity will happen in 10 years, 100 years, or never.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/30 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">The Simulation Hypothesis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      If superintelligent civilizations can create detailed simulations of universes, we might be living in one.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Simulation Argument:</strong> At least one of these is true: civilizations don't survive to create simulations, they don't want to, or we're in a simulation.</li>
                      <li><strong>Philosophical Implications:</strong> What would it mean for our reality if we're simulated? Does it change our ethics or obligations?</li>
                      <li><strong>Computational Concerns:</strong> Creating human-level simulations requires enormous computational power. Perhaps more than any civilization could provide.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-6">Further Exploration</h2>
              <p className="text-muted-foreground mb-6">
                These are complex, open-ended questions that philosophers, scientists, and technologists continue to debate. There are no definitive answers. Only increasingly sophisticated ways of thinking about them.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto justify-start p-4" asChild>
                  <Link href="/writings" className="flex flex-col items-start">
                    <span className="font-semibold">Read Full Essays</span>
                    <span className="text-xs text-muted-foreground">Deeper explorations by Vedang Vatsa</span>
                  </Link>
                </Button>
                <Button variant="outline" className="h-auto justify-start p-4" asChild>
                  <Link href="/web3-101" className="flex flex-col items-start">
                    <span className="font-semibold">Web3 & Decentralization</span>
                    <span className="text-xs text-muted-foreground">How AI and Web3 intersect</span>
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
