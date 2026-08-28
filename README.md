# MD. SHAHIDUZZAMAN — Portfolio Website

A modern, high-converting multi-page developer portfolio built with **Next.js 16**, **Tailwind CSS**, and **TypeScript**. Optimized for deployment on **Vercel**.

## Pages

- **Home** — Hero, featured services, featured projects, CTA banner
- **About** — Professional summary, career timeline, education, skills
- **Services** — Interactive service cards with bullet points
- **Projects** — Filterable portfolio gallery (All / Advanced / Other)
- **Blog** — Searchable article grid with category filters
- **Contact** — Contact info + interactive form

## Features

- Dark / light mode toggle (persisted in localStorage)
- Responsive navigation with mobile menu
- Hover micro-interactions on cards
- Filterable project gallery
- Blog search and category filtering
- Emerald green accent on slate dark/light theme
- Inter + Poppins typography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2: GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Add the required environment variables below, then click **Deploy**.

### Required environment variables

The admin panel stores content in Upstash Redis so edits and contact messages
survive Vercel function restarts. Create an Upstash Redis database from the
Vercel Marketplace and add these variables to Development, Preview, and
Production:

```text
AUTH_SECRET=<long-random-secret> # Recommended; demo fallback is used when omitted
ADMIN_PASSWORD=<strong-admin-password> # Optional; defaults to Admin123 for the demo
UPSTASH_REDIS_REST_URL=<database-rest-url>
UPSTASH_REDIS_REST_TOKEN=<database-rest-token>
```

Without the Redis variables, local development uses `content/store.json`; a
Vercel deployment intentionally fails rather than silently losing admin edits.

### Option 3: One-click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

## Resume Download

Place your resume PDF at `public/resume.pdf` for the "Download Resume" button on the home page.

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable UI components
└── data/          # Content data (services, projects, blog, etc.)
```

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Lucide React (icons)

## License

© 2026 MD. SHAHIDUZZAMAN. All Rights Reserved.
