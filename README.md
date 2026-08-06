# BrainGig Seychelles

Marketing site for [BrainGig](https://braingig.sc) — web design, SEO, and digital marketing for businesses in Seychelles.

Built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui.

## Local development

```bash
npm install
npm run dev
```

App runs at [http://localhost:8080](http://localhost:8080).

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
| `npm run test`    | Run Vitest               |

## Deploy

### GitHub

```bash
git push origin main
```

### Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Vite** (auto-detected)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

Client-side routes are handled via `vercel.json` rewrites to `index.html`.

## Routes

- `/` — Home
- `/services` — Services list
- `/services/:slug` — Service detail
- `/about-us` — About
- `/contact-us` — Contact
