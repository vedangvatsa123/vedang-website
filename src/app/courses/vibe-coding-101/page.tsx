
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

export const metadata: Metadata = {
  title: 'Vibe Coding 101: From Beginner to Builder | Vedang Vatsa',
  description:
    'A free, comprehensive course on Vibe Coding. Learn the philosophy, tools, and practical steps to build and deploy modern web applications by managing AI.',
  alternates: {
    canonical: '/courses/vibe-coding-101',
  },
};

export default function VibeCodingCoursePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <section className="text-center mb-12">
            <h1 className="text-5xl font-semibold tracking-tight">
              Vibe Coding 101
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              A free, self-paced course on the art of building software by
              describing what you want, not by writing code line-by-line. Go
              from beginner to builder by learning to manage AI.
            </p>
            <div className="mt-4 flex justify-center items-center gap-4">
                <Badge variant="secondary">Instructor: Vedang Vatsa</Badge>
                <Badge variant="secondary">Prerequisite: None</Badge>
            </div>
          </section>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="module-1">
              <AccordionTrigger className="text-xl font-medium">
                Module 1: The Philosophy & The "Friendly Cat" Framework
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Understand how to switch
                  your mindset from "writing code" to "managing AI."
                </p>
                
                <h3>1.1 The Definition: What is Vibe Coding?</h3>
                <p>
                  "Vibe Coding" is a term coined by Andrej Karpathy, a founding
                  member of OpenAI, in February 2025. It represents a paradigm
                  shift in software development.
                </p>
                <ul>
                  <li>
                    <strong>The Old Way:</strong> You are the{' '}
                    <strong>Architect and Bricklayer</strong>. You must manually
                    type every bracket, semicolon, and database query. If you
                    forget a semicolon, the app crashes. Your job is defined by
                    your knowledge of syntax.
                  </li>
                  <li>
                    <strong>The Vibe Way:</strong> You are the{' '}
                    <strong>Product Manager</strong>. You describe{' '}
                    <em>what</em> you want ("I need a recipe app with a clean,
                    minimalist design"), and the AI handles the <em>how</em>{' '}
                    (writing the JavaScript, Python, and CSS). Your job is
                    defined by your clarity of vision.
                  </li>
                  <li>
                    <strong>The Goal:</strong> To "forget that the code even
                    exists" and focus entirely on the product vision, user
                    experience, and business logic.
                  </li>
                </ul>

                <h3>1.2 The 4 Levels of Thinking</h3>
                <p>
                  You cannot just say "make an app" and expect magic. You must
                  use <strong>Procedural Thinking</strong>. Before you write a
                  single prompt, you must think through these four levels:
                </p>
                <ol>
                  <li>
                    <strong>Logical:</strong> What is the core function? (e.g.,
                    "It's a recipe generator.").
                  </li>
                  <li>
                    <strong>Analytical:</strong> What is the objective? (e.g.,
                    "To help people with allergies cook safely").
                  </li>
                  <li>
                    <strong>Computational:</strong> How does the data move?
                    (e.g., "User inputs ingredients → AI processes them → App
                    displays a recipe list").
                  </li>
                  <li>
                    <strong>Procedural:</strong> How do we make it excel? (e.g.,
                    "We need a 'Save to Favorites' button and a 'Shopping List'
                    generator").
                  </li>
                </ol>

                <h3>1.3 The Core Framework: "The Friendly Cat"</h3>
                <p>
                  To succeed in Vibe Coding, use the mnemonic:{' '}
                  <strong>"The Friendly Cat Dances Constantly"</strong>.
                </p>
                <dl>
                  <dt>
                    <strong>T</strong>hinking (Frameworks):
                  </dt>
                  <dd>
                    Know <em>what</em> you are building before you type. Use the
                    4 Levels of Thinking to create a clear plan.
                  </dd>
                  <dt>
                    <strong>F</strong>riendly (Interface):
                  </dt>
                  <dd>
                    Always prioritize the user. The "vibe" is not just about
                    aesthetics; it's about creating an intuitive and enjoyable
                    experience.
                  </dd>
                  <dt>
                    <strong>C</strong>heckpoints (Version Control):
                  </dt>
                  <dd>
                    AI will make mistakes. You must "save your game"
                    (Commit) frequently so you can undo errors without losing
                    progress.
                  </dd>
                  <dt>
                    <strong>D</strong>ebugging:
                  </dt>
                  <dd>
                    When errors happen, your job is not to fix the code. It is
                    to understand the error message. Copy it, paste it back to
                    the AI, and say, "Fix this." You are a diagnostician, not
                    a surgeon.
                  </dd>
                  <dt>
                    <strong>C</strong>ontext:
                  </dt>
                  <dd>
                    The AI needs details. Don't just say "make it pretty."
                    Upload a screenshot of a website you admire (like Airbnb)
                    and say, "Make the layout and color scheme look like
                    this."
                  </dd>
                </dl>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="module-2">
              <AccordionTrigger className="text-xl font-medium">
                Module 2: The Modern Toolkit
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Choose the right tool
                  for your specific project. Your toolbox determines your speed
                  and capabilities.
                </p>

                <h3>2.1 Cloud-Based vs. Local Environments</h3>
                <ul>
                    <li><strong>Cloud IDEs (Replit, Firebase Studio):</strong> All-in-one platforms where you code, run, and deploy in your browser. Perfect for beginners as there is no setup required.</li>
                    <li><strong>Local IDEs (VS Code, Cursor):</strong> Software you run on your own computer. Gives you more control and works offline, but requires setup (installing Node.js, Git, etc.).</li>
                </ul>

                <h3>2.2 The Tools</h3>
                
                <h4>Lovable.dev: The "Magic Wand" for Beginners</h4>
                <ul>
                  <li><strong>Best For:</strong> Beautiful, visual web apps (Dashboards, SaaS, Consumer apps).</li>
                  <li>
                    <strong>How it works:</strong> It's a "conversational"
                    development environment. You chat with the AI, and it
                    visually paints the UI in real-time. It feels like "No-Code" but produces high-quality React code that you own.
                  </li>
                  <li>
                    <strong>Key Integration:</strong> It connects seamlessly
                    with <strong>Supabase</strong> (a user-friendly database) to
                    save user data, handle logins, and store files.
                  </li>
                </ul>

                <h4>Replit: The "Builder's Workshop"</h4>
                <ul>
                  <li>
                    <strong>Best For:</strong> Logic-heavy apps, bots, backend services, and learning any programming language.
                  </li>
                  <li>
                    <strong>Key Features:</strong>
                    <ul>
                      <li>
                        <strong>Agent:</strong> Builds the entire project structure from a single prompt.
                      </li>
                      <li>
                        <strong>Assistant:</strong> An AI pair programmer that helps you edit specific files and fix bugs inside the editor.
                      </li>
                      <li>
                        <strong>Deployment:</strong> One-click publishing to a live URL.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h4>Cursor: The AI-First Code Editor</h4>
                <ul>
                    <li><strong>Best For:</strong> Professionals who want AI assistance in their local development environment.</li>
                    <li><strong>How it works:</strong> It's a modified version of VS Code with deeply integrated AI. You can highlight code and ask the AI to refactor, debug, or document it. It can also generate code from scratch based on a prompt.</li>
                </ul>

                <h4>Google Firebase Studio: The Production Scaler</h4>
                <ul>
                  <li>
                    <strong>Best For:</strong> Building robust, production-ready applications that need to handle millions of users and integrate with Google's ecosystem.
                  </li>
                  <li>
                    <strong>Workflow:</strong> It's a unique Vibe Coding tool. It generates a <strong>"Blueprint"</strong> (a detailed plan of all file changes) that you review and approve <em>before</em> it writes any code. This gives you maximum control.
                  </li>
                   <li>
                    <strong>Deployment:</strong> It deploys to Google Cloud, providing enterprise-grade security, scalability, and performance.
                  </li>
                </ul>

                <h4>Bolt.new: The Rapid Prototyper</h4>
                <ul>
                  <li>
                    <strong>Best For:</strong> Instantly generating full-stack prototypes directly in your browser.
                  </li>
                  <li>
                    <strong>Key Feature:</strong> It is "self-healing." If it
                    installs a broken software package, it reads the error and
                    fixes itself automatically, saving you hours of debugging.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="module-3">
              <AccordionTrigger className="text-xl font-medium">
                Module 3: The Art of Prompting (The PRD)
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Learn to write the
                  "documents" that guide the AI. In Vibe Coding, the quality
                  of your prompt determines the quality of your product.
                </p>

                <h3>3.1 The PRD (Product Requirements Document)</h3>
                <p>
                  Never start a project without a PRD. This is a text file that
                  tells the AI exactly what to build. It's your architectural
                  blueprint.
                </p>
                <ul>
                  <li>
                    <strong>Why it's critical:</strong> "Garbage in, garbage
                    out." If your prompt is vague ("make a cool app"), your
                    app will be generic and useless.
                  </li>
                  <li>
                    <strong>How to Generate One:</strong> You don't have to
                    write it from scratch! You can ask an AI to help you.
                    Prompt another AI like ChatGPT or Claude:
                    <blockquote>
                      "Help me create a detailed PRD for a [Recipe App for users with allergies]. Ask me clarifying questions about features, user roles, data models, and design to ensure the requirements are complete and unambiguous."
                    </blockquote>
                  </li>
                </ul>

                <h3>3.2 The Perfect Prompt Structure</h3>
                <p>
                  When prompting a tool like Lovable or Firebase Studio, use
                  this 4-part structure for maximum clarity:
                </p>
                <ol>
                  <li>
                    <strong>Context:</strong> "I am building a healthy recipe app for people with specific food allergies. The target audience is busy parents."
                  </li>
                  <li>
                    <strong>Task:</strong> "Create a dashboard page where users can input their allergies, available ingredients, and preferred cuisine type. Add a 'Generate Recipe' button."
                  </li>
                  <li>
                    <strong>Guidelines:</strong> "Use a clean, minimalist design inspired by Airbnb. Use the pre-built 'Card' and 'Button' components. The primary color should be a calming green."
                  </li>
                  <li>
                    <strong>Constraints:</strong> "Do not use any paid fonts. The app must be fully responsive and work on mobile devices. Prioritize performance over flashy animations."
                  </li>
                </ol>

                <h3>3.3 The Iterative Loop: Your Conversation with the AI</h3>
                <p>
                  Vibe coding is not a one-shot command; it's a conversation.
                  Embrace the iterative loop:
                </p>
                <ol>
                  <li>
                    <strong>Prompt:</strong> "Build the login page with email and password fields."
                  </li>
                  <li>
                    <strong>Review:</strong> The AI generates the page. You look at it and think, "The button is too small and the color is off."
                  </li>
                  <li>
                    <strong>Refine:</strong> You provide feedback in your next prompt: "Make the 'Login' button 20% larger and change its color to the primary brand color. Also, add a 'Forgot Password?' link below it."
                  </li>
                  <li>
                    <strong>Repeat:</strong> Continue this cycle of prompting and refining until the product matches your vision.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="module-4">
              <AccordionTrigger className="text-xl font-medium">
                Module 4: Lab – Building a "Healthy Recipe Generator"
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Apply your knowledge to build a real, functional web application using <strong>Lovable</strong> and <strong>Supabase</strong>.
                </p>

                <h3>Step 1: The Setup & Initial Prompt</h3>
                <ol>
                  <li>Go to <strong>Lovable.dev</strong> and sign up for a free account.</li>
                  <li>Start a new project.</li>
                  <li>
                    <strong>Initial Prompt:</strong> In the chat interface, paste in a clear and detailed PRD. For example:
                    <blockquote>"You are an expert web developer. Build a healthy recipe generating app. The main page should have a form where users can input their allergies (e.g., 'peanuts', 'gluten'), available ingredients, and preferred cuisine (e.g., 'Italian', 'Mexican'). When the user clicks a 'Generate Recipe' button, the app should display a detailed, step-by-step recipe and a corresponding shopping list for any missing items. Use a clean and modern design with large, readable fonts. The layout should be a single column on mobile and two columns on desktop, with the form on the left and results on the right."</blockquote>
                  </li>
                </ol>

                <h3>Step 2: Refining the UI</h3>
                <ol>
                  <li><strong>Visual Check:</strong> The AI will generate the initial user interface. It might be functional but plain.</li>
                  <li>
                    <strong>Refinement Prompt:</strong> Now, let's add the "vibe."
                    <blockquote>"The current design is too basic. Let's refine it. Make the background an off-white color (#F0F4F8). For the recipe results, display each recipe in a 'Card' component with soft shadows. The headings should use the 'Lora' font, and body text should use 'Inter'. Make the primary 'Generate' button a midnight blue (#2C3E50)."</blockquote>
                  </li>
                </ol>

                <h3>Step 3: Adding the Backend (Supabase)</h3>
                <p>The "Frontend" is what you see. The "Backend" is the app's memory and brain (database and user management).</p>
                <ol>
                  <li>
                    <strong>Connect Supabase:</strong> In the Lovable interface, find the Supabase integration and click "Connect Project." Follow the steps to create a new free Supabase project.
                  </li>
                  <li>
                    <strong>Authentication Prompt:</strong>
                    <blockquote>"Integrate user authentication using Supabase. Add 'Login' and 'Sign Up' buttons to the header. The login page should support both email/password and Google sign-in."</blockquote>
                     <p>Lovable will automatically write the code to create the `users` table in your Supabase project.</p>
                  </li>
                  <li>
                    <strong>Database Prompt:</strong>
                     <blockquote>"Create a new table in Supabase called 'saved_recipes'. It should have columns for `user_id`, `recipe_title`, and `recipe_content`. When a logged-in user clicks a heart icon next to a recipe, save that recipe to the 'saved_recipes' table, linking it to their `user_id`."</blockquote>
                  </li>
                </ol>

                <h3>Step 4: Connecting Intelligence (OpenAI API)</h3>
                <ol>
                  <li>Go to the <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">OpenAI Platform</a> and get a free API key.</li>
                  <li>In Lovable, navigate to your project settings and securely add the OpenAI API key as an environment variable.</li>
                  <li>
                    <strong>Logic Prompt:</strong>
                    <blockquote>"Modify the 'Generate Recipe' button's logic. When clicked, take the user's inputs (allergies, ingredients, cuisine) and send them to the OpenAI GPT-4o model via an API call. The prompt to OpenAI should be: 'You are a master chef. Create a healthy recipe based on these constraints...'. Then, display the recipe text returned by the API in the results card on the page."</blockquote>
                  </li>
                </ol>

                <h3>Step 5: Publishing Your App</h3>
                <ol>
                    <li>In the Lovable dashboard, click the <strong>Publish</strong> button.</li>
                    <li>Lovable will handle the entire build process and provide you with a live URL (e.g., `healthy-recipes.lovable.page`).</li>
                    <li>Congratulations! You can now share this link. Your app is live on the internet and accessible from any device.</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="module-5">
              <AccordionTrigger className="text-xl font-medium">
                Module 5: Security, Monetization, & Your Career
              </AccordionTrigger>
              <AccordionContent className="prose dark:prose-invert max-w-none text-base">
                <p className="lead">
                  <strong>Learning Objective:</strong> Learn how to turn your Vibe Coding hobby into a secure product or a viable career path.
                </p>

                <h3>5.1 Security: The `.cursorrules` File and Guardrails</h3>
                <p>Vibe coding moves fast, which can introduce security gaps if you're not careful. The AI is a powerful tool, but it doesn't automatically know your security requirements.</p>
                <ul>
                  <li>
                    <strong>The Risk:</strong> An AI might accidentally hardcode your private API keys directly into the public-facing code, or it might generate a login function with weak password requirements.
                  </li>
                  <li>
                    <strong>The Fix:</strong> Create a rule file (often named `.cursorrules`, `guardrails.md`, or `CLAUDE.md`) in the root of your project. The AI tool will read this file before every action.
                  </li>
                  <li>
                    <strong>What to write in your rule file:</strong>
                    <blockquote>
                    - "Rule: Always use environment variables for API keys and other secrets. Never hardcode secrets directly in the source code."<br/>
                    - "Rule: All user API endpoints must have rate limiting to prevent abuse."<br/>
                    - "Rule: User passwords must be hashed using a strong, modern algorithm like bcrypt before being stored in the database."
                    </blockquote>
                  </li>
                </ul>

                <h3>5.2 Monetization: From Project to Profit</h3>
                <ul>
                  <li>
                    <strong>SaaS (Software as a Service):</strong> This is the most common path. Build a niche tool that solves a specific problem and charge a monthly subscription fee. For example, build a "Cloud Career Coach" that uses AI to help people prepare for job interviews.
                  </li>
                  <li>
                    <strong>Example from the Real World:</strong> Peter Levels, a well-known indie developer, vibe-coded an AI-powered interior design app and generated over $1 million in revenue in its first month. He focused on the product and marketing, letting AI handle the code.
                  </li>
                  <li>
                    <strong>Freelancing and Consulting:</strong> Use tools like Lovable and Replit to build full-stack applications for clients in a fraction of the time it would take with traditional coding. You can charge a premium for your speed and deliver a working prototype in days, not months.
                  </li>
                </ul>

                <h3>5.3 The "Product Engineer": Your New Career Title</h3>
                <p>By mastering Vibe Coding, you are becoming a <strong>"Product Engineer."</strong> This is a new, highly valuable hybrid role that sits at the intersection of design, product management, and engineering.</p>
                <ul>
                    <li>Your value is not in your ability to type code quickly.</li>
                    <li>Your value is in your ability to <strong>identify problems, design elegant solutions, and guide an AI to implement them effectively and securely.</strong></li>
                    <li>You are the architect, the visionary, and the project manager all in one. The AI is your team of infinitely scalable junior developers.</li>
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
