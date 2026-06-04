import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { arcoWhatsapp } from "./data";

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase ${
        light ? "text-white/72" : "text-[#1F5687]"
      }`}
    >
      {children}
    </p>
  );
}

export function ActionLink({
  children,
  href = arcoWhatsapp,
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
        light
          ? "bg-white text-[#1F5687] hover:bg-[#EAF5FB]"
          : "bg-[#1F5687] text-white hover:bg-[#16456F]"
      }`}
    >
      {children}
      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
