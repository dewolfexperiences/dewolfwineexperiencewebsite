# Project Plan — dewolfwineexperience.com

## Goals
- Build a 2025-quality marketing + booking experience for De Wolf Wine Experiences.
- Deploy on Vercel; use Supabase for data, auth, and storage.
- Provide simple admin editing and public-fast pages with strong SEO and performance.

## Tech Stack
- Next.js (App Router, TypeScript), React, Tailwind CSS.
- Supabase (Postgres, Auth, Storage), Supabase CLI for migrations/seeds.
- Vercel hosting, Vercel Analytics/Speed Insights.

## Key Packages
- Core: `next`, `react`, `react-dom`, `typescript`, `@types/node`
- Styling/UI: `tailwindcss`, `postcss`, `autoprefixer`, `class-variance-authority`, `tailwind-merge`, `lucide-react`, `framer-motion`
- Data/auth: `@supabase/supabase-js`, `@supabase/auth-helpers-nextjs`, `zod`
- Utilities: `date-fns`, `clsx`
- Lint/format: `eslint`, `eslint-config-next`, `eslint-plugin-tailwindcss`, `prettier`, `prettier-plugin-tailwindcss`
- Testing: `vitest`, `@vitest/ui`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom`, `@types/jsdom`
- Optional: `next-sitemap`, `@vercel/analytics`, `sharp`, `lint-staged`, `husky`

## Environments & Secrets
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_JWT_SECRET` (if needed for server actions/policies)
- Vercel project connected to GitHub; Supabase project per environment (preview/staging/prod).

## Architecture Notes
- App Router with layouts: root layout, marketing shell, admin shell.
- Design tokens: colors, typography scale, spacing, radii, shadows, motion durations.
- Primitives: Button, Input, Select, Card, Section shell, Grid, Badge/Chip, CTA block, MediaTile, Stat, Accordion/Tabs.
- Content sections: hero, story, experiences gallery, wine highlights, events calendar, club/membership, testimonials/press, booking CTA, contact/map.
- Backend: Next.js route handlers or server actions for bookings/contact; validate with Zod; Supabase service role for writes.
- Auth: Supabase magic links (and OAuth if desired) for admin routes; RLS for tables.
- Media: Supabase Storage with signed URLs; image optimization via Vercel/sharp where needed.

## Supabase Schema (initial)
- `experiences` (id, title, excerpt, description, price, duration, media, tags, order)
- `wines` (id, name, varietal, vintage, notes, region, price, media, order)
- `events` (id, title, starts_at, ends_at, location, description, cta_url, media)
- `testimonials` (id, author, role, quote, order)
- `cta_blocks` (id, title, body, action_label, action_url, placement)
- `bookings` (id, experience_id, name, email, phone, party_size, date, notes, status)
- RLS: public read for marketing tables; write restricted to admin/service role; bookings insert open + notify; admin select/update with policy + service role key.

## Execution Plan
1) **Scaffold**: Init Next.js with TypeScript + Tailwind; add lint/format configs; set up `src/` structure; install packages.
2) **Design System**: Add tokens (CSS vars), Tailwind config, fonts, global styles; build primitives (Button/Input/etc.) with motion defaults.
3) **Page Shells**: Implement root/app layout, navigation, footer, SEO defaults (metadata, OG/Twitter), responsive grid system.
4) **Content Sections**: Build hero, story, experiences gallery, wine highlights, events, club, testimonials/press, CTA + contact/map; add motion choreography.
5) **CMS/Admin**: Create protected admin routes for CRUD on experiences/events/wines/testimonials; integrate Supabase auth helpers.
6) **Backend/API**: Add booking + contact handlers/server actions with Zod validation; wire to Supabase service role; email/slack webhook optional.
7) **Supabase Data**: Define schema via SQL migrations; enable RLS and policies; seed staging content; configure storage buckets.
8) **Testing**: Unit tests for primitives; integration tests for booking flow; accessibility checks; configure Vitest + Testing Library.
9) **SEO/Perf**: Add sitemap/robots (`next-sitemap`), structured data (organization/events), image strategy, caching headers where safe.
10) **Deploy**: Connect GitHub to Vercel; set env vars; set preview/staging/prod targets; enable Vercel Analytics/Speed Insights; smoke test booking/admin flows.
11) **Polish**: UTM tracking, 404/500 pages, loading states/skeletons, empty states, error boundaries; refine copy and imagery.

## Immediate Next Steps
- Initialize the Next.js + Tailwind project and install packages.
- Add lint/format/test configs.
- Add base layout and design tokens to start building sections.
