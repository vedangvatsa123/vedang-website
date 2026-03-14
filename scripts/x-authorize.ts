#!/usr/bin/env node
import crypto from 'crypto';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env.local
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

// Get environment variables
const clientId = process.env.X_CLIENT_ID;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';

if (!clientId) {
  console.error('❌ Error: X_CLIENT_ID not found in .env.local');
  console.error('Please add your X API credentials first. See X_SETUP.md for instructions.');
  process.exit(1);
}

// Generate state for CSRF protection
const state = crypto.randomBytes(16).toString('hex');

console.log('\n🔐 X Authorization Setup');
console.log('========================\n');
console.log('1. Copy this URL into your browser:\n');

const authUrl = new URL('https://twitter.com/i/oauth2/authorize');
authUrl.searchParams.append('response_type', 'code');
authUrl.searchParams.append('client_id', clientId);
authUrl.searchParams.append('redirect_uri', `${baseUrl}/api/auth/x/callback`);
authUrl.searchParams.append('scope', 'tweet.write tweet.read users.read');
authUrl.searchParams.append('state', state);

console.log(authUrl.toString());

console.log('\n2. After you authorize, you\'ll see a JSON response with your access token');
console.log('3. Copy the "access_token" value from the response');
console.log('4. Add it to .env.local as: X_ACCESS_TOKEN=<your_token>');
console.log('5. Run: npm run x:post-essays\n');

// For reference in the callback
console.log('📝 Technical details (for reference):');
console.log(`   State: ${state}\n`);
