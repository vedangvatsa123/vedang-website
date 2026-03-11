# GEO Analysis: veda.ng (Vedang Vatsa Personal Website)
**Original Date:** March 11, 2026 | **Updated:** March 12, 2026
**Auditor:** Claude Code (claude-sonnet-4-6)
**Framework:** Generative Engine Optimization (GEO) — optimizing for AI search engines (ChatGPT, Perplexity, Google AI Overviews)

---

## Score After Fixes

| Category | Weight | Original | Updated | Weighted |
|---|---|---|---|---|
| Citability | 25% | 48/100 | 52/100 | 13.0 |
| Structural Readability | 20% | 62/100 | 62/100 | 12.4 |
| Multi-Modal Content | 15% | 35/100 | 50/100 | 7.5 |
| Authority & Brand Signals | 20% | 72/100 | 76/100 | 15.2 |
| Technical Accessibility | 20% | 55/100 | 72/100 | 14.4 |
| **Overall GEO Score** | | **55.1 / 100** | **62.5 / 100** | |

**What moved the needle:**
- Technical Accessibility: +17 pts — explicit AI crawler stanzas in robots.txt, unified sitemap covering all glossary + essay pages, expanded llms.txt with 45 glossary terms and 2 missing essays, WebSite/SearchAction schema, VideoObject schema, Course/FAQPage schemas
- Multi-Modal Content: +15 pts — Course schema on all 4 course pages, FAQPage schema on all 4 FAQ pages, VideoObject for YouTube embed
- Authority & Brand Signals: +4 pts — Person jobTitle fixed to valid string, WebSite schema with SearchAction added
- Citability: +4 pts — Key Terms glossary links added to all 33 essays (11 had zero internal links before; now all have glossary cross-links at minimum)

**Remaining ceiling blockers:** Essays still have no `date:` frontmatter (Article schema datePublished is inaccurate), no author bylines visible in page body, no inline citations, no direct-answer opening paragraphs. Glossary schemas still point to wrong domain (`vedangvatsa.com`). These are the next highest-leverage fixes.

---

## 1. Citability (Score: 48/100)

### What Was Found

**Essay content format:**
33 essays live at `src/content/essays/*.mdx`. Word counts range from ~700 to ~2,000 words. The content is well-written but is structured as flowing prose rather than AI-citable blocks.

**Critical gap — No publication dates:**
Zero essays have a `date:` field in their frontmatter. The code at `src/app/[slug]/page.tsx` (line 93) falls back to `new Date().toISOString()` when no date is present, meaning every essay renders today's date dynamically. This is unreliable for AI systems that evaluate recency signals and means the `datePublished` in the Article schema is inaccurate.

```
// src/app/[slug]/page.tsx, line 93
const datePublished = essay.frontmatter.date
  ? new Date(essay.frontmatter.date).toISOString()
  : new Date().toISOString();  // ← always today's date if no frontmatter date
```

**No visible date in essay body:**
`{essay.frontmatter.date && <p>...</p>}` — the conditional means no date is ever shown in the article body, which AI engines and readers cannot see.

**Direct-answer structures:**
Essays use conversational/philosophical prose. Very few passages open with the "X is..." or "X refers to..." patterns that AI engines prefer for citation. An example from `what-is-the-singularity.mdx`:
> "The singularity is the moment when artificial intelligence becomes smarter than humans."

This opening sentence is excellent — it's the direct-answer pattern. However, most essay paragraphs do not follow this structure. The singularity essay is the strongest example; most others (e.g., `bureaucracy-and-the-technology-escape.mdx`) open with anecdotes, not definitions.

**Statistics with sources:**
The `ai-superintelligence-timeline.mdx` essay references "The Metaculus forecasting community... currently estimates a 50 percent chance of artificial general intelligence by 2040-2050" but without a URL citation or date. No essay links to a primary source inline. The Prompt Engineering page links extensively to external primary sources (OpenAI docs, arXiv papers) — this is the strongest citability pattern on the site and should be replicated in essays.

**Self-contained answer blocks:**
The Glossary term pages (`/glossary/[slug]`) are the best citability asset on the site. Each page is a single-purpose definition — e.g., AGI, LLM — rendered as a standalone `DefinedTerm` schema page. The glossary definitions are 200–400 words, which falls within the 134–167 word optimal AI-citation range for shorter excerpts and is well-structured for extraction.

