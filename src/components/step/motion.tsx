"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function StepReveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StepHoverCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.34, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type HoverLinkProps = ComponentProps<typeof Link> & {
  className?: string;
  children: ReactNode;
};

export function StepHoverLink({
  children,
  className,
  ...props
}: HoverLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.28, ease }}>
      <Link {...props} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
