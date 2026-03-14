#!/bin/bash
# Post-deploy script: Submit all URLs to IndexNow
# Called automatically after build/deploy via package.json postbuild script

KEY="8e98e43851d7462c9c210ecd4321a7fc"
HOST="veda.ng"
KEY_URL="https://${HOST}/${KEY}.txt"

echo "📡 IndexNow: Submitting all pages to search engines..."

# Build URL list from the build output
URLS=""

# Static pages
for page in "/" "/writings" "/glossary" "/profile" "/media" "/community" "/seo" "/agentic-web" "/vibe-coding" "/web3-101" "/prompt-engineering-101"; do
  URLS="${URLS}\"https://${HOST}${page}\","
done

# Essays
for f in src/content/essays/*.mdx; do
  slug=$(basename "$f" .mdx)
  URLS="${URLS}\"https://${HOST}/${slug}\","
done

# Glossary terms (extract slugs from glossary.ts)
for slug in $(grep -oP "slug:\s*['\"]\\K[^'\"]*" src/lib/glossary.ts 2>/dev/null || grep -oE "slug: '[^']*'" src/lib/glossary.ts | sed "s/slug: '//;s/'//"); do
  URLS="${URLS}\"https://${HOST}/glossary/${slug}\","
done

# Remove trailing comma
URLS="${URLS%,}"

PAYLOAD="{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"${KEY_URL}\",\"urlList\":[${URLS}]}"

# Submit to all engines
for engine in "https://api.indexnow.org/IndexNow" "https://www.bing.com/IndexNow" "https://yandex.com/indexnow"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$engine" \
    -H "Content-Type: application/json; charset=utf-8" \
    -d "$PAYLOAD" 2>/dev/null)
  
  name=$(echo "$engine" | sed 's|https://||;s|/.*||')
  if [ "$code" = "200" ] || [ "$code" = "202" ]; then
    echo "  ✅ ${name}: ${code}"
  else
    echo "  ⚠️  ${name}: ${code} (may need verification)"
  fi
done

URL_COUNT=$(echo "$URLS" | tr ',' '\n' | wc -l | tr -d ' ')
echo "📊 Submitted ${URL_COUNT} URLs total"
