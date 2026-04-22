# Contractor Template — Claude Code Blueprint

## What this project is
A reusable Next.js contractor website template. It is currently configured
for Summit Roofing Meath but is designed to be re-used for any local
contractor by editing a single config file.

## The golden rule
**Never hardcode any business data in components or pages.**
Every piece of business-specific content — name, phone, services, reviews,
colors, addresses — must be read from `src/config/client.config.ts`.

## Tech stack
- Next.js 15 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- shadcn/ui components
- next/image for all images
- next/font for all fonts

## Project structure
src/
├── app/
│   ├── layout.tsx              # Root layout — reads client.name for metadata
│   ├── page.tsx                # Home page
│   ├── services/page.tsx       # All services grid
│   ├── services/[id]/page.tsx  # Individual service page
│   ├── about/page.tsx          # About + team
│   ├── service-areas/page.tsx  # Service areas map + list
│   ├── gallery/page.tsx        # Before/after gallery
│   ├── reviews/page.tsx        # All reviews
│   ├── contact/page.tsx        # Contact form + details
│   └── emergency/page.tsx      # Emergency 24/7 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Mobile hamburger + desktop nav
│   │   └── Footer.tsx          # Links, contact, social, hours
│   ├── sections/               # Page section components
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ReviewsCarousel.tsx
│   │   ├── ServiceAreasSection.tsx
│   │   ├── EmergencyBanner.tsx
│   │   └── ContactForm.tsx
│   └── ui/                     # shadcn components (auto-generated)
├── config/
│   └── client.config.ts        # ← THE ONLY FILE TO EDIT PER CLIENT
└── lib/
    └── utils.ts                # shadcn utility (auto-generated)

## Performance requirements
Every page must score 90+ on Google PageSpeed Insights.
Rules to follow:
- Use next/image for EVERY image, with explicit width and height
- Set priority={true} on hero/above-fold images only
- Use next/font, never load fonts from a CDN
- All pages are statically generated (no useEffect data fetching)
- Minimise 'use client' — only on ContactForm and Navbar (for mobile menu)
- No layout shift — all images and embeds have explicit dimensions
- Lazy-load all images below the fold (default next/image behaviour)
- Keep JavaScript bundles small — no heavy animation libraries

## Mobile responsiveness
- Mobile-first: write Tailwind classes for 375px first
- Use sm: md: lg: xl: prefixes to scale up
- Minimum tap target size: 44px × 44px
- Hamburger menu on mobile (< lg), full nav on desktop (lg+)
- Test every section at 375px, 768px, and 1280px

## Color system
Colors are defined in client.config.ts and applied via CSS variables
in globals.css. Do not hardcode hex values in components.
Use Tailwind classes that map to these CSS variables:
- primary: Moonstone #4C9DB0
- background: Vanilla #FFEBAF
- dark: #1A2E35
- text body: #2C3E50

## Forms
ContactForm.tsx is the only 'use client' form component.
It posts to a /api/contact route (or Formspree — configured in config).
Fields: Name, Phone, Email, Service (dropdown), Message, Preferred Contact Time.

## How to set up for a new client
1. Edit src/config/client.config.ts — replace all values
2. Update CSS variables in src/app/globals.css with client's colors
3. Replace public/images/ with client's photos
4. Run: npm run build — to check for errors
5. Deploy to Vercel