---
description: Frontend enhancement - UI polish, SEO, mobile, design system
argument-hint: [scope: ui|seo|mobile|design] [target]
---

# Frontend Enhancement

**Scope:** $ARGUMENTS

## Modes

### UI Polish (default)
```bash
/enhance [component]
/enhance ProductCard
```
- Pixel-perfect alignment (8px grid)
- Color/typography consistency
- Hover states, focus indicators
- Loading/error states
- Micro-interactions

### SEO
```bash
/enhance seo [page]
/enhance seo /products
```
- Meta tags, structured data (JSON-LD)
- Open Graph, Twitter Cards
- Core Web Vitals (LCP, FID, CLS)
- Semantic HTML, heading hierarchy

### Mobile Responsiveness
```bash
/enhance mobile [component]
```
- Breakpoints: 320px → 768px → 1024px
- Touch targets: min 44px
- Fluid typography: `clamp()`
- Mobile-first CSS

### Design System
```bash
/enhance design [action]
/enhance design audit
```
- Design tokens (colors, spacing, typography)
- CSS custom properties
- Component consistency audit

## Checklist

- [ ] Visual consistency
- [ ] Accessibility (WCAG AA)
- [ ] Performance optimized
- [ ] Mobile tested
- [ ] Cross-browser verified
