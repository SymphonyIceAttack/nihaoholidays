# AGENTS.md - Working in nihaoholidays

This document provides essential information for agents working in the nihaoholidays codebase.

## Project Overview

Next.js 16 application for a Chinese holidays/cultural learning platform. Built with:
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **UI Components**: shadcn/ui pattern with Radix UI primitives
- **Linting/Formatting**: Biome 2.2.4
- **Package Manager**: pnpm
- **Validation**: Zod
- **Forms**: @tanstack/react-form
- **Date Handling**: date-fns, react-day-picker
- **Internationalization**: Custom i18n (English only)

## Essential Commands

```bash
# Development
pnpm dev                    # Start development server at localhost:3000
pnpm build                  # Build for production
pnpm start                  # Start production server

# Code Quality
pnpm lint                   # Run Biome check (linter)
pnpm format                 # Run Biome format with auto-fix

# Installation
pnpm install                # Install dependencies
pnpm add <package>          # Add new dependency
pnpm add -D <package>       # Add dev dependency
```

## Code Organization

```
├── app/                    # Next.js App Router pages
│   ├── [lang]/            # Internationalized routes (dynamic segment)
│   │   ├── layout.tsx     # Root layout with providers, Header, Footer
│   │   ├── page.tsx       # Language home page
│   │   └── [...rest]/     # Catch-all route
│   ├── globals.css        # Tailwind v4 CSS with CSS variables
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Redirects to /[lang]
│   └── not-found.tsx      # 404 page
├── components/
│   ├── ui/                # Reusable shadcn/ui-style components
│   ├── layout/            # Layout components (Header, Footer)
│   └── home/              # Home page components
├── lib/
│   ├── config.ts          # Site configuration
│   ├── utils.ts           # Utility functions (cn, etc.)
│   └── translations/      # i18n translations
│       ├── index.ts       # Language types, config, translations object
│       ├── schema/        # Zod validation schemas
│       ├── en/            # English translations
│       └── zh/            # Chinese translations
├── context/
│   └── language-context.tsx  # Language provider
└── biome.json             # Biome configuration
```

## Path Aliases

The project uses `@/*` as the path alias:
- `@/components/*` → `components/*`
- `@/lib/*` → `lib/*`
- `@/app/*` → `app/*`
- `@/context/*` → `context/*`

## Internationalization (i18n)

### Language Support
- **en**: English

### Translation Files

**lib/translations/config.ts** - Language configuration:
```typescript
export const supportedLocales = ["en"] as const;
export type LanguageType = (typeof supportedLocales)[number];
```

**lib/translations/index.ts** - Translations object and utilities:
```typescript
export type LanguageType = "en";
// ... localeNames, translations, translate function
```

### Adding New Translations

1. Create `lib/translations/en/common.ts`:
```typescript
export const common = {
  "common.nav.home": "Home",
  "common.nav.festivals": "Festivals",
  // ...
} as const;
```

2. Create `lib/translations/en/index.ts`:
```typescript
import * as common from "./common";

const flat = { ...common } as const;
export default flat;
```

3. Import in `lib/translations/index.ts`:
```typescript
import en from "./en/index";

export const translations = { en } as const;
```

### Using Translations in Components

```typescript
// Server components
import { translate } from "@/lib/translations";
const t = translate("common.nav.home", "en"); // "Home"

// Client components with inline translations
const translations = {
  en: { "common.nav.home": "Home", ... },
};
const t = translations["en"]["common.nav.home"];
```

## Code Patterns

### Utility Functions

**lib/utils.ts** exports the `cn()` utility:
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**lib/config.ts** (exists):
```typescript
export const siteConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  siteName: "nihaoholidays",
  contactEmail: "hello@nihaoholidays.org",
}
```

### Component Pattern (shadcn/ui style)

```typescript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base classes...",
  {
    variants: {
      variant: { default: "...", destructive: "...", ... },
      size: { default: "...", sm: "...", lg: "...", ... },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

function Component({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"element"> &
  VariantProps<typeof componentVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "element"
  return (
    <Comp
      data-slot="component"
      data-variant={variant}
      data-size={size}
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Component, componentVariants }
```

### Layout Pattern

The root layout (`app/[lang]/layout.tsx`) handles:
- Language detection and validation
- Theme provider setup
- Language provider setup
- Header and Footer rendering
- Font configuration

### Client Components

Use `"use client"` directive at the top of the file for components with:
- useState, useEffect, useRef
- Event handlers
- Client-side interactivity

