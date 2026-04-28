# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Your Message` fields are empty should show "Can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
- **Bonus**: View actual locations on the locations page maps (we recommend [Leaflet JS](https://leafletjs.com/) for this)

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/ebenezerejeh/designo-multi-page-website)
- Live Site URL: [Live Site](https://designo-multi-page-website-puce.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [React 19](https://reactjs.org/) - JS library
- [Next.js 16](https://nextjs.org/) - React framework (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations and page transitions
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation
- [shadcn/ui](https://ui.shadcn.com/) - UI component primitives
- [class-variance-authority](https://cva.style/docs) - Component variant management
- [Lucide React](https://lucide.dev/) - Icons
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications

### What I learned

**1. Tailwind CSS v4 CSS-first configuration**
Tailwind v4 drops `tailwind.config.js` entirely in favour of a CSS-first `@theme` block in `globals.css`. Defining design tokens (colours, fonts) directly in CSS and consuming them as Tailwind utilities (e.g. `bg-peach`, `text-dark-grey`) keeps the design system co-located with the styles rather than split across a config file.

**2. Zod schema-first form validation with React Hook Form**
Defining the Zod schema first and inferring TypeScript types from it ensures the form types and validation rules stay in sync with zero duplication. Pairing it with `@hookform/resolvers` wires up inline error messages automatically without any manual error state.

**3. Framer Motion page transitions and scroll animations**
Using `AnimatePresence` for page-level enter/exit transitions and `whileInView` variants for section animations gave the site a polished feel without complex scroll-listener logic. Keeping motion values in variant objects makes timing easy to adjust globally.

**4. Next.js App Router route groups**
Wrapping all marketing pages inside an `(pages)` route group shares a common layout (Navbar + Footer) without adding a URL segment, keeping URLs clean while avoiding layout duplication across six pages.

**5. class-variance-authority for multi-variant components**
Using CVA to define Button variants (peach, dark, white) in a single schema keeps all visual states co-located and type-safe, so adding a new variant never requires hunting through multiple files.

### Continued development

- **Add interactive maps** — integrate Leaflet JS on the Locations page to show actual map pins for each office, fulfilling the bonus challenge requirement
- **Animate page transitions** — refine the Framer Motion `AnimatePresence` setup to handle shared layout animations between the service category pages (Web, App, Graphic Design)
- **Accessible form feedback** — improve the contact form's live region announcements so screen readers pick up validation errors as they appear
- **Deploy to Vercel** — set up a production deployment with a custom domain and update the live site link

### Useful resources

- [Tailwind CSS v4 docs — Theme variables](https://tailwindcss.com/docs/theme) - Essential reference for the new CSS-first `@theme` configuration that replaces `tailwind.config.js` in v4.
- [React Hook Form + Zod integration](https://react-hook-form.com/get-started#SchemaValidation) - Guide for wiring Zod schemas to forms with `@hookform/resolvers` for schema-first validation.
- [Framer Motion — AnimatePresence](https://www.framer.com/motion/animate-presence/) - Covers enter/exit animations for components that are removed from the React tree, used for page transitions.
- [Next.js App Router docs](https://nextjs.org/docs/app) - Reference for route groups, Server Components, and the `"use client"` boundary used throughout the project.
- [class-variance-authority docs](https://cva.style/docs) - Guide for building type-safe component variants, used for the Button component's peach/dark/white states.

## Author

- Frontend Mentor - [@ebenezerejeh](https://www.frontendmentor.io/profile/ebenezerejeh)
- Twitter - [@ebenezer_onuche](https://www.twitter.com/ebenezer_onuche)

## Acknowledgments

I thank God for giving me the strength and wisdom to complete this challenge, and I thank the Frontend Mentor community for providing such a great platform to practice and improve my frontend skills.
