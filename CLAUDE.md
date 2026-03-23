# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Development server (localhost:3000)
npm run build   # Production build
npm test        # Run tests (Jest + Testing Library)
```

## Architecture

Single-page portfolio application built with Create React App + Tailwind CSS.

**App structure** (`src/App.js`): Renders sections in order — Home → ÜberMich → CirquidOffers → Skills → Projekte → Kontakt. The Navbar floats above all sections.

**Navigation**: Uses `react-scroll` for smooth in-page scrolling. Each section has an `id` that matches Navbar link targets. Scroll offsets are set per link to account for the fixed navbar height.

**Styling**: Tailwind CSS with custom theme values defined in `tailwind.config.js`:
- Background: `#27374D` (backgroundColor)
- Nav background: `#1A2F4B` (navColor)
- Accent/text: `#14FFEC` (textColor)
- Custom animation: `colorchange` (border color transition)

**Reusable components**:
- `SkillItem.js` — renders a single skill with icon and label
- `ProjektItem.js` — renders a single project card with image, title, description, and links
- `SoftSkills.js` — soft skill display using `react-circular-progressbar`

**External integration**: cirQuid embed script is injected directly in `public/index.html` and rendered by `CirquidOffers.js`.

**Responsive design**: Mobile-first with Tailwind breakpoints (`md:`, `lg:`, `xl:`). `react-responsive` is also used for conditional rendering.

**Image assets** are kept directly in `src/` alongside components.

**Deployed**: https://marcus-philipp.netlify.app/
