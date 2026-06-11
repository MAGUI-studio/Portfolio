"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function FloraReveal({
  children,
  className,
  delay = 0,
  amount = 0.18,
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
      transition={{ duration: 0.85, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloraImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloraHoverCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.32, ease }}
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

export function FloraHoverLink({
  children,
  className,
  ...props
}: HoverLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.26, ease }}>
      <Link {...props} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
