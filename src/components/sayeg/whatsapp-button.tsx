import Link from "next/link";
import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import { sayegWhatsapp } from "./data";

export function SayegWhatsappButton() {
  return (
    <Link
      href={sayegWhatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      title="Agendar avaliação pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-70 grid size-14 place-items-center rounded-full bg-[#25D366] text-[#25D366] shadow-[0_12px_32px_rgba(37,211,102,0.26)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(37,211,102,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 md:bottom-7 md:right-7 md:size-16"
    >
      <WhatsappLogoIcon
        size={40}
        weight="duotone"
        className="relative z-10 text-white transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
