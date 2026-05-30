import Image from "next/image";
import Link from "next/link";
import { bitesImages, bitesNav, bitesWhatsapp } from "./data";
import { bitesText } from "./fonts";

export function BitesHeader() {
  return (
    <header className={`${bitesText.className} absolute left-0 right-0 top-0 z-30 px-4 pt-4 text-[#F0F0F0] md:px-8`}>
      <div className="grid grid-cols-[auto_1fr_auto] items-center bg-[#030401]/72 backdrop-blur-xl">
        <Link
          href="#inicio"
          className="flex h-[68px] items-center px-4 transition hover:bg-white/[0.04] md:px-6"
        >
          <Image
            src={bitesImages.logo}
            alt="Bites"
            width={118}
            height={42}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden h-[68px] items-center justify-center gap-8 text-xs font-bold uppercase tracking-[0.14em] text-white/56 lg:flex">
          {bitesNav.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#FB5F00]">
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href={bitesWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-[68px] items-center gap-3 px-5 text-xs font-black uppercase tracking-[0.16em] text-[#FB5F00] transition hover:bg-[#FB5F00] hover:text-[#030401] md:flex lg:px-7"
        >
          Pedir agora
          <span aria-hidden="true">→</span>
        </Link>

        <Link
          href={bitesWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pedir agora"
          className="flex h-[68px] items-center gap-2 px-4 text-xs font-black uppercase tracking-[0.14em] text-[#FB5F00] transition hover:bg-[#FB5F00] hover:text-[#030401] md:hidden"
        >
          Pedir agora
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
