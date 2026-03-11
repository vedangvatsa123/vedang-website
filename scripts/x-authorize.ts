#!/usr/bin/env node
import crypto from 'crypto';

// Get environment variables
const clientId = process.env.X_CLIENT_ID;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';

if (!clientId) {
  console.error('❌ Error: X_CLIENT_ID not found in .env.local');
  console.error('Please add your X API credentials first. See X_SETUP.md for instructions.');
  process.exit(1);
}

// Generate PKCE challenge
const codeVerifier = crypto.randomBytes(32).toString('hex');
const codeChallenge = crypto
  .createHash('sha256')
  .update(codeVerifier)
  .digest('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=/g, '');

// Generate state for CSRF protection
const state = crypto.randomBytes(16).toString('hex');

// Store values for callback (in real app, this would use sessionStorage or similar)
console.log('\n🔐 X Authorization Setup');
console.log('========================\n');
console.log('1. Copy this URL into your browser:\n');

const authUrl = new URL('https://twitter.com/i/oauth2/authorize');
authUrl.searchParams.append('response_type', 'code');
authUrl.searchParams.append('client_id', clientId);
authUrl.searchParams.append('redirect_uri', `${baseUrl}/api/auth/x/callback`);
authUrl.searchParams.append('scope', 'tweet.write tweet.read users.read');
authUrl.searchParams.append('state', state);
authUrl.searchParams.append('code_challenge', codeChallenge);
authUrl.searchParams.append('code_challenge_method', 'S256');

console.log(authUrl.toString());

console.log('\n2. After you authorize, you\'ll be redirected to a page with your access token');
console.log('3. Copy the access token from the response');
console.log('4. Add it to .env.local as: X_ACCESS_TOKEN=<your_token>');
console.log('5. Run: npm run x:post-essays\n');

// For reference in the callback
console.log('📝 Technical details (for reference):');
console.log(`   Code Verifier: ${codeVerifier}`);
console.log(`   State: ${state}\n`);
