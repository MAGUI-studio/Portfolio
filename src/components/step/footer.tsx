import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  InstagramLogo,
  TiktokLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

import { ScrollTopLink } from "@/components/scroll-top-link";

import { stepImages, stepNav, stepWhatsappHref } from "./data";

const socialLinks = [
  {
    href: stepWhatsappHref,
    label: "WhatsApp",
    icon: WhatsappLogo,
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: InstagramLogo,
  },
  {
    href: "https://www.tiktok.com/",
    label: "TikTok",
    icon: TiktokLogo,
  },
] as const;

export function StepFooter() {
  return (
    <footer className="overflow-hidden bg-black px-5 pb-6 pt-16 text-white md:px-8 md:pt-20 lg:px-10">
      <div className="mx-auto w-full max-w-440">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] xl:items-end">
          <div className="max-w-xl">
            <Image
              src={stepImages.logoWhite}
              alt="STEP"
              width={168}
              height={48}
              className="h-auto w-28 md:w-32"
            />

            <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
              Estúdio especializado em sneaker care com foco em manutenção,
              restauração visual e conservação de pares com valor real.
            </p>

            <Link
              href={stepWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-[#EDEDED]"
            >
              Solicitar avaliação
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38">
                Navegação
              </p>
              <div className="mt-4 grid gap-2">
                {stepNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm text-white/76 transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38">
                Redes sociais
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="group inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2.5 text-sm font-semibold text-white/78 transition duration-300 hover:-translate-y-0.5 hover:bg-white/12 hover:text-white"
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
        </div>

        <div className="mt-12 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02),transparent)]" />

        <div className="mt-5 flex flex-col gap-3 text-xs text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <p>{new Date().getFullYear()} STEP.</p>

          <div className="flex flex-wrap items-center gap-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition duration-300 hover:text-white/72"
              >
                MAGUI.studio
              </Link>
            </span>
            <span className="text-white/20">|</span>
            <ScrollTopLink className="text-white transition duration-300 hover:text-white/72">
              Voltar ao topo
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
