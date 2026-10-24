# WalferLab Venture Studio & Full-Stack Software Partner

## Overview
WalferLab is a founder-led Venture Studio & Full-Stack Software Partner founded by Ramesh Beniwal, helping startups and businesses set up, build, and grow.

## Design System
- Tailwind CSS v4 White + Blue (`#0F52BA` primary accent on crisp white/slate surfaces)
- Mobile-first architecture
- WCAG AAA contrast standard
- Semantic HTML elements

## Pages & Routes Built
- **Home**: `/`
- **Venture Studio Model**: `/venture-studio`
- **Services Overview**: `/services` + 5 dynamic service detail pages (`/services/[slug]`)
- **Portfolio & Case Studies**: `/work` + 8 dynamic case study pages (`/work/[slug]`)
- **Pricing & Engagement Models**: `/pricing`
- **About & Founder**: `/about`
- **Insights / Blog**: `/blog` & `/blog/[slug]`
- **FAQ**: `/faq`
- **Contact / Request a Quote**: `/contact`
- **Privacy Policy**: `/privacy`
- **Terms of Service**: `/terms`
- **Custom 404**: `app/not-found.tsx`
- **Dynamic Sitemap**: `app/sitemap.ts`
- **Robots**: `app/robots.ts`
- **JSON-LD Structured Data**: `app/layout.tsx`

## Quote Request Backend
- Backend route: `app/actions/SendEmail.ts`
- Component: `components/Forms/QuoteForm.tsx`
- Features: Server + client validation, honeypot spam protection, and Resend email delivery to the founder email address.

## Placeholders for Founder Input
- `RESEND_API_KEY` environment variable
- Verified client testimonial quotes
- Founder bio credentials / LinkedIn
- Optional discovery call scheduling link
