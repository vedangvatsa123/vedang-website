
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Users, Hand, ShieldCheck, Zap, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'The Agentic Web | A Free Course on AI Agents',
    description: 'A free, self-paced course on the Agentic Web. Learn how autonomous AI agents are transforming the internet from a network of information into a platform for action.',
    alternates: {
      canonical: '/agentic-web',
    },
};

const faqItems = [
  {
    question: "How is an 'AI Agent' different from a regular chatbot like ChatGPT?",
    answer: "A chatbot responds to your prompts. An AI agent acts on your goals. You tell a chatbot, 'What are the steps to book a flight?' You tell an agent, 'Book me the cheapest flight to Tokyo for next Tuesday.' The agent then performs the steps autonomously, interacting with websites and services on your behalf."
  },
  {
    question: "Is the Agentic Web just a theoretical concept?",
    answer: "No, it's already emerging. Services like ChatGPT Agent, Google's Project Mariner, and Genspark's Super Agent are early examples of agentic systems that can perform multi-step tasks. The underlying protocols and architectures are being built now to support a more widespread agentic ecosystem."
  },
  {
    question: "Will agents replace jobs like web developers or travel agents?",
    answer: "The roles will evolve. Just as the web didn't eliminate all information-based jobs, the Agentic Web won't eliminate developers or service professionals. It will automate tedious tasks, allowing humans to focus on higher-level strategy, creativity, complex problem-solving, and managing the agents themselves."
  },
  {
    question: "What is the 'Agent Attention Economy'?",
    answer: "In the current web, companies compete for human attention (clicks, views). In the Agentic Web, a new economy emerges where services and tools compete for agent attention. An agent choosing to use Service A's API over Service B's becomes the new form of a 'click,' driving value and creating a new marketplace."
  },
  {
    question: "Is this secure? What are the risks?",
    answer: "This is one of the most critical challenges. Security and alignment are paramount. An agent with access to your digital life could be misused if not properly constrained. Module 5 of this course is dedicated to these challenges, discussing the need for robust permissions, monitoring, and ensuring agents act ethically and in your best interest."
  },
  {
    question: "Do I need to be a programmer to understand the Agentic Web?",
    answer: "Not at all. This course is designed for a broad audience. The concepts are explained in a way that is accessible to everyone, regardless of technical background. It's more about understanding the paradigm shift, similar to how one might learn about the social media revolution without needing to code."
  },
];


