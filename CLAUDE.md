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

## Architecture

This is a React 19 + TypeScript single-page landing site for a travel/transport booking service, built with Vite.

**Component layout** (`src/App.tsx`): Renders a single vertical stack of page sections in order — `Header → Hero → HorizontalBookingCard → Services → Features → Fleet → About → CTA → Footer`. No routing.

**Styling approach — mixed**: Global CSS classes live in `src/index.css` (CSS custom properties for the design system, utility classes like `.btn`, `.card`, `.section`, `.container`, `.grid-3`, etc.). Tailwind v4 utility classes are also used directly in components. Both coexist; prefer the global CSS classes for layout/spacing that matches the existing design system, and Tailwind utilities for one-off styles within components.

**Design tokens** (defined in `src/index.css` `:root`):
- `--primary: #0d2357` (dark navy), `--secondary: #1a3a7c`, `--muted: #6b7fa3`
- `--radius: 16px`, `--shadow`, `--max-width: 1200px`

**`src/components/ui/`** — reusable primitives separate from page sections:
- `BookingEnquiryForm.tsx` — HeroUI-based enquiry form with WhatsApp integration
- `shape-landing-hero.tsx` — Framer Motion animated decorative shapes for the hero
- `heroui-fieldset.tsx` — thin wrapper re-exporting HeroUI's `Fieldset`
- `heroui-fieldset-utils/` — helper utilities for HeroUI fieldset

**Key dependencies**:
- `@heroui/react` — form primitives (Button, Input, TextArea, etc.) used in `BookingEnquiryForm`
- `framer-motion` — used in `shape-landing-hero.tsx` for entrance animations
- `lucide-react` — icons
- `tailwindcss` v4 via `@tailwindcss/vite` plugin (no `tailwind.config.js` — config is embedded in the Vite plugin)

**Path alias**: `@` resolves to `./src` (configured in both `vite.config.js` and `tsconfig.json`).

**Linter**: oxlint (not ESLint). Config is in `.oxlintrc.json`. Rules enforced: `react/rules-of-hooks` (error), `react/only-export-components` (warn).
