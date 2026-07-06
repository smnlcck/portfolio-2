# Alethia-style Portfolio

A Next.js + TypeScript + Tailwind v4 + Framer Motion portfolio built from `alethia-portfolio-BUILD-PROMPT.md` — a design system inspired by alethia.earth's fonts, layout, and motion language (morphing preloader, staggered reveals, scroll-triggered animations, restrained flat-color palette).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Replace the placeholder copy (name, project case studies, email) in `app/page.tsx`, `components/Hero.tsx`, `components/CTABand.tsx`, and `components/Footer.tsx` with your own.

## Deploy to GitHub Pages

This project is already configured for GitHub Pages: `next.config.ts` builds a static export (`output: "export"`) and automatically prefixes all URLs with your repo name when it detects it's running in GitHub Actions, and `.github/workflows/deploy.yml` builds and publishes it on every push to `main`.

Steps:

1. Create a new (empty) GitHub repository — do **not** initialize it with a README.
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, and under "Build and deployment / Source" select **GitHub Actions** (not "Deploy from a branch").
4. Push (or re-run the workflow from the **Actions** tab) — the included workflow will build the static site and deploy it automatically.
5. Your site will be live at `https://<your-username>.github.io/<your-repo>/` within a minute or two. The exact URL is also shown on the Settings → Pages screen and in the workflow run summary once it finishes.

Notes:
- If you rename the repo later, no config changes are needed — the base path is derived automatically from the repo name at build time.
- Team members just need push/read access to the repo to see updates; anyone with the link can view the deployed site (GitHub Pages sites are public unless the repo is on an Enterprise plan with Pages access control).
- This has been tested end-to-end (static export + subpath simulation) and produces zero broken asset requests.

## Deploy on Vercel (alternative)

If you'd rather not use GitHub Pages, [Vercel](https://vercel.com/new) (made by the Next.js team) is a zero-config option: connect the GitHub repo and it auto-detects Next.js, builds, and gives you a live URL. No `next.config.ts` changes needed for this path — it works with or without the static export settings above.

## Tech

Next.js App Router, TypeScript, Tailwind CSS v4 (`@theme inline` tokens), Framer Motion, `next/font` (Geist/Geist Mono), Lucide icons. `MotionConfig reducedMotion="user"` handles `prefers-reduced-motion` automatically.
