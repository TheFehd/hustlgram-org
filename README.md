# Hustlgram — Digital Agency Website

Hustlgram is a modern, animated landing page for a Montreal-based digital agency. Built with React and Vite, featuring a dark/light emerald theme, scroll-driven animations, and a fully responsive layout.

## Tech Stack

- **React 19** — UI framework
- **Vite** — Build tool with instant HMR
- **Pure CSS** — No utility framework; inline styles + global CSS
- **Google Fonts** — Instrument Serif, Syne, Fira Code

## Project Structure

```
hustlgram-app/
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── assets/images/       # Project images (logos, photos)
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Fixed navigation bar
│   │   ├── Hero.jsx         # Hero section with animated headline
│   │   ├── Marquee.jsx      # Scrolling service ticker
│   │   ├── StickyServices.jsx # Scroll-driven services showcase
│   │   ├── Portfolio.jsx    # Recent projects list
│   │   ├── CallToAction.jsx # CTA section
│   │   └── Footer.jsx       # Site footer
│   ├── constants/
│   │   ├── theme.js         # Color palettes (dark + light)
│   │   └── content.js       # All text content, services, portfolio data
│   ├── hooks/
│   │   ├── useInView.js     # Intersection Observer hook
│   │   └── useStickyProgress.js # Scroll progress tracker
│   ├── pages/
│   │   └── Home.jsx         # Main landing page (assembles all components)
│   ├── styles/
│   │   └── global.css       # Animations, hover effects, responsive rules
│   ├── App.jsx              # App root (routes will go here later)
│   └── main.jsx             # Entry point
├── index.html               # HTML shell with font preloads
├── vite.config.js           # Vite configuration
└── package.json
```

## Getting Started

### Prerequisites

- **Node.js** 18+ (check with `node -v`)
- **npm** 9+ (comes with Node)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/TheFehd/hustlgram-org.git
cd hustlgram

# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev
```

### Build for Production

```bash
npm run build     # Creates optimized files in /dist
npm run preview   # Preview the production build locally
```

## How to Edit Content

All website text lives in **one file**: `src/constants/content.js`

- **Services** — Edit the `SERVICES` array to change service cards
- **Portfolio** — Edit the `PORTFOLIO` array to add/remove projects
- **Hero text** — Edit the `HERO` object
- **Site info** — Edit the `SITE` object (name, tagline, copyright)
- **Nav links** — Edit the `NAV_LINKS` array
- **Social links** — Edit the `SOCIAL_LINKS` array
- **Marquee items** — Edit the `MARQUEE_ITEMS` array

Colors live in `src/constants/theme.js` — change `DARK` and `LIGHT` objects.

## How to Edit Components

Each section is its own file in `src/components/`. To change a section's layout or behavior, open its file directly:

| Section | File |
|---------|------|
| Navigation | `src/components/Navbar.jsx` |
| Hero | `src/components/Hero.jsx` |
| Marquee ticker | `src/components/Marquee.jsx` |
| Services | `src/components/StickyServices.jsx` |
| Portfolio | `src/components/Portfolio.jsx` |
| Call to action | `src/components/CallToAction.jsx` |
| Footer | `src/components/Footer.jsx` |

## Pushing Updates to GitHub

```bash
# Check what changed
git status

# Stage your changes
git add .

# Commit with a clear message
git commit -m "describe what you changed"

# Push to GitHub
git push origin main
```

## Keeping the Project Organized

- **Content changes** go in `src/constants/` — never hardcode text in components
- **New components** go in `src/components/` — one file per component
- **New pages** go in `src/pages/` — one file per page
- **Custom hooks** go in `src/hooks/` — prefix with `use`
- **Images** go in `src/assets/images/` or `public/` (for static files)
- **Styles** — keep global CSS minimal; component styles stay inline

## License

Private project — Hustlgram © 2026