### Server Components (Default)

Pages and layouts are server components by default unless `"use client"` is added.

## Theme Switching (Dark/Light Mode)

The project uses **next-themes** for dark/light mode switching.

### ThemeProvider Configuration

```typescript
// app/[lang]/layout.tsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
```

### Theme Toggle Component

```typescript
// components/theme-toggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon-sm"><Sun className="h-4 w-4" /></Button>;
  }

  return (
    <Button variant="ghost" size="icon-sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
```

### CSS Variables

Light mode: `--background: #fffbf7`, `--primary: #e11d48` (rose)
Dark mode: `--background: #171717`, `--primary: #3b82f6` (blue)

## Styling System

### Tailwind CSS v4

Uses CSS-based configuration (not tailwind.config.js):
```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --primary: #e11d48;
  /* ... other CSS variables */
}

@theme inline {
  --color-primary: var(--primary);
  /* ... */
}
```

### Color Variables

Light mode (default):
- Primary: Rose-600 (#e11d48)
- Background: #fffbf7
- Secondary: #fef2f2

Dark mode:
- Primary: Blue-500 (#3b82f6)
- Background: #171717

### Tailwind Classes

- Use `text-balance` for optimal text wrapping
- Use `bg-background`, `text-foreground`, etc. for theme-aware colors
- Use `size-X` for width/height (Tailwind v4)
- Use `data-slot`, `data-variant`, `data-size` attributes for styling hooks

## Critical Gotchas

### Required Dependencies

The following packages must be installed:
```bash
pnpm add class-variance-authority clsx tailwind-merge tw-animate-css
```

### Biome Configuration

Biome is configured but some rules are intentionally disabled:
- `useExhaustiveDependencies`: off (for React hooks)
- `noUnknownAtRules`: off (for Tailwind)
- `noArrayIndexKey`: off (for list rendering)
- `noDangerouslySetInnerHtml`: off
- `noSvgWithoutTitle`: off
- `noStaticElementInteractions`: off
- `noImgElement`: off
- `useOptionalChain`: off

### Import Sorting

Biome will flag unsorted imports. Run `pnpm format` to auto-fix.

### Button Type Requirement

Buttons must have explicit `type` prop:
```typescript
<button type="button">...</button>  // Required
<button>...</button>                 // Biome will warn
```

### Type-Only Imports

Use `import type` for type imports to avoid Biome warnings:
```typescript
import type { ComponentProps } from "react"
```

### Radix UI Slot

When using Radix UI's Slot component with asChild:
```typescript
const Comp = asChild ? Slot : "button"
```

### Component Import Paths

Home page components are in `components/home/`:
- Import from `@/components/home/component-name`
- NOT from `@/components/component-name`

UI components are in `components/ui/`:
- Import from `@/components/ui/component-name`

## Testing

**No tests exist** in this codebase. When adding tests:
- Use Vitest or Jest (not configured yet)
- Place test files alongside components with `.test.ts` or `.test.tsx` extension

## Environment Variables

Required in `.env`:
```bash
NEXT_PUBLIC_SITE_URL=https://nihaoholidays.org
```

Optional (Cloudflare):
```bash
NEXT_INC_CACHE_R2_PREFIX=nihaoholidays
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
CF_ACCOUNT_ID=...
```

## Development Tools

### Crush Configuration (.crush.json)

- Uses MiniMax-M2.1 as primary model
- Biome for TypeScript LSP
- TypeScript Language Server configured
- MCP servers: Context7, MiniMax, Chrome DevTools

### Devenv

Nix-based development environment configured in `devenv.yaml` and `devenv.nix`:
- Uses rolling nixpkgs
- Dotenv enabled for `.env.crush`

## Build Output

After running `pnpm build`:
- `.next/` directory contains build output
- `.next/types/` contains generated TypeScript types
- Build uses Next.js default configuration

## Deployment

The project is configured for Cloudflare deployment with R2 storage integration. Deploy via:
- Vercel (default Next.js deployment)
- Cloudflare Pages (requires adapter configuration)

## Code Style Summary

- **Indentation**: 2 spaces
- **Quotes**: Single for JSX, double for strings
- **Semicolons**: No (TypeScript/JavaScript style)
- **Line endings**: LF (Unix)
- **Component naming**: PascalCase (e.g., `HeroSection`)
- **File naming**: kebab-case for non-components, PascalCase for components
- **Constants**: camelCase (e.g., `siteConfig`)
- **CSS classes**: Tailwind utility classes
