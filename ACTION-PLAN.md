# SEO Action Plan — veda.ng
**Generated:** March 12, 2026
**Based on:** Full Audit Report (FULL-AUDIT-REPORT.md)
**Current Health Score:** 68/100
**Target Health Score:** 85/100

---

## CRITICAL — Fix Immediately (Blocks ranking signals)

### C1. Add `date:`, `author:`, and `keywords:` to ALL 33 essay frontmatter files
**Category:** Content Quality + Schema
**Impact:** Every Article schema currently shows build date as publish date. Google uses `datePublished` for freshness ranking. All 33 essays are missing this signal entirely.

**What to do:**
1. Add `date: 'YYYY-MM-DD'` to each essay's frontmatter block using the actual write date (or best estimate).
2. Add `author: 'Vedang Vatsa'` to each essay frontmatter.
3. Add `keywords: ['keyword1', 'keyword2', 'keyword3']` relevant to each essay's topic.

**Files to edit:** All 33 `.mdx` files in `/src/content/essays/`

**Example fix for a file:**
```
---
title: 'The Dark Forest Internet'
summary: '...'
date: '2025-06-15'
author: 'Vedang Vatsa'
keywords: ['dark forest theory', 'bots internet', 'cryptographic identity', 'private web', 'dead internet']
---
```

---

### C2. Fix wrong domain in Glossary schema (vedangvatsa.com → veda.ng)
**Category:** Schema / Structured Data
**Impact:** Every glossary term page has schema pointing to a non-existent domain. Google's Rich Result Test would fail validation. BreadcrumbList and CollectionPage schemas are invalid.

**Files to edit:**
- `/src/app/glossary/page.tsx` — replace all `https://vedangvatsa.com` with `https://veda.ng`
- `/src/app/glossary/[slug]/page.tsx` — replace all `https://vedangvatsa.com` with `https://veda.ng`

**Specific replacements:**
- `"url": "https://vedangvatsa.com/glossary"` → `"url": "https://veda.ng/glossary"`
- `"url": \`https://vedangvatsa.com/glossary/${term.slug}\`` → `"url": \`https://veda.ng/glossary/${term.slug}\``
- `"item": "https://vedangvatsa.com"` → `"item": "https://veda.ng"`
- `"item": "https://vedangvatsa.com/glossary"` → `"item": "https://veda.ng/glossary"`
- `"inDefinedTermSet": "https://vedangvatsa.com/glossary"` → `"inDefinedTermSet": "https://veda.ng/glossary"`

---

### C3. Create a proper 1200×630 Open Graph image
**Category:** Images + Technical SEO
**Impact:** All social shares (LinkedIn, Twitter/X, Facebook, Slack, iMessage previews) currently show a 256×256 icon instead of a proper preview card. This directly reduces click-through rates from social media.

**What to do:**
1. Create a 1200×630 px branded image (PNG or JPEG) featuring Vedang's headshot and name/title.
2. Save as `/public/images/og-default.png` (or similar).
3. Update `layout.tsx` `openGraph.images[0].url` from `/images/icon.png` to `/images/og-default.png`.
4. Update all individual page `generateMetadata` calls in `/src/lib/metadata.ts` to use the new OG image as default.
5. Consider creating a unique OG image per page type (essays, courses, profile).

**Verify:** `/agentic-web/AgenticAIPreview.png` — confirm this file exists in `/public/`. If it does, that page already has a proper OG image.

---

### C4. Remove or reconcile the duplicate Next.js config file
**Category:** Technical SEO + Performance
**Impact:** Having both `next.config.mjs` and `next.config.ts` creates ambiguity. The `.ts` version lacks security headers. The `.mjs` version lacks the `serverActionsTimeout` setting. Only one file should exist.

**What to do:**
1. Review both files carefully.
2. Merge all settings from `next.config.ts` into `next.config.mjs` (add `serverActionsTimeout` if needed).
3. Delete `next.config.ts`.
4. The `.mjs` version is the correct one to keep (has security headers, proper MDX config with image remotePatterns).

---

### C5. Fix the truncated essay: `the-dark-forest-internet.mdx`
**Category:** Content Quality
**Impact:** The essay ends mid-sentence: "The future belongs to those who can". Any reader or AI crawler reaching the end gets an incomplete thought. This signals low content quality.

**File to edit:** `/src/content/essays/the-dark-forest-internet.mdx`

