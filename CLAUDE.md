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

## Architecture

All routes live under `app/` using the App Router file conventions (`layout.tsx`, `page.tsx`, `loading.tsx`, etc.). There is no `src/` directory.

Global styles and font CSS variables are defined in [app/globals.css](app/globals.css). Fonts (Geist Sans and Geist Mono) are loaded via `next/font/google` in [app/layout.tsx](app/layout.tsx) and exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`.
