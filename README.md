# TrioRecord

TrioRecord is a modern SaaS-style single-page landing website built with Next.js App Router, JavaScript, and Tailwind CSS. It presents a premium document recording and management product with a polished hero, feature sections, a real downloadable PDF, and a validated contact form.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- JavaScript (ES6+)
- Tailwind CSS 4

## Features

- Sticky responsive navbar with mobile menu
- Premium hero section with product-style preview UI
- Feature cards with hover effects
- About section with SaaS-style enterprise messaging
- Real document download from `public/sample.pdf`
- Contact form with required validation, email validation, loading state, success message, and reset behavior
- Smooth scrolling and scroll reveal animation
- Fully responsive layout

## Project Structure

```text
triocard/
  app/
    globals.css
    layout.js
    page.js
  components/
    About.js
    Contact.js
    Document.js
    Features.js
    Footer.js
    Hero.js
    Navbar.js
    Reveal.js
  public/
    sample.pdf
  jsconfig.json
  package.json
  postcss.config.mjs
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

By default, the app runs at:

```text
http://localhost:3000
```

In the current local environment, the dev server was verified at:

```text
http://localhost:3000
```

## Docker (Production)

### Build and run with Docker Compose

```bash
docker compose up --build
```

Then open:

```text
http://localhost:3000
```

### Faster start (don’t rebuild every time)

The long delay you see is because `--build` rebuilds the image (runs `npm ci` + `next build`) on every start.

Do this once:

```bash
docker compose build
```

Then start quickly:

```bash
docker compose up
```

### Troubleshooting (Windows)

If you see errors like `permission denied while trying to connect to the docker API`:

- Ensure Docker Desktop is running and your user has access to the Docker engine (often via the `docker-users` group), then reopen your terminal.

If you see `Access is denied` for `C:\\Users\\<you>\\.docker\\...`:

- Use a project-local Docker CLI config folder for the session:

```powershell
$env:DOCKER_CONFIG = (Join-Path $PWD ".docker")
New-Item -ItemType Directory -Force -Path $env:DOCKER_CONFIG | Out-Null
docker compose up --build
```

### Build and run with Docker (no Compose)

```bash
docker build -t crm_website .
docker run --rm -p 3000:3000 crm_website
```

## Docker (Development / Hot Reload)

Runs `next dev` in a container with your source mounted, so edits auto-reload.

```bash
docker compose -f docker-compose.dev.yml up --build
```

Then open:

```text
http://localhost:3000
```

If you change `package-lock.json` / dependencies, rebuild:

```bash
docker compose -f docker-compose.dev.yml up --build
```

### 3. Create a production build

```bash
npm run build
```

### 4. Start the production server

```bash
npm run start
```

## Download Functionality

The document section includes a real working download button that points to:

```text
/sample.pdf
```

This file is stored in:

```text
public/sample.pdf
```

## Main Sections

- `Home`: Hero section and primary product message
- `Features`: Secure storage, easy access, fast download, and real-time management
- `About`: Product positioning and enterprise-style overview
- `Document`: Downloadable TrioRecord guide
- `Contact`: Frontend-only validated contact form

## Accessibility and UI Notes

- Semantic section structure
- Form labels and validation messaging
- Keyboard-friendly navigation and buttons
- Mobile-first responsive behavior
- Soft shadows, rounded surfaces, gradients, and clean spacing for a premium SaaS look

## Verification

The project was verified with:

```bash
npm run build
```

The build completed successfully on Next.js `16.2.4`.
