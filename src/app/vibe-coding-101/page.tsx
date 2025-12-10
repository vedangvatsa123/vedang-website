
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
import { Bot, BrainCircuit, Code, DraftingCompass, ExternalLink, Hand, Lightbulb, MonitorPlay, Palette, ShieldCheck, Star, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import VibeCodingInfographic from './Vibe_coding_infographic_Vedang_Vatsa.webp';
import VibeCodingModule1 from './Vibe_coding_module1_vedang_vatsa.webp';


export const metadata: Metadata = {
    title: 'Vibe Coding 101 | A Free Course on Building with AI',
    description: 'A free, self-paced course on the art of building software by describing what you want, not by writing code line-by-line. Go from beginner to builder by learning to manage an AI partner.',
    alternates: {
      canonical: '/vibe-coding-101',
    },
};

const referenceLinks = [
    { 
        name: 'Official Vibe Coding Resources', 
        links: [
            { name: 'What is Vibe Coding? (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-vibe-coding' },
            { name: 'Introduction to Vibe Coding (Microsoft Learn)', url: 'https://learn.microsoft.com/en-us/training/modules/introduction-vibe-coding/' },
            { name: 'Vibe Coding Fundamentals (Coursera)', url: 'https://www.coursera.org/learn/vibe-coding-fundamentals' },
            { name: 'Vibe Coding 101 with Replit (DeepLearning.AI)', url: 'https://www.deeplearning.ai/short-courses/vibe-coding-101-with-replit/' },
        ]
    },
    { 
        name: 'Firebase / Firebase Studio', 
        links: [
            { name: 'Firebase Studio Docs', url: 'https://firebase.google.com/docs/studio' },
            { name: 'Firebase Docs', url: 'https://firebase.google.com/docs' }
        ]
    },
    { 
        name: 'Replit', 
        links: [
            { name: 'Replit Docs', url: 'https://docs.replit.com' },
            { name: 'Replit Learn', url: 'https://replit.com/learn' }
        ]
    },
     { 
        name: 'Lovable', 
        links: [
            { name: 'Lovable Docs', url: 'https://docs.lovable.dev' }
        ]
    },
    {
        name: 'Vercel v0',
        links: [
            { name: 'v0 Docs', url: 'https://v0.dev' },
            { name: 'Vercel Docs', url: 'https://vercel.com/docs' },
        ],
    },
     {
        name: 'Bolt.new (StackBlitz)',
        links: [
            { name: 'Bolt.new', url: 'https://bolt.new' },
            { name: 'StackBlitz Docs', url: 'https://developer.stackblitz.com' },
        ],
    },
    { 
        name: 'Claude Code', 
        links: [
            { name: 'Overview', url: 'https://code.claude.com/docs/en/overview' },
            { name: 'Platform Docs', url: 'https://platform.claude.com/docs/en/home' }
        ]
    },
    { 
        name: 'Cursor', 
        links: [
            { name: 'Cursor Docs', url: 'https://cursor.com/docs' },
            { name: 'Homepage', url: 'https://cursor.com' }
        ]
    },
    { 
        name: 'GitHub Copilot', 
        links: [
            { name: 'Copilot Docs', url: 'https://docs.github.com/en/copilot' }
        ]
    },
    { 
        name: 'OpenAI (ChatGPT / APIs)', 
        links: [
            { name: 'Platform Docs', url: 'https://platform.openai.com/docs' },
            { name: 'Cookbook', url: 'https://cookbook.openai.com' }
        ]
    },
    { 
        name: 'Supabase', 
        links: [
            { name: 'Supabase Docs', url: 'https://supabase.com/docs' },
            { name: 'Learn', url: 'https://supabase.com/learn' }
        ]
    },
];

const faqItems = [
  {
    question: "Do I need to know how to code at all?",
    answer: "Not to get started. The tools are designed to work with plain English. However, understanding basic HTML and CSS concepts will help you communicate more effectively with the AI. You'll naturally pick up these concepts as you build."
  },
  {
    question: "Is this 'real' programming?",
    answer: "Yes. You are creating real, production-quality code. The only thing that's changed is the interface. Instead of typing code, you are describing it. The end result is the same: a functional software application. Your role shifts from a 'coder' to a 'technical director.'"
  },
  {
    question: "Can I build complex applications with this method?",
    answer: "Absolutely. While it's perfect for prototypes and simple tools, you can build incredibly complex applications. The key is to break down the complexity into smaller, manageable parts and guide the AI step-by-step, just as a project manager would guide a team of developers."
  },
  {
    question: "What are the biggest mistakes beginners make?",
    answer: "The biggest mistake is giving vague, one-shot prompts like 'build me a social media app.' Vibe coding is a conversation. The second biggest mistake is not using version control ('Checkpoints'). You must save your progress after every successful step, because the AI will occasionally make mistakes."
  },
  {
    question: "Which tool should I start with?",
    answer: "If you're a visual person and want to build a web app, start with Lovable.dev. If you're more interested in logic, bots, or backend services, start with Replit. Both are excellent for beginners because they require zero setup. Firebase Studio is fantastic when you're ready to build something that can scale to a large audience."
  },
  {
    question: "How do I handle errors and bugs?",
    answer: "Your new job isn't to fix the bug, but to report it correctly. When you get an error message, copy the entire message, paste it back to the AI, and say, 'We have an error, please fix this.' 9 times out of 10, the AI will understand and correct its own mistake."
  },
  {
    question: "Can I sell the apps I build?",
    answer: "Yes! You own the code and the final product. People are already building successful SaaS businesses, freelance careers, and agencies using Vibe Coding. Your ability to build and iterate quickly is a massive competitive advantage."
  },
  {
    question: "Is my job as a developer at risk?",
    answer: "No, but it is changing. Your value is shifting from writing boilerplate code to high-level architecture, system design, and product vision. Developers who embrace Vibe Coding become 10x more productive and valuable. It's a massive career accelerator."
  },
  {
    question: "What about security and privacy?",
    answer: "This is critical. You are still responsible for the final code. You must instruct the AI on security best practices, such as never hard-coding API keys and always hashing user passwords. In Module 5, we cover how to create a 'rules' file to enforce these policies automatically."
  },
  {
    question: "Where can I learn more?",
    answer: "This course is your starting point. The best way to learn is by building. Think of a small, fun project and try to build it with one of the tools mentioned. Follow people like Andrej Karpathy and other Vibe Coders on social media to see what's possible. The field is moving incredibly fast, and the community is the best resource."
  },
];


export default function VibeCodingCoursePage() {
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
                    Vibe Coding 101
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Build real apps without writing code. Just describe what you want in plain English and work with AI to make it happen. Perfect for founders, designers, marketers, and curious builders. Turn ideas into working products fast. Let’s build.
                </p>

                <div className="mt-8 flex justify-center items-center gap-4">
                    <Badge variant="outline">By: Vedang Vatsa</Badge>
                    <Badge variant="outline">Prerequisite: None</Badge>
                    <Badge variant="outline">Cost: Free</Badge>
                </div>

                <div className="mt-8 aspect-video rounded-lg overflow-hidden shadow-2xl border max-w-3xl mx-auto">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/m6rhnlaNjDY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                  </iframe>
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
                            <CardTitle className="text-2xl">The Philosophy: From Coder to Director</CardTitle>
                        </div>
                    </div>
                    <p className="text-muted-foreground pt-2">Vibe coding is a fundamental shift in how we create. It is not just about writing code faster; it is about changing your role from a bricklayer to an architect. This module is about adopting the right mindset to effectively guide an AI, turning your vision into a real product without getting lost in the syntax. You will learn to think about the 'what' and 'why,' leaving the 'how' to your new AI partner.</p>
                    <Image 
                        src={VibeCodingModule1}
                        alt="Infographic for Module 1 of Vibe Coding course"
                        className="mt-4 rounded-lg shadow-md w-full"
                        data-ai-hint="infographic technology"
                    />
                </CardHeader>
                <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">What is Vibe Coding?</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>Coined by AI researcher Andrej Karpathy, “vibe coding” describes a new partnership between human and machine. Instead of manually writing every line of code, you describe your goal in natural language and the AI generates the application. Your role evolves from a coder, focused on syntax and implementation, to a director, focused on vision, refinement, and user experience.</p>
                                <div className="grid md:grid-cols-2 gap-6 my-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg font-semibold">The Old Way: Architect & Bricklayer</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">Traditionally, you had to design the house and lay every brick. You needed to know JavaScript, Python, CSS, and SQL. A forgotten semicolon could crash everything. Your value was tied to memorizing syntax, creating a high barrier for new builders.</p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-primary/50">
                                        <CardHeader>
                                            <CardTitle className="text-lg font-semibold">The Vibe Way: Product Manager & Creative Director</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">Now, you are the visionary. You say, "I need a recipe app with a clean design," and the AI writes the React code. Your value is in your clarity of vision and your ability to refine the result. The AI is a tireless junior developer that handles the tedious details.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <p>The goal is to focus on the product, not the code. You operate at a higher level of abstraction, guiding the AI as an extension of your creative will. This democratizes building, empowering anyone with a good idea to bring it to life.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg">The GCES Framework for Prompting</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>The quality of your output depends entirely on the quality of your input. The GCES framework helps you write effective prompts that leave no room for AI guesswork. It ensures you provide the necessary detail for the AI to give you what you need on the first try.</p>
                                <div className="space-y-4 my-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-md mt-1"><Star className="w-5 h-5 text-primary flex-shrink-0" /></div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">1. Goal: What do you want the AI to do?</h4>
                                            <p className="text-muted-foreground">Be specific and action-oriented. Start with a verb. This tells the AI its primary objective. Example: "Create a contact form with name, email, and message fields."</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-md mt-1"><BrainCircuit className="w-5 h-5 text-primary flex-shrink-0" /></div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">2. Context: What does the AI need to know?</h4>
                                            <p className="text-muted-foreground">Who is the user? What is the purpose of this feature? This helps the AI make better decisions about tone and style. Example: "This is for a local bakery's website. The vibe should be warm and friendly."</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-md mt-1"><DraftingCompass className="w-5 h-5 text-primary flex-shrink-0" /></div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">3. Expectations: What should the final output look like?</h4>
                                            <p className="text-muted-foreground">Define the constraints. Be specific about design, components, and behavior. Example: "Use the 'Card' and 'Button' components. The primary color should be a pastel pink. The form must be mobile-responsive."</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-md mt-1"><MonitorPlay className="w-5 h-5 text-primary flex-shrink-0" /></div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">4. Source: Can you provide an example?</h4>
                                            <p className="text-muted-foreground">AIs are excellent pattern-matchers. Give a concrete example. Example: "For the layout, I'm inspired by Stripe.com's homepage. Use that as a visual reference for spacing and fonts."</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Using this framework turns a vague idea into a concrete plan, dramatically improving the quality of the AI's first draft and saving you hours of refinement.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Palette className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 2</CardDescription>
                            <CardTitle className="text-2xl">The Modern Toolkit</CardTitle>
                        </div>
                    </div>
                     <p className="text-muted-foreground pt-2">Your toolbox determines your speed and capabilities. There is no single 'best' tool, only the right tool for the job. We will explore the landscape from beginner friendly visual builders to professional grade code editors, so you can choose the one that best fits your project and your style.</p>
                </CardHeader>
                <CardContent className="p-6">
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Choosing Your Environment: Cloud vs. Local</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>The first choice is where you will code. Think of it like a workshop: do you want to rent a fully equipped space, or build one in your garage? Both have advantages.</p>
                                <div className="grid md:grid-cols-2 gap-6 my-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg font-semibold">Cloud IDEs (The Rented Workshop)</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">Examples: <strong>Replit, Firebase Studio, Lovable.dev.</strong><br/><br/>These all in one platforms run in your browser. They require zero setup, making them perfect for beginners. You sign up and start building immediately, letting you focus on creating instead of configuring.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg font-semibold">Local IDEs (Your Garage Workshop)</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                             <p className="text-sm text-muted-foreground">Examples: <strong>Cursor, VS Code with Gemini.</strong><br/><br/>This is software you install on your computer. It gives you more control and is preferred by many professionals. It requires some initial setup but offers ultimate power and customization. This course recommends starting with a Cloud IDE.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                             <AccordionTrigger className="text-lg">A Tour of Your Options</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>Let us look at some of the best tools available. Each has a different 'vibe' and is suited for different kinds of projects.</p>
                                
                                <Card className="my-6">
                                    <CardHeader>
                                        <CardTitle>Firebase Studio: The Production Scaler</CardTitle>
                                    </CardHeader>
                                     <CardContent className="flex flex-col sm:flex-row items-start gap-4">
                                         <Image src="https://picsum.photos/seed/firebase/200/120" alt="Firebase Studio interface" width={200} height={120} className="rounded-md m-0 flex-shrink-0" data-ai-hint="cloud dashboard" />
                                        <div>
                                            <h5 className="mt-0 font-semibold text-foreground">Best For: Building robust, production ready applications that need to handle millions of users.</h5>
                                            <p className="text-sm text-muted-foreground"><strong>Workflow:</strong> Firebase Studio generates a "Blueprint" (a detailed plan of all file changes) that you review and approve. This gives you maximum control and prevents the AI from making unwanted changes. It deploys to Google Cloud, providing enterprise grade security and scalability automatically.</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="my-6">
                                    <CardHeader>
                                        <CardTitle>Lovable.dev: The Visual App Builder</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col sm:flex-row items-start gap-4">
                                        <Image src="https://picsum.photos/seed/lovable/200/120" alt="Lovable.dev interface" width={200} height={120} className="rounded-md m-0 flex-shrink-0" data-ai-hint="dashboard interface" />
                                        <div>
                                            <h5 className="mt-0 font-semibold text-foreground">Best For: Beautiful, visual web apps like dashboards and SaaS products.</h5>
                                            <p className="text-sm text-muted-foreground">
                                              <strong>How it works:</strong> You chat with the AI, and it visually paints the user interface in real time. It feels like a no code tool, but it produces high quality React code you can own. It connects seamlessly with <strong>Supabase</strong> to handle user logins and data with simple prompts.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="my-6">
                                    <CardHeader>
                                        <CardTitle>Replit: The All-in-One Workshop</CardTitle>
                                    </CardHeader>
                                     <CardContent className="flex flex-col sm:flex-row items-start gap-4">
                                        <Image src="https://picsum.photos/seed/replit/200/120" alt="Replit interface" width={200} height={120} className="rounded-md m-0 flex-shrink-0" data-ai-hint="code editor" />
                                        <div>
                                            <h5 className="mt-0 font-semibold text-foreground">Best For: Logic heavy apps, bots, backend services, and learning any programming language.</h5>
                                            <p className="text-sm text-muted-foreground"><strong>How it works:</strong> Replit gives you a full computer in the cloud with a code editor, terminal, and live preview. Its AI can generate entire projects from a single, detailed prompt and offers one click deployment to a live URL.</p>
                                        </div>
                                    </CardContent>
                                </Card>
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
                            <CardDescription>Module 3</CardDescription>
                            <CardTitle className="text-2xl">The Art of the Prompt</CardTitle>
                        </div>
                    </div>
                    <p className="text-muted-foreground pt-2">In Vibe Coding, the quality of your prompt determines the quality of your product. This is not about 'prompt hacks' it is about structured communication. This module will teach you how to write the 'documents' that guide the AI, turning you into a master communicator and an effective director of your AI partner.</p>
                </CardHeader>
                 <CardContent className="p-6">
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">The PRD (Product Requirements Document)</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>Never start a project with an empty chat box. You need a plan. In product management, this is called a PRD. For us, it is a simple text file that tells the AI exactly what to build. It is your architectural blueprint. A vague idea leads to a vague app.</p>
                                <ul>
                                  <li><strong>Why it's critical:</strong> The saying is "Garbage in, garbage out." A PRD forces you to clarify your own thinking before you start "coding." The act of writing down your plan is half the work.</li>
                                  <li><strong>How to Generate One (The Meta Skill):</strong> You can use an AI to help you create the plan for your other AI. Prompt ChatGPT or Gemini:
                                    <blockquote className="border-l-4 border-primary/50 pl-4 italic my-4">"You are an expert product manager. I want to build a [Recipe App for users with food allergies]. Interview me to create a detailed Product Requirements Document (PRD). Ask me clarifying questions about features, user roles, data models, and design."</blockquote>
                                    The AI will then guide you, forcing you to think through all the details.
                                  </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-2">
                             <AccordionTrigger className="text-lg">The Iterative Loop: Your Conversation with the AI</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>Vibe coding is not a one shot command; it is a conversation. Great products are built through iteration. It is like sculpting: you start with a block and slowly chip away. No one gets it perfect on the first try.</p>
                                <ol className="my-6 space-y-4">
                                  <li><strong>1. Prompt:</strong> Give your clear, structured instruction.
                                    <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2">"Build the login page with email and password fields, plus a 'Login' button. Use our brand's primary blue for the button."</blockquote>
                                  </li>
                                  <li><strong>2. Review:</strong> The AI generates the page. It is functional. You look at it and think, "The button is too small and the color is too bright."</li>
                                  <li><strong>3. Refine:</strong> You provide specific, actionable feedback. Do not say "it is wrong." Say what to change.
                                    <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2">"Make the login button 20% larger and use a darker shade of blue (#4A90E2). Add a 'Forgot Password?' link below it."</blockquote>
                                  </li>
                                  <li><strong>4. Repeat:</strong> Continue this cycle. Each loop gets you closer to your perfect product. This is not failure; it is the creative process.</li>
                                </ol>
                                <p>Embracing this loop is the key to creating something truly great. It’s a dance between your vision and the AI’s execution, and your job is to lead.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg">Advanced Prompting Techniques</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>Once you've mastered the basics, you can use more advanced techniques to get even better results from the AI. These methods give you more control and lead to higher-quality code.</p>
                                <div className="space-y-4 my-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-md mt-1"><Bot className="w-5 h-5 text-primary flex-shrink-0" /></div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Persona Prompting: Get Expert Advice</h4>
                                            <p className="text-muted-foreground">Start your prompt by telling the AI who it is. This focuses its knowledge and improves the quality of its output. Instead of a generic response, you get an expert one.</p>
                                            <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2 text-sm">"You are an expert security engineer. Review this code for vulnerabilities and suggest improvements."</blockquote>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-md mt-1"><BrainCircuit className="w-5 h-5 text-primary flex-shrink-0" /></div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Chain of Thought: See the AI's Reasoning</h4>
                                            <p className="text-muted-foreground">If a task is complex, ask the AI to "think step-by-step." This forces it to break down the problem and show its work, often leading to better results and making it easier for you to debug its logic.</p>
                                             <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2 text-sm">"I need to connect to a new API. First, think step-by-step about what you need to do. Then, write the code."</blockquote>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-2 rounded-md mt-1"><Hand className="w-5 h-5 text-primary flex-shrink-0" /></div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">Negative Prompts: State What to Avoid</h4>
                                            <p className="text-muted-foreground">Sometimes, it's easier to say what you *don't* want. Explicitly telling the AI to avoid certain things can be a powerful way to guide it.</p>
                                             <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2 text-sm">"Generate a list of startup names. Do not use generic words like 'synergy,' 'cloud,' or 'link'."</blockquote>
                                        </div>
                                    </div>
                                </div>
                                <p>By combining these techniques with the GCES framework, you can elevate your prompts from simple commands to sophisticated directives, resulting in a product that more closely matches your vision from the very first draft.</p>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
                <CardHeader className="bg-secondary/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Code className="w-8 h-8 text-primary"/>
                        </div>
                        <div>
                            <CardDescription>Module 4</CardDescription>
                            <CardTitle className="text-2xl">Lab: Building a "Startup Name Generator"</CardTitle>
                        </div>
                    </div>
                    <p className="text-muted-foreground pt-2">It is time to apply your knowledge and build a real, functional web application. We will walk through building a "Startup Name Generator" from a single prompt, refining it, and deploying it. This is where theory meets practice, and you'll create something you can actually share.</p>
                </CardHeader>
                <CardContent className="p-6">
                     <Accordion type="single" collapsible className="w-full">
                         <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Building with Firebase Studio</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>We will use Firebase Studio for this project because it is one of the fastest ways to go from an idea to a live, scalable application. It handles the backend, frontend, and deployment in one place.</p>
                                <ol className="space-y-4">
                                  <li>Go to <strong>Firebase Studio</strong> and start a new project.</li>
                                  <li><strong>Initial Prompt (The Big Idea):</strong> In the main prompt area, describe the entire application you want to build. This is where your PRD pays off.
                                    <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2">"Create a 'startup name generator' app. It needs a text box where I can enter an industry, and a 'Generate' button. When I click the button, it should show a list of 10 creative names. The design should be modern and professional, with a dark gray background and bright green text for a 'techy' feel. The app should be fully responsive."</blockquote>
                                  </li>
                                  <li><strong>Review the Blueprint:</strong> Firebase Studio will generate a blueprint for you to review. This is its plan. You can provide feedback here before any code is written. Example feedback: <br/><blockquote className="border-l-4 border-primary/50 pl-4 italic my-2">"This looks good, but add a 'Copy to Clipboard' button next to each generated name."</blockquote></li>
                                  <li><strong>Generate and Refine:</strong> Once you approve the blueprint, the AI generates the full application. Now you can use the chat to refine it.
                                     <blockquote className="border-l-4 border-primary/50 pl-4 italic my-2">"The generated names are too generic. Modify the backend prompt to the AI to be more creative and witty. Tell it to 'think like a Silicon Valley branding expert.' Also, make the loading spinner more subtle."</blockquote>
                                  </li>
                                   <li><strong>Deploy to the World:</strong> In the Firebase Studio dashboard, click the <strong>Publish</strong> button. Your app is now live on the internet, running on Google's scalable infrastructure. Congratulations, you have just built and deployed a full stack AI application.</li>
                                </ol>
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
                            <CardTitle className="text-2xl">From Project to Professional Product</CardTitle>
                        </div>
                    </div>
                     <p className="text-muted-foreground pt-2">Building is the first step; creating sustainable value is the goal. This module covers how to turn your vibe coded project into a secure, monetizable product and how this new skill reshapes your career path. This is about moving from prototype to professional.</p>
                </CardHeader>
                 <CardContent className="p-6">
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Security: Your Responsibility as Director</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>Speed can introduce security gaps. The AI is a junior developer; it does not automatically know your security requirements. You must be the senior developer who sets the rules. This is a non negotiable part of professional vibe coding.</p>
                                <ul>
                                  <li><strong>The Risk:</strong> An AI might hardcode your private API keys into public code or create a login function with weak password requirements. It does not know what is sensitive unless you tell it.</li>
                                  <li><strong>The Fix: The Rule File.</strong> You must create a rule file (e.g., `.cursorrules` or `CLAUDE.md`). This file is your permanent set of instructions that the AI cannot ignore.
                                    <blockquote className="border-l-4 border-primary/50 pl-4 italic my-4">
                                    <strong>Rule #1 (Secrets):</strong> Always use environment variables for API keys. Never hardcode secrets. Refer to them using `process.env.VARIABLE_NAME`.<br/><br/>
                                    <strong>Rule #2 (Passwords):</strong> All user passwords must be securely hashed using `bcrypt` before being stored. Never store passwords in plain text.
                                    </blockquote>
                                  </li>
                                </ul>
                                <p>Setting these guardrails up front empowers the AI to build safely on your behalf, turning it from a potential liability into a trusted partner.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-2">
                             <AccordionTrigger className="text-lg">Monetization: From Project to Profit</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>How do you turn your cool app into a business? Vibe coding makes this faster than ever by dramatically lowering the cost of experimentation. You can test ideas in a weekend that used to take months.</p>
                                <ul>
                                  <li><strong>SaaS (Software as a Service):</strong> This is the most common path. Build a niche tool that solves a specific problem and charge a monthly subscription. Do not try to build the next Facebook. Instead, build a "Weekly Meal Planner for Vegan Athletes" and charge $10/month.</li>
                                  <li><strong>Freelancing and Consulting:</strong> Your new superpower is speed. You can build full stack applications for clients in a fraction of the time. You can charge a premium for your speed and deliver a working prototype in days, not months. This is incredibly valuable to businesses.</li>
                                </ul>
                                <p>The barrier to entry for entrepreneurship has never been lower. With Vibe Coding, a single person with a great idea can build a profitable business from their bedroom.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg">The "Product Engineer": Your New Career</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base pt-2">
                                <p>By mastering Vibe Coding, you are becoming a <strong>"Product Engineer."</strong> This is a new, highly valuable hybrid role that sits at the intersection of product management, design, and engineering. It is one of the most sought after roles in modern tech companies.</p>
                                <div className="my-6">
                                    <h4 className="font-semibold text-foreground">The Skill Stack Shift</h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full mt-2">
                                            <thead>
                                                <tr className="border-b">
                                                    <th className="text-left p-2 font-semibold">Traditional Developer Skills</th>
                                                    <th className="text-left p-2 font-semibold">Vibe Coding Skills</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b"><td className="p-2">Syntax Mastery</td><td className="p-2">Problem Decomposition</td></tr>
                                                <tr className="border-b"><td className="p-2">Algorithm Knowledge</td><td className="p-2">Prompt Engineering</td></tr>
                                                <tr className="border-b"><td className="p-2">Framework Expertise</td><td className="p-2">System Thinking</td></tr>
                                                <tr><td className="p-2">Database Design</td><td className="p-2">User Empathy & Quality Judgment</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p>Your value is no longer in your ability to type code. Your value is in your ability to <strong>identify valuable problems, design elegant solutions, and guide an AI to implement them effectively.</strong> You are the architect and the visionary. The AI is your team of infinitely scalable junior developers. This is the future of building.</p>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <div className="my-8">
                <Image 
                    src={VibeCodingInfographic}
                    alt="Vibe Coding Infographic by Vedang Vatsa"
                    width={1200}
                    height={675}
                    className="rounded-lg shadow-lg mx-auto"
                />
            </div>

            <section id="references" className="py-16">
                <div className="text-center">
                    <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight">Learn More & References</h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                        The tools and platforms for Vibe Coding are always evolving. Here are some of the official documentation and learning resources to help you go deeper.
                    </p>
                </div>

                 <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {referenceLinks.map((tool) => (
                        <div key={tool.name} className="break-inside-avoid">
                            <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
                            <ul className="space-y-2">
                                {tool.links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-primary group">
                                            {link.name}
                                            <ExternalLink className="ml-1.5 h-3 w-3 opacity-70 group-hover:opacity-100" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section id="faq" className="py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Still have questions? Here are some of the most common things people ask about Vibe Coding.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto mt-12">
                    <Accordion type="single" collapsible className="w-full grid md:grid-cols-2 gap-x-8">
                       {faqItems.map((item, index) => (
                         <AccordionItem key={index} value={`faq-${index + 1}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
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
