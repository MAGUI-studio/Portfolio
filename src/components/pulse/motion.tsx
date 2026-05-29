"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion, type Variants } from "framer-motion";

export const pulseEase = [0.22, 1, 0.36, 1] as const;
export const pulseViewport = { once: true, amount: 0.22 } as const;

export const pulseSectionReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: pulseEase },
  },
};

export const pulseItemReveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: pulseEase },
  },
};

export const pulseImageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.035, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.84, ease: pulseEase },
  },
};

export const pulseStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export function PulseMotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export { motion };
