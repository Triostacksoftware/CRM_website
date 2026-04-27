# CRM Website

This project is a Next.js 16 marketing website for CRM Solutions. It includes a landing page, pricing page, industries page, features page, blog listing with detail pages, legal pages, and a brochure download route.

The project is configured to run on one public application port:

```text
http://localhost:5015
```

## Stack

- Next.js 16 with App Router
- React 19
- JavaScript
- Tailwind CSS 4
- Docker Compose

## Active Routes

Use the same local base URL for every route:

```text
http://localhost:5015
```

### Public Pages

| Route | Source file | Purpose |
| --- | --- | --- |
| `/` | `app/page.js` | Main CRM Solutions homepage. |
| `/go` | `app/go/page.js` | Dedicated TrioCRM landing page. |
| `/features` | `app/features/page.js` | Feature overview page. |
| `/features/[slug]` | `app/features/[slug]/page.js` | Dynamic feature detail pages. |
| `/pricing` | `app/pricing/page.js` | Pricing page. |
| `/industries` | `app/industries/page.js` | Industries overview page. |
| `/industries/[slug]` | `app/industries/[slug]/page.js` | Dynamic industry detail pages. |
| `/integrations` | `app/integrations/page.js` | Integrations page. |
| `/use-cases` | `app/use-cases/page.js` | Use cases page. |
| `/roi` | `app/roi/page.js` | ROI calculator page. |
| `/blogs` | `app/blogs/page.js` | Blog listing page. |
| `/blogs/[slug]` | `app/blogs/[slug]/page.js` | Dynamic blog detail pages. |
| `/privacy-policy` | `app/privacy-policy/page.js` | Privacy policy page. |
| `/terms-and-conditions` | `app/terms-and-conditions/page.js` | Terms and conditions page. |
| `/thank-you-crm-demo` | `app/thank-you-crm-demo/page.js` | Demo form success page. |

### Backend And Download Routes

| Route | Method | Source file | Purpose |
| --- | --- | --- | --- |
| `/api/lead` | `POST` | `app/api/lead/route.js` | Sends lead/demo form data to the configured webhook. |
| `/api/blogs` | `GET` | `app/api/blogs/route.js` | Returns blog data from the configured blog API. |
| `/crm-brochure` | `GET` | `app/crm-brochure/route.js` | Generates and downloads the CRM brochure PDF. |

## Main Structure

```text
app/
  api/
    blogs/
    lead/
  blogs/
    [slug]/
  crm-brochure/
  features/
    [slug]/
  go/
  industries/
    [slug]/
  integrations/
  pricing/
  privacy-policy/
  roi/
  terms-and-conditions/
  thank-you-crm-demo/
  use-cases/
  globals.css
  layout.js
  page.js

components/
  BookCallModal.js
  BrandSection.js
  Chatbot.js
  ConsultationSection.js
  ContactLink.js
  ContactSection.js
  FAQSection.js
  FeaturesSection.js
  GooglePlaySection.js
  HeroForm.js
  HeroSection.js
  Navbar.js
  PricingSection.js
  ProductShowcase.js
  Reveal.js
  SEOComponent.js
  SocialStickyBar.js
  TestimonialSection.js
  TrustSection.js
  WhatsAppButton.js
```

## Run With Docker

Hot reload (default):

Build and start:

```bash
npm run docker:dev
```

Stop:

```bash
npm run docker:dev:down
```

View logs:

```bash
docker compose -f docker-compose.dev.yml logs -f web
```

## Hot Reload (Dev Mode)

If you want changes to appear immediately while you edit (Fast Refresh / hot reload), run the app in development mode:

```bash
npm run dev
```

Docker hot reload:

```bash
npm run docker:dev
```

Notes (Windows / OneDrive):

- `docker compose up` will hot reload by default in this project setup.
- Dev Docker uses polling (WATCHPACK/CHOKIDAR). It also forces webpack mode when Next supports `--webpack`, because Turbopack file watching can be flaky on bind mounts.
- If polling still misses changes, move the repo out of OneDrive-synced folders (e.g. `C:\dev\CRM_website`) and try again.

If you changed UI code but still see the old page, reset the dev container (removes volumes + rebuilds):

```bash
npm run docker:dev:reset
```

Production (no hot reload):

```bash
npm run docker:prod:build
```

## Port Configuration

Docker and the app are aligned to one runtime port:

`docker-compose.dev.yml` uses `5015:5015` and `docker-compose.prod.yml` uses `5015:5015`.

## Environment Variables

Create a local `.env` file for server-side values. This file is ignored by Git.

Current server features can use:

```text
BLOG_API_TOKEN=
BLOGS_API_URL=https://api.blog-manager.triostack.in/api/blogs
TRIO_CRM_WEBSITE_WEBHOOK_URL=
TRIO_CRM_WEBSITE_WEBHOOK_SECRET=
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=
```

## Local Development

You do not need a local `node_modules` folder to keep this project running when using Docker.

If you want to run it directly with Node later:

```bash
npm install
npm run dev
```

## Windows Docker Troubleshooting

If Docker cannot connect to the engine, make sure Docker Desktop is running and reopen the terminal.

If you hit Docker config permission issues under `C:\Users\<you>\.docker`, use a project-local Docker config for the current terminal session:

```powershell
$env:DOCKER_CONFIG = (Join-Path $PWD ".docker")
New-Item -ItemType Directory -Force -Path $env:DOCKER_CONFIG | Out-Null
docker compose up --build -d
```

## Cleanup Status

The repo has already been cleaned to avoid committing generated or local-only files such as:

- `node_modules`
- `.next`
- Next.js log files
- local Docker config
- local environment files

Those are covered by `.gitignore`.
