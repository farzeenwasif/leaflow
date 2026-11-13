# Leaflow

Marketing website for **Leaflow** — online accounting for freelancers and small businesses.
Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your keys
npm run dev                  # http://localhost:3000
```

| Command         | What it does                      |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Lint the project                  |

## Environment variables

See [`.env.example`](.env.example).

| Variable               | Required | Purpose                                                        |
| ---------------------- | -------- | -------------------------------------------------------------- |
| `RESEND_API_KEY`       | yes      | Sends contact-form emails and stores newsletter subscribers    |
| `CONTACT_TO_EMAIL`     | no       | Inbox for contact messages (defaults to the email in `data/site.ts`) |
| `RESEND_FROM_EMAIL`    | no       | Sender address once a domain is verified in Resend             |
| `RESEND_SEGMENT_ID`    | no       | Resend segment for newsletter subscribers                      |
| `NEXT_PUBLIC_SITE_URL` | no       | Public URL used for SEO (canonical links, sitemap, share image) |

## Project structure

```
app/                 Routes (one folder per page), server actions, SEO files
components/
  layout/            Navbar, footer
  sections/          Page sections (hero, pricing, FAQ, CTA…)
  ui/                Reusable building blocks (buttons, headings, cards…)
  widgets/           Illustrative product UI (dashboards, phones, charts)
  seo/               Structured data
data/                All copy, prices, links and contact details
lib/                 Helpers (email, validation, hooks)
types/               Shared TypeScript types
```

## Editing content

- **Brand name, phone, email, navigation:** `data/site.ts`
- **Homepage content, plans and images:** `data/home.ts`
- **Inner pages (accounting, creation, app, pricing, contact):** `data/pages.ts`
- **Logo:** `components/ui/logo.tsx` (favicon: `app/icon.svg`)
- **Colours, fonts and animations:** `app/globals.css`

## Pages

`/` · `/accounting` · `/company-creation` · `/our-app` · `/pricing` · `/contact` · `/contact/sent` · `/legal-notice` · `/privacy-policy` · custom 404
