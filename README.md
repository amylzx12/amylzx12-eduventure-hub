# EduVenture — resource hub for international teachers

Open, free resources for international (currently Chinese-focused) teachers building
a career in New York schools: figuring out which certificate you need, studying for
it, and landing the job.

## What's in this repo

```
eduventure-hub/
  index.html          ← hub home page (links to everything below)
  pathway/             ← "find your certificate" — embeds the existing Fillout tool
  practice/             ← quiz, flashcards, and the EAS study camp
    data.js             ← all exam/program content — edit this to add questions, exams, camps
    app.js               ← app logic — shouldn't need to change often
  toolkit/              ← job hunting toolkit (resume, interview, demo lesson, work authorization)
    data.js             ← all toolkit articles — edit this to add guides
    app.js               ← app logic
```

Every section is a plain set of HTML/JS files — no build tools, no npm install. That
means anyone can open a file, read exactly what it does, and edit it directly.

## Publishing this for the first time

### 1. Create a GitHub account (skip if you already have one)
Go to **github.com** → Sign up → verify your email.

### 2. Create a new repository
On github.com, click the **+** in the top right → **New repository**. Name it
something like `eduventure-hub`, set it to **Public** (that's what makes it "open
source"), and click **Create repository**.

### 3. Upload these files
On the new repository's page, click **uploading an existing file**, then drag in
everything from this folder (keeping the `pathway/`, `practice/`, and `toolkit/`
subfolders intact). Commit the upload.

### 4. Connect it to Netlify
- Go to **app.netlify.com** → **Add new site** → **Import an existing project**
- Choose **GitHub**, authorize it, and pick your `eduventure-hub` repository
- Leave the build settings blank (there's no build step) and click **Deploy**

From now on, any change you push to GitHub — including ones I hand you — goes live
automatically within about a minute. No more re-zipping and dragging folders.

## Updating content later

- **New quiz questions, exams, or camp content** → edit `practice/data.js`
- **New job-hunting guides** → edit `toolkit/data.js`
- **A whole new toolkit category** (e.g. "salary negotiation") → add a new entry to
  the `categories` array in `toolkit/data.js`

Come back to Claude with what you want to add — I'll hand you the updated file, and
you commit it on GitHub (either by re-uploading it, or asking me for the exact
change if you want to learn the GitHub editor).

## The certificate pathway tool

The "Find your certificate" page embeds the existing tool at
`eduventurenystcpn.zite.so` inside an iframe, with a fallback link in case the
embed gets blocked (some site builders don't allow being embedded — this needs to
be checked on the live site once it's deployed). If it doesn't work, the fastest
fix is switching that page to a plain link instead of an iframe — ask Claude to
make that change.

## Notes

- All quiz/practice progress is stored in each visitor's own browser (not shared
  between people or sent anywhere).
- Member-only content in the study camp uses a single shared access code — see
  `practice/data.js` → `SITE_CONFIG.accessCode` to change it.
- Nothing here is legal, immigration, or financial advice — the work-authorization
  overview in the toolkit is general orientation only.
