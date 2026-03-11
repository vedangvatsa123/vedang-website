# LinkedIn Bulk Scheduler

One-time Playwright-based script to schedule 20-30 LinkedIn posts without API access.

## Setup

### 1. Install Playwright (if not already installed)

```bash
npm install --save-dev playwright
```

### 2. Prepare Your Posts

Edit `scripts/linkedin-posts.json` with your posts:

```json
[
  {
    "content": "Your post text here",
    "scheduleDate": "2026-03-15",
    "scheduleTime": "09:00"
  }
]
```

**Important:**
- `scheduleDate`: YYYY-MM-DD format
- `scheduleTime`: HH:MM format (24-hour)
- You can add 20-30 posts to this file

### 3. Run the Scheduler

```bash
npm run linkedin:schedule
```

The script will:
1. Open a browser window
2. Prompt you to log into LinkedIn (manual login)
3. Automatically schedule each post
4. Show progress for each post

## How It Works

- **Browser Automation:** Uses Playwright to control your browser
- **Manual Login:** You log in once, script does the scheduling
- **One-Time Use:** Run once, then delete the script
- **No API:** Uses LinkedIn's web interface directly

## Risk Level: MEDIUM ⚠️

**Why medium risk:**
- Still automation (LinkedIn discourages it)
- But: Single login session (looks natural)
- But: Quick bulk scheduling (not recurring daily)
- But: LinkedIn prioritizes banning recurring bots (not one-time tasks)

**To minimize risk:**
1. Don't run this multiple times
2. Space out your posts over weeks (not all today)
3. Delete this script after running once
4. Don't leave the browser unattended during script run

## Troubleshooting

**"Start a post button not found"**
- LinkedIn may have changed their UI
- Manually inspect the button selector and update `linkedin-bulk-schedule.ts`

**"Schedule button not found"**
- Try manually scheduling one post to see current UI
- Update button selector in the script

**Script crashes mid-way**
- Check which posts were scheduled on LinkedIn
- Remove those from `linkedin-posts.json` and run again

## After Running

1. Verify all posts are scheduled on LinkedIn
2. Delete `scripts/linkedin-bulk-schedule.ts` (optional)
3. Delete `scripts/linkedin-posts.json` (if you want to clean up)
4. Keep `package.json` updated or remove the `linkedin:schedule` script

## Manual Alternative

If you prefer zero automation risk:
- Just manually click "Schedule" 20-30 times on LinkedIn
- Takes ~30 minutes
- 100% safe, zero ToS violation
