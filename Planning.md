# Next.js to Astro Migration Plan

This document outlines the steps to migrate the portfolio website from Next.js to Astro.

- [ ] **1. Project Setup & Configuration**

  - [ ] Initialize a new Astro project (`npm create astro@latest`).
  - [ ] Install necessary integrations (React: `npx astro add react`, Tailwind: `npx astro add tailwind`).
  - [ ] Configure `astro.config.mjs` (integrations, site settings).
  - [ ] Configure `tailwind.config.cjs` (match existing theme, content paths).
  - [ ] Set up TypeScript configuration (`tsconfig.json`).
  - [ ] Copy over essential static assets (e.g., `public/` directory contents).

- [ ] **2. Layout Migration**

  - [ ] Identify shared layout components in Next.js (e.g., `_app.tsx`, layout components).
  - [ ] Create base Astro layouts (`src/layouts/`) replicating the structure and styling.
  - [ ] Include global styles, fonts, and meta tags in the base layout.

- [ ] **3. Page Migration**

  - [ ] Identify all pages/routes in the Next.js `pages` or `app` directory.
  - [ ] Recreate each page in Astro's `src/pages/` directory using `.astro` files.
  - [ ] Import and use the appropriate Astro layout for each page.
  - [ ] Move page-specific content from Next.js components into the new Astro pages.

- [ ] **4. Component Migration**

  - [ ] Copy existing React components (`src/components/`) into the Astro project.
  - [ ] Update import paths within components and pages.
  - [ ] Address any framework-specific code (e.g., Next.js `Link`, `Image` -> Astro `Link`, `Image` or standard HTML/React equivalents).
  - [ ] Use React components within `.astro` files (e.g., `<MyReactComponent client:load />` if interactivity is needed, or just `<MyReactComponent />` for server-rendered HTML).
  - [ ] (Optional) Incrementally convert React components to `.astro` components where beneficial.

- [ ] **5. Data Fetching & Content**

  - [ ] Identify data fetching methods used in Next.js (`getStaticProps`, `getServerSideProps`, API routes).
  - [ ] Migrate data sources (e.g., `src/lib/experiences.ts`).
  - [ ] Implement data fetching in Astro pages using top-level `await` for static generation or server endpoints for dynamic data.
  - [ ] Update components to receive data as props from Astro pages.

- [ ] **6. API Route Migration (If Applicable)**

  - [ ] Identify any API routes in the Next.js `pages/api/` directory.
  - [ ] Recreate API endpoints using Astro's server endpoints (`src/pages/api/`).

- [ ] **7. Static Assets**

  - [ ] Ensure images, fonts, and other static assets are correctly placed in `public/` or imported via `src/assets/`.
  - [ ] Update paths to assets if necessary.
  - [ ] Replace Next.js `<Image>` with Astro's `<Image>` component or standard `<img>` tags where appropriate.

- [ ] **8. Styling**

  - [ ] Ensure Tailwind CSS is correctly configured and purging unused styles.
  - [ ] Verify global styles and component-specific styles are applied correctly.

- [ ] **9. Testing & Refinement**

  - [ ] Run `astro dev` and thoroughly test all pages and components.
  - [ ] Check for console errors (client and server).
  - [ ] Build the project (`astro build`) and preview (`astro preview`).
  - [ ] Optimize assets and component loading (e.g., `client:` directives).
  - [ ] Address any remaining linter/TypeScript errors.

- [ ] **10. Deployment**
  - [ ] Configure deployment environment (e.g., Vercel, Netlify, Cloudflare Pages).
  - [ ] Set up build commands and output directories.
  - [ ] Deploy the migrated Astro site.
