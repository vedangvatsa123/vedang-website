
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
import { Code, GitBranch, Lightbulb, Bot, MonitorPlay, Palette, Rocket, ShieldCheck, Sigma, Hand, BrainCircuit, Goal, DraftingCompass } from 'lucide-react';
import Image from 'next/image';

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
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <section className="text-center mb-12">
             <div className="flex justify-center items-center mb-4">
                <Bot size={48} className="text-primary" />
            </div>
            <h1 className="text-5xl font-semibold tracking-tight">
              Vibe Coding 101
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              A free, self-paced course on the art of building software by
              describing what you want, not by writing code line-by-line. Go
              from beginner to builder by learning to manage an AI partner.
            </p>
            <div className="mt-6 flex justify-center items-center gap-4">
                <Badge variant="secondary">Instructor: Vedang Vatsa</Badge>
                <Badge variant="secondary">Prerequisite: None</Badge>
                <Badge variant="secondary">Cost: Free</Badge>
            </div>
          </section>

          <Accordion type="single" collapsible className="w-full" defaultValue="module-1">
            <AccordionItem value="module-1">
              <AccordionTrigger className="text-xl font-medium">
                <span className="flex items-center gap-3"><BrainCircuit className="w-6 h-6 text-primary/80"/>Module 1: The Philosophy & The "Friendly Cat" Framework</span>
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Switch your mindset from "writing code" to "managing an AI." You'll learn to think like a product manager, not just a typist, which is the key to getting great results.
                </p>
                
                <h3>1.1 The Definition: What is Vibe Coding?</h3>
                <p>
                  "Vibe Coding" is a term that perfectly captures a massive shift in how we build things. Coined by Andrej Karpathy, a founding member of OpenAI, it describes a new relationship with the machine.
                </p>
                <ul>
                  <li>
                    <strong>The Old Way:</strong> You were both the <strong>Architect and the Bricklayer</strong>. You had to know the exact syntax for every programming language. If you forgot a single semicolon or bracket, the entire application could crash. Your value was tied to your memorization of syntax and arcane commands.
                  </li>
                  <li>
                    <strong>The Vibe Way:</strong> You are now the <strong>Product Manager and the Creative Director</strong>. You describe *what* you want ("I need a recipe app with a clean, minimalist design that feels calming") and the AI handles the *how* (writing the JavaScript, Python, and CSS). Your value is now tied to your clarity of vision and your ability to communicate it.
                  </li>
                </ul>
                <p>The goal isn't just to write code faster. The ultimate goal is to "forget that the code even exists," as Karpathy put it. You're meant to focus entirely on the product vision, the user experience, and the business logic. The AI becomes an extension of your creative will, a tireless junior developer that handles the tedious implementation details.</p>

                <h3>1.2 The 4 Levels of Thinking: How to Plan Your "Vibe"</h3>
                <p>
                  You can't just walk up to an AI and say "make me a billion-dollar app" and expect magic. The quality of the AI's output is a direct reflection of the quality of your input. To build something great, you must use <strong>Procedural Thinking</strong>. Before you write a single prompt, you need to think through these four levels:
                </p>
                <ol>
                  <li>
                    <strong><Lightbulb className="inline-block h-5 w-5 mb-1 mr-1"/>Logical Level:</strong> What is the absolute core function of what you're building? Boil it down to a single sentence. (e.g., "It's a web app that generates healthy recipes from a list of ingredients.").
                  </li>
                  <li>
                    <strong><Goal className="inline-block h-5 w-5 mb-1 mr-1"/>Analytical Level:</strong> What is the *objective*? Why does this need to exist? (e.g., "To help busy parents with kids who have food allergies cook safe, interesting meals quickly."). This 'why' is your north star.
                  </li>
                  <li>
                    <strong><Sigma className="inline-block h-5 w-5 mb-1 mr-1"/>Computational Level:</strong> How does the data move? Think of it like a simple flowchart. (e.g., "User lands on page → Inputs ingredients and allergies into a form → Clicks 'Generate' button → AI processes the data → App displays a list of suitable recipes.").
                  </li>
                  <li>
                    <strong><DraftingCompass className="inline-block h-5 w-5 mb-1 mr-1"/>Procedural Level:</strong> How do we make this *great*? What are the details that create a delightful experience? (e.g., "We need a 'Save to Favorites' button. The recipes should have beautiful photos. Let's add a feature to generate a 'Shopping List' for missing ingredients.").
                  </li>
                </ol>
                <p>Thinking through these levels turns a vague idea into a concrete plan that you can communicate to your AI partner.</p>

                <h3>1.3 The Core Framework: "The Friendly Cat"</h3>
                <p>
                  To succeed in Vibe Coding, remember this mnemonic: <strong>"The Friendly Cat Dances Constantly."</strong> It's a silly phrase, but it covers the five pillars of effective AI-assisted development.
                </p>
                <dl>
                  <dt>
                    <strong>T</strong>hinking (Frameworks):
                  </dt>
                  <dd>
                    This is your pre-flight check. Use the 4 Levels of Thinking to create a clear plan *before* you type a single prompt. Know what you're building and why. A good plan is 50% of the work.
                  </dd>
                  <dt>
                    <strong>F</strong>riendly (Interface):
                  </dt>
                  <dd>
                    Always prioritize the end-user. The "vibe" isn't just about pretty colors; it's about creating an experience that is intuitive, frictionless, and enjoyable. Ask yourself: "Would my grandma be able to use this without instructions?"
                  </dd>
                  <dt>
                    <strong>C</strong>heckpoints (Version Control):
                  </dt>
                  <dd>
                    The AI will make mistakes. It will break things. You *must* "save your game" frequently. In developer terms, this is called 'version control' (using a tool like Git). After every successful feature addition, you create a checkpoint (a "commit"). If the AI messes something up, you can instantly rewind to the last working version without losing progress.
                  </dd>
                  <dt>
                    <strong>D</strong>ebugging:
                  </dt>
                  <dd>
                    When errors inevitably happen, your job is not to fix the code yourself. Your job is to be an expert diagnostician. Read the error message. It's usually very descriptive. Copy it, paste it back to the AI, and say, "Fix this." You don't need to be the surgeon; you just need to tell the surgeon where it hurts.
                  </dd>
                  <dt>
                    <strong>C</strong>ontext:
                  </dt>
                  <dd>
                    The AI has no eyes and no real-world experience. It needs rich context. Don't just say "make it pretty." That's useless. Instead, take a screenshot of a website you admire (like Stripe or Airbnb) and say, "Make the layout, color scheme, and font choices look and feel like this." Give it examples. The more context you provide, the better it understands your "vibe."
                  </dd>
                </dl>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="module-2">
              <AccordionTrigger className="text-xl font-medium">
                <span className="flex items-center gap-3"><Palette className="w-6 h-6 text-primary/80"/>Module 2: The Modern Toolkit</span>
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Choose the right tool for your project. Your toolbox determines your speed, capabilities, and how much fun you have. There's no single "best" tool, only the right tool for the job.
                </p>

                <h3>2.1 Cloud-Based vs. Local Environments</h3>
                <p>First, a fundamental choice: where will you "vibe code"?</p>
                <ul>
                    <li><strong>Cloud IDEs (Replit, Firebase Studio):</strong> These are all-in-one platforms that run in your web browser. You code, run, and deploy from a single tab. They are *perfect for beginners* because there is zero setup required. You just sign up and start building.</li>
                    <li><strong>Local IDEs (VS Code + Claude Code extension, Cursor):</strong> This is software you run on your own computer. It gives you more control, works offline, and is preferred by many professionals. However, it requires some initial setup (installing Node.js, Git, etc.), which can be a hurdle for absolute beginners.</li>
                </ul>

                <h3>2.2 The Tools: A Tour of Your Options</h3>
                
                <h4>Lovable.dev: The "Magic Wand" for Visual Apps</h4>
                <div className="flex flex-col sm:flex-row items-start gap-4 my-4">
                  <Image src="https://picsum.photos/seed/lovable/150/100" alt="Lovable.dev interface" width={150} height={100} className="rounded-md m-0" data-ai-hint="dashboard interface" />
                  <div>
                    <h5 className="mt-0">Best For: Beautiful, visual web apps (Dashboards, SaaS, Consumer apps).</h5>
                    <p>
                      <strong>How it works:</strong> It's a "conversational" development environment. You chat with the AI, and it visually paints the UI in real-time. It feels like a "No-Code" tool like Webflow, but it produces high-quality React code that you can own and export.
                    </p>
                    <p><strong>Key Integration:</strong> It connects seamlessly with <strong>Supabase</strong> (a user-friendly database) to handle user logins, save data, and store files with simple text prompts.</p>
                  </div>
                </div>


                <h4>Replit: The "Builder's Workshop" for Logic-Heavy Apps</h4>
                 <div className="flex flex-col sm:flex-row items-start gap-4 my-4">
                  <Image src="https://picsum.photos/seed/replit/150/100" alt="Replit interface" width={150} height={100} className="rounded-md m-0" data-ai-hint="code editor" />
                  <div>
                    <h5 className="mt-0">Best For: Logic-heavy apps, bots, backend services, and learning any programming language.</h5>
                    <p><strong>How it works:</strong> Replit gives you a full computer in the cloud. You get a code editor, a terminal, and a live preview all in one. Its AI capabilities are powerful for generating entire projects from scratch.</p>
                    <p><strong>Key Features:</strong>
                        <strong>Agent:</strong> Can build an entire project structure (all the files and folders) from a single, detailed prompt.
                        <strong>Assistant:</strong> An AI pair programmer inside the editor that helps you edit specific files, write functions, and fix bugs.
                        <strong>Deployment:</strong> One-click publishing to a live URL.
                    </p>
                  </div>
                </div>

                <h4>Claude Code: The Professional's Command Center</h4>
                <div className="flex flex-col sm:flex-row items-start gap-4 my-4">
                  <Image src="https://picsum.photos/seed/claude/150/100" alt="Claude Code in terminal" width={150} height={100} className="rounded-md m-0" data-ai-hint="terminal command" />
                  <div>
                    <h5 className="mt-0">Best For: Professionals who want maximum control and work from their local terminal.</h5>
                     <p><strong>How it works:</strong> This is a command-line tool. You interact with it in your terminal. It's less visual but extremely powerful. It reads your entire project folder to understand the full context, allowing it to make intelligent, project-wide changes.</p>
                     <p>You can give it instructions like `claude > create a new React component for a user profile card` and it will create the file with the necessary code, following the patterns it sees elsewhere in your project. It excels at structured, step-by-step development.</p>
                  </div>
                </div>

                <h4>Google Firebase Studio: The Production Scaler</h4>
                 <div className="flex flex-col sm:flex-row items-start gap-4 my-4">
                  <Image src="https://picsum.photos/seed/firebase/150/100" alt="Firebase Studio interface" width={150} height={100} className="rounded-md m-0" data-ai-hint="cloud dashboard" />
                  <div>
                    <h5 className="mt-0">Best For: Building robust, production-ready applications that need to handle millions of users and integrate with Google's ecosystem.</h5>
                    <p><strong>Workflow:</strong> It's a unique Vibe Coding tool that adds a crucial safety step. It generates a <strong>"Blueprint"</strong> (a detailed plan of all file changes) that you review and approve *before* it writes any code. This gives you maximum control and prevents the AI from making unwanted changes. It's like having an architect show you the blueprints before the construction crew starts working.</p>
                    <p><strong>Deployment:</strong> It deploys to Google Cloud, providing enterprise-grade security, scalability, and performance automatically.</p>
                  </div>
                </div>

                <h4>Cursor: The AI-First Code Editor</h4>
                 <div className="flex flex-col sm:flex-row items-start gap-4 my-4">
                  <Image src="https://picsum.photos/seed/cursor/150/100" alt="Cursor editor interface" width={150} height={100} className="rounded-md m-0" data-ai-hint="dark code editor" />
                  <div>
                    <h5 className="mt-0">Best For: Professionals who love VS Code but want best-in-class AI assistance.</h5>
                    <p><strong>How it works:</strong> It's a modified version of VS Code (the most popular code editor in the world) with deeply integrated AI. You can highlight any piece of code and ask the AI to refactor it, debug it, or explain it. It can also generate new code from scratch based on a prompt, and it can read your entire project for context, just like Claude Code.</p>
                  </div>
                </div>

                <h4>Bolt.new: The Rapid Prototyper</h4>
                <div className="flex flex-col sm:flex-row items-start gap-4 my-4">
                  <Image src="https://picsum.photos/seed/bolt/150/100" alt="Bolt.new interface" width={150} height={100} className="rounded-md m-0" data-ai-hint="futuristic interface" />
                  <div>
                    <h5 className="mt-0">Best For: Instantly generating full-stack prototypes directly in your browser.</h5>
                    <p><strong>Key Feature:</strong> Its major selling point is that it is "self-healing." If it tries to install a software package that has a bug or is incompatible, it reads the error message and automatically tries to fix it itself, such as by installing a different version. This can save you hours of debugging dependency issues.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="module-3">
              <AccordionTrigger className="text-xl font-medium">
                <span className="flex items-center gap-3"><Hand className="w-6 h-6 text-primary/80"/>Module 3: The Art of Prompting (The PRD)</span>
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Learn to write the "documents" that guide the AI. In Vibe Coding, the quality of your prompt determines the quality of your product. This is the single most important skill to master.
                </p>

                <h3>3.1 The PRD (Product Requirements Document)</h3>
                <p>
                  Never start a project with an empty chat box. You need a plan. In the product world, this is called a PRD. For us, it's a simple text file that tells the AI exactly what to build. It's your architectural blueprint.
                </p>
                <ul>
                  <li>
                    <strong>Why it's critical:</strong> The saying is "Garbage in, garbage out." If your prompt is vague ("make a cool app"), your app will be a generic, useless mess.
                  </li>
                  <li>
                    <strong>How to Generate One:</strong> You don't have to write it from scratch! You can use an AI to help you create the plan for your *other* AI. This is a common workflow. Prompt another AI like ChatGPT or Claude:
                    <blockquote>
                      "You are an expert product manager. Help me create a detailed PRD for a [Recipe App for users with food allergies]. Ask me clarifying questions about features, user roles, data models, and design to ensure the requirements are complete and unambiguous."
                    </blockquote>
                    The AI will then interview you, forcing you to think through all the details you might have missed.
                  </li>
                </ul>

                <h3>3.2 The Perfect Prompt Structure</h3>
                <p>
                  When you're ready to prompt your coding tool (like Replit or Firebase Studio), use this 4-part structure for maximum clarity. This is your "executive brief" for the AI.
                </p>
                <ol>
                  <li>
                    <strong>Context:</strong> "I am building a healthy recipe app for people with specific food allergies. The target audience is busy parents who need quick, reliable meal ideas."
                  </li>
                  <li>
                    <strong>Task:</strong> "Create the main dashboard page. It should have a form where users can input their allergies (e.g., 'peanuts', 'gluten'), available ingredients, and preferred cuisine type. Add a 'Generate Recipe' button."
                  </li>
                  <li>
                    <strong>Guidelines:</strong> "Use a clean, minimalist design inspired by the website for 'Stripe'. Use the pre-built 'Card' and 'Button' components. The primary brand color should be a calming, earthy green."
                  </li>
                  <li>
                    <strong>Constraints:</strong> "Do not use any paid fonts. The app must be fully responsive and work perfectly on mobile devices. Prioritize performance and fast load times over flashy animations."
                  </li>
                </ol>

                <h3>3.3 The Iterative Loop: Your Conversation with the AI</h3>
                <p>
                  Vibe coding is not a one-shot command; it's a conversation. Great products are built through iteration. You must embrace this loop:
                </p>
                <ol>
                  <li>
                    <strong>Prompt:</strong> Give your clear, structured instruction. "Build the login page with email and password fields, plus a 'Login' button."
                  </li>
                  <li>
                    <strong>Review:</strong> The AI generates the page. It's functional. You look at it and think, "The button is too small and the color is off. It doesn't match our vibe."
                  </li>
                  <li>
                    <strong>Refine:</strong> You provide specific, actionable feedback in your next prompt. "Make the 'Login' button 20% larger and change its color to our primary brand color. Also, add a 'Forgot Password?' link directly below it."
                  </li>
                  <li>
                    <strong>Repeat:</strong> Continue this cycle of prompting and refining. Each loop gets you closer to your perfect product. This is where the "vibe" is shaped.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="module-4">
              <AccordionTrigger className="text-xl font-medium">
                <span className="flex items-center gap-3"><Code className="w-6 h-6 text-primary/80"/>Module 4: Lab – Building a "Healthy Recipe Generator"</span>
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Apply your knowledge to build a real, functional web application. We'll walk through examples using different tools to show how the core concepts apply everywhere.
                </p>

                <h3>Project: A Healthy Recipe Generator App</h3>
                <p>Our goal is to build an app where a user can enter ingredients they have and allergies to avoid, and get a recipe back from an AI.</p>

                <h4>Path 1: The Visual-First Method (using Lovable.dev)</h4>
                <ol>
                  <li>Go to <strong>Lovable.dev</strong> and sign up for a free account. Start a new project.</li>
                  <li>
                    <strong>Initial Prompt:</strong> In the chat interface, paste in a clear and detailed PRD.
                    <blockquote>"You are an expert web developer. Build a healthy recipe generating app. The main page should have a form with a text area for 'Available Ingredients', a text area for 'Allergies to Avoid', and a dropdown for 'Preferred Cuisine' (e.g., 'Italian', 'Mexican', 'Any'). When the user clicks a 'Generate Recipe' button, the app should display the result in a card below. The card should have a title for the recipe name, an image, and the recipe steps. Use a clean and modern design with large, readable fonts."</blockquote>
                  </li>
                  <li><strong>Refining the UI:</strong> The AI will generate a functional but plain interface. Now, add the "vibe."
                     <blockquote>"The current design is too basic. Let's refine it. Make the background an off-white color (#F0F4F8). For the recipe results, display each recipe in a 'Card' component with soft shadows. The headings should use the 'Lora' font, and body text should use 'Inter'. Make the primary 'Generate' button a midnight blue (#2C3E50) and give it rounded corners."</blockquote>
                  </li>
                  <li><strong>Adding a Backend (Supabase):</strong>
                    <blockquote>"Integrate user authentication using Supabase. Add 'Login' and 'Sign Up' buttons to the header. The login page should support both email/password and Google sign-in."</blockquote>
                    Lovable will automatically write the code to create the `users` table in Supabase.
                  </li>
                   <li><strong>Connecting the AI Logic (OpenAI):</strong>
                    <blockquote>"Modify the 'Generate Recipe' button's logic. When clicked, take the user's inputs and send them to the OpenAI GPT-4o model via an API call. The prompt to OpenAI should be: 'You are a master chef. Create a healthy recipe based on these constraints...'. Then, parse the response and display the recipe title, steps, and a generated image in the results card on the page."</blockquote>
                  </li>
                  <li><strong>Publishing:</strong> In the Lovable dashboard, click the <strong>Publish</strong> button. You get a live URL instantly.</li>
                </ol>

                <h4>Path 2: The Code-First Method (using Replit or Claude Code)</h4>
                <ol>
                  <li>Open <strong>Replit</strong> or your local terminal with <strong>Claude Code</strong>.</li>
                  <li><strong>Initial Prompt:</strong> This time, you're more explicit about the technical stack.
                    <blockquote>"/init - Create a new Next.js 14 application using TypeScript and Tailwind CSS. Set up a basic project structure with a `components` folder and a `services` folder."</blockquote>
                  </li>
                  <li><strong>Build Component by Component:</strong>
                    <blockquote>"Create a new component named `RecipeForm.tsx`. It should contain a form with text areas for 'ingredients' and 'allergies', and a submit button. Use ShadCN UI components for the form elements."</blockquote>
                    You would then test this component in isolation.
                  </li>
                  <li><strong>Create the API Logic:</strong>
                    <blockquote>"Create a new server action file at `app/actions.ts`. It should export a function called `generateRecipe` that takes the form data as an argument. Inside this function, call the OpenAI API with the user's input to generate a recipe. It should return the recipe as a JSON object."</blockquote>
                  </li>
                  <li><strong>Connect Frontend to Backend:</strong>
                    <blockquote>"In `RecipeForm.tsx`, import the `generateRecipe` server action. When the form is submitted, call this action with the form data. Display the returned recipe in a new `RecipeCard` component below the form. Handle loading and error states."</blockquote>
                  </li>
                   <li><strong>Publishing:</strong> With Replit, you click "Deploy." With a local setup, you connect your project to a service like Vercel or Netlify.
                    <blockquote>"Generate a `vercel.json` configuration file to deploy this Next.js app. Set the appropriate build commands and output directory."</blockquote>
                  </li>
                </ol>
                <p>Notice the difference? The first path is visual and iterative. The second is structured and file-oriented. Both are valid ways to "Vibe Code."</p>

              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="module-5">
              <AccordionTrigger className="text-xl font-medium">
                <span className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-primary/80"/>Module 5: Security, Monetization, & Your Career</span>
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Learn how to turn your Vibe Coding hobby into a secure product or a viable career path. Building is the first step; creating value is the goal.
                </p>

                <h3>5.1 Security: The `.cursorrules` File and AI Guardrails</h3>
                <p>Vibe coding moves incredibly fast, which is amazing. But speed can introduce security gaps if you're not careful. The AI is a powerful tool, but it's a junior developer—it doesn't automatically know your security requirements.</p>
                <ul>
                  <li>
                    <strong>The Risk:</strong> An AI might accidentally hardcode your private API keys directly into the public-facing code. It might generate a login function with weak password requirements. It could create a database query that is vulnerable to attack.
                  </li>
                  <li>
                    <strong>The Fix:</strong> You must create a rule file. Different tools have different names for it (`.cursorrules`, `guardrails.md`, or the `CLAUDE.md` file). This file is automatically read by the AI before every single action. It is your permanent set of instructions.
                  </li>
                  <li>
                    <strong>What to write in your rule file:</strong>
                    <blockquote>
                    <strong>Rule:</strong> Always use environment variables for API keys, database URLs, and other secrets. Never hardcode secrets directly in the source code. Refer to them using `process.env.VARIABLE_NAME`. <br/><br/>
                    <strong>Rule:</strong> All user-facing API endpoints must have rate limiting to prevent abuse and denial-of-service attacks. <br/><br/>
                    <strong>Rule:</strong> All user passwords must be securely hashed using a strong, modern algorithm like bcrypt before being stored in the database. Never store passwords in plain text.
                    </blockquote>
                  </li>
                </ul>

                <h3>5.2 Monetization: From Project to Profit</h3>
                <p>So you've built a cool app. How do you turn it into a business?</p>
                <ul>
                  <li>
                    <strong>SaaS (Software as a Service):</strong> This is the most common path. Build a niche tool that solves a specific problem for a specific group of people, and charge a monthly subscription fee. For example, use your recipe generator skills to build a "Weekly Meal Planner for Vegan Athletes" and charge $10/month.
                  </li>
                  <li>
                    <strong>Example from the Real World:</strong> Peter Levels, a well-known indie developer, vibe-coded an AI-powered interior design app and generated over $1 million in revenue in its first month. He focused on the product idea and marketing, letting AI handle the code.
                  </li>
                  <li>
                    <strong>Freelancing and Consulting:</strong> Your new superpower is speed. You can use tools like Lovable and Replit to build full-stack applications for clients in a fraction of the time it would take a traditional developer. You can charge a premium for your speed and deliver a working prototype in days, not months.
                  </li>
                </ul>

                <h3>5.3 The "Product Engineer": Your New Career Title</h3>
                <p>By mastering Vibe Coding, you are becoming a <strong>"Product Engineer."</strong> This is a new, highly valuable hybrid role that sits at the intersection of product management, design, and engineering.</p>
                <ul>
                    <li>Your value is no longer in your ability to type code quickly or memorize syntax.</li>
                    <li>Your value is in your ability to <strong>identify valuable problems, design elegant solutions, and guide an AI to implement them effectively, securely, and beautifully.</strong></li>
                    <li>You are the architect, the visionary, and the project manager all in one. The AI is your team of infinitely scalable junior developers, ready to execute your vision 24/7. This is the future of building.</li>
                </ul>

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    