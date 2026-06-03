import { ArrowLineUpRightIcon, NotebookIcon } from "@phosphor-icons/react/ssr";
import { whatsapp } from "./data";
import Link from "next/link";

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
    <Link
      href={href}
      className={
        light
          ? "group inline-flex items-center  justify-center gap-3 bg-white px-7 py-5 text-sm font-semibold text-[#2b1714] transition duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
          : "group inline-flex items-center justify-center gap-3 bg-[#2b1714] px-7 py-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#9d2d40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
      }
    >
      {children}
      <NotebookIcon size={20} aria-hidden="true" weight="duotone" />
    </Link>
  );
}

export function WhatsAppCTA({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={whatsapp}
      className={`${className} ${
        light
          ? "group inline-flex items-center justify-center gap-3 bg-[#25D366] px-7 py-5 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(37,211,102,0.22)] transition duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
          : "group inline-flex items-center justify-center gap-3 bg-[#25D366] px-7 py-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b8f7cb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Pedir no WhatsApp
      <ArrowLineUpRightIcon
        size={20}
        aria-hidden="true"
        className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}
