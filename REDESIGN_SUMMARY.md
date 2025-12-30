# Portfolio Minimal Redesign - Update Summary

## 🎨 Design Philosophy Update
Shifted from a generic corporate look to a **minimal, text-driven aesthetic** inspired by `drewcoffman.com`, `anaritamorais.com`, and `presentandcorrect.com`.

### Core Changes
1. **Simplified Layout**: Removed the sticky header and footer. Navigation is now part of the content flow.
2. **Typography-First**: Focus on clean sans-serif typography (`Inter`) with generous whitespace.
3. **Navigation Architecture**: Split content into separate minimal pages:
   - `/` (Home): "Now", "Previously", "Selected Work"
   - `/about`: Tabbed biography
   - `/teaching`: Clean list of courses
   - `/publications`: Minimalist accordion
   - `/connect`: Simple contact links
4. **Visual Elements**:
   - "Arrow links" (→ Link) for a clean directional feel
   - Section markers (`//now//`, `//previously//`) for a code/editorial aesthetic
   - Warm, off-white background palette (`#fefdfb`)

## 🛠️ Project Structure Update

```
portfolio/
├── src/
│   ├── routes/
│   │   ├── +page.svelte           # Minimal Homepage
│   │   ├── about/
│   │   │   └── +page.svelte       # About (Tabs)
│   │   ├── teaching/
│   │   │   └── +page.svelte       # Teaching (List)
│   │   ├── publications/
│   │   │   └── +page.svelte       # Publications (Accordion)
│   │   └── connect/
│   │       └── +page.svelte       # Connect (Links)
│   └── lib/
│       └── styles/
│           ├── tokens.css         # Updated minimal tokens
│           └── global.css         # Updated global styles
```

## 🚀 Next Steps

### 1. Resume & CV
- Link the "Download CV" button to the actual PDF file when available.

### 2. Content Refinement
- **Teaching**: Add syllabi PDFs if available.
- **Publications**: Add links to actual papers (DOI or PDF).
- **Images**: Add more personal/candid photos to the About page if desired.

### 3. Deployment
- The site is ready to deploy to GitHub Pages. All paths use the `base` variable for compatibility.

## 🔗 Quick Links
- **Home**: http://localhost:5173/
- **About**: http://localhost:5173/about
- **Publications**: http://localhost:5173/publications
