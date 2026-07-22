import { Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                               TIMING PRESETS                               */
/* -------------------------------------------------------------------------- */

export const timing = {
  fast: {
    duration: 0.45,
    ease: "easeOut",
  },

  normal: {
    duration: 0.65,
    ease: "easeOut",
  },

  slow: {
    duration: 0.9,
    ease: "easeOut",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                              VIEWPORT PRESETS                              */
/* -------------------------------------------------------------------------- */

export const viewport = {
  once: true,
  amount: 0.25,
};

/* -------------------------------------------------------------------------- */
/*                               FADE UP                                      */
/* -------------------------------------------------------------------------- */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: timing.normal,
  },
};

/* -------------------------------------------------------------------------- */
/*                               FADE IN                                      */
/* -------------------------------------------------------------------------- */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: timing.normal,
  },
};

/* -------------------------------------------------------------------------- */
/*                               SCALE IN                                     */
/* -------------------------------------------------------------------------- */

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: timing.normal,
  },
};

/* -------------------------------------------------------------------------- */
/*                             STAGGER CONTAINER                              */
/* -------------------------------------------------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               STAGGER ITEM                                 */
/* -------------------------------------------------------------------------- */

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: timing.normal,
  },
};