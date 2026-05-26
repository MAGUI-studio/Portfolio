import type { ReactNode } from "react";
import { alexandria } from "./fonts";

export function KromaWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`${alexandria.className} ${className} font-normal uppercase leading-none`}
    >
      KROMA
    </span>
  );
}

export function BrandLockup({ light = false }: { light?: boolean }) {
  return (
    <div>
      <KromaWordmark
        className={`text-3xl md:text-4xl ${light ? "text-white" : "text-[#2A2A2A]"}`}
      />
      <p
        className={`mt-1 text-[10px] font-black uppercase tracking-[0.24em] ${
          light ? "text-[#FFBC4F]" : "text-[#2A2A2A]"
        }`}
      >
        Energia que move o futuro
      </p>
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#2A2A2A]">
      {children}
    </p>
  );
}
