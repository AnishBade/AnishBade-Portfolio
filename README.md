# anishbade.com

My personal website, built with **Angular 22** (standalone components, signals, zoneless)
and prerendered to static HTML at build time. Hosted on Netlify.

## Run it locally

```bash
nvm use          # Node 24 (see .nvmrc)
npm install
npm start        # http://localhost:4200
npm test         # unit tests (Vitest)
npm run build    # static site in dist/anish-portfolio/browser
```

## Where things live

```
src/
├── index.html                  meta tags, fonts, SEO data
├── styles.css                  design tokens (colours, fonts) + shared classes
└── app/
    ├── app.ts                  the page: header, sections in order, footer
    ├── data/
    │   ├── content.ts          ← ALL the text on the site (EN + DE). Edit this to update the CV.
    │   └── models.ts           TypeScript types for that content
    ├── core/
    │   ├── language.service.ts EN/DE switching with a signal
    │   └── theme.service.ts    light/dark toggle
    ├── sections/               one component per section (hero, experience, projects, …)
    └── shared/                 reusable bits: icon, section heading, tag list, reveal-on-scroll
```

## Common edits

- **New job / project / skill:** add an entry to the matching array in `src/app/data/content.ts`.
- **Translated text:** use `{ en: '…', de: '…' }`. Plain strings (e.g. `'FastAPI'`) show in both languages.
- **Default language:** German (`DEFAULT_LANG` in `core/language.service.ts`).
- **Link to the English version from an English CV:** `https://www.anishbade.com/?lang=en`

## Angular concepts used (good places to start reading)

| Concept | Example |
| --- | --- |
| Standalone components | every file in `sections/` |
| Signals & `effect()` | `core/language.service.ts` |
| `input()` signal inputs | `shared/section-heading.ts` |
| Control flow `@for` / `@if` / `@switch` | `sections/projects/projects.html`, `shared/icon.ts` |
| Attribute directive | `shared/reveal.directive.ts` |
| Host bindings & listeners | `sections/header/header.ts` |
| Browser-only code during prerendering (`afterNextRender`) | `app.ts`, `shared/reveal.directive.ts` |
| Prerendering / SSG | `angular.json` → `"outputMode": "static"`, `app.routes.server.ts` |
