<!-- BEGIN:nextjs-agent-rules -->

# Toretto Trans Tour & Travel

This repository rebuilds the Toretto Trans frontend with the Next.js App Router and a production-focused SEO and UX baseline.

## Stack

- Framework: Next.js App Router with TypeScript
- Styling: Tailwind CSS
- Server state: TanStack Query v5
- Client state: Redux Toolkit
- Icons: Lucide React
- Animation: Framer Motion

## Project Rules

- Use explicit TypeScript types; avoid `any`.
- Prefer `interface` for object shapes and `type` for unions/intersections.
- Use functional components and hooks only.
- Export pages as default exports; export shared components as named exports.
- Keep components server-side by default; add `use client` only when browser state or interactivity is required.
- Use `next/link` for navigation and `next/image` with explicit dimensions for images.
- Put all fetching behind custom hooks in `src/hooks/` and keep query keys consistent.
- Use typed Redux hooks from `src/store/index.ts`; do not use raw `useDispatch` or `useSelector` in components.
- Prefer Tailwind utilities and `cn()` from `src/lib/utils.ts` for conditional classes.
- Wrap async work in `try/catch` and show user-friendly loading and error states.

## SEO and Content

- Every page should define `metadata` with title, description, and openGraph data.
- Use semantic HTML landmarks such as `header`, `nav`, `main`, `section`, `article`, and `footer`.
- Provide descriptive alt text for every image.
- Target the business keywords: Tour Travel Surabaya, Sewa Bis Surabaya, and Paket Tour Pantai.

## UI and UX

- Favor premium, mobile-first layouts with responsive Tailwind classes.
- Use loading skeletons instead of plain spinners.
- Keep business data in API-backed hooks or mock endpoints rather than hardcoding repeated content.
- Use clear component boundaries for sections, layout, primitives, and data hooks.

## Business Flow

- Tour booking flow should follow: Select Tour → Set Date → Set Participants → Confirm → Submit.
- Tour categories: Semua, Pulau, Pantai, Alam, Gathering.
- Company stats should include 5+ years of experience and 85+ customers.

## Next.js Notes

This version may differ from older Next.js assumptions. Check the local Next.js docs in `node_modules/next/dist/docs/` before making framework-sensitive changes, and follow deprecation guidance.

<!-- END:nextjs-agent-rules -->
