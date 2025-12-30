# Portfolio Website

## Minimalist & Text-Driven Design

This portfolio for Prof. Gopal Mahapatra features a clean, typography-focused aesthetic inspired by editorial design.

### Key Features
- **Minimalist Core**: No sticky header, clean whitespace, underlined links.
- **Content-First**: Distinct sections for "Now", "Previously", and "Selected Work".
- **Integrated Contact**: Connect information flows naturally at the end of the homepage.
- **Refined Typography**:
    - `tight-list`: Standard clean lists.
    - `dashed-list`: Editorial lists with `-` markers and reduced spacing (used for publications and specific sections).

### Structure
- **/** (Home): Professional bio, key links, and timeline.
- **/about**: Biography, education, and recognition.
- **/teaching**: Course listings and management development programs.
- **/publications**: Curated list of books, journals, and case studies.

### Development
1. `npm install`
2. `npm run dev` (Runs on http://localhost:5173/)
3. `npm run build` (Builds to `/build` for GitHub Pages)

### Deployment
Automated via GitHub Actions to GitHub Pages.
- Base path config handling in `svelte.config.js`.
- Static adapter for full SSG.

## Project Structure

```
portfolio/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── layout/          # Header, Footer
│   │   │   ├── sections/        # Hero, About, Publications, etc.
│   │   │   └── ui/              # Button, reusable components
│   │   └── styles/
│   │       ├── tokens.css       # Design tokens
│   │       └── global.css       # Global styles
│   └── routes/
│       ├── +layout.svelte       # Root layout
│       └── +page.svelte         # Homepage
├── content/                     # Markdown content (future)
├── static/                      # Static assets
└── .github/workflows/           # GitHub Actions
```

## Design System

The site uses a comprehensive CSS design token system:

- **Spacing**: `--space-xs` to `--space-4xl`
- **Typography**: `--text-xs` to `--text-5xl`
- **Colors**: Professional academic palette with accent colors
- **Dark Mode**: Automatic based on system preference

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment Setup

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch to trigger deployment

## Content Management

### Adding Publications

Edit `src/lib/components/sections/Publications.svelte` to add new publications to the accordion sections.

### Updating Bio

Edit `src/lib/components/sections/About.svelte` to update biography, courses, or academic background.

### Modifying Contact Info

Edit `src/lib/components/sections/Contact.svelte` and `src/lib/components/layout/Footer.svelte`.

## Customization

### Colors

Edit `src/lib/styles/tokens.css` to change the color scheme:

```css
--color-accent: #1e40af;  /* Primary accent color */
--color-secondary: #7c3aed;  /* Secondary accent */
```

### Typography

Change fonts in `src/lib/styles/global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

## License

© 2025 Prof. Gopal Mahapatra. All rights reserved.
