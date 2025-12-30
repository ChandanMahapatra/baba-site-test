# Portfolio Website - Quick Start Guide

## ✅ What's Been Created

A complete SvelteKit portfolio website for Prof. Gopal Mahapatra with:

### Features Implemented
- ✅ Hero section with professional introduction
- ✅ About section with tabbed content (Biography, Courses, Academic Background)
- ✅ Recognition section highlighting thought leadership
- ✅ Publications section with accordion (Books, Journals, Cases)
- ✅ Contact section with clickable cards
- ✅ Responsive header and footer
- ✅ Dark mode support (automatic based on system preference)
- ✅ CSS design token system
- ✅ GitHub Pages deployment workflow

### Tech Stack
- **Framework**: SvelteKit + TypeScript
- **UI Components**: Bits UI (headless components for tabs and accordion)
- **Styling**: CSS with design tokens (no Tailwind, no Calcite)
- **Deployment**: GitHub Pages via adapter-static

## 🚀 Getting Started

### Development Server
The dev server is already running at: **http://localhost:5173/**

Open your browser to see the site!

### Available Commands

```bash
# Development
npm run dev              # Start dev server (already running)

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# GitHub Pages
BASE_PATH="/repo-name" npm run build
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.svelte       # Sticky navigation
│   │   │   │   └── Footer.svelte       # Footer with contact info
│   │   │   ├── sections/
│   │   │   │   ├── Hero.svelte         # Hero with CTA buttons
│   │   │   │   ├── About.svelte        # Tabbed biography section
│   │   │   │   ├── Recognition.svelte  # Thought leadership cards
│   │   │   │   ├── Publications.svelte # Accordion publications
│   │   │   │   └── Contact.svelte      # Contact cards
│   │   │   └── ui/
│   │   │       └── Button.svelte       # Reusable button component
│   │   ├── layouts/
│   │   │   ├── DefaultLayout.svelte
│   │   │   └── PublicationLayout.svelte
│   │   └── styles/
│   │       ├── tokens.css              # Design tokens
│   │       └── global.css              # Global styles
│   └── routes/
│       ├── +layout.svelte              # Root layout
│       └── +page.svelte                # Homepage
├── .github/workflows/
│   └── deploy.yml                      # GitHub Actions deployment
└── README.md
```

## 🎨 Design System

### Colors
- **Primary Accent**: Deep blue (#1e40af) - Professional authority
- **Secondary**: Purple (#7c3aed) - Thought leadership
- **Tertiary**: Teal (#0891b2) - Academic freshness

### Typography
- **Sans**: Inter (from Google Fonts)
- **Serif**: Libre Baskerville (for emphasis)

### Spacing Scale
- `--space-xs` (0.25rem) to `--space-4xl` (6rem)

## 🔧 Customization

### Update Content

1. **Hero Section**: Edit `src/lib/components/sections/Hero.svelte`
2. **Biography**: Edit `src/lib/components/sections/About.svelte`
3. **Publications**: Edit `src/lib/components/sections/Publications.svelte`
4. **Contact Info**: Edit `src/lib/components/sections/Contact.svelte` and `Footer.svelte`

### Change Colors

Edit `src/lib/styles/tokens.css`:

```css
--color-accent: #1e40af;     /* Change primary color */
--color-secondary: #7c3aed;  /* Change secondary color */
```

### Add New Sections

1. Create component in `src/lib/components/sections/`
2. Import and add to `src/routes/+page.svelte`

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Set Source to "GitHub Actions"
4. Push to `main` branch - site deploys automatically!

### Manual Build

```bash
# Build with base path
BASE_PATH="/your-repo-name" npm run build

# Preview
npm run preview
```

## 🎯 Next Steps

### Immediate Improvements
1. Add professional photo to Hero section
2. Add real testimonials (create Testimonials.svelte)
3. Add more publications from CV
4. Create Resources section with downloadable materials
5. Add Books section with book covers

### Content to Add
- Teaching materials/syllabi
- Case studies (downloadable PDFs)
- Interview videos/podcasts
- Speaking engagement photos
- Coaching frameworks/tools

### Optional Enhancements
- Add blog/articles section with mdsvex
- Integrate Sveltia CMS for easy content editing
- Add search functionality
- Add newsletter signup
- Add analytics (Google Analytics, Plausible)

## 📝 Notes

### Bits UI Components Used
- **Tabs**: For About section (Biography/Courses/Background)
- **Accordion**: For Publications section (Books/Journals/Cases)

### CSS Warnings
The build shows "unused CSS selector" warnings for Bits UI classes. This is normal - Bits UI applies classes dynamically at runtime.

### Dark Mode
Dark mode is automatic based on system preference. No toggle needed - it just works!

## 🐛 Troubleshooting

### Build Fails
- Check that all layout files exist in `src/lib/layouts/`
- Ensure all imports are correct

### Styles Not Applying
- Check that `global.css` is imported in `+layout.svelte`
- Verify CSS custom properties are defined in `tokens.css`

### GitHub Pages 404
- Ensure `fallback: '200.html'` is set in `svelte.config.js`
- Check that `BASE_PATH` is set correctly in GitHub Actions

## 📚 Resources

- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [Bits UI Docs](https://www.bits-ui.com/)
- [mdsvex Docs](https://mdsvex.pngwn.io/)

---

**Status**: ✅ Site is built and ready for development!
**Dev Server**: Running at http://localhost:5173/
**Next**: Open browser and start customizing!