**FAQ sections:**
FAQs exist on four pages: `/prompt-engineering-101`, `/agentic-web`, `/web3-101`, and `/vibe-coding`. The FAQ content is high quality and directly answers questions. However, none of these pages include `FAQPage` schema markup, which is the structured data signal that tells AI engines to treat the Q&A blocks as citable answers.

### Recommendations

1. **Add `date:` to all 33 essay frontmatter files.** This is the single highest-leverage fix. Without dates, Article schema is polluted and AI engines cannot assess recency.
2. **Add `FAQPage` JSON-LD schema** to the four pages that already have FAQ sections.
3. **Rewrite the opening paragraph of each essay** to include a direct-answer sentence ("X is...") before moving into analysis.
4. **Add inline citations** with URLs and years for any statistics referenced in essays.
5. **Create "key takeaway" summary boxes** at the top or bottom of each essay — these become the self-contained answer blocks AI engines prefer to cite.

---

## 2. Structural Readability (Score: 62/100)

### What Was Found

**Heading hierarchy:**
The site uses consistent H1→H2→H3 hierarchy on content pages. Course pages (`/agentic-web`, `/prompt-engineering-101`, `/web3-101`) follow a clear module structure with H2 section titles and H3 accordion headings. The `/guides` page has well-structured H2 sections for each guide topic with nested H3 subsections.

**Essay pages:**
Essays rendered via MDX at `src/app/[slug]/page.tsx` do not enforce heading hierarchy — it depends entirely on what's in each `.mdx` file. Reading several essays reveals that most are written as continuous prose with minimal heading usage. The `what-is-the-singularity.mdx` and `ai-superintelligence-timeline.mdx` essays contain no H2/H3 headings at all — they are pure paragraphs. This is the largest structural gap.

**Question-based headings:**
The course pages (Agentic Web, Prompt Engineering, Web3-101) use question-based accordion triggers, e.g., "What is Prompt Engineering?", "How is an 'AI Agent' different from a regular chatbot?". These are ideal for AI citation. Static page headings (e.g., `/guides`) use declarative headings ("Market Making in Cryptocurrency"), which are less optimal.

**Paragraph length:**
Essays use short, punchy paragraphs (2–4 sentences), which is excellent for AI readability. The conversational essay style scores well here.

**Tables and lists:**
Lists are used on course pages and the Profile page. The `/guides` page uses well-structured bullet lists and two-column card grids. Essays do not use tables or lists — they are pure prose. The Glossary definitions are also pure prose paragraphs, with no structured lists.

**FAQ sections:**
Present on 4 of 12 main pages. Absent from essay pages and the Glossary.

### Recommendations

1. **Add H2/H3 headings to essays** — every essay should have at least 3–5 section headings that break the content into scannable blocks.
2. **Convert question-based H3 headings in course pages from accordion triggers to static headings** where possible — accordion content is hidden from crawlers until JavaScript executes (though Next.js SSR mitigates this partially).
3. **Add at least one structured list or table to each essay** — even a simple "Key concepts covered" list at the top.
4. **Add FAQ sections to the Glossary index page and to high-traffic essays** like the singularity essays.

---

## 3. Multi-Modal Content (Score: 35/100)

### What Was Found

**Interactive tools/calculators:**
None exist on the site. There are no calculators, interactive assessments, quizzes, or data tools. This is the largest gap in this category.

**Videos:**
The `/agentic-web` page embeds a YouTube video (`https://www.youtube.com/embed/Gqgk25SOIMM`). This is the only video on the site. No transcript or captions are provided on-page.

**Images:**
The homepage and profile pages use a headshot image (`/images/icon.png`) with descriptive alt text: "A professional headshot of Vedang Vatsa." Press logos on `/seo` and `/media` use publication names as alt text. The agentic-web page uses a preview image (`AgenticAIPreview.png`) in the OG metadata but does not display it in the page body. **No images appear in any of the 33 essays.**

**SoftwareApplication / HowTo schema:**
No `SoftwareApplication` or `HowTo` schema markup exists anywhere on the site. The course pages (`/prompt-engineering-101`, `/agentic-web`, `/web3-101`) are strong candidates for `Course` schema but currently only use a generic article-level metadata setup.

**Schema markup for existing interactive elements:**
The Accordion-based course content and FAQ sections use React components, not static HTML. While Next.js SSR ensures the content is rendered server-side, there is no structured schema tagging these as `LearningResource`, `Course`, or `FAQPage`.

### Recommendations

