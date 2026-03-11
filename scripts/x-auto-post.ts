import { postToX } from '@/lib/x';
import { essays } from '@/lib/essays';

interface XPost {
  essaySlug: string;
  text: string;
  schedule?: string; // ISO date or relative time
  hashtags?: string[];
}

async function postEssayToX() {
  const accessToken = process.env.X_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error('X_ACCESS_TOKEN not found in environment variables');
  }

  console.log(`📍 Found ${essays.length} essays`);
  console.log('🐦 Posting to X...\n');

  // Example posts for first 5 essays
  const posts: XPost[] = essays.slice(0, 5).map((essay) => ({
    essaySlug: essay.slug,
    text: `New essay: "${essay.title}"

${essay.summary.substring(0, 150)}...

Read full essay on veda.ng/${essay.slug}

#AI #Thoughts`,
    hashtags: ['AI', 'Thoughts', 'Philosophy'],
  }));

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    try {
      // Truncate text if needed
      let postText = post.text;
      if (postText.length > 280) {
        postText = postText.substring(0, 277) + '...';
      }

      console.log(`📝 Posting essay ${i + 1}/${posts.length}: "${post.essaySlug}"`);
      console.log(`   Text: ${postText.substring(0, 50)}...`);

      const result = await postToX({ text: postText }, accessToken);

      console.log(`   ✅ Posted successfully`);
      console.log(`   Tweet ID: ${result.data.id}`);
      console.log(`   URL: https://twitter.com/vedangvatsa/status/${result.data.id}\n`);

      // Rate limiting: 2 second delay between posts
      if (i < posts.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.error(
        `   ❌ Failed to post: ${error instanceof Error ? error.message : String(error)}`
      );
      console.log('   Continuing to next essay...\n');
    }
  }

  console.log('✨ Done!');
}

// Run the script
postEssayToX().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
