# sam-arias.com — Next.js Portfolio Site

A Next.js 14 (App Router) + Tailwind CSS rebuild of sam-arias.com. Clean,
mobile-responsive, and ready to deploy to Vercel in minutes.

---

## Project Structure

```
sam-arias-site/
├── app/
│   ├── layout.js          # Root layout (Nav + metadata)
│   ├── globals.css        # Tailwind base + custom utilities
│   ├── page.js            # About / Home page  →  /
│   ├── film/
│   │   └── page.js        # Film photography   →  /film
│   └── ph0/
│       └── page.js        # P.H.0 band page    →  /ph0
├── components/
│   └── Nav.js             # Responsive navigation bar
├── public/
│   ├── placeholder.jpg    # Minimal JPEG fallback
│   └── assets/
│       └── README.md      # ← Image replacement guide (read this!)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Getting Started (Local Dev)

### Prerequisites
- **Node.js** 18.17 or later — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node) or **yarn** / **pnpm**

### 1 — Install dependencies

```bash
cd sam-arias-site
npm install
```

### 2 — Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

| Route | Page |
|---|---|
| `/` | About |
| `/film` | Film photography |
| `/ph0` | P.H.0 band |

---

## Deploying to Vercel

The fastest way to go live.

### Option A — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally (one-time)
npm install -g vercel

# From the project folder:
vercel

# Follow the prompts:
#  - Link to your Vercel account
#  - Set project name (e.g. "sam-arias-site")
#  - Confirm framework = Next.js (auto-detected)
#  - Deploy!
```

The CLI will print a live URL when it finishes (e.g. `sam-arias-site.vercel.app`).

### Option B — GitHub + Vercel Dashboard

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Click **"Import Git Repository"** and select your repo.
4. Vercel auto-detects Next.js — click **Deploy**.
5. Every `git push` to `main` will trigger a new deployment.

### Option C — One-click from a zip

1. Drag the project folder onto the Vercel dashboard.
2. Done.

---

## Custom Domain

1. In the Vercel dashboard → your project → **Settings → Domains**.
2. Add `sam-arias.com` (or your custom domain).
3. Update your DNS registrar (e.g. GoDaddy, Namecheap) to point to Vercel:
   - **A record:** `76.76.21.21`
   - **CNAME (www):** `cname.vercel-dns.com`
4. SSL is provisioned automatically.

---

## Adding Real Content

### Images
See **`public/assets/README.md`** for a complete guide. Short version:

```
public/assets/nyc-skyline.jpg          # About page footer
public/assets/film/hero-car-night.jpg  # Film page hero
public/assets/film/photo_01.jpg        # ... through photo_12.jpg
public/assets/ph0/hero-bg.jpg          # P.H.0 hero background
public/assets/ph0/band-photo.jpg       # Band photo
public/assets/sam-arias-resume.pdf     # Resume (Nav links here)
```

### Resume PDF
Drop your resume at `public/assets/sam-arias-resume.pdf`. The Nav already
has a link — just add the file and it goes live.

### P.H.0 Content
Search for `// TODO: populate with band content` in `app/ph0/page.js` to find
all placeholder sections (shows, releases, contact email).

---

## Build for Production

```bash
npm run build   # Compiles + optimizes
npm run start   # Starts the production server locally
```

Vercel runs these automatically — you don't need to do this manually for deploys.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 14.2.5 | Framework (App Router) |
| React | 18 | UI |
| Tailwind CSS | 3.x | Styling |
| PostCSS | 8 | CSS processing |

---

*Built to replicate sam-arias.com with Next.js 14 + Tailwind CSS.*
