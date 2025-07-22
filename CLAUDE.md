# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type check without compilation
npm run type-check
```

## Architecture Overview

This is a Next.js 14 marketing website for Mutup using the App Router pattern. The site is a single-page application with multiple sections rendered in sequence.

### Key Technical Stack
- **Next.js 14** with App Router (`src/app/`)
- **TypeScript** with strict configuration
- **Tailwind CSS** with custom theme and animations
- **Framer Motion** for scroll-based animations
- **Radix UI** components for accessibility
- **React Intersection Observer** for scroll reveal effects

### Project Structure
- `src/app/layout.tsx` - Root layout with GTM integration and SEO metadata
- `src/app/page.tsx` - Main page orchestrating all sections
- `src/components/sections/` - Page sections (Hero, About, Services, etc.)
- `src/components/ui/` - Reusable UI components following shadcn/ui patterns
- `src/lib/utils.ts` - Utility functions for className merging

### Component Architecture
The main page is composed of seven key sections loaded in sequence:
1. HeroSection - Landing CTA with animations
2. AboutSection - Company introduction
3. ServicesSection - Three service pillars
4. WhyMutupSection - Six differentiators
5. ProcessSection - Four-step methodology
6. BenefitsSection - Before/after comparison
7. CalendlySection - Booking integration with FAQ

### Styling System
- Uses custom Tailwind theme with Mutup brand colors (`mutup.dark`, `mutup.white`, etc.)
- Custom CSS variables for theming in `globals.css`
- Custom animations: `fade-up`, `fade-in` for scroll reveals
- Responsive design with mobile-first approach

### External Integrations
- **Google Tag Manager**: ID `GTM-54BNB2R6` configured in layout
- **Calendly**: Embedded widget at `https://calendly.com/mutup/sessao-estrategica`
- **LGPD Compliance**: Cookie consent banner implementation

### Path Aliases
- `@/*` maps to `src/*` for clean imports

## Development Notes

- All components use TypeScript with strict typing
- The site uses client-side rendering (`'use client'`) for animations
- Images are served from `/public/images/` directory
- SEO metadata is comprehensive with Open Graph and Twitter Cards
- The site is optimized for Portuguese (pt-BR) locale