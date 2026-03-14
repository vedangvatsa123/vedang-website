#!/bin/bash
# Submit all 332 URLs to IndexNow (Bing, Yandex, and consortium)
# Run this after deployment: bash scripts/submit-indexnow.sh

echo "Checking key file at production..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://veda.ng/8e98e43851d7462c9c210ecd4321a7fc.txt")

if [ "$STATUS" != "200" ]; then
  echo "❌ Key file not found at production (HTTP $STATUS)"
  echo "   Deploy first, then re-run this script."
  exit 1
fi

echo "✅ Key file verified. Submitting 332 URLs..."

echo ""
echo "=== Submitting to api.indexnow.org ==="
curl -s -w "\nHTTP Status: %{http_code}\n" \
  -X POST "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d @/tmp/indexnow_payload.json

echo ""
echo "=== Submitting to Bing ==="
curl -s -w "\nHTTP Status: %{http_code}\n" \
  -X POST "https://www.bing.com/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d @/tmp/indexnow_payload.json

echo ""
echo "=== Submitting to Yandex ==="
curl -s -w "\nHTTP Status: %{http_code}\n" \
  -X POST "https://yandex.com/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d @/tmp/indexnow_payload.json

echo ""
echo "Done! Check responses above — 200 = success."
