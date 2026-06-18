# Glass It — Landing (Astro)

Single-page landing for **Glass It**, the QR-code digital menu SaaS for restaurants and bars.

## 🚀 Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → ./dist
npm run preview
```

## 🗂 Structure

```text
src/
├── layouts/
│   └── Layout.astro         ← <html><head>, Google Fonts, global styles
├── styles/
│   └── global.css           ← All design tokens + utility + component styles
├── data/
│   └── menus.ts             ← Showcase menu list (single source of truth)
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── ProblemSolution.astro
│   ├── Features.astro
│   ├── Demo.astro
│   ├── Pricing.astro
│   ├── MenuShowcase.astro   ← Maps over src/data/menus.ts
│   ├── FinalCTA.astro
│   ├── Footer.astro
│   └── Reveal.astro         ← Client-side IntersectionObserver for .reveal
└── pages/
    └── index.astro          ← Composes the sections
```

## ✏️ Editing content

- **Brand copy / hero / pricing** → edit each `src/components/*.astro` directly.
- **Showcase menus** (the clickable client cards) → edit `src/data/menus.ts`. Add an entry, point `href` at your real menu URL, set `image` to a cover photo.
- **Design tokens** (colors, glass, shadows) → `src/styles/global.css`, under `:root`.

## 🎨 Design system

- Typography: **Playfair Display** (titles, italic accents) + **DM Sans** (body / UI). Loaded via Google Fonts in `Layout.astro`.
- Surfaces: Liquid-Glass — `backdrop-filter: blur(24px) saturate(180%)` on top of warm-white (`#F8F7F4`) and photographic backgrounds.
- Accent: pure ink `#1A1A1A` for CTAs and emphasis.

## 📦 Deploy

Static output — works on Netlify / Vercel / Cloudflare Pages / GitHub Pages with zero config. Just point the build command at `npm run build` and the output dir at `dist`.
