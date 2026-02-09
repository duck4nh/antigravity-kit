---
description: Add animations and micro-interactions to UI components
triggers:
  - animate
  - animation
  - micro-interaction
  - transition
  - motion
---

# Frontend UI Animator

Add polished animations and micro-interactions.

## Animation Patterns

### Entrance Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Scale In */
@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```

### Tailwind Utilities
```html
<!-- Fade in -->
<div class="animate-fade-in">

<!-- Slide up with delay -->
<div class="animate-slide-up delay-100">

<!-- Staggered children -->
<div class="[&>*]:animate-fade-in [&>*:nth-child(1)]:delay-0 
            [&>*:nth-child(2)]:delay-100 [&>*:nth-child(3)]:delay-200">
```

### Hover Effects
```css
/* Scale on hover */
.hover-scale {
  transition: transform 0.2s ease;
}
.hover-scale:hover {
  transform: scale(1.05);
}

/* Glow effect */
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}
```

### Button Interactions
```css
.btn {
  transition: all 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.btn:active {
  transform: translateY(0);
}
```

### Loading States
```css
/* Skeleton pulse */
.skeleton {
  animation: pulse 2s ease-in-out infinite;
}

/* Spinner */
.spinner {
  animation: spin 1s linear infinite;
}

/* Progress */
.progress-bar {
  animation: progress 1.5s ease-in-out;
}
```

## React/Framer Motion

```tsx
import { motion } from 'framer-motion';

// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>

// Staggered list
<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.li variants={item} key={item.id}>
  ))}
</motion.ul>
```

## Best Practices

- **Duration**: 150-300ms for UI, 300-500ms for page
- **Easing**: `ease-out` for entrances, `ease-in` for exits
- **Reduce motion**: Respect `prefers-reduced-motion`
- **Performance**: Use `transform` and `opacity` only
- **Purpose**: Animation should guide, not distract
