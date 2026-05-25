"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion, type Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;
export const viewport = { once: true, amount: 0.18 } as const;

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 54 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease },
  },
};

export const staggerReveal: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04, y: 28 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

export function LaCremeMotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function AnimatedSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={sectionReveal}
    >
      {children}
    </motion.section>
  );
}

export { motion };