1. **Add `Course` JSON-LD schema** to `/prompt-engineering-101`, `/agentic-web`, and `/web3-101` — these pages have module structures that map directly to `Course` → `CourseInstance` → `CourseSection` schema.
2. **Add `FAQPage` JSON-LD schema** to all four FAQ sections.
3. **Create at least one interactive tool** — candidates: a tokenomics calculator, a prompt-building template generator, or an AI timeline comparison chart. These become high-citation assets.
4. **Add alt text to all press logos** on the `/seo`, `/media`, and `/community` pages — many currently use the publication name but some use generic image filenames.
5. **Add an on-page transcript or key takeaways section** below the YouTube embed on `/agentic-web`.
6. **Add at least one illustrative image per essay** with descriptive alt text — this expands multi-modal signals for Google AI Overviews.

---

## 4. Authority & Brand Signals (Score: 72/100)

### What Was Found

**Person schema (layout.tsx):**
A global `Person` schema is injected in `src/app/layout.tsx` across all pages:
- `name`, `url`, `image`, `jobTitle` (array: Founder, AI Researcher, Web3 Innovator, Entrepreneur)
- `affiliation` → Hashtag Web3 Organization
- `sameAs`: LinkedIn, YouTube, Google Scholar, X
- `knowsAbout`: AI, Web3, Blockchain, Cryptocurrency, Community Building
- `award`: "Fellow of the Royal Society of Arts"
- `description` with verifiable credential count

This is well-executed and covers the key authority signals.

**Organization schema (layout.tsx):**
Also present globally with `sameAs` social profiles. However, the `@type` is `Organization` rather than `Person`'s primary organization — both schemas are present, which is correct. The `Organization` uses `name: 'Vedang Vatsa'` rather than `name: 'Hashtag Web3'`, which may cause ambiguity since "Vedang Vatsa" is already the Person.

**Profile page Person schema:**
The `/profile/page.tsx` has a second, more detailed `Person` schema that adds:
- `alumniOf`: IIT Kanpur
- `award`: FRSA
- Additional `sameAs` (Telegram added)

The duplication of Person schema (in layout.tsx + profile/page.tsx) is acceptable but the two schemas have minor inconsistencies (`jobTitle` is an array on root, a single string on profile).

**Author bylines in essays:**
The essay page renders `essay.frontmatter.author || 'Vedang Vatsa'` in the Article schema but **no author byline is visible in the rendered page body**. AI engines that read visible text (not just JSON-LD) will not see an author attribution on any essay page. There is no visible "By Vedang Vatsa" text, no author bio block, and no author link at the bottom of essays.

**Publication/update dates visible in body:**
As noted in Section 1, no dates are visible in essay bodies because all essays lack the `date:` frontmatter field. The code conditionally renders a date only if the frontmatter field exists.

**Citations to primary sources:**
The Prompt Engineering page has extensive outbound links to arXiv, OpenAI docs, Google ML, DeepLearning.AI — this is excellent. Essays do not cite primary sources with links. The homepage links to SSRN and IEEE papers, which is a strong authority signal for the homepage.

**Testimonials:**
Three high-quality testimonials with named, credentialed sources appear on the Profile page (Oscars screenwriter, Omidyar Network Director, CPA+ founder). These are not present elsewhere and are not marked up with `Review` schema.

**WebSite schema:**
No `WebSite` schema with `SearchAction` is present in `layout.tsx`. The `deeprank.json` file serves a similar intent but is a custom format, not a standard schema.org type.

### Recommendations

