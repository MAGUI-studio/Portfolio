import { Sparkle } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";

import { syncopate } from "./fonts";

type VittaWordmarkProps = {
  className?: string;
  markClassName?: string;
};

export function VittaWordmark({ className = "", markClassName = "" }: VittaWordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`grid size-10 place-items-center rounded-full ${markClassName || "bg-[#F7EFE4] text-[#27362D]"}`}>
        <Sparkle size={18} weight="duotone" />
      </span>
      <span className={`${syncopate.className} text-2xl font-bold tracking-[0.2em]`}>VITTA</span>
    </span>
  );
}

export function SectionEyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`${syncopate.className} text-xs font-bold uppercase tracking-[0.24em] text-[#A97856] ${className}`}>
      {children}
    </p>
  );
}