export default function AgenticWebCoursePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">

        <section className="text-center pt-16 pb-12 bg-gradient-to-b from-background to-secondary/30">
             <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Badge variant="secondary" className="animate-pulse">
                    <Star className="w-3 h-3 mr-1.5" />
                    A Free, Self-Paced Course
                </Badge>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-primary">
                    The Agentic Web
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    The internet is evolving. It's no longer just a place to find information—it's becoming a platform for autonomous AI agents to get things done. This course demystifies the Agentic Web, where you delegate goals, and AI handles the execution.
                </p>

                <div className="mt-8 flex justify-center items-center gap-4">
                    <Badge variant="outline">By: Vedang Vatsa</Badge>
                    <Badge variant="outline">Prerequisite: Curiosity</Badge>
                </div>
            </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 max-w-5xl py-16 space-y-12">
            
            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <BrainCircuit className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 1</CardDescription>
                            <CardTitle className="text-2xl">The Core Idea: From Information Web to Action Web</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                     <p className="text-muted-foreground">This module introduces the fundamental shift from a human-driven web to an agent-driven one. You'll learn how the internet is evolving from a passive library of information into a dynamic ecosystem where autonomous agents perform complex tasks on your behalf.</p>
                    <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">The Evolution of the Web</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <ul className="my-6">
                                    <li><strong>Web 1.0 (The Read Web):</strong> A one-way street. You could read information from static websites, like a digital encyclopedia. Interaction was minimal.</li>
                                    <li><strong>Web 2.0 (The Read-Write Web):</strong> A two-way conversation. You could not only read but also create and share content on platforms like social media, blogs, and forums. However, these platforms own your data and control the rules.</li>
                                    <li><strong>The Agentic Web (The Read-Write-Act Web):</strong> The next leap. You delegate high-level goals ("Plan my vacation," "Research competitors") to autonomous AI agents, which then interact with the web to execute them. You own the intent, and the agent performs the action.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg">What is an AI Agent?</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>An AI agent is more than just a chatbot. It's an autonomous system that can:</p>
                                <ul className="my-6">
                                    <li><strong>Perceive:</strong> Understand its digital environment (e.g., read a webpage, interpret an API response).</li>
                                    <li><strong>Reason & Plan:</strong> Break down a complex goal into smaller, manageable steps.</li>
                                    <li><strong>Act:</strong> Execute those steps by interacting with websites, using tools, and even communicating with other agents.</li>
                                    <li><strong>Learn:</strong> Adapt its behavior based on the results of its actions and new information.</li>
                                </ul>
                                <p>The key is autonomy. You set the destination, and the agent figures out how to drive there, handling all the turns, traffic, and detours along the way.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Zap className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 2</CardDescription>
                            <CardTitle className="text-2xl">The Core Components of Agentic Systems</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <p className="text-muted-foreground">To understand the Agentic Web, you need to know its building blocks. This module explores the key components that enable agents to function, from their internal "minds" to the external tools they use to interact with the world.</p>
                     <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">The Agent's Mind: Reasoning and Planning</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>At the heart of every agent is a Large Language Model (LLM) that acts as its cognitive engine. But the agent's intelligence isn't just the LLM; it's the framework around it.</p>
                                <ul>
                                    <li><strong>Planning:</strong> Agents use techniques like Chain of Thought or Tree of Thoughts to break down a high-level goal (e.g., "Find a good Italian restaurant") into a sequence of actions ("1. Search for Italian restaurants near me. 2. Filter by ratings above 4 stars. 3. Check for available reservations. 4. Present the top 3 options.").</li>
                                    <li><strong>Memory:</strong> Agents need both short-term memory (to remember the current task) and long-term memory (to recall user preferences or past successes) to be effective. This is often managed through external vector databases.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                             <AccordionTrigger className="text-lg">Tool Use: The Agent's Hands</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>An agent without tools is just a thinker. Tools allow it to act. A "tool" can be almost anything:</p>
                                 <ul>
                                    <li><strong>Web Search:</strong> To get real-time information.</li>
                                    <li><strong>APIs:</strong> To interact with services like weather forecasts, flight booking systems, or e-commerce platforms.</li>
                                    <li><strong>Code Execution:</strong> To run Python scripts for data analysis or other complex calculations.</li>
                                    <li><strong>Web Browsing:</strong> To navigate websites, fill out forms, and click buttons, just like a human user.</li>
                                </ul>
                                <p>The agent's ability to seamlessly select, use, and interpret the output of these tools is what makes it so powerful.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg">Multi-Agent Systems: Teamwork Makes the Dream Work</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>Complex problems often require a team. In the Agentic Web, this means multi-agent systems, where different agents with specialized skills collaborate.</p>
                                 <ul>
                                    <li><strong>Example:</strong> A "Vacation Planner" agent might act as the project manager. It would delegate tasks to a "Flight Booker" agent, a "Hotel Finder" agent, and a "Local Activities" agent.</li>
                                    <li><strong>Architectures:</strong> This collaboration can be hierarchical (a manager agent directing specialist agents) or peer-to-peer (agents debating and working together as equals).</li>
                                </ul>
                                <p>This approach allows for a division of labor, making it possible to tackle incredibly complex, multi-domain problems.</p>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Users className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 3</CardDescription>
                            <CardTitle className="text-2xl">The Three Dimensions of the Agentic Web</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                 <CardContent className="p-6">
                     <p className="text-muted-foreground">The Agentic Web can be understood through three interconnected layers. Each layer builds on the one before it, showing how agents evolve from simple reasoners to active participants in a new digital economy.</p>
                     <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">The Intelligence Dimension</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>This is the foundation. It's the agent's ability to think, plan, and learn. It encompasses the core cognitive abilities powered by LLMs, such as contextual understanding, long-horizon planning, and adapting based on feedback. Without this dimension, an agent is just a simple script.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                             <AccordionTrigger className="text-lg">The Interaction Dimension</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>This layer is about communication and coordination. How do agents talk to each other and to the web? This dimension includes:</p>
                                <ul>
                                  <li><strong>Agent-to-Tool Communication:</strong> Standardized protocols (like the Model Context Protocol or MCP) that allow an agent to reliably discover and use any tool or API.</li>
                                  <li><strong>Agent-to-Agent Communication:</strong> Protocols (like A2A) that let agents from different developers and platforms collaborate, negotiate, and share information.</li>
                                </ul>
                                <p>This dimension is creating the "HTTP for agents," a universal language that will allow the entire ecosystem to connect.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg">The Economic Dimension</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>This is the most transformative layer. Once agents can intelligently interact, they can exchange value. This dimension includes:</p>
                                <ul>
                                  <li><strong>Agent-as-User:</strong> Agents become the primary "users" of many online services.</li>
                                  <li><strong>Agent Attention Economy:</strong> Instead of competing for human clicks, services will compete to be chosen by agents. An agent selecting your API becomes a valuable economic event.</li>
                                  <li><strong>Autonomous Transactions:</strong> Agents will be able to manage budgets, make purchases, and even earn value on behalf of their users, creating new, machine-native economies.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Hand className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 4</CardDescription>
                            <CardTitle className="text-2xl">Applications: The Agentic Web in Action</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <p className="text-muted-foreground">The Agentic Web is not science fiction; it's being built today. This module explores the three main ways agents are currently being applied, showcasing how they are already changing our digital lives.</p>
                     <Accordion type="single" collapsible className="w-full mt-4">
                         <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Informational Agents: Your Personal Researcher</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>These agents are designed to autonomously find, synthesize, and analyze information. They go far beyond a simple web search.</p>
                                <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2"><strong>Example: A "Deep Research Agent."</strong> You could ask it to "Create a report on the current state of quantum computing, including the top research labs, recent breakthroughs, and major challenges." The agent would then spend hours or days scanning academic papers, news articles, and company websites, synthesizing the information into a structured, comprehensive report.</blockquote>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg">Transactional Agents: Your Personal Assistant</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>These agents execute tasks and make transactions on your behalf. They are designed to interact with the web's services to get things done in the real world.</p>
                                <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2"><strong>Example: A "Travel Agent."</strong> You tell it, "Book a round-trip flight to San Francisco for the first week of June, staying in a 4-star hotel near the conference center, all under a $1500 budget." The agent then interacts with airline and hotel booking sites, compares options, and completes the purchases.</blockquote>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg">Communicational Agents: Your Digital Diplomat</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>These agents excel at coordinating with other agents to achieve a common goal. This is the foundation of complex, multi-agent systems.</p>
                                <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2"><strong>Example: A "Supply Chain Agent."</strong> In a manufacturing company, a supplier's agent could automatically notify a logistics agent of a shipment delay. The logistics agent would then communicate with a factory agent to adjust production schedules, all without any human intervention.</blockquote>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                     <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <ShieldCheck className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 5</CardDescription>
                            <CardTitle className="text-2xl">The Future: Challenges and Opportunities</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                 <CardContent className="p-6">
                     <p className="text-muted-foreground">The Agentic Web holds incredible promise, but it also presents significant challenges in security, ethics, and economics. This module explores the open questions we must solve to build a safe and prosperous agentic future.</p>
                     <Accordion type="single" collapsible className="w-full mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Security and Trust: The Tool-Use Paradox</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>The very tools that give agents their power also create their biggest vulnerability. To be useful, an agent must trust its tools (like APIs and websites). But to be secure, it must assume any tool could be compromised.</p>
                                <p>Solving this requires a "zero-trust" architecture for agents, where every piece of information from an external tool is validated. We also need robust systems for permissions and oversight, ensuring an agent can't perform actions (especially financial ones) without the right authority.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-2">
                             <AccordionTrigger className="text-lg">Human-Agent Alignment: Who's in Control?</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                               <p>How do we ensure that an agent truly understands and acts on our intentions, especially when our instructions are vague or our preferences change? This is the alignment problem. It requires building agents that can:</p>
                                <ul>
                                    <li><strong>Ask Clarifying Questions:</strong> To resolve ambiguity before acting.</li>
                                    <li><strong>Elicit Preferences:</strong> To help users discover what they really want.</li>
                                    <li><strong>Enable Oversight:</strong> To provide clear, intuitive ways for humans to monitor, intervene, and take back control when needed.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                             <AccordionTrigger className="text-lg">The New Economy: Beyond Advertising</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                               <p>The current web is largely funded by advertising. This model breaks down when the primary "users" are agents, not humans. The Agentic Web will require new business models:</p>
                                <ul>
                                    <li><strong>Transactional Fees:</strong> Paying small fees for successful task completion.</li>
                                    <li><strong>Subscription Services:</strong> Paying for access to a powerful, specialized agent.</li>
                                    <li><strong>Value-Based Pricing:</strong> Paying for the outcome (e.g., a percentage of the money saved by a negotiation agent).</li>
                                </ul>
                                <p>This transition presents a massive opportunity to build a more direct and efficient digital economy, but it also poses significant challenges in billing, resource tracking, and regulation.</p>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <section id="faq" className="py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Your common questions about the Agentic Web, answered.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto mt-12">
                    <Accordion type="single" collapsible className="w-full grid md:grid-cols-2 gap-x-8">
                       {faqItems.map((item, index) => (
                         <AccordionItem key={index} value={`faq-${index + 1}`}>
                            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                       ))}
                    </Accordion>
                </div>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