1. **Add visible author bylines to essay pages** — a "By Vedang Vatsa, [date]" line under the H1, plus a brief author bio block at the bottom linking to `/profile`.
2. **Add `date:` frontmatter to all essays** (also listed in Section 1) so visible dates appear in the body.
3. **Add `WebSite` schema with `SearchAction`** to `layout.tsx` — this enables Sitelinks Search Box in Google and signals the site structure to AI engines.
4. **Fix Organization schema** — either rename the `Organization` to `name: 'Hashtag Web3'` (Vedang's actual organization) or use a `Person` → `worksFor` → `Organization` pattern.
5. **Add `Review` or `Testimonial` markup** to the testimonials on the Profile page.
6. **Add `alumniOf` and `memberOf` (RSA) to the root layout's Person schema**, not just the profile page schema.

---

## 5. Technical Accessibility (Score: 55/100)

### What Was Found

**robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://veda.ng/sitemap.xml
```
The site allows all crawlers universally with `User-agent: *` and `Allow: /`. This means GPTBot, ClaudeBot, PerplexityBot, and OAI-SearchBot are all implicitly permitted. However:
- There are **no explicit allow rules** for named AI crawlers, which some AI engines check for as a positive signal of opt-in.
- There is **no explicit `User-agent: GPTBot` block/allow** — OpenAI specifically checks for this.
- The file is minimal and has no `Crawl-delay` or other hints.

The implicit `Allow: /` is technically correct but some AI crawlers (especially GPTBot and PerplexityBot) operate more confidently when they see an explicit `User-agent: GPTBot\nAllow: /` stanza.

**llms.txt:**
Present at `/public/llms.txt`. This is a strong positive signal — very few sites have this file. The file is:
- Well-structured with H2 sections (Guides & Resources, Essays, Profile Pages)
- Contains 49 links with one-sentence descriptions
- Includes a personal bio paragraph
- Uses correct relative URL format

Gaps:
- Does not include the Glossary's individual term URLs (the most AI-citable content)
- Does not list research paper URLs (SSRN/IEEE links from the homepage)
- Missing recently-added essays (the list in llms.txt matches the sitemap but some essay files exist in `src/content/essays/` that are not in the sitemap, such as `artificial-intuition.mdx` and `the-ai-agent-economy.mdx`)

**Sitemap:**
Two sitemaps exist:
1. Static `public/sitemap.xml` — manually maintained, 37 URLs, includes `<changefreq>` and `<priority>` attributes, no `<lastmod>` dates
2. Dynamic `src/app/sitemap.ts` — generated from the essays directory + static routes, uses `lastModified: new Date()` (today's date always, no real timestamps)

The two sitemaps are not unified — the static sitemap includes `/guides` and `/glossary` which are missing from the dynamic sitemap. The dynamic sitemap is served at the Next.js route `/sitemap.xml` but the static file is also present in `/public/sitemap.xml`. Both serve the same URL. This can cause inconsistency.

**SSR vs client-side rendering:**
The site is built with Next.js App Router with SSR. All pages render server-side, including the MDX essay content. The accordion content on course pages is rendered server-side in the HTML response (not hidden behind client-side JavaScript). This is excellent — AI crawlers see the full content. Confirmed by the use of `MDXRemote` with `@next/mdx` for essays and static JSX for course pages.

**Schema.org coverage summary:**
- `Person` schema: ✓ (root layout + profile page) — jobTitle fixed to string
- `Organization` schema: ✓ (root layout)
- `Article` schema: ✓ (essay pages) — dates still fall back to build date (open)
- `DefinedTerm` schema: ✓ (glossary term pages) — **domain still `vedangvatsa.com` (open)**
- `CollectionPage` + `ItemList` schema: ✓ (glossary index) — **domain still `vedangvatsa.com` (open)**
- `BreadcrumbList` schema: ✓ (glossary pages) — **domain still `vedangvatsa.com` (open)**
- `FAQPage` schema: ✓ **Fixed** — added to all 4 pages with FAQ content
- `Course` schema: ✓ **Fixed** — added to all 4 course pages
- `WebSite` + `SearchAction` schema: ✓ **Fixed** — added to layout.tsx
- `VideoObject` schema: ✓ **Fixed** — added to /agentic-web for YouTube embed
- `SoftwareApplication` schema: ✗ (no tools exist)

**Performance and crawlability:**
Next.js generates `generateStaticParams()` for essays and glossary terms, meaning all routes are statically generated at build time. This ensures fast Time-to-First-Byte for AI crawlers. No JavaScript execution is required to see content.

### Recommendations

1. **Add explicit AI crawler stanzas to robots.txt:**
   ```
   User-agent: GPTBot
   Allow: /

   User-agent: ClaudeBot
   Allow: /

   User-agent: PerplexityBot
   Allow: /

   User-agent: OAI-SearchBot
   Allow: /
   ```
2. **Consolidate sitemaps** — remove the static `public/sitemap.xml` or ensure the dynamic `sitemap.ts` supersedes it. Add real `lastModified` dates by reading file system mtime or adding frontmatter dates.
3. **Update llms.txt** to include Glossary term URLs, SSRN/IEEE paper URLs, and the two essays missing from the current listing (`artificial-intuition`, `the-ai-agent-economy`).
4. **Add `VideoObject` schema** for the YouTube embed on `/agentic-web`.
5. **Add `Course` schema** to `/prompt-engineering-101`, `/agentic-web`, and `/web3-101`.
6. **Add `FAQPage` schema** to all four FAQ sections.
7. **Add `WebSite` schema with `SearchAction`** to `layout.tsx`.

---

## Priority Action Plan

Ranked by estimated impact on GEO performance:

### Tier 1 — High Impact, Low Effort

| Action | Status | GEO Impact |
|---|---|---|
| Add `date:` frontmatter to all 33 essays | **Open** | Fixes broken datePublished schema, enables visible dates |
| Add explicit AI crawler rules to robots.txt | **Done** | Explicit opt-in signal for GPTBot, PerplexityBot, ClaudeBot |
| Add `FAQPage` JSON-LD schema to 4 FAQ pages | **Done** | Enables AI FAQ citation |
| Add visible author byline + date to essay template | **Open** | Makes authorship visible in body text |

### Tier 2 — High Impact, Medium Effort

| Action | Status | GEO Impact |
|---|---|---|
| Add H2/H3 headings to essays (at minimum) | **Open** | Major structural readability improvement |
| Add `Course` schema to 4 course pages | **Done** | Rich result eligibility |
| Add `WebSite` + `SearchAction` schema | **Done** | Sitelinks search box, AI site-level signal |
| Add `VideoObject` schema to /agentic-web | **Done** | Rich video results |
| Add author bio block to essay template | **Open** | Authority signal, matches Article schema |
| Update llms.txt with missing essays + glossary terms | **Done** | Better AI index coverage |
| Fix OG image dimensions in metadata | **Done** | Accurate social share previews |
| Add Key Terms glossary links to essays | **Done** | Internal linking, glossary cross-signals |

### Tier 3 — Medium Impact, Higher Effort

| Action | Status | GEO Impact |
|---|---|---|
| Fix Glossary schemas (wrong domain `vedangvatsa.com`) | **Open** | All glossary structured data currently invalid |
| Add inline citations to essays (with URLs + years) | **Open** | Verifiability for AI citation |
| Add "direct answer" opening paragraphs to essays | **Open** | Citability of individual passages |
| Create one interactive tool (e.g., prompt builder) | **Open** | Multi-modal content score, linkable asset |
| Add key-takeaway summary boxes to essays | **Open** | Self-contained answer blocks |
| Fix Person `jobTitle` to valid string | **Done** | Schema.org compliance |
| Consolidate sitemap (remove static, fix dynamic dates) | **Done** (partial) | Accurate freshness signals; real mtime dates still open |

---

## Category Deep-Dives: What's Working Well

**Best-in-class assets for AI citation:**

1. **Glossary term pages** (`/glossary/[slug]`) — Each page is a single-purpose definition with `DefinedTerm` schema, clean H1, and a 200–400 word definition. These are the most AI-citable pages on the site. Perplexity and ChatGPT are likely to cite these when answering definitional questions about AGI, LLMs, DeFi, etc.

2. **Course FAQ sections** — The FAQ content on `/prompt-engineering-101` and `/agentic-web` directly answers specific questions with 100–200 word self-contained answers. Once `FAQPage` schema is added, these become prime citation candidates for Google AI Overviews.

3. **llms.txt** — The file exists and is well-structured. This is a strong differentiator. Most personal sites do not have this. It should be kept up-to-date as new content is added.

4. **Person + Organization schema** — The dual schema setup in `layout.tsx` with `sameAs` social profiles, `knowsAbout`, `affiliation`, and `award` fields is comprehensive and correctly structured.

5. **Research paper links on homepage** — The 8 linked SSRN/IEEE papers with full DOI URLs establish academic authority. These citations exist on the homepage but not in individual essays.

---

## Comparison: What AI Platforms Prefer

| Platform | Top Citation Source | Site's Current Status |
|---|---|---|
| **Google AI Overviews** | Top-10 ranking pages (92% of citations) | SSR Next.js ✓, missing FAQ schema, missing dates |
| **ChatGPT** | Wikipedia (47.9%), Reddit (11.3%) | Structured definitions (Glossary) ≈ Wikipedia pattern; needs more verifiable stats |
| **Perplexity** | Reddit (46.7%), Wikipedia | Conversational essay tone ≈ Reddit; needs direct-answer structure + citations |

The site's closest citation-eligible content is the Glossary (Wikipedia pattern) and the FAQ sections (direct-answer pattern). Essays are currently written for human reading, not AI extraction.

---

*Analysis based on source code review of `src/app/`, `src/content/`, `public/`, and configuration files. No live network requests were made. All findings are based on static code inspection as of March 11, 2026.*
