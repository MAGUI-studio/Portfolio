"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function SayegReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const offset = {
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
    up: { x: 0, y: 22 },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SayegImageReveal({
  children,
  className,
  delay = 0,
  rounded = true,
}: Omit<RevealProps, "direction"> & { rounded?: boolean }) {
  const hiddenClipPath = rounded
    ? "inset(0 0 12% 0 round 16px)"
    : "inset(0 0 12% 0)";
  const visibleClipPath = rounded
    ? "inset(0 0 0% 0 round 16px)"
    : "inset(0 0 0% 0)";

  return (
    <motion.div
      initial={{ opacity: 0, clipPath: hiddenClipPath }}
      whileInView={{ opacity: 1, clipPath: visibleClipPath }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SayegBackdropWord({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.1, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
