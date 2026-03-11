# Pierce Lawson Portfolio — Setup & CMS Guide

Complete Eleventy + Decap CMS portfolio with page transitions, process galleries, hover-play videos, and featured projects. Everything is pre-configured.

---

## TONIGHT'S SETUP (10 min total)

### Step 1 — Push to GitHub

```bash
cd pierce-portfolio
npm install
git init
git add .
git commit -m "Initial commit"
```

Create a new repo at https://github.com/new (call it `pierce-portfolio`), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/pierce-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Netlify

1. Go to https://app.netlify.com → **Add new site → Import an existing project**
2. Select GitHub → pick `pierce-portfolio`
3. Build settings auto-fill from `netlify.toml`
4. Click **Deploy site**

### Step 3 — Enable the CMS

1. In Netlify dashboard → **Integrations → Identity → Enable Identity**
2. Under Registration → set to **Invite only**
3. **Integrations → Identity → Git Gateway → Enable Git Gateway**
4. **Identity → Invite users** → enter your email
5. Click the confirmation link in your email → set password
6. Visit `https://your-site.netlify.app/admin` → log in

### Step 4 — Custom Domain (optional)

1. Netlify → **Domain settings → Add custom domain** → `piercelawson.com`
2. Update DNS at your registrar (Netlify shows instructions)
3. Free SSL auto-provisions

---

## MANAGING CONTENT (day-to-day)

### Adding a Project

1. Go to `yoursite.com/admin`
2. Click **Projects → New Project**
3. Fill in the fields:
   - **Title** — project name
   - **Category** — Commercial, Brand Campaign, etc.
   - **Client / Year** — optional metadata
   - **Thumbnail** — the grid image (upload directly)
   - **Hero Image** — full-width banner on the project page
   - **Video Embed URL** — YouTube/Vimeo embed (e.g. `https://www.youtube.com/embed/abc123`)
   - **Short Description** — italic lead text on project page
   - **Body** — full writeup (supports markdown: headings, bold, images, links)
   - **Display Order** — lower number = appears first
   - **Featured** — toggle ON to show in "More Work" sections

4. Click **Publish** → Netlify rebuilds in ~30 seconds → live

### Adding Process Gallery Items

Inside any project, scroll to the **Process Gallery** section:

1. Click **Add Process Gallery** to add a step
2. For each item:
   - **Title / Caption** — the heading for this step
   - **Description** — body text explaining what happened
   - **Media Type** — choose `image` or `video`
   - **Image** — upload a still (used when type is "image")
   - **Video File** — upload an MP4 (plays on hover when type is "video")
   - **Video Poster** — still frame shown before hover-play
   - **Layout** — `full` for full-width, `half` for side-by-side pairs

**Layout tips:**
- Use `full` for hero-style process shots or video clips
- Use `half` on two consecutive items to make them sit side-by-side
- Mix and match — e.g. full → half+half → full → half+half
- Videos play automatically on hover and pause when mouse leaves

### Editing Site Settings

1. Go to `/admin` → **Site Settings → General**
2. Edit hero headline, tagline, about text, email, location
3. Publish

### Uploading Media

- The CMS has a built-in media manager
- Supports images (jpg, png, webp, gif) and video (mp4)
- Images go to `src/assets/img/` automatically
- Recommended thumbnail size: **1200×900px** (4:3 ratio)
- Recommended hero images: **1920×1080px** or wider
- Videos: keep under 20MB for fast loading; compress with Handbrake if needed

---

## FEATURES

### Page Transitions
Animated column-wipe transition between all pages. Five staggered lime-green columns scale up on exit and back down on entrance. All internal links trigger this automatically.

### Process Gallery
Each project can have an unlimited process gallery with mixed image/video items. Videos play on hover with a play indicator that fades out. Items can be full-width or paired side-by-side.

### Featured Projects
Projects marked as "Featured" appear in a "More Work" grid at the bottom of every project page (excluding the current project). This keeps users browsing.

### Scroll Animations
All major sections fade up as they enter the viewport. Project cards stagger their entrance. The hero has sequenced fade-in animations.

---

## FILE STRUCTURE

```
pierce-portfolio/
├── .eleventy.js              ← Build config + collections
├── netlify.toml              ← Deploy settings
├── package.json              ← Dependencies
└── src/
    ├── index.njk             ← Homepage
    ├── _data/
    │   └── settings.json     ← Site settings (CMS-editable)
    ├── _includes/
    │   ├── base.njk          ← Global layout, nav, footer, transitions
    │   └── project.njk       ← Project page + process + featured
    ├── admin/
    │   ├── index.html        ← CMS entry point
    │   └── config.yml        ← Content model definition
    ├── assets/img/           ← Uploaded media
    └── projects/             ← Each .md = one project page
        ├── kelly-roofing.md
        └── aw-broadband.md
```

---

## LOCAL DEV

```bash
npm install
npm start
```

Runs at `http://localhost:8080` with live reload. The CMS admin won't work locally (it needs Netlify Identity), but you can preview templates and styling changes.

---

## ADDING MORE CONTENT TYPES

Want a blog, testimonials, or services page? Edit `src/admin/config.yml` to add a new collection, create a matching template in `_includes/`, and Decap gives you the admin form automatically.
