import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { ScrollTopLink } from "@/components/scroll-top-link";

import { stepNav, stepWhatsappHref, stepImages } from "./data";

export function StepFooter() {
  return (
    <footer className="bg-[#0A0A0A] px-5 pb-5 pt-10 text-white md:px-8 md:pt-12 lg:px-10">
      <div className="w-full">
        <div className="grid gap-8 rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 md:grid-cols-2 xl:grid-cols-[0.42fr_0.2fr_0.18fr_0.2fr]">
          <div>
            <Image
              src={stepImages.logoWhite}
              alt="STEP"
              width={156}
              height={44}
              className="h-auto w-26 md:w-30"
            />
            <p className="mt-6 text-sm leading-7 text-white/68">
              Estúdio especializado em sneaker care com foco em manutenção,
              restauração visual e conservação de pares com valor real.
            </p>
            <Link
              href={stepWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              Solicitar avaliação
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/48">
              Navegação
            </p>
            <div className="mt-4 grid gap-2 text-sm text-white/78">
              {stepNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/48">
              Linguagem
            </p>
            <div className="mt-4 grid gap-2 text-sm leading-6 text-white/68">
              <p>Técnica</p>
              <p>Minimalista</p>
              <p>Premium</p>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/48">
              Foco
            </p>
            <div className="mt-4 grid gap-2 text-sm leading-6 text-white/68">
              <p>Preservação</p>
              <p>Processo</p>
              <p>Resultado</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-white/56 sm:flex-row sm:items-center sm:justify-between">
          <p>{new Date().getFullYear()} STEP.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-[#F8F8F8]"
              >
                MAGUI.studio
              </Link>
            </span>
            <span className="text-white/24">|</span>
            <ScrollTopLink className="text-white transition-colors hover:text-[#F8F8F8]">
              Voltar ao topo
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
