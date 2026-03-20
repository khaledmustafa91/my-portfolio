# Khaled Mustafa — Personal Portfolio

A personal portfolio website for Khaled Mustafa, Senior Backend Engineer.

**Stack:** Next.js 16 · TypeScript · Tailwind CSS · Framer Motion
**Deploy:** Netlify (static export)

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Build

```bash
npm run build
```

The static site is exported to the `out/` directory.

---

## Deploy to Netlify

### Option 1 — Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --dir=out --prod
```

### Option 2 — Git Integration

1. Push this repo to GitHub / GitLab
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Connect your repo
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click **Deploy site**

### Netlify Forms

The contact form uses Netlify Forms. It works automatically once deployed to Netlify — no additional setup needed.

---

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx       # Sticky navigation with mobile menu
│   ├── Hero.tsx         # Hero section with animated intro
│   ├── About.tsx        # Bio & stats
│   ├── Experience.tsx   # Work history timeline
│   ├── OpenSource.tsx   # Open source gems card grid
│   ├── Skills.tsx       # Skill badges by category
│   ├── Contact.tsx      # Contact form + social links
│   └── Footer.tsx       # Footer
├── globals.css          # Global styles & Tailwind directives
├── layout.tsx           # Root layout with metadata
└── page.tsx             # Main page assembly
netlify.toml             # Netlify build config
next.config.mjs          # Next.js static export config
tailwind.config.ts       # Tailwind theme config
```
