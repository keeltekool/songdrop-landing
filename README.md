# songdrop-landing

Marketing site + legal pages for **SongDrop** (the multi-tenant DJ song-request SaaS).
The app itself lives in `keeltekool/songdrop-app` and is **live** at
`songdrop-app.vercel.app`. This repo is the **separate** marketing/legal surface and the
`/privacy` + `/terms` pages required for **Google OAuth verification**.

## Stack
Framework-free **static site** (HTML + CSS + vanilla JS). No build step, no DB, no auth.
Deployed on Vercel with `cleanUrls` (so `/privacy`, `/terms` serve the `.html` files).

| File | Purpose |
|---|---|
| `index.html` | One-pager: hero → problem → how-it-works → features → see-it-live → pricing → FAQ → final CTA → footer |
| `privacy.html` → `/privacy` | Privacy policy (Google Limited Use + YouTube API disclosures) |
| `terms.html` → `/terms` | Terms of service |
| `styles.css` | Dark-first styles on the inherited app token system |
| `landing.js` | Sticky-glass nav, mobile menu, FAQ accordion, live QR |
| `assets/` | Production screenshots, hero source, favicon, OG image |
| `vercel.json` | `cleanUrls`, caching, security headers |

## Brand
Bebas Neue (display) + Inter (body), base 18px. Accent `#e91e8c` / dark `#ff2d9b`.
Accent for CTAs/focus only; no shadows; borders + tonal shifts; motion ≤200ms.
Design source of truth: `songdrop-app/Full_Design/songdrop-landing/DESIGN-BRIEF.md`.

## Local preview
Open `index.html` in a browser — it works as-is.

## ⚠️ Before public launch / Google submission
1. Fill legal placeholders: `[COMPANY]`, `[ADDRESS]`, `[EMAIL]`, `[DATE]` (shown in pink).
2. Submit Google OAuth verification using the live `/privacy` URL.
3. Add beta DJ emails as GCP test users (≤100) until verification clears.
4. Optional: custom domain.

## Deploy
`vercel --prod` (project `songdrop-landing`, scope `egertv1`). Auto-deploys on push to
`main` once the Git integration is connected.
