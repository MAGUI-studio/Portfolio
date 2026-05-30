import { ArrowRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { bitesWhatsapp } from "./data";
import { bitesHeading, bitesText } from "./fonts";

export function BitesButton({
  children,
  href = bitesWhatsapp,
  invert = false,
}: {
  children: string;
  href?: string;
  invert?: boolean;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={[
        `${bitesText.className} inline-flex items-center justify-center gap-3 text-white px-6 py-4 text-sm font-black uppercase tracking-[0.12em] transition duration-300`,
        invert
          ? "bg-[#F0F0F0] text-[#030401] hover:bg-white"
          : "bg-[#FB5F00] text-[#030401] hover:bg-[#ff7a29]",
      ].join(" ")}
    >
      {children}
      <ArrowRight size={17} weight="bold" />
    </Link>
  );
}

export function BitesLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={[
        `${bitesHeading.className} text-[11px] font-black uppercase tracking-[0.2em]`,
        light ? "text-[#F0F0F0]/62" : "text-[#030401]/45",
      ].join(" ")}
    >
      {children}
    </p>
  );
}
