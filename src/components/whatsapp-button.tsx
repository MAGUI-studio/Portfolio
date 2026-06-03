import Link from "next/link";
import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";

type WhatsappButtonProps = {
  phoneNumber: string;
  message: string;
};

export function buildWhatsappHref(phoneNumber: string, message: string) {
  const normalizedPhone = phoneNumber.replace(/\D/g, "");

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export function WhatsappButton({ phoneNumber, message }: WhatsappButtonProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-70 mx-auto flex w-full max-w-440 justify-end px-5 md:bottom-7 md:px-7">
      <Link
        href={buildWhatsappHref(phoneNumber, message)}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
        title="Falar pelo WhatsApp"
        className="group pointer-events-auto grid size-14 place-items-center rounded-full bg-[#25D366] text-[#25D366] shadow-[0_12px_32px_rgba(37,211,102,0.26)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(37,211,102,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 md:size-16"
      >
        <WhatsappLogoIcon
          size={40}
          weight="duotone"
          className="relative z-10 text-white transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
    </div>
  );
}
