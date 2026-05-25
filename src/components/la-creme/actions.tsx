import { ArrowRight } from "@phosphor-icons/react";
import { whatsapp } from "./data";

export function CTA({
  children,
  href = "#contato",
  light = false,
}: {
  children: string;
  href?: string;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        light
          ? "group inline-flex items-center justify-center gap-3 bg-white px-7 py-5 text-sm font-semibold text-[#2b1714] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd8df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
          : "group inline-flex items-center justify-center gap-3 bg-[#2b1714] px-7 py-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#9d2d40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
      }
    >
      {children}
      <ArrowRight
        size={17}
        aria-hidden="true"
        className="transition duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

export function WhatsAppCTA({ light = false }: { light?: boolean }) {
  return (
    <a
      href={whatsapp}
      className={
        light
          ? "inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-5 text-sm font-semibold text-[#12351f] shadow-[0_18px_48px_rgba(37,211,102,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
          : "inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-5 text-sm font-semibold text-[#12351f] transition duration-300 hover:-translate-y-1 hover:bg-[#b8f7cb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
      }
    >
      Pedir no WhatsApp
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}
