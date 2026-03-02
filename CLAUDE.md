# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200 (auto-reloads on file changes)
npm run build      # Production build → dist/
npm run watch      # Dev build with watch mode
npm test           # Run unit tests with Vitest via Angular CLI
```

To run a single test file, use Vitest directly:

```bash
npx vitest run src/app/pages/home/home.spec.ts
```

## Architecture

Angular 21 standalone components app using the `@angular/build:application` builder. No NgModules — all components use `imports: []` in their `@Component` decorator directly.

**Routing**: Routes are defined in [src/app/app.routes.ts](src/app/app.routes.ts) and provided via `provideRouter` in [src/app/app.config.ts](src/app/app.config.ts). The root component ([src/app/app.ts](src/app/app.ts)) renders only a `<router-outlet />`.

**Pages**: Each page lives in `src/app/pages/<name>/` with four files:

- `<name>.ts` — standalone Angular component
- `<name>.html` — template
- `<name>.css` — component-scoped styles
- `<name>.spec.ts` — Vitest unit tests

Current pages: `home`, `colors`, `patterns`, `typography`.

**Styling**: Tailwind CSS v4 is imported globally in [src/styles.css](src/styles.css) via `@import "tailwindcss"` and processed through PostCSS (`@tailwindcss/postcss` plugin). Component-level CSS files are co-located with each page/component.

**Testing**: Vitest (not Jest/Karma). Test globals (`describe`, `it`, `expect`) are available without imports via `tsconfig.spec.json` types. Tests match `src/**/*.spec.ts`.

**Code style**: Prettier configured in `package.json` — 100 char print width, single quotes, Angular HTML parser for `.html` files.

# Good Coding Rules (Important. You must follow these)

### 1. Composition over Inheritance

Implement interfaces rather than extend them. This keeps classes flexible, maintains loose coupling to shapes (not sources), and prevents rigid hierarchies.

```typescript
// ✅ Good: Composition
class Human implements Arms, Feet {}

// ❌ Bad: Inheritance
interface Human extends Arms, Feet {}
```

### 2. Single Responsibility Principle

Each function/class should do one thing well. When you control it, keep scope narrow.

### 3. Pure Functions

Functions should have no side effects. Given the same input, always return the same output.

```typescript
// ✅ Good
function add(x: number, y: number): number {
  return x + y;
}

// ❌ Bad: Side effect
let sum = 0;
function add(x: number, y: number): void {
  sum = x + y;
}
```

### 4. Early Return

Exit functions early to avoid nested conditionals and improve readability.

```typescript
// ✅ Good
function process(value: unknown): void {
  if (!value) return;
  if (typeof value !== 'string') return;
  // main logic
}
```

### 5. No If/Else or Switch Statements

Use object maps instead. Avoid conditional logic—it's hard to test and becomes messy.

```typescript
// ✅ Good: Object map
const actions = {
  create: () => {
    /* create logic */
  },
  update: () => {
    /* update logic */
  },
  delete: () => {
    /* delete logic */
  },
};
actions[action]?.();

// ❌ Bad: Conditionals
if (action === 'create') {
} else if (action === 'update') {
} else {
}
```

### 6. File Size Limits

- TypeScript/JavaScript: **300-400 lines max**
- HTML: **100 lines max**

Maintains separation of concerns and keeps code testable.

### 7. Function Size Limits

Functions should be **10 lines or less**. Easier to test, reason about, and maintain.

### 8. No Logic in Components

Move loops and business logic to child components or separate functions. Components should be presentation-focused.

```typescript
// ❌ Bad: Loop in component
items.map(item => <Item key={item.id} />)

// ✅ Good: Loop in separate component
<ItemList items={items} />
```

### 9. Minimize Subscriptions in Components

Avoid subscriptions where possible. Use reactive patterns or dependency injection to keep components clean.

### 10. Boy Scout Rule

**Leave the code cleaner than you found it.** Small improvements compound.

## AI/Development Checklist

- [ ] **Audit after every task** against these rules (non-negotiable)
- [ ] **Use TDD** when fixing bugs
- [ ] No `if/else` or `switch` statements
- [ ] No `if`-wrapped code
- [ ] Files under size limits (300-400 lines, 100 for HTML)
- [ ] Pure functions (no side effects)
- [ ] Functions under 10 lines
- [ ] Single responsibility
- [ ] Minimize subscriptions in components
