# Navneet Singh — Portfolio

A restructured, multi-file React + TypeScript + Vite version of Navneet Singh's
portfolio. This is a **code-architecture refactor only** — the original single
HTML file's visual design, content, links, animations and behavior have been
preserved as closely as possible. See "What changed vs. the original" below
for the handful of unavoidable, purely-mechanical differences.

## Overview

- **Frontend:** React 18 + TypeScript + Vite, plain CSS (no Tailwind/CSS
  framework — the original was hand-written CSS, so none was introduced).
- **Backend:** minimal, optional Express + TypeScript service (see
  [Backend Setup](#backend-setup) — the site works fully without it).

## Tech Stack

- React 18, TypeScript, Vite
- Plain CSS custom properties (10 live themes, preserved exactly)
- GSAP + ScrollTrigger + Lenis (same CDN scripts the original used, for
  scroll-reveal and smooth scrolling)
- Devicon (technology icons)
- Express (optional backend)

## Project Structure

```
src/
  components/     Navbar, ThemeSwitcher, CustomCursor, Preloader, MobileMenu, common/
  sections/       Hero, About, TechStack, Projects, LeetCode, Experience,
                  Education, Certifications, Stats, Contact, Footer
  features/
    ai-assistant/ Navneet's AI Assistant (bubble, panel, chat, quick commands)
    theme/        Theme context/types (ThemeSwitcher itself lives in components/)
  data/           All portfolio content (personal info, skills, projects,
                  experience, education, certifications, LeetCode stats,
                  contact links, AI knowledge base, nav items, themes)
  hooks/          useTheme, useCustomCursor, useMagnetic, useNavScrollSpy,
                  useLenisScroll, useRevealAnimations, useCountUp,
                  useHeroEntrance, useMediaQuery, useAIAssistant
  background/     NetworkBackground (canvas), ParticleCanvas engine,
                  FloatingOrbs, Atmosphere, GridOverlay
  services/       api.ts, contactService.ts (optional backend client)
  utils/          constants.ts, helpers.ts
  styles/         variables.css, themes.css, reset.css, typography.css,
                  utilities.css (imported once via src/index.css)
backend/          Optional Express API (see below)
```

Each section/component's own CSS file was extracted **verbatim, byte-for-byte**
from the original `<style>` block (verified programmatically during the
refactor) — no colors, spacing, gradients or animation timings were changed.

Responsive rules were **not** pulled into a single `responsive.css`: the
original kept every `@media` query inline next to the rule it modifies, and
that's preserved per-file rather than split apart (splitting them would risk
subtly changing cascade order).

## Frontend Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

## Backend Setup

**The backend is optional.** The site is a fully static frontend: the AI
assistant is a local/static keyword-matched knowledge base (see
`src/data/aiKnowledge.ts`), and the Contact section only uses direct
`mailto:` / `tel:` / social links — exactly like the original single-file
version. No feature currently requires a server.

The `backend/` folder is a clean, minimal Express + TypeScript foundation for
when you *do* want server-side functionality — for example, actually sending
contact-form emails, or proxying the GitHub API to show live repo stats. Its
routes (`/api/contact`, `/api/github`, `/api/ai`) exist but are **not called
by the frontend yet**; `src/services/contactService.ts` is wired up and ready
to use whenever you decide to add a real contact form to the UI.

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Environment Variables

Frontend (`.env`, optional — Vite only reads `VITE_`-prefixed vars):

```
VITE_API_BASE_URL=http://localhost:4000
```

Backend (`backend/.env`, copy from `backend/.env.example`):

```
PORT=4000
CORS_ORIGIN=http://localhost:5173
```

Never commit a real `.env` file or real API keys/secrets.

## Production Build

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

Backend:

```bash
cd backend
npm run build
npm start
```

## Deployment

- **Frontend:** the build output in `dist/` is a static site — deploy it to
  any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).
- **Backend (optional):** deploy `backend/` to any Node host (Render,
  Railway, Fly.io, a VPS, etc.) only if/when you wire up a feature that
  actually needs it. Set `CORS_ORIGIN` to your deployed frontend's URL and
  point the frontend's `VITE_API_BASE_URL` at the deployed backend's URL.

## What changed vs. the original

Nothing about the design, copy, links, or user-facing behavior was
intentionally changed. The only differences are mechanical consequences of
moving from one HTML file to a componentized React app:

- Vanilla-JS DOM manipulation (theme switching, cursor, preloader, nav pill,
  count-up, magnetic buttons, the floating tech-icon field, and the canvas
  particle network) was ported into React hooks that do the **same DOM
  work** the original inline `<script>` did, rather than being rewritten as
  "idiomatic" React state — this was a deliberate choice to avoid any visual
  or behavioral regression.
- GSAP, ScrollTrigger and Lenis are still loaded from the same CDN URLs via
  `<script>` tags in `index.html`, exactly as before, and accessed through
  `window.gsap` / `window.ScrollTrigger` / `window.Lenis` from the hooks.
- Tailwind/PostCSS were **not** introduced — the original didn't use them.
