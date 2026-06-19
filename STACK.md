# songdrop-landing — STACK.md

> Last updated: 2026-06-19

## What it is

Marketing one-pager + legal pages for **SongDrop** (the productized SaaS app lives in
`keeltekool/songdrop-app`). Hosts `/privacy` + `/terms` — a hard dependency for Google
OAuth verification. CTAs deep-link into the app's `/sign-up` and `/sign-in`.

## Live URLs

| Surface | URL |
|---|---|
| Landing | `https://songdrop-landing.vercel.app` |
| Privacy | `/privacy` (Google Limited Use + YouTube API disclosures) |
| Terms | `/terms` |

## Services

| Service | Purpose | Account/Project |
|---|---|---|
| Vercel | Static hosting (`cleanUrls`, caching, security headers) | project `songdrop-landing` (egertv1s-projects) |

## Tech Stack

- **Framework-free static site** — HTML + CSS + vanilla JS. No build, no DB, no auth.
- Bebas Neue (display) + Inter (body), accent `#e91e8c` / dark `#ff2d9b`, dark-first.
- Routes: `/` (index.html), `/privacy`, `/terms` (served clean via `vercel.json cleanUrls`).
- Design source of truth: `songdrop-app/Full_Design/songdrop-landing/DESIGN-BRIEF.md`.

## Remaining

- **Fill legal placeholders** `[COMPANY]/[ADDRESS]/[EMAIL]/[DATE]` (shown in pink on
  `/privacy`, `/terms`, footer) before Google submission / public launch.
- Optional: custom domain; final favicon/wordmark lockup.
