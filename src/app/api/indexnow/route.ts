import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '8e98e43851d7462c9c210ecd4321a7fc';
const SITE_HOST = 'veda.ng';

/**
 * IndexNow API Route
 * POST /api/indexnow — Submit URLs to Bing, Yandex, and other IndexNow-compatible engines
 * GET  /api/indexnow — Submit all important URLs at once
 *
 * Usage:
 *   curl -X GET https://veda.ng/api/indexnow           (submit all pages)
 *   curl -X POST https://veda.ng/api/indexnow -d '{"urls": ["/writings", "/glossary/llm"]}'
 */

async function submitToIndexNow(urls: string[]) {
  const fullUrls = urls.map(u => u.startsWith('http') ? u : `https://${SITE_HOST}${u}`);

  const payload = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: fullUrls,
  };

  const engines = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
  ];

  const results = await Promise.allSettled(
    engines.map(async (engine) => {
      const res = await fetch(engine, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      return { engine, status: res.status, ok: res.ok };
    })
  );

  return results.map((r, i) => {
    if (r.status === 'fulfilled') return r.value;
    return { engine: engines[i], status: 'error', error: String(r.reason) };
  });
}

// GET: Submit all important pages
export async function GET() {
  // Static pages
  const staticPages = [
    '/', '/writings', '/glossary', '/profile', '/media',
    '/community', '/seo', '/agentic-web', '/vibe-coding',
    '/web3-101', '/prompt-engineering-101',
  ];

  // Dynamic: glossary terms and essays loaded at build time via sitemap
  // For a full submit, we send the static pages + sitemap URL
  const results = await submitToIndexNow(staticPages);

  return NextResponse.json({
    submitted: staticPages.length,
    urls: staticPages,
    results,
  });
}

// POST: Submit specific URLs
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const urls: string[] = body.urls || [];

    if (!urls.length) {
      return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
    }

    const results = await submitToIndexNow(urls);

    return NextResponse.json({
      submitted: urls.length,
      urls,
      results,
    });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
