# Zeito Style Guide

The single source of truth for tokens, components, and patterns used in the Zeito Move web app. Built with Angular 21, Tailwind CSS v4, and Spartan UI.

## Commands

```bash
npm start          # Dev server at http://localhost:4200
npm run build      # Production build → dist/
npm run watch      # Dev build with watch mode
npm test           # Run all unit tests with Vitest
```

To run a single test file:

```bash
npx vitest run src/app/pages/home/home.spec.ts
```

## Stack

- **Angular 21** — standalone components, no NgModules
- **Tailwind CSS v4** — utility-first styling via PostCSS
- **Spartan UI** (`@spartan-ng/brain`) — headless component primitives
- **class-variance-authority** — variant management in the component library
- **Vitest** — unit testing

## Project Structure

```
src/
├── app/
│   ├── pages/              # Route-level pages (home, colors, typography, …)
│   ├── shared/
│   │   ├── core/           # Layout components (header, sidebar)
│   │   └── components/ui/  # Showcase/demo variants used in style guide pages
│   ├── app.html            # App shell: <app-header> + <router-outlet>
│   ├── app.routes.ts       # Route definitions
│   └── app.config.ts       # App-level providers
├── libs/
│   └── ui/                 # Reusable component library (button, badge, skeleton, …)
├── styles.css              # Global styles, Tailwind import, CSS custom properties
└── index.html
```

### Path Aliases

Import library components via alias, never by relative path:

| Alias | Source |
|---|---|
| `@spartan-ng/helm/button` | `src/libs/ui/button/src/index.ts` |
| `@spartan-ng/helm/badge` | `src/libs/ui/badge/src/index.ts` |
| `@spartan-ng/helm/skeleton` | `src/libs/ui/skeleton/src/index.ts` |
| `@spartan-ng/helm/utils` | `src/libs/ui/utils/src/index.ts` |

## Theming

Colors are defined as CSS custom properties on `:root` (light) and `:root.dark` (dark) using the OKLCH color space. The dark class is toggled on `document.documentElement` by the header's theme toggle.

Key tokens: `--background`, `--foreground`, `--accent`, `--muted`, `--border`, `--zeito-*`.

## Adding a New Component

1. Generate the library primitive into `src/libs/ui/<name>/src/` using the Spartan CLI (`components.json`).
2. Add the path alias to `tsconfig.json`.
3. Create showcase variants in `src/app/shared/components/ui/<name>/`.
4. Add a `<section id="<name>">` to the relevant page template and register the nav link in `sidebar.ts`.