**What to do:** Complete the final sentence and add a proper concluding paragraph summarizing the essay's thesis.

---

## HIGH — Fix Within 2 Weeks (Significant ranking gaps)

### H1. Add H1 tag to the `/writings` page
**Category:** On-Page SEO
**Impact:** The Writings page (`/src/app/writings/page.tsx`) has no H1 element — only H2 tags ("Recent Papers", "Essays"). Search engines use H1 as the primary on-page topic signal.

**File to edit:** `/src/app/writings/page.tsx`

**What to add:** Add an H1 before or replacing the first section. Example:
```tsx
<h1 className="text-4xl font-semibold tracking-tight text-center mb-8">
  Essays & Research
</h1>
```

---

### H2. Fix the dynamic sitemap to include /guides, /glossary, and /glossary/* pages
**Category:** Technical SEO
**Impact:** The Next.js-generated sitemap (which supersedes the static XML) is missing `/guides`, `/glossary`, and all individual glossary term URLs. These pages cannot be efficiently discovered by crawlers.

**File to edit:** `/src/app/sitemap.ts`

**What to add:**
1. Add `'/guides'` to the static pages array.
2. Add `'/glossary'` to the static pages array.
3. Import and use `glossaryTerms` from `/src/lib/glossary` to generate individual glossary URLs.

**Example addition:**
```ts
import { glossaryTerms } from '@/lib/glossary';

// In the sitemap function:
const glossaryRoutes: MetadataRoute.Sitemap = glossaryTerms.map(term => ({
  url: `${BASE_URL}/glossary/${term.slug}`,
  lastModified: new Date(),
}));

return [...staticPages, ...essayRoutes, ...glossaryRoutes];
```

---

### H3. Add Course schema to all 4 course pages
**Category:** Schema / Structured Data
**Impact:** Course pages (Web3-101, Agentic-Web, Prompt-Engineering-101, Vibe-Coding) have no structured data. Adding `Course` schema enables rich results in Google Search and surfaces these pages to AI search engines as educational content.

**Files to edit:**
- `/src/app/web3-101/page.tsx`
- `/src/app/agentic-web/page.tsx`
- `/src/app/prompt-engineering-101/page.tsx`
- `/src/app/vibe-coding/page.tsx`

**Minimum Course schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Fundamentals of Web3",
  "description": "Master blockchain, decentralization, and digital ownership...",
  "url": "https://veda.ng/web3-101",
  "provider": {
    "@type": "Person",
    "name": "Vedang Vatsa",
    "url": "https://veda.ng"
  },
  "isAccessibleForFree": true,
  "educationalLevel": "Beginner",
  "inLanguage": "en",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT2H"
  }
}
```

---

### H4. Add FAQPage schema to Web3-101 and Agentic-Web pages
**Category:** Schema / Structured Data
**Impact:** Both pages have explicit FAQ accordion sections with 6 questions each. Adding `FAQPage` schema can generate FAQ rich snippets in Google Search, significantly expanding SERP real estate.

**Files to edit:**
- `/src/app/web3-101/page.tsx` — `faqItems` array already exists, convert to schema
- `/src/app/agentic-web/page.tsx` — `faqItems` array already exists, convert to schema

**Example schema (use `faqItems` array):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Web3 just about cryptocurrencies like Bitcoin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, that's a common misconception..."
      }
    }
  ]
}
```

---

### H5. Add internal links to essays with zero internal links (priority: 22 essays)
**Category:** On-Page SEO + Content Quality
**Impact:** 22 of 33 essays have zero internal links. Internal links distribute link equity, improve crawl depth, and increase average session duration.

**Priority essays to update (by word count — largest first):**
1. `the-substrate-shift` (2,035 words) — could link to: `tracing-blockchains-journey`, `the-simulation-layer`
2. `the-attention-refinery` (1,974 words) — already has 3 links ✓
3. `hustle-culture-is-a-cage` (1,808 words) — could link to: `digital-monasticism`, `the-cognitive-load-crisis`
4. `the-ai-agent-economy` (1,650 words) — could link to: `/agentic-web`, `pseudonymous-agency`
5. `the-dark-forest-internet` (1,478 words) — could link to: `programmable-trust`, `pseudonymous-agency`
6. `bureaucracy-and-the-technology-escape` (1,480 words) — could link to: `api-states`, `computational-constitutions`

