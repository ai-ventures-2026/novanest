# NovaNest – Smart Living Redefined

A modern, premium smart home brand website built with **React**, **Vite**, and **React Router**.

## Tech Stack

- React 18
- Vite 5
- React Router DOM 6

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
NovaNest/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css          # Component styles
    ├── index.css        # Global styles & CSS variables
    ├── components/
    │   ├── Navbar.jsx   # Responsive navbar with hamburger menu
    │   └── Footer.jsx   # Full footer with newsletter form
    └── pages/
        ├── Home.jsx     # Hero, Features, How It Works, Testimonials, CTA
        ├── About.jsx    # Story, Stats, Values, Team
        ├── Services.jsx # 6 service cards with pricing
        └── Contact.jsx  # Contact form, info, map placeholder, FAQ
```

## Brand Colours

| Token         | Value     | Usage                  |
|---------------|-----------|------------------------|
| Deep Navy     | `#0a0e1a` | Primary background     |
| Blue-Gray     | `#1e2d4a` | Surface / card bg      |
| Gold Accent   | `#e8b86d` | Highlights, CTAs       |
| White         | `#ffffff` | Headings, icons        |

## Pages

| Route       | Page     |
|-------------|----------|
| `/`         | Home     |
| `/about`    | About    |
| `/services` | Services |
| `/contact`  | Contact  |
