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
├── pages/
│   ├── index.astro          ← Composes the sections
│   └── legal/               ← CGU / CGV / mentions légales / confidentialité (Markdown)
└── layouts/
    └── LegalLayout.astro    ← Wraps the /legal/* Markdown pages
```

## ⚖️ Pages légales

`src/pages/legal/*.md` est la **source unique** des documents juridiques — il n'en existe pas de copie ailleurs. Chaque fichier est du Markdown rendu par `LegalLayout.astro` ; le frontmatter (`layout`, `title`, `description`) est requis, le reste du fichier est le texte publié tel quel.

Pour modifier un document, édite le `.md` : les pages `/legal/cgu`, `/legal/cgv`, `/legal/mentions-legales` et `/legal/confidentialite` suivent, ainsi que les liens du footer.

Les durées de conservation RGPD (12 mois / 3 ans) et le préavis tarifaire (30 jours) sont des **engagements opposables** : ils doivent refléter le comportement réel de l'application.

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
