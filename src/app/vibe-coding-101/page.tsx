
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
import { Bot, BrainCircuit, Code, DraftingCompass, GitBranch, Goal, Hand, Lightbulb, MonitorPlay, Palette, Rocket, ShieldCheck, Sigma, Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'Vibe Coding 101 | A Free Course on Building with AI',
    description: 'A free, self-paced course on the art of building software by describing what you want, not by writing code line-by-line. Go from beginner to builder by learning to manage an AI partner.',
    alternates: {
      canonical: '/vibe-coding-101',
    },
};


export default function VibeCodingCoursePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <section className="text-center mb-16">
             <div className="flex justify-center items-center mb-4">
                <Star size={48} className="text-primary animate-pulse" />
            </div>
            <h1 className="text-5xl font-semibold tracking-tight">
              Welcome to Vibe Coding 101
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              This isn't just another coding course. It's a journey into a new way of creating. Forget the endless lines of syntax and frustrating bugs. Here, you'll learn the art of building software by describing what you want, in plain English, and partnering with an AI to bring your ideas to life.
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're a designer, a founder, a marketer, or just someone with a great idea, this course will empower you to build real, working applications. Your creativity is the only limit. Let's start building.
            </p>
            <div className="mt-6 flex justify-center items-center gap-4">
                <Badge variant="secondary">Instructor: Vedang Vatsa</Badge>
                <Badge variant="secondary">Prerequisite: None</Badge>
                <Badge variant="secondary">Cost: Free</Badge>
            </div>
          </section>

          <div className="space-y-12">
            
            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl"><BrainCircuit className="w-8 h-8 text-primary/80"/>Module 1: The Philosophy & The "Friendly Cat" Framework</CardTitle>
                    <p className="text-muted-foreground pt-2">Switch your mindset from "writing code" to "managing an AI." You'll learn to think like a product manager, not just a typist, which is the key to getting great results. This module is about establishing the right mental model before you ever write a prompt.</p>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>1.1 The Definition: What is Vibe Coding?</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>"Vibe Coding" isn't just a buzzword; it's a fundamental shift in how we create things with computers. Coined by Andrej Karpathy, a founding member of OpenAI, in early 2025, it describes a new, conversational relationship with the machine.</p>
                                <div className="grid md:grid-cols-2 gap-6 my-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">The Old Way: Architect & Bricklayer</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">You had to be both the person who designs the house and the person who lays every single brick. You needed to know the exact syntax for every programming language—JavaScript, Python, CSS, SQL. If you forgot a single semicolon, parenthesis, or bracket, the entire application could crash. Your value was tied to your memorization of syntax and arcane commands. It was a world of precision and punishment.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">The Vibe Way: Product Manager & Creative Director</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">Now, your role changes. You are the person with the vision. You describe *what* you want ("I need a recipe app with a clean, minimalist design that feels calming and easy to use") and the AI handles the *how* (writing the hundreds of lines of React, CSS, and database queries). Your value is now tied to the clarity of your vision and your ability to communicate it effectively.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <p>The goal isn't just to write code faster. As Karpathy put it, the ultimate goal is to "forget that the code even exists." You are meant to focus entirely on the product vision, the user experience, and the business logic. The AI becomes an extension of your creative will, a tireless junior developer that handles the tedious implementation details, allowing you to stay in a state of creative flow. It’s about moving from a world of rigid instructions to one of intuitive conversation.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>1.2 The 4 Levels of Thinking: How to Plan Your "Vibe"</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>You can't just walk up to an AI and say "make me a billion-dollar app" and expect magic. The quality of the AI's output is a direct reflection of the quality of your input. To build something great, you must use <strong>Procedural Thinking</strong>. Before you write a single prompt, you need a plan. Think through these four levels, moving from the abstract to the concrete:</p>
                                <div className="space-y-4 my-6">
                                    <div className="flex items-start gap-4">
                                        <Lightbulb className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">1. The Logical Level: The "What"</h4>
                                            <p className="text-muted-foreground">What is the absolute core function of what you're building? Boil it down to a single, simple sentence. This is your elevator pitch. If you can't explain it in one line, it's too complicated. <br/><em>Example: "It's a web app that generates healthy recipes from a list of ingredients a user already has."</em></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Goal className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">2. The Analytical Level: The "Why"</h4>
                                            <p className="text-muted-foreground">What is the *objective*? Why does this need to exist? Who is it for? This 'why' is your north star. Every feature you add should serve this purpose. <br/><em>Example: "To help busy parents with kids who have food allergies cook safe, interesting meals quickly, reducing their mental load and stress."</em></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Sigma className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">3. The Computational Level: The "How" (Data Flow)</h4>
                                            <p className="text-muted-foreground">How does the data move? You don't need to be a programmer to think this way. Just imagine a simple flowchart. What are the steps? <br/><em>Example: "User lands on the page → They see a form → They input ingredients and allergies → They click 'Generate' → The app sends this data to an AI → The AI sends back a recipe → The app displays the recipe in a clean format."</em></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <DraftingCompass className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold">4. The Procedural Level: The "Polish"</h4>
                                            <p className="text-muted-foreground">How do we make this *great*? What are the details that create a delightful user experience? This is where the "vibe" really comes to life. <br/><em>Example: "We need a 'Save to Favorites' button. The recipes should have beautiful photos. Let's add a feature to generate a 'Shopping List' for missing ingredients. The design should feel calm and uncluttered, not chaotic."</em></p>
                                        </div>
                                    </div>
                                </div>
                                <p>Thinking through these levels turns a vague idea into a concrete plan that you can communicate clearly to your AI partner. A good plan is 50% of the work done.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>1.3 The Core Framework: "The Friendly Cat"</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>To succeed in Vibe Coding, remember this mnemonic: <strong>"The Friendly Cat Dances Constantly."</strong> It's a silly phrase, but it covers the five pillars of effective AI-assisted development. This framework will be your guide through the entire process.</p>
                                <div className="space-y-4 my-6">
                                    <p><strong>(T)hinking (Frameworks):</strong> This is your pre-flight check. Use the 4 Levels of Thinking to create a clear plan *before* you type a single prompt. Know what you're building and why. Don't start a conversation with the AI without a clear agenda. This simple act of planning will save you hours of frustration and rework.</p>
                                    <p><strong>(F)riendly (Interface):</strong> Always prioritize the end-user. The "vibe" isn't just about pretty colors; it's about creating an experience that is intuitive, frictionless, and enjoyable. Before adding any feature, ask yourself: "Does this make the user's life easier or harder? Would my grandma be able to use this without instructions?" Simplicity is your best friend.</p>
                                    <p><strong>(C)heckpoints (Version Control):</strong> This is non-negotiable. The AI will make mistakes. It will misunderstand you. It will break things that were working perfectly five minutes ago. You *must* "save your game" frequently. In developer terms, this is called 'version control' (using a tool like Git). After every single successful feature addition, you create a checkpoint (a "commit"). If the AI messes something up, you can instantly rewind to the last working version without losing progress. We will cover this in detail.</p>
                                    <p><strong>(D)ebugging:</strong> When errors inevitably happen, your job is not to fix the code yourself. Your job is to be an expert diagnostician. The error message the computer gives you is not a sign of failure; it's a clue. It's usually very descriptive. Your task is to copy the entire error message, paste it back to the AI, and say, "We have an error. Here it is. Fix this." You don't need to be the surgeon; you just need to tell the surgeon where it hurts.</p>
                                    <p><strong>(C)ontext:</strong> The AI has no eyes, no history, and no real-world experience. It needs rich, specific context. Don't just say "make it pretty." That's useless. Instead, take a screenshot of a website you admire (like Stripe or Airbnb) and say, "Make the layout, color scheme, and font choices look and feel like this." Give it examples of what you like and what you don't like. The more context you provide, the better it will understand your "vibe" and the faster it will deliver what you want.</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl"><Palette className="w-8 h-8 text-primary/80"/>Module 2: The Modern Toolkit</CardTitle>
                     <p className="text-muted-foreground pt-2">Choose the right tool for your project. Your toolbox determines your speed, capabilities, and how much fun you have. There's no single "best" tool, only the right tool for the job. We'll explore the landscape from beginner-friendly visual builders to professional-grade code editors.</p>
                </CardHeader>
                <CardContent>
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>2.1 The Big Choice: Cloud vs. Local</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>First, a fundamental choice: where will you "vibe code"? Think of it like choosing between renting a fully-equipped workshop versus building one in your own garage.</p>
                                <div className="grid md:grid-cols-2 gap-6 my-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Cloud IDEs (The Rented Workshop)</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">Examples: <strong>Replit, Firebase Studio, Lovable.dev, CodeSandbox.</strong><br/><br/>These are all-in-one platforms that run in your web browser. You code, run, and deploy your application from a single tab. They are *perfect for beginners* because there is zero setup required. You just sign up and start building. The computer, the software, the AI—it's all managed for you.</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Local IDEs (Your Garage Workshop)</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                             <p className="text-sm text-muted-foreground">Examples: <strong>VS Code, Cursor, Claude Code CLI.</strong><br/><br/>This is software you run on your own computer. It gives you more control, works offline, and is preferred by many professionals for its power and customization. However, it requires some initial setup (installing tools like Node.js and Git), which can be a small hurdle for absolute beginners.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                             <AccordionTrigger>2.2 A Tour of Your Options</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>Let's look at some of the best tools available today. Each has a different "vibe" and is suited for different kinds of projects.</p>
                                <Card className="my-6">
                                    <CardHeader>
                                        <CardTitle>Lovable.dev: The "Magic Wand" for Visual Apps</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col sm:flex-row items-start gap-4">
                                        <Image src="https://picsum.photos/seed/lovable/200/120" alt="Lovable.dev interface" width={200} height={120} className="rounded-md m-0 flex-shrink-0" data-ai-hint="dashboard interface" />
                                        <div>
                                            <h5 className="mt-0 font-semibold">Best For: Beautiful, visual web apps (Dashboards, SaaS, Consumer apps).</h5>
                                            <p className="text-sm">
                                              <strong>How it works:</strong> It's a "conversational" development environment. You chat with the AI, and it visually paints the user interface in real-time. It feels like a "No-Code" tool like Webflow, but it produces high-quality React code that you can own and export. It's incredibly satisfying for visual thinkers.
                                            </p>
                                            <p className="text-sm"><strong>Key Integration:</strong> It connects seamlessly with <strong>Supabase</strong> (a user-friendly database) to handle user logins, save data, and store files with simple text prompts like, "Add user login with Google."</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="my-6">
                                    <CardHeader>
                                        <CardTitle>Replit: The "Builder's Workshop" for Logic-Heavy Apps</CardTitle>
                                    </CardHeader>
                                     <CardContent className="flex flex-col sm:flex-row items-start gap-4">
                                        <Image src="https://picsum.photos/seed/replit/200/120" alt="Replit interface" width={200} height={120} className="rounded-md m-0 flex-shrink-0" data-ai-hint="code editor" />
                                        <div>
                                            <h5 className="mt-0 font-semibold">Best For: Logic-heavy apps, bots, backend services, and learning any programming language.</h5>
                                            <p className="text-sm"><strong>How it works:</strong> Replit gives you a full computer in the cloud. You get a code editor, a command-line terminal, and a live preview all in one browser tab. Its AI capabilities are powerful for generating entire projects from scratch.</p>
                                            <p className="text-sm"><strong>Key Features:</strong>
                                                <ul className="list-disc pl-5">
                                                    <li><strong>Agent:</strong> Can build an entire project structure (all the files and folders) from a single, detailed prompt.</li>
                                                    <li><strong>Assistant:</strong> An AI pair programmer inside the editor that helps you edit specific files, write functions, and fix bugs.</li>
                                                    <li><strong>Deployment:</strong> One-click publishing to a live URL that you can share with anyone.</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="my-6">
                                     <CardHeader>
                                        <CardTitle>Claude Code / Cursor: The Professional's Command Center</CardTitle>
                                    </CardHeader>
                                     <CardContent className="flex flex-col sm:flex-row items-start gap-4">
                                        <Image src="https://picsum.photos/seed/claude/200/120" alt="Cursor editor interface" width={200} height={120} className="rounded-md m-0 flex-shrink-0" data-ai-hint="dark code editor" />
                                        <div>
                                           <h5 className="mt-0 font-semibold">Best For: Professionals who want maximum control and work from their local computer.</h5>
                                           <p className="text-sm"><strong>How they work:</strong>
                                                <ul className="list-disc pl-5">
                                                    <li><strong>Claude Code</strong> is a command-line tool. You interact with it in your terminal. It's less visual but extremely powerful because it reads your entire project folder to understand the full context, allowing it to make intelligent, project-wide changes. You can give it instructions like `claude > create a new React component for a user profile card` and it will create the file with the necessary code, following the patterns it sees elsewhere in your project.</li>
                                                    <li><strong>Cursor</strong> is a modified version of VS Code (the most popular code editor in the world) with deeply integrated AI. You can highlight any piece of code and ask the AI to refactor it, debug it, or explain it. It can also read your entire project for context, just like Claude Code, but in a more visual environment.</li>
                                                </ul>
                                           </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                 <Card className="my-6">
                                     <CardHeader>
                                        <CardTitle>Google Firebase Studio: The Production Scaler</CardTitle>
                                    </CardHeader>
                                     <CardContent className="flex flex-col sm:flex-row items-start gap-4">
                                         <Image src="https://picsum.photos/seed/firebase/200/120" alt="Firebase Studio interface" width={200} height={120} className="rounded-md m-0 flex-shrink-0" data-ai-hint="cloud dashboard" />
                                        <div>
                                            <h5 className="mt-0 font-semibold">Best For: Building robust, production-ready applications that need to handle millions of users and integrate with Google's ecosystem.</h5>
                                            <p className="text-sm"><strong>Workflow:</strong> It's a unique Vibe Coding tool that adds a crucial safety step. It generates a <strong>"Blueprint"</strong> (a detailed plan of all file changes) that you review and approve *before* it writes any code. This gives you maximum control and prevents the AI from making unwanted changes. It's like having an architect show you the blueprints before the construction crew starts working.</p>
                                            <p className="text-sm"><strong>Deployment:</strong> It deploys to Google Cloud, providing enterprise-grade security, scalability, and performance automatically, making it ideal for projects that you intend to grow into serious businesses.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                 <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl"><Hand className="w-8 h-8 text-primary/80"/>Module 3: The Art of Prompting (The PRD)</CardTitle>
                    <p className="text-muted-foreground pt-2">Learn to write the "documents" that guide the AI. In Vibe Coding, the quality of your prompt determines the quality of your product. This is the single most important skill to master. This isn't about "prompt hacks"; it's about structured communication.</p>
                </CardHeader>
                 <CardContent>
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>3.1 The PRD (Product Requirements Document)</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>Never start a project with an empty chat box. You need a plan. In the product world, this is called a PRD. For us, it's a simple text file that tells the AI exactly what to build. It's your architectural blueprint, and it's essential.</p>
                                <ul>
                                  <li><strong>Why it's critical:</strong> The saying is "Garbage in, garbage out." If your prompt is vague ("make a cool app"), your app will be a generic, useless mess. A PRD forces you to clarify your own thinking.</li>
                                  <li><strong>How to Generate One (The Meta-Skill):</strong> You don't have to write it from scratch! You can use an AI to help you create the plan for your *other* AI. This is a common and powerful workflow. Prompt another AI like ChatGPT or Claude:
                                    <blockquote>"You are an expert product manager. I want to build a [Recipe App for users with food allergies]. Your job is to interview me to create a detailed Product Requirements Document (PRD). Ask me clarifying questions about features, user roles, data models, and design to ensure the requirements are complete and unambiguous. Start by asking me the first question."</blockquote>
                                    The AI will then interview you, forcing you to think through all the details you might have missed. It will help you build the perfect blueprint.
                                  </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-2">
                             <AccordionTrigger>3.2 The Perfect Prompt Structure (GCES Framework)</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>When you're ready to prompt your coding tool (like Replit or Firebase Studio), use a structured approach for maximum clarity. A great model to use is the GCES framework: Goal, Context, Expectations, Source.</p>
                                <div className="space-y-4 my-6">
                                    <p><strong>1. Goal:</strong> What, specifically, do you want the AI to do? Be direct and action-oriented. (e.g., "Create the main dashboard page for my recipe app.")</p>
                                    <p><strong>2. Context:</strong> What does the AI need to know? Who is the user? What is the purpose? (e.g., "The target audience is busy parents who need quick, reliable meal ideas. The app should feel calming and simple, not overwhelming.")</p>
                                    <p><strong>3. Expectations:</strong> What should the final output look like? Define the constraints and guidelines. (e.g., "Use a clean, minimalist design. Use the pre-built 'Card' and 'Button' components. The primary brand color should be a calming, earthy green. Do not use any paid fonts. The app must be fully responsive and work perfectly on mobile devices.")</p>
                                    <p><strong>4. Source:</strong> Can you provide an example? This is the most powerful part. (e.g., "For the layout and feel, I'm inspired by the website for 'Stripe.com'. Use that as a visual reference for spacing, fonts, and the overall aesthetic.")</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                             <AccordionTrigger>3.3 The Iterative Loop: Your Conversation with the AI</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>Vibe coding is not a one-shot command; it's a conversation. Great products are built through iteration. You must embrace this loop. It's like sculpting: you start with a block of stone and slowly chip away until you have a masterpiece.</p>
                                <ol className="my-6">
                                  <li><strong>Prompt:</strong> Give your clear, structured instruction using the GCES framework. "Build the login page with email and password fields, plus a 'Login' button. Use our brand's primary blue for the button."</li>
                                  <li><strong>Review:</strong> The AI generates the page. It's functional. You look at it and think, "Okay, the button is there, but it's too small and the color is a bit too bright. It doesn't match our calm vibe."</li>
                                  <li><strong>Refine:</strong> You provide specific, actionable feedback in your next prompt. Don't say "it's wrong." Say *what* to change. "The login button is a good start, but let's refine it. Make it 20% larger and use a slightly darker shade of blue (#4A90E2). Also, add a 'Forgot Password?' link directly below it in a smaller, gray font."</li>
                                  <li><strong>Repeat:</strong> Continue this cycle of prompting and refining. Each loop gets you closer to your perfect product. This is where the "vibe" is shaped, in the small details and adjustments. Don't be afraid to go through 5, 10, or 20 iterations on a single component. That's not failure; that's the process.</li>
                                </ol>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl"><Code className="w-8 h-8 text-primary/80"/>Module 4: Lab – Building a "Healthy Recipe Generator"</CardTitle>
                    <p className="text-muted-foreground pt-2">Apply your knowledge to build a real, functional web application. We'll walk through examples using different tools to show how the core concepts of Vibe Coding apply everywhere. This is where theory meets practice.</p>
                </CardHeader>
                <CardContent>
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                             <AccordionTrigger>Project Overview</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>Our goal is to build a simple but useful app where a user can enter ingredients they have and any allergies to avoid, and get a delicious recipe back from an AI. We'll explore two different paths to building this, one visual-first and one code-first.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-2">
                            <AccordionTrigger>Path 1: The Visual-First Method (using Lovable.dev)</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>This path is great for beginners and visual thinkers who want to see their app come to life in real-time.</p>
                                <ol>
                                  <li>Go to <strong>Lovable.dev</strong> and sign up for a free account. Start a new project.</li>
                                  <li><strong>Initial Prompt (Your PRD):</strong> In the chat interface, paste in a clear and detailed PRD based on our GCES framework.
                                    <blockquote><strong>Goal:</strong> Build a healthy recipe generating app. <br/><strong>Context:</strong> The main page should have a form with a text area for 'Available Ingredients', another for 'Allergies to Avoid', and a dropdown for 'Preferred Cuisine' (e.g., 'Italian', 'Mexican', 'Any'). <br/><strong>Expectations:</strong> When the user clicks a 'Generate Recipe' button, the app should display the result in a card below. The card should have a title for the recipe name, a beautiful image, and the recipe steps. Use a clean and modern design with large, readable fonts. <br/><strong>Source:</strong> For the overall aesthetic, aim for something similar to the calm and clean feel of the Headspace app.</blockquote>
                                  </li>
                                  <li><strong>Refining the UI (The "Vibe"):</strong> The AI will generate a functional but probably plain interface. Now, we add the "vibe."
                                     <blockquote>"The current design is too basic. Let's refine it. Make the background an off-white color (#F0F4F8). For the recipe results, display each recipe in a 'Card' component with soft shadows. The headings should use the 'Lora' font, and body text should use 'Inter'. Make the primary 'Generate' button a midnight blue (#2C3E50) and give it rounded corners. It should feel inviting and trustworthy."</blockquote>
                                  </li>
                                  <li><strong>Adding a Backend (Supabase):</strong> Let's add user accounts so they can save their favorite recipes.
                                    <blockquote>"This is great. Now, integrate user authentication using Supabase. Add 'Login' and 'Sign Up' buttons to the header. The login page should support both email/password and Google sign-in. Once a user is logged in, add a small heart icon to each recipe card that allows them to save it to their profile."</blockquote>
                                    Lovable will automatically write the code to create the `users` and `saved_recipes` tables in Supabase and connect them.
                                  </li>
                                   <li><strong>Connecting the AI Logic (OpenAI):</strong>
                                    <blockquote>"Let's wire up the core logic. Modify the 'Generate Recipe' button's logic. When clicked, take the user's inputs (ingredients, allergies, cuisine) and send them to the OpenAI GPT-4o model via an API call. The prompt to OpenAI should be: 'You are a master chef specializing in healthy and delicious meals. Create a recipe based on these constraints...'. Then, parse the response from OpenAI and display the recipe title, steps, and a generated image in the results card on the page."</blockquote>
                                  </li>
                                  <li><strong>Publishing:</strong> In the Lovable dashboard, click the <strong>Publish</strong> button. You get a live URL instantly. You can send this to your friends and it will work.</li>
                                </ol>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                            <AccordionTrigger>Path 2: The Code-First Method (using Replit or a Local Editor)</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>This path is closer to traditional development and is great for those who want more control over the file structure from the start.</p>
                                <ol>
                                  <li>Open <strong>Replit</strong> (or your local editor like Cursor/VS Code).</li>
                                  <li><strong>Initial Prompt (Project Scaffolding):</strong> You are more explicit about the technical stack here.
                                    <blockquote>"/init - Create a new Next.js 14 application using TypeScript and Tailwind CSS. Set up a basic project structure with a `components` folder for UI elements and a `lib` folder for our AI logic. Install the `shadcn-ui` library for our components."</blockquote>
                                  </li>
                                  <li><strong>Build Component by Component:</strong> Don't build the whole page at once. Build it in pieces.
                                    <blockquote>"Create a new component named `RecipeForm.tsx` in the `components` folder. It should contain a form with a text area for 'ingredients', a text area for 'allergies', and a submit button. Use ShadCN UI components for the form elements."</blockquote>
                                    You would then import this component onto your main page and test it in isolation.
                                  </li>
                                  <li><strong>Create the AI Logic:</strong>
                                    <blockquote>"In the `lib` folder, create a new file `recipe.ts`. It should export an async function called `generateRecipe` that takes the form data as an argument. Inside this function, use the OpenAI Node.js library to call the GPT-4o API with the user's input. The function should return the recipe as a JSON object."</blockquote>
                                  </li>
                                  <li><strong>Connect Frontend to Backend (The Final Step):</strong>
                                    <blockquote>"In the main page file, import the `generateRecipe` function and the `RecipeForm` component. When the form is submitted, call the `generateRecipe` function with the form data. Take the returned recipe and display it in a new `RecipeCard` component below the form. Make sure to handle loading states (show a spinner while the AI is thinking) and error states (show a friendly message if something goes wrong)."</blockquote>
                                  </li>
                                   <li><strong>Publishing:</strong> With Replit, you click "Deploy." With a local setup, you connect your project to a service like Vercel or Netlify.
                                    <blockquote>"Generate a `vercel.json` configuration file to deploy this Next.js app. Set the appropriate build commands and output directory."</blockquote>
                                  </li>
                                </ol>
                                <p>Notice the difference? The first path is visual and iterative, like painting. The second is structured and file-oriented, like building with Lego blocks. Both are valid ways to "Vibe Code."</p>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl"><ShieldCheck className="w-8 h-8 text-primary/80"/>Module 5: Security, Monetization, & Your Career</CardTitle>
                     <p className="text-muted-foreground pt-2">Learn how to turn your Vibe Coding hobby into a secure product or a viable career path. Building is the first step; creating sustainable value is the goal. This module is about moving from prototype to professional.</p>
                </CardHeader>
                 <CardContent>
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>5.1 Security: The `.cursorrules` File and AI Guardrails</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>Vibe coding moves incredibly fast, which is amazing. But speed can introduce security gaps if you're not careful. The AI is a powerful tool, but it's a junior developer—it doesn't automatically know your security requirements. You must be the senior developer who sets the rules.</p>
                                <ul>
                                  <li><strong>The Risk:</strong> An AI might accidentally hardcode your private API keys directly into the public-facing code (a huge security breach). It might generate a login function with weak password requirements. It could create a database query that is vulnerable to attack.</li>
                                  <li><strong>The Fix: The Rule File.</strong> You must create a rule file. Different tools have different names for it (`.cursorrules`, `guardrails.md`, or the `CLAUDE.md` file). This file is automatically read by the AI before every single action. It is your permanent set of instructions that the AI cannot ignore.</li>
                                  <li><strong>What to write in your rule file (Your "Company Policy"):</strong>
                                    <blockquote>
                                    <strong>Rule #1 (Secrets):</strong> Always use environment variables for API keys, database URLs, and other secrets. Never hardcode secrets directly in the source code. Refer to them using `process.env.VARIABLE_NAME`. If you see a hardcoded secret, stop and ask me to fix it. <br/><br/>
                                    <strong>Rule #2 (API Abuse):</strong> All public-facing API endpoints must have rate limiting to prevent abuse and denial-of-service attacks. Use a library like `express-rate-limit`. <br/><br/>
                                    <strong>Rule #3 (Passwords):</strong> All user passwords must be securely hashed using a strong, modern algorithm like `bcrypt` before being stored in the database. Never, under any circumstances, store passwords in plain text.
                                    </blockquote>
                                  </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-2">
                             <AccordionTrigger>5.2 Monetization: From Project to Profit</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>So you've built a cool app. How do you turn it into a business? Vibe coding makes this faster than ever.</p>
                                <ul>
                                  <li><strong>SaaS (Software as a Service):</strong> This is the most common path. Build a niche tool that solves a specific problem for a specific group of people, and charge a monthly subscription fee. Don't try to build the next Facebook. Instead, use your recipe generator skills to build a "Weekly Meal Planner for Vegan Athletes" and charge $10/month. Find a small, painful problem and solve it beautifully.</li>
                                  <li><strong>Example from the Real World:</strong> Peter Levels, a well-known indie developer, vibe-coded an AI-powered interior design app and generated over $1 million in revenue in its first month. He didn't spend six months writing code; he spent his time understanding what users wanted, marketing the product, and letting the AI handle the implementation.</li>
                                  <li><strong>Freelancing and Consulting:</strong> Your new superpower is speed. You can now use tools like Lovable and Replit to build full-stack applications for clients in a fraction of the time it would take a traditional developer. You can charge a premium for your speed and deliver a working prototype in days, not months. This is incredibly valuable to businesses that want to test ideas quickly.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                            <AccordionTrigger>5.3 The "Product Engineer": Your New Career Title</AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                                <p>By mastering Vibe Coding, you are becoming a <strong>"Product Engineer."</strong> This is a new, highly valuable hybrid role that sits at the intersection of product management, design, and engineering. It's one of the most sought-after roles in modern tech companies.</p>
                                <div className="my-6">
                                    <h4>The Old Skill Stack vs. The New Skill Stack</h4>
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                <th className="text-left">Traditional Developer Skills</th>
                                                <th className="text-left">Vibe Coding Skills</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Syntax Mastery</td>
                                                <td>Problem Decomposition</td>
                                            </tr>
                                             <tr>
                                                <td>Algorithm Knowledge</td>
                                                <td>Prompt Engineering</td>
                                            </tr>
                                              <tr>
                                                <td>Framework Expertise</td>
                                                <td>System Thinking</td>
                                            </tr>
                                             <tr>
                                                <td>Database Design</td>
                                                <td>User Empathy & Quality Judgment</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p>Your value is no longer in your ability to type code quickly or memorize syntax. Your value is in your ability to <strong>identify valuable problems, design elegant solutions, and guide an AI to implement them effectively, securely, and beautifully.</strong> You are the architect, the visionary, and the project manager all in one. The AI is your team of infinitely scalable junior developers, ready to execute your vision 24/7. This is the future of building, and you're now a part of it.</p>
                            </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                </CardContent>
            </Card>
          </div>

          <section className="my-16">
            <h2 className="text-3xl font-semibold tracking-tight text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                <AccordionItem value="faq-1">
                    <AccordionTrigger>Do I need to know how to code at all?</AccordionTrigger>
                    <AccordionContent>
                        Not to get started. The tools are designed to work with plain English. However, understanding basic HTML and CSS concepts will help you communicate more effectively with the AI. You'll naturally pick up these concepts as you build.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                    <AccordionTrigger>Is this "real" programming?</AccordionTrigger>
                    <AccordionContent>
                        Yes. You are creating real, production-quality code. The only thing that's changed is the interface. Instead of typing code, you are describing it. The end result is the same: a functional software application. Your role shifts from a "coder" to a "technical director."
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                    <AccordionTrigger>Can I build complex applications with this method?</AccordionTrigger>
                    <AccordionContent>
                        Absolutely. While it's perfect for prototypes and simple tools, you can build incredibly complex applications. The key is to break down the complexity into smaller, manageable parts and guide the AI step-by-step, just as a project manager would guide a team of developers.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                    <AccordionTrigger>What are the biggest mistakes beginners make?</AccordionTrigger>
                    <AccordionContent>
                        The biggest mistake is giving vague, one-shot prompts like "build me a social media app." Vibe coding is a conversation. The second biggest mistake is not using version control ("Checkpoints"). You must save your progress after every successful step, because the AI will occasionally make mistakes.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="faq-5">
                    <AccordionTrigger>Which tool should I start with?</AccordionTrigger>
                    <AccordionContent>
                        If you're a visual person and want to build a web app, start with **Lovable.dev**. If you're more interested in logic, bots, or backend services, start with **Replit**. Both are excellent for beginners because they require zero setup.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="faq-6">
                    <AccordionTrigger>How do I handle errors and bugs?</AccordionTrigger>
                    <AccordionContent>
                        Your new job isn't to fix the bug, but to report it correctly. When you get an error message, copy the entire message, paste it back to the AI, and say, "We have an error, please fix this." 9 times out of 10, the AI will understand and correct its own mistake.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="faq-7">
                    <AccordionTrigger>Can I sell the apps I build?</AccordionTrigger>
                    <AccordionContent>
                        Yes! You own the code and the final product. People are already building successful SaaS businesses, freelance careers, and agencies using Vibe Coding. Your ability to build and iterate quickly is a massive competitive advantage.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="faq-8">
                    <AccordionTrigger>Is my job as a developer at risk?</AccordionTrigger>
                    <AccordionContent>
                        No, but it is changing. Your value is shifting from writing boilerplate code to high-level architecture, system design, and product vision. Developers who embrace Vibe Coding become 10x more productive and valuable. It's a massive career accelerator.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="faq-9">
                    <AccordionTrigger>What about security and privacy?</AccordionTrigger>
                    <AccordionContent>
                       This is critical. You are still responsible for the final code. You must instruct the AI on security best practices, such as never hard-coding API keys and always hashing user passwords. In Module 5, we cover how to create a "rules" file to enforce these policies automatically.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="faq-10">
                    <AccordionTrigger>Where can I learn more?</AccordionTrigger>
                    <AccordionContent>
                        This course is your starting point. The best way to learn is by building. Think of a small, fun project and try to build it with one of the tools mentioned. Follow people like Andrej Karpathy and other Vibe Coders on social media to see what's possible. The field is moving incredibly fast, and the community is the best resource.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

    