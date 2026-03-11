# X (Twitter) Integration Setup

Automated posting from vedang-website to your X account.

## Prerequisites

- X account (any user)
- Developer credentials from X API

## Step 1: Get X API Credentials

1. Go to [X Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new app (or use existing)
3. Go to **Settings → Authentication settings**
4. Enable **3-legged OAuth** ✅
5. Set **Callback URI**: `http://localhost:3000/api/auth/x/callback` (local) or `https://yourdomain.com/api/auth/x/callback` (production)
6. Copy your:
   - **Client ID**
   - **Client Secret**

## Step 2: Add Credentials to .env.local

```bash
X_CLIENT_ID=your_client_id_here
X_CLIENT_SECRET=your_client_secret_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # or your production URL
```

## Step 3: Authorize Your Account

### Option A: Web Authorization (Manual)

```bash
npm run x:authorize
```

This will:
1. Print an authorization URL
2. You click it and authorize vedang-website
3. Get redirected to callback with access token
4. Copy token to your .env.local

### Option B: Direct Token (If you have it)

```bash
X_ACCESS_TOKEN=your_access_token_here
```

## Step 4: Post Essays to X

### Post All Recent Essays

```bash
npm run x:post-essays
```

This will:
1. Get your essays
2. Format them with your essay link
3. Post to X (with 2-second delays between posts)
4. Show success/failure for each post

### Manual Post

```typescript
import { postToX } from '@/lib/x';

const result = await postToX(
  { text: 'Your message here' },
  process.env.X_ACCESS_TOKEN!
);

console.log(result.data.id); // Tweet ID
```

## Permissions Required

Your X app needs:
- ✅ `tweet.write` — Post tweets
- ✅ `tweet.read` — Read tweets (optional)
- ✅ `users.read` — Get user info (optional)

## Rate Limits

X API limits:
- **Tweet posting:** 300 posts per 15 minutes
- **This script:** 2-second delays between posts (safe)

## Troubleshooting

**"X_CLIENT_ID not found"**
- Add credentials to .env.local
- Restart dev server

**"Failed to authenticate"**
- Verify Client ID/Secret are correct
- Check redirect URI matches X Developer settings
- Make sure 3-legged OAuth is enabled

**"Invalid scope"**
- Ensure your app permissions include `tweet.write`
- Regenerate app keys if needed

## Security Notes

- Never commit .env.local to git
- Don't share X_CLIENT_SECRET or X_ACCESS_TOKEN
- Use separate app for dev/prod if possible
- Store tokens in secure env, not code

## Advanced: Scheduled Posts

Currently posts immediately. To schedule posts for later:

1. Store posts in JSON with timestamps
2. Use a job scheduler (Bull, node-cron)
3. Post when scheduled time arrives

Example:

```typescript
import cron from 'node-cron';
import { postToX } from '@/lib/x';

// Post every Monday at 9 AM
cron.schedule('0 9 * * 1', async () => {
  await postToX(
    { text: 'Monday essay post' },
    process.env.X_ACCESS_TOKEN!
  );
});
```

## Need Help?

- X API Docs: https://developer.twitter.com/en/docs/twitter-api
- OAuth Flow: https://developer.twitter.com/en/docs/authentication/oauth-2-0
- Rate Limits: https://developer.twitter.com/en/docs/projects/overview#v2-limits
