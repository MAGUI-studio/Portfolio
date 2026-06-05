import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { dragonTattooWhatsapp } from "./data";

type EyebrowProps = {
  children: ReactNode;
  light?: boolean;
};

type ActionLinkProps = {
  children: ReactNode;
  href?: string;
  light?: boolean;
  className?: string;
};

export function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <p
      className={`text-[11px] font-extrabold uppercase leading-none tracking-[0.18em] ${
        light ? "text-[#F4F1EA]/56" : "text-[#0D0D0D]/48"
      }`}
    >
      {children}
    </p>
  );
}

export function ActionLink({
  children,
  href = dragonTattooWhatsapp,
  light = false,
  className = "",
}: ActionLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`group inline-flex min-h-13 items-center justify-center gap-3 rounded-full px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5 ${
        light
          ? "bg-[#F4F1EA] text-[#0D0D0D] hover:bg-white"
          : "bg-[#0D0D0D] text-[#F4F1EA] hover:bg-[#2A2A2A]"
      } ${className}`}
    >
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
