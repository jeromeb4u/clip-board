# ClipBoard - Marketing Landing Page Spec

## 1. Concept & Vision

ClipBoard is a searchable, AI-organized library for content creators to store and retrieve snippets: hooks, CTAs, bios, descriptions, and replies. The landing page conveys calm productivity — a tool that respects the creator's time and mental load. It feels like a premium tool, not a cluttered utility.

## 2. Design Language

**Aesthetic:** Productivity-forward SaaS. Clean whitespace, sharp typography, purposeful color usage. Think Linear + Notion.

**Color Palette:**
- Background: `#f8fafc`
- Surface: `#ffffff`
- Border: `#e2e8f0`
- Primary: `#1e40af` (deep blue)
- Secondary: `#059669` (green)
- Success: `#16a34a`
- Text: `#0f172a`
- Muted: `#64748b`

**Typography:** Inter (Google Fonts), weights 400/500/600/700/800

**Spatial System:** 8px base unit. Generous padding in hero, tighter in feature grids.

**Motion:** Subtle entrance animations (fade-up on scroll), hover lifts on cards, button scale on click.

## 3. Layout & Structure

1. **NavBar** — Logo left, nav links center, CTAs right (Login | Get Started)
2. **Hero** — Centered headline "Every great line. Saved forever.", subtext, two CTAs, mock UI preview below
3. **Clipboard Preview** — Mock snippet search interface with cards, tags, categories, copy button
4. **Features Grid** — 6 features in 3×2 grid
5. **How It Works** — 3 numbered steps horizontal layout
6. **Stats Bar** — 4 key metrics
7. **Testimonials** — 3 creator cards with avatar, quote, name, handle, productivity stat
8. **Pricing** — 3 tiers side by side
9. **CTA** — Centered call to action
10. **Footer** — Links, copyright

## 4. Features & Interactions

- NavBar: sticky on scroll with backdrop blur
- Hero: staggered fade-up animation
- Snippet cards: hover lift, copy button with success feedback
- Feature cards: icon + title + description
- Pricing cards: highlighted "Pro" plan
- CTA button: scales on hover/active
- All external links open in new tab

## 5. Component Inventory

- NavBar (sticky, blur)
- Button (primary, secondary, ghost variants)
- SnippetCard (tag, category, copy)
- FeatureCard (icon, title, desc)
- StepCard (number, title, desc)
- StatItem (number, label)
- TestimonialCard (avatar, quote, name, handle, stat)
- PricingCard (tier name, price, features, CTA)
- Footer

## 6. Technical Approach

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`, `@theme {}`)
- **Icons:** Lucide React
- **Font:** Inter via next/font
- **Deployment:** Vercel via CLI