**Target:** Add at least 2 contextual internal links per essay to topically related essays or course pages.

---

### H6. Add Content-Security-Policy and HSTS headers
**Category:** Technical SEO / Security
**Impact:** Missing CSP affects Google's security assessment. HSTS is a trust signal.

**File to edit:** `/next.config.mjs`

**Add to the headers array:**
```js
{
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload',
},
{
  key: 'Content-Security-Policy',
  value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://platform.twitter.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; frame-src https://www.youtube.com; connect-src 'self' https://www.google-analytics.com;",
},
```
Note: Adjust CSP based on actual third-party usage. The YouTube iframe on `/agentic-web` requires `frame-src https://www.youtube.com`.

---

## MEDIUM — Fix Within 1 Month (Ranking improvements)

### M1. Give /community and /seo pages unique, descriptive H1 tags
**Category:** On-Page SEO
**Impact:** Both pages currently render H1: "Vedang Vatsa" — identical to each other and the homepage. Unique H1s help search engines differentiate page topics.

**Files to edit:**
- `/src/app/community/page.tsx` — Change H1 from "Vedang Vatsa" to something like "Community Building & Content Strategy"
- `/src/app/seo/page.tsx` — Change H1 from "Vedang Vatsa" to "SEO & Growth Marketing Specialist"

---

### M2. Add /guides to main navigation header
**Category:** On-Page SEO / Internal Linking
**Impact:** `/guides` is not in the header nav dropdown. It is only accessible via the sitemap or deep links. Adding it to the "Courses" dropdown (or creating a separate "Resources" dropdown) increases crawl accessibility and user discoverability.

**File to edit:** `/src/components/header.tsx`

---

### M3. Add homepage links to courses and glossary
**Category:** On-Page SEO / Internal Linking
**Impact:** The homepage only links to /writings, /profile, and /media. Adding links to /web3-101, /agentic-web, /prompt-engineering-101, /glossary distributes homepage PageRank to educational content.

**File to edit:** `/src/app/page.tsx`

---

### M4. Add footer site navigation links
**Category:** On-Page SEO / Internal Linking
**Impact:** The footer only contains social media icons. Adding text links to key pages (Writings, Courses, Glossary, Profile) improves crawlability and creates consistent sitewide links.

**File to edit:** `/src/components/footer.tsx`

---

### M5. Fix Article schema `dateModified` to be independently tracked
**Category:** Schema
**Impact:** `dateModified` should reflect when content was actually updated, not just be a copy of `datePublished`. Google uses modification dates for freshness ranking.

**File to edit:** `/src/app/[slug]/page.tsx`

**What to do:** Add an optional `updated:` field to essay frontmatter. Use it as `dateModified` when present, fall back to `datePublished`.

---

### M6. Add `lastmod` dates to static sitemap.xml based on actual content dates
**Category:** Technical SEO
**Impact:** The static `sitemap.xml` has no `<lastmod>` on any URL. The dynamic `sitemap.ts` uses `new Date()` (always today). Neither helps crawlers prioritize fresh content.

**File to edit:** `/src/app/sitemap.ts`

**What to do:** After adding `date:` to essay frontmatter (Action C1), read the date from frontmatter and use it as `lastModified` in the sitemap entry.

---

### M7. Fix Person schema — `jobTitle` should be a string
**Category:** Schema
**Impact:** `jobTitle` in the root layout Person schema is an array: `['Founder', 'AI Researcher', 'Web3 Innovator', 'Entrepreneur']`. Schema.org specifies this should be a string.

**File to edit:** `/src/app/layout.tsx`

**Fix:** Change to `jobTitle: 'Founder & AI Researcher'` or pick the most relevant single title.

---

### M8. Lazy load the YouTube iframe on /agentic-web
**Category:** Performance
**Impact:** The YouTube embed loads on page load, blocking LCP and potentially causing layout shift. Lazy loading it improves Core Web Vitals.

**File to edit:** `/src/app/agentic-web/page.tsx`

**Fix:** Add `loading="lazy"` attribute to the `<iframe>` element, or replace with a click-to-load facade component.

---

### M9. Update `llms.txt` with missing essays and courses
**Category:** AI Search Readiness
**Impact:** `artificial-intuition` and `the-ai-agent-economy` essays exist in the content folder but are absent from `llms.txt`. AI crawlers using this file as a discovery index will miss them.

