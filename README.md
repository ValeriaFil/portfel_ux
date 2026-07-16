# Valeria Fil — Portfolio (Next.js rebuild)

Code-based rebuild of the portfolio site. Visual/layout reference only:
https://valeriafildesign.framer.website/

**Source of truth for all UI:** the "Valeria Fil Portfolio Design System".
Styles are NOT reconstructed from the Framer build. No design tokens or
styles are invented outside the design system.

## Scope

- [x] Project foundation (Next.js 14 · TypeScript · App Router)
- [x] Design system → tokens + ported component primitives (`src/components/ds`)
- [x] Homepage matched to the live reference (header, hero, recent projects, career, about, contact)

Other pages are intentionally out of scope for now.

## How it's built

- **Tokens** (`src/styles/ds/tokens`) are copied verbatim from the *Valeria Fil
  Portfolio Design System* handoff and are the source of truth for color, type,
  spacing, radii and shadows.
- **Sections** (`src/components/sections`) were laid out to match the live
  reference at `valeriafildesign.framer.website` (measured 1440px canvas: 1097px
  centered column, ink 36px section headings, green `#034C3B` accents, pink-rose
  `#DA2255` icons/button).
- **Images** (portrait + project thumbnails) are currently referenced from the
  Framer CDN so they match the live site exactly. To fully self-host, download
  them into `public/assets/img` and update the URLs in `Hero.tsx` /
  `RecentProjects.tsx`.
- `preview.html` in the project root is a standalone static preview (open it in
  a browser) — handy for a quick look without running the dev server.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
