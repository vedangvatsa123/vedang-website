# LinkedIn Integration for Vedang Website

This document explains how LinkedIn posting is configured for the vedang-website project.

## What's Set Up

✅ **LinkedIn OAuth** - Secure authorization flow
✅ **Post Publishing** - Publish content to your LinkedIn page
✅ **Image Uploading** - Post with images
✅ **Link Sharing** - Share articles/content with previews

## Credentials

LinkedIn credentials are stored in `.env.local`:

```env
LINKEDIN_CLIENT_ID=your_client_id
LINKEDIN_CLIENT_SECRET=your_client_secret
LINKEDIN_ORG_ID=89714573
LINKEDIN_REDIRECT_URI=http://localhost:3000/api/auth/linkedin/callback
```

**Note:** Never commit `.env.local` to git. Add to `.gitignore` if not already there.

## Getting Access Token

1. Visit this authorization URL:
```
https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86t2x4x9ieabr0&redirect_uri=http://localhost:3000/api/auth/linkedin/callback&state=test123&scope=w_member_social%20w_organization_social
```

2. Log in with your LinkedIn account
3. Click **Authorize**
4. You'll be redirected to `/api/auth/linkedin/callback` with your access token
5. Copy the `accessToken` from the JSON response
6. Add to `.env.local`:
```env
LINKEDIN_ACCESS_TOKEN=your_token_here
```

## Using the API

### Post to LinkedIn

```typescript
import { postToLinkedIn } from '@/lib/linkedin';

const result = await postToLinkedIn({
  content: 'Check out my latest blog post about Web3!',
  linkUrl: 'https://vedang.com/blog/web3-post',
  linkTitle: 'My Latest Blog Post',
  linkDescription: 'Exploring the future of decentralized web',
  imageUrl: 'https://vedang.com/og-image.jpg'
});

console.log(result.url); // LinkedIn post URL
```

## File Structure

- `src/lib/linkedin.ts` - LinkedIn API integration
- `src/app/api/auth/linkedin/callback/route.ts` - OAuth callback handler
- `LINKEDIN_SETUP.md` - This file

## Troubleshooting

**"LinkedIn access token not set"**
- Complete the OAuth flow above
- Add `LINKEDIN_ACCESS_TOKEN` to `.env.local`

**"Unauthorized scope error"**
- Wait for LinkedIn to approve the Community Management API
- You'll receive an email notification when approved
- Then re-authorize

**"LinkedIn API error: 401"**
- Access token expired
- Re-run the OAuth authorization flow to get a new token

## Next Steps

1. ✅ Get authorized via OAuth
2. ✅ Save access token to `.env.local`
3. ✅ Start posting to LinkedIn!

---

For more info: https://docs.microsoft.com/en-us/linkedin/marketing/
