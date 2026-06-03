import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { powervetWhatsapp } from "./data";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-[10px] font-bold uppercase tracking-[0.3em] ${light ? "text-[#DDD6C8]" : "text-[#31502E]"}`}>{children}</p>;
}

export function ActionLink({ children, href = powervetWhatsapp, light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex items-center justify-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-1 ${light ? "bg-[#F4F1EB] text-[#021C00] hover:bg-white" : "bg-[#021C00] text-white hover:bg-[#173B14]"}`}
    >
      {children}
      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
