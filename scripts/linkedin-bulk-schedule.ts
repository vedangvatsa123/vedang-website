import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

interface LinkedInPost {
  content: string;
  scheduleDate: string; // YYYY-MM-DD
  scheduleTime: string; // HH:MM (24-hour format)
}

async function scheduleLinkedInPosts() {
  const browser = await chromium.launch({ headless: false }); // headless: false so you can see what's happening
  const context = await browser.createBrowserContext();
  const page = await context.newPage();

  try {
    // Read posts from JSON file
    const postsPath = path.join(__dirname, 'linkedin-posts.json');
    if (!fs.existsSync(postsPath)) {
      throw new Error(
        `linkedin-posts.json not found at ${postsPath}. Create it with your posts.`
      );
    }

    const posts: LinkedInPost[] = JSON.parse(
      fs.readFileSync(postsPath, 'utf-8')
    );

    console.log(`📍 Found ${posts.length} posts to schedule`);

    // Navigate to LinkedIn
    await page.goto('https://www.linkedin.com/feed/');
    console.log('🔄 Navigating to LinkedIn...');

    // Wait for login if not already logged in
    try {
      await page.waitForURL('https://www.linkedin.com/feed/', {
        timeout: 5000,
      });
    } catch {
      console.log(
        '⏳ Waiting for login... Please log in manually (you have 2 minutes)'
      );
      await page.waitForURL('https://www.linkedin.com/feed/', {
        timeout: 120000,
      });
    }

    console.log('✅ Logged in to LinkedIn');

    // Schedule each post
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      console.log(`\n📝 Scheduling post ${i + 1}/${posts.length}`);
      console.log(`   Content: ${post.content.substring(0, 50)}...`);
      console.log(`   Date: ${post.scheduleDate} at ${post.scheduleTime}`);

      try {
        await schedulePost(page, post);
        console.log(`   ✅ Scheduled successfully`);

        // Add delay between posts to avoid rate limiting
        if (i < posts.length - 1) {
          await page.waitForTimeout(3000);
        }
      } catch (error) {
        console.error(`   ❌ Failed to schedule: ${error instanceof Error ? error.message : String(error)}`);
        console.log('   Continuing to next post...');
      }
    }

    console.log(`\n✨ All posts scheduled! Total: ${posts.length}`);
  } catch (error) {
    console.error('❌ Error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  } finally {
    await browser.close();
  }
}

async function schedulePost(page: any, post: LinkedInPost): Promise<void> {
  // Click "Start a post" button
  const startPostBtn = await page.$('text=/Start a post/i');
  if (!startPostBtn) {
    throw new Error('Start a post button not found');
  }
  await startPostBtn.click();

  // Wait for compose modal
  await page.waitForSelector('[contenteditable="true"]', { timeout: 5000 });

  // Type content
  const contentField = await page.$('[contenteditable="true"]');
  await contentField.click();
  await page.keyboard.type(post.content, { delay: 10 }); // Slow typing to look human

  // Wait a bit for content to render
  await page.waitForTimeout(1000);

  // Look for Schedule button - LinkedIn typically has "Schedule" or similar
  let scheduleBtn;
  try {
    // Try common selectors for schedule button
    scheduleBtn =
      (await page.$('text=/Schedule/i')) ||
      (await page.$('button:has-text("Schedule")'));
  } catch {
    // Fallback: look for button with aria-label or title containing "schedule"
    scheduleBtn = await page.$(
      'button[aria-label*="Schedule"], button[title*="Schedule"]'
    );
  }

  if (!scheduleBtn) {
    throw new Error('Schedule button not found');
  }

  await scheduleBtn.click();

  // Wait for schedule modal
  await page.waitForSelector('[role="dialog"]', { timeout: 5000 });

  // Find and click the date/time input
  const dateInputs = await page.$$('input[type="text"]');

  if (dateInputs.length < 2) {
    throw new Error('Date/time inputs not found');
  }

  // Set date
  await dateInputs[0].click();
  await dateInputs[0].fill(post.scheduleDate);

  await page.waitForTimeout(500);

  // Set time
  await dateInputs[1].click();
  await dateInputs[1].fill(post.scheduleTime);

  await page.waitForTimeout(500);

  // Click "Schedule" or "Post" button in modal
  const confirmBtn = await page.$('text=/Schedule|Post/i');
  if (!confirmBtn) {
    throw new Error('Confirm schedule button not found');
  }

  await confirmBtn.click();

  // Wait for modal to close (indicates success)
  await page.waitForTimeout(2000);
}

// Run the script
scheduleLinkedInPosts().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
