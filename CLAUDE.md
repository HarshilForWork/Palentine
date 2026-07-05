# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, hot-reload)
npm run build      # Type-check + production build to dist/
npm run preview    # Preview the production build locally
npm run lint       # Run oxlint
```

There are no tests configured in this project.

## Design skill

This project uses the **`/impeccable`** skill for all UI/design work. Always invoke it before making design changes.

```text
/impeccable critique          # Full UX/design review with heuristic scoring
/impeccable polish            # Final quality pass before shipping
/impeccable craft <feature>   # Plan + build a new section or feature
/impeccable layout            # Fix spacing, rhythm, visual hierarchy
/impeccable typeset           # Typography improvements
/impeccable colorize          # Add or adjust color strategy
/impeccable animate           # Add purposeful motion
/impeccable bolder            # Amplify a safe or bland design
```

Design context lives in `PRODUCT.md` (brand register, audience, principles). Read it before any UI work.

## Architecture

React 19 + TypeScript single-page landing site for a travel/transport booking service, built with Vite.

**Component layout** (`src/App.tsx`) — single vertical stack, no routing:

```text
Header → Hero → HorizontalBookingCard → Services → Features → Fleet → About → CTA → Footer
```

**`src/components/ui/`** — shared primitives:

- `shape-landing-hero.tsx` — centered hero with Framer Motion entrance animations; uses `useReducedMotion()` for accessibility
- `background-paths.tsx` — fixed full-screen animated SVG path background; uses `useReducedMotion()` for accessibility
- `scroll-velocity.tsx` — infinite horizontal scroll used by the Fleet section
- `BookingEnquiryForm.tsx` — HeroUI-based full enquiry form with WhatsApp integration (unused in current layout but kept as an alternative)
- `heroui-fieldset.tsx` — thin wrapper re-exporting HeroUI's `Fieldset`

## Styling

**Mixed approach**: global CSS classes in `src/index.css` + Tailwind v4 utilities directly in components. Prefer global CSS classes for anything that matches the existing design system; use Tailwind for one-off styles.

**Design tokens** (`src/index.css` `:root`):
- `--primary: #0d2357` (dark navy), `--secondary: #1a3a7c`, `--muted: #6b7fa3`
- `--radius: 16px`, `--shadow`, `--max-width: 1200px`

**Typography**: Rajdhani (headings, weights 500–700) + Hind (body, weights 400–600) — loaded via Google Fonts `@import` at the top of `index.css`. All `h1–h6` use Rajdhani via a global rule.

**Key CSS classes**:

- Layout: `.container`, `.section`, `.navy-section` (full-bleed dark navy bg)
- Buttons: `.btn`, `.btn-primary`, `.btn-dark`, `.btn-whatsapp` (green), `.btn-cta-secondary` (ghost on dark bg)
- Booking form: `.hbc-form` (4-col grid desktop, 2-col tablet, 1-col mobile), `.hbc-submit` (spans last 2 cols)
- Services: `.services-grid` (3-col), `.service-card`, `.service-icon-wrap`
- Features: `.features-stats` (3-col stat row), `.features-grid` (5-col icon boxes) — rendered on `.navy-section`
- About: `.about-wrap`, `.about-box`, `.commitment-item`, `.about-contact-actions`
- CTA/Footer: `.cta`, `.contact-links`, `.footer-grid`

## Key dependencies

- `framer-motion` — hero entrance animations + background paths; `useReducedMotion()` used throughout
- `lucide-react` — icons across Services, Features, About, CTA (Bus, Truck, Car, Briefcase, Users, Navigation, Shield, UserCheck, Clock, Wallet, Globe, Mail, etc.)
- `@heroui/react` — form primitives in `BookingEnquiryForm` (not used in main flow)
- `tailwindcss` v4 via `@tailwindcss/vite` plugin (no `tailwind.config.js`)

**Path alias**: `@` → `./src` (configured in `vite.config.js` and `tsconfig.json`).

**Linter**: oxlint (not ESLint). Config in `.oxlintrc.json`. Rules: `react/rules-of-hooks` (error), `react/only-export-components` (warn).
