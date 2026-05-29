"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion, type Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;
export const viewport = { once: true, amount: 0.2 } as const;

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 42 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease },
  },
};

export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease },
  },
};

export const staggerReveal: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.035, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.86, ease },
  },
};

export function NachoMotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export { motion };
