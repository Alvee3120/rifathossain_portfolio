# Front-end & UI taste

- Prefers plain HTML5, CSS3, and minimal vanilla JavaScript — explicitly no frameworks, no build tools, no jQuery, and no Tailwind (even via CDN). Confidence: 0.95
- Prefers mobile-first responsive layouts, and expects them validated at 320 / 375 / 414 / 768 / 1280px+ with nothing overflowing horizontally. Confidence: 0.9
- Prefers relative sizing (`rem`, `clamp()`, `vw`) and flexbox/grid with `min-height: 100dvh` over fixed-pixel layouts. Confidence: 0.85
- Prefers defining design tokens (colors, radii, shadows, fonts) as CSS custom properties in `:root`. Confidence: 0.85
- Prefers BEM-style class names (e.g. `.profile__photo`, `.actions__btn--primary`, `.brand-card__link`). Confidence: 0.85
- Wants accessibility built in from the start: semantic HTML landmarks, WCAG AA contrast, meaningful `aria-label`s, descriptive `alt` text, ≥48px touch targets, visible `:focus-visible` styles, and `prefers-reduced-motion` support. Confidence: 0.9
- Wants full SEO/meta coverage: viewport, `theme-color`, canonical, Open Graph + Twitter Card tags, favicon, and JSON-LD structured data. Confidence: 0.85
- Prefers tight performance budgets and all icons as inline SVG — no icon fonts, no external icon libraries. Confidence: 0.8
- Prefers clean, well-commented CSS organized in a fixed order (variables → reset → base → layout → components → animations → media queries), with no `!important` and no inline styles. Confidence: 0.85
- Prefers a premium, luxe aesthetic: serif-led typography for headings paired with a clean humanist sans for small text, loaded from Google Fonts with `preconnect` and `font-display: swap`, and only the weights actually used. Confidence: 0.8
- Prefers subtle, tasteful motion (gentle staggered fade-up on load, hover lift, smooth transitions) that degrades gracefully and is disabled under reduced-motion. Confidence: 0.75
- Prefers layouts that are horizontal (wide, multi-column) on desktop and vertical (single stacked column) on mobile — responsive layout/orientation switches via CSS grid with a desktop breakpoint, not just fluid scaling. Confidence: 0.7
- Prefers the design palette to be derived from the brand's logo colors — when a logo or brand colors are supplied, rebuild the color tokens around them (with lighter/darker depth variants) rather than using generic colors. Confidence: 0.7
- Values visually rich, "graphically enriched" designs — layered gradients/glows, subtle textures/patterns, and decorative accents (swirl arcs, conic-gradient rings, hover sheens) rather than flat, minimal styling. Confidence: 0.7
- When a visual reference/mockup is supplied, expects the built page to match it faithfully (layout, typography, button/pill shapes, banner composition) and to derive the mobile variant from that same reference. Confidence: 0.65
