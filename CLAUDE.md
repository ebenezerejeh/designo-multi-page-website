# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
yarn dev        # start dev server at http://localhost:3000
yarn build      # production build
yarn start      # run production build
yarn lint       # run ESLint
```

## Stack

- **Next.js 16** (App Router) — see AGENTS.md: this version has breaking changes; read `node_modules/next/dist/docs/` before writing any code
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** — configured via `@tailwindcss/postcss`, no `tailwind.config.js` (v4 uses CSS-first config)
- **ESLint 9** with `eslint-config-next`

## Recommended Packages

Based on the Figma design (responsive multi-page marketing site with contact form and animations):

- **framer-motion** — page transitions and hover animations
- **react-hook-form** — contact form handling
- **zod** + **@hookform/resolvers** — form validation (design includes error states)
- **clsx** + **tailwind-merge** + **class-variance-authority** — utility class management
- **lucide-react** or **react-icons** — UI/nav icons
- **sonner** — toast notifications for form submission feedback
- Use **next/image** (built-in) for all images

Avoid: Redux, Prisma, Clerk, Tiptap, Socket.io — overkill for a static marketing site.

## Architecture

All routes live under `app/` using the App Router file conventions (`layout.tsx`, `page.tsx`, `loading.tsx`, etc.). There is no `src/` directory.

Global styles and font CSS variables are defined in [app/globals.css](app/globals.css). Fonts (Geist Sans and Geist Mono) are loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx) and exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`.

## Assets

When building a component that requires an asset like an image, check the `assets/` folder for that asset.

## File & Folder Structure

```
app/
  (pages)/
    about/page.tsx
    contact/page.tsx
    web-design/page.tsx
    app-design/page.tsx
    graphic-design/page.tsx
    locations/page.tsx
  layout.tsx
  page.tsx                  # Home
  globals.css
components/
  ui/                       # Primitive/shadcn components (Button, Input, etc.)
  layout/                   # Navbar, Footer — shared across all pages
features/                   # Page-specific component groups (e.g., features/contact/ContactForm.tsx)
```

- Keep shadcn primitives in `components/ui/` — never modify them directly.
- Compose page-specific UI in `features/` rather than bloating `components/`.
- Layout components (Navbar, Footer) live in `components/layout/`.

## Tailwind Color Tokens

Define all design colors as CSS variables in `app/globals.css` and reference them in Tailwind classes. Never hardcode hex values in components.

```css
/* app/globals.css */
:root {
  --color-peach: #E7816B;
  --color-light-peach: #FFAD9B;
  --color-dark: #1D1C1E;
  --color-dark-grey: #333136;
  --color-light-grey: #F1F3F5;
}
```

```css
/* tailwind v4 — extend in globals.css */
@theme {
  --color-peach: #E7816B;
  --color-light-peach: #FFAD9B;
  --color-dark: #1D1C1E;
  --color-dark-grey: #333136;
  --color-light-grey: #F1F3F5;
}
```

Use as: `bg-peach`, `text-dark-grey`, `border-light-peach`.

## Typography

Load **Jost** (the Figma design font) via `next/font/google` in `app/layout.tsx` and expose as a CSS variable:

```ts
import { Jost } from 'next/font/google'
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' })
```

Apply globally via `className={jost.variable}` on `<body>`. Use `font-[family-name:var(--font-jost)]` in Tailwind or set it as the default sans font via `@theme`.

Typography scale from Figma:
- H1: Jost Medium 48px
- H2: Jost Medium 40px
- H3: Jost Medium 20px
- Body: Jost Regular

## General Standards

Follow industry best practices and modern standards when building components: write accessible markup (semantic HTML, ARIA where needed), keep components focused and composable, colocate related files, and prefer explicit over clever. Optimize for readability and maintainability.

## Component Patterns

- **shadcn primitives** — use for Button, Input, Label, Textarea. Install via `npx shadcn@latest add <component>`.
- **Variants** — use `class-variance-authority` for components with multiple visual states (e.g., Button has peach, dark, and white variants per the design).
- **cn() utility** — always use `cn()` (clsx + tailwind-merge) for conditional class merging. Define once in `lib/utils.ts`.

## Form Pattern

Define zod schema alongside the form component in the same `features/contact/` folder:

```ts
// features/contact/schema.ts
import { z } from 'zod'
export const contactSchema = z.object({
  name: z.string().min(1, "Can't be empty"),
  email: z.string().email("Can't be empty"),
  phone: z.string().min(1, "Can't be empty"),
  message: z.string().min(1, "Can't be empty"),
})
```

Use `react-hook-form` with `zodResolver`. Show inline error messages below each field — the Figma design has explicit error states for all inputs.
