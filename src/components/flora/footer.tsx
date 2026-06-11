import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  InstagramLogo,
  PinterestLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

import { ScrollTopLink } from "@/components/scroll-top-link";

import { floraImages, floraNav, floraWhatsappHref } from "./data";
import { FloraSectionLink } from "./motion";

const socialLinks = [
  { href: floraWhatsappHref, label: "WhatsApp", icon: WhatsappLogo },
  { href: "https://www.instagram.com/", label: "Instagram", icon: InstagramLogo },
  { href: "https://www.pinterest.com/", label: "Pinterest", icon: PinterestLogo },
] as const;

export function FloraFooter() {
  return (
    <footer
      id="contato"
      className="overflow-hidden bg-[#20261A] px-5 pb-6 pt-18 text-[#F4F0E8] md:px-8 md:pt-22 lg:px-10"
    >
      <div className="grid gap-10 xl:grid-cols-[0.52fr_0.48fr] xl:items-end">
        <div>
          <Image
            src={floraImages.logoWhite}
            alt="Flora"
            width={170}
            height={50}
            className="h-auto w-28 md:w-32"
          />
          <h2 className="mt-8 text-5xl leading-[0.92] md:text-7xl">
            Mais verde, mais vida.
          </h2>
          <p className="mt-6 text-sm leading-7 text-white/68 md:text-base">
            Plantas ornamentais, espécies tropicais, vasos e composições
            naturais para ambientes contemporâneos.
          </p>
          <Link
            href={floraWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#F4F0E8] px-5 py-3 text-sm font-semibold text-[#24301C] transition duration-300 hover:bg-white"
          >
            Solicitar atendimento
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {floraNav.map((item) => (
              <FloraSectionLink
                key={item.href}
                href={item.href}
                className="text-lg text-white/72 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                {item.label}
              </FloraSectionLink>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2.5 text-sm font-semibold text-white/76 transition duration-300 hover:-translate-y-0.5 hover:bg-white/14 hover:text-white"
                >
                  <Icon
                    size={16}
                    className="transition duration-300 group-hover:scale-110"
                  />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 text-xs text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <p>{new Date().getFullYear()} Flora.</p>
        <div className="flex flex-wrap items-center gap-3">
          <span>
            Oferecido por{" "}
            <Link
              href="https://magui.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition duration-300 hover:text-white/70"
            >
              MAGUI.studio
            </Link>
          </span>
          <span className="text-white/20">|</span>
          <ScrollTopLink className="text-white transition duration-300 hover:text-white/70">
            Voltar ao topo
          </ScrollTopLink>
        </div>
      </div>
    </footer>
  );
}
