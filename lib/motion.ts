// Motion tokens & reveal variants — Section 5 of BUILD-PROMPT.md.
// These four variants (fadeIn, slideUp, scaleIn, pop) are the ONLY animation
// primitives used anywhere on the site. Do not introduce new ones (hard rule 5f).

import type { Transition, Variants } from "framer-motion";

export const EASE_STANDARD: [number, number, number, number] = [0.25, 1, 0.5, 1];

export const DURATION = {
  fast: 0.15,
  base: 0.3,
  slow: 0.5,
} as const;

export const SPRING_POP: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 30,
  mass: 1,
};

export const baseTransition: Transition = {
  duration: DURATION.base,
  ease: EASE_STANDARD,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1 },
};

export const pop: Variants = {
  hidden: { scale: 0.9 },
  show: { scale: [0.9, 1.03, 1] },
};

/** Stagger wrapper for grouping children (Section 5d — 0.075s cascade). */
export const staggerContainer = (stagger = 0.075, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Standard viewport config: reveal once, don't replay on scroll-up. */
export const viewportOnce = { once: true, amount: 0.3 } as const;
