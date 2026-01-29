# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An open-source portfolio template for UI/UX designers built with React 19, TypeScript, and Vite. All content is managed through Markdown files with YAML frontmatter - no database required. This is a single-page application (SPA).

## Commands

```bash
npm run dev              # Start dev server at localhost:5173
npm run build            # TypeScript compile + Vite build to dist/
npm run lint             # ESLint
npm run preview          # Preview production build
npm run fetch-articles   # Fetch Medium articles via RSS (configure username in medium.config.ts)
```

## Architecture

### Path Alias
`@` is aliased to `./src` in both Vite and TypeScript configs. Use `@/lib/projects` instead of relative paths.

### Content System
All portfolio content lives in `src/content/` as Markdown files:
- `works/{slug}/index.md` - Project case studies with images in `{slug}/images/`
- `articles/index.md` - Blog articles (can auto-fetch from Medium)
- `experience/index.md` - Work history
- `illustrations/index.md` - Illustration portfolio
- `about/index.md` - About page content
- `home/index.md` - Homepage content

Data loaders in `src/lib/` parse Markdown into typed objects with lazy caching (computed once, then memoized):
- `projects.ts` - Parses works, resolves image paths via Vite glob imports
- `articles.ts` - Parses articles
- `experience.ts` - Parses work experience
- `data.ts` - Site configuration (name, social links, etc.)

TypeScript interfaces for all content types are defined in `src/lib/types.ts`.

### Adding a New Project
Adding a project requires two steps:
1. Create `src/content/works/{slug}/index.md` with frontmatter and an `images/` directory
2. **Register it in `src/lib/projects.ts`**: add a `?raw` import and an entry in `projectFiles` map

Projects use custom `<gallery>` and `<figure>` HTML tags in markdown content for image galleries, parsed by `ProjectPage.tsx` into a lightbox component.

### Image Resolution
Images in project content use relative paths (`./images/filename.jpg`) or external URLs. Vite's `import.meta.glob` eagerly resolves all project images at build time into a lookup map keyed by `{slug}:{filename}`. The `resolveProjectImagePath()` function maps relative paths to resolved URLs.

### Markdown Parsing
Projects use a custom regex-based frontmatter parser (not gray-matter). Other content types (experience, articles, illustrations) split markdown by `# ` headings where each section represents one item, with `key: value` lines for fields.

### Routing
React Router v7 with routes defined in `src/App.tsx`:
- `/` - Home
- `/works` - Portfolio grid
- `/works/:slug` - Individual project
- `/articles`, `/experience`, `/illustrations`, `/about`

### Styling
Tailwind CSS v4 with custom theme variables (CSS custom properties) in `src/index.css`. Dark mode via `.dark` class on `<html>`, toggled by `ThemeToggle` component with localStorage persistence. Use `.light-only` / `.dark-only` classes to show/hide elements per theme.