**File to edit:** `/public/llms.txt`

**What to add:**
- `[Artificial Intuition](/artificial-intuition)` in the Essays section
- `[The AI Agent Economy](/the-ai-agent-economy)` in the Essays section
- Consider adding guide sub-sections

---

## LOW — Improvements (Polish and completeness)

### L1. Update media page speaking image alt text to be contextually descriptive
**Category:** Images
**Impact:** `alt="Vedang Vatsa speaking at engagement ${index + 1}"` is generic. Descriptive alt text with venue/event context improves accessibility and provides keyword context.

**File to edit:** `/src/app/media/page.tsx`

**What to do:** Convert the array from just image paths to objects with `src` and `alt` fields: `{ src: '...', alt: 'Vedang Vatsa keynoting at Token 2049 Singapore 2023' }`.

---

### L2. Add BreadcrumbList schema to essay pages
**Category:** Schema
**Impact:** Essay pages lack breadcrumb structured data. Adding it can generate breadcrumb rich results in SERPs.

**File to edit:** `/src/app/[slug]/page.tsx`

**Example schema:**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://veda.ng"},
    {"@type": "ListItem", "position": 2, "name": "Writings", "item": "https://veda.ng/writings"},
    {"@type": "ListItem", "position": 3, "name": "[Essay Title]", "item": "https://veda.ng/[slug]"}
  ]
}
```

---

### L3. Add SameAs to glossary/term schema to disambiguate the person entity
**Category:** Schema
**Impact:** The glossary term pages' Person entity (from root layout) should not conflict with the local `DefinedTerm` entity. Ensure the Person schema on all pages consistently uses `https://veda.ng` as its `@id`.

---

### L4. Remove placeholder image service entries from next.config.mjs
**Category:** Performance / Security
**Impact:** `placehold.co`, `images.unsplash.com`, and `picsum.photos` are still in `remotePatterns`. If placeholder images are no longer used in production, remove these entries to tighten the allowlist.

**File to edit:** `/next.config.mjs`

---

### L5. Expand `deeprank.json` with essay links
**Category:** AI Search Readiness
**Impact:** The current `deeprank.json` only links to 5 profile pages. Adding essay URLs makes AI indexers aware of all content on the site.

**File to edit:** `/public/deeprank.json`

---

### L6. Add a "Last Updated" display to essay pages
**Category:** Content Quality / E-E-A-T
**Impact:** Showing a visible "Published: [date]" below the essay title helps readers and crawlers assess freshness. Currently the date is rendered from frontmatter but since no date exists in frontmatter, nothing shows for most essays.

**Prerequisite:** Complete Action C1 first (add dates to all essays).

**File to edit:** `/src/app/[slug]/page.tsx` — the date rendering is already wired up, it just needs the frontmatter dates to exist.

---

## Prioritized Quick-Win Summary

| Priority | Action | Time Estimate | Impact |
|---|---|---|---|
| C1 | Add date/author/keywords to all 33 essays | 2-3 hours | Critical |
| C2 | Fix vedangvatsa.com in glossary schemas | 15 min | Critical |
| C3 | Create proper 1200×630 OG image | 1 hour | Critical |
| C4 | Remove/merge duplicate next.config.ts | 30 min | Critical |
| C5 | Fix truncated dark-forest essay | 15 min | Critical |
| H1 | Add H1 to /writings page | 10 min | High |
| H2 | Fix sitemap.ts to include /guides, /glossary | 30 min | High |
| H3 | Add Course schema to 4 course pages | 2 hours | High |
| H4 | Add FAQPage schema to web3-101 and agentic-web | 1 hour | High |
| H5 | Add internal links to zero-link essays (top 10) | 3 hours | High |
| H6 | Add CSP and HSTS headers | 30 min | High |
| M1 | Fix H1 on /community and /seo | 10 min | Medium |
| M2 | Add /guides to header navigation | 10 min | Medium |
| M3 | Add course/glossary links to homepage | 30 min | Medium |
| M4 | Add footer site navigation | 30 min | Medium |
| M8 | Lazy load YouTube iframe on /agentic-web | 15 min | Medium |
| M9 | Update llms.txt with missing essays | 15 min | Medium |

**Estimated total effort for Critical + High priority items: ~12 hours**
**Expected score improvement after all Critical + High fixes: 68 → ~82**
