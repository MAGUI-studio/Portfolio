"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

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

type SectionLinkProps = HoverLinkProps;

function handleInternalSectionClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: ComponentProps<typeof Link>["href"],
) {
  if (typeof href !== "string" || !href.startsWith("#")) {
    return;
  }

  event.preventDefault();

  const targetId = href.slice(1);
  const target = document.getElementById(targetId);
  const nextUrl = `${window.location.pathname}${window.location.search}`;

  window.history.replaceState(null, "", nextUrl);

  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function FloraSectionLink({
  children,
  onClick,
  href,
  className,
  ...props
}: SectionLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={className}
      onClick={(event) => {
        onClick?.(event);

        if (event.defaultPrevented) {
          return;
        }

        handleInternalSectionClick(event, href);
      }}
    >
      {children}
    </Link>
  );
}

export function FloraHoverLink({
  children,
  className,
  onClick,
  href,
  ...props
}: HoverLinkProps) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.26, ease }}>
      <Link
        {...props}
        href={href}
        className={className}
        onClick={(event) => {
          onClick?.(event);

          if (event.defaultPrevented) {
            return;
          }

          handleInternalSectionClick(event, href);
        }}
      >
        {children}
      </Link>
    </motion.div>
  );
}
