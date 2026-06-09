import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { ScrollTopLink } from "@/components/scroll-top-link";

import { havenImages, havenNav, havenWhatsappHref } from "./data";

export function HavenFooter() {
  return (
    <footer className="bg-[#14283D] px-5 pb-5 pt-10 text-white md:px-8 md:pt-12 lg:px-10">
      <div className="grid gap-8 pt-8 md:grid-cols-2 xl:grid-cols-[0.42fr_0.18fr_0.18fr_0.22fr]">
        <div className="grid gap-4">
          <Image
            src={havenImages.logoWhite}
            alt="Haven"
            width={138}
            height={40}
            className="h-auto w-24 md:w-26"
          />
          <p className="max-w-sm text-sm leading-6 text-white/78">
            Um espaço de cuidado pessoal acolhedor, previsível e respeitoso para
            pessoas autistas e neurodivergentes.
          </p>
          <Link
            href={havenWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1F446A]"
          >
            Falar com a Haven
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">
            Navegação
          </p>
          <div className="mt-4 grid gap-2 text-sm text-white/82">
            {havenNav.map((item) => (
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">
            Atendimento
          </p>
          <div className="mt-4 grid gap-2 text-sm leading-6 text-white/78">
            <p>Crianças</p>
            <p>Adolescentes</p>
            <p>Adultos</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">
            Proposta
          </p>
          <div className="mt-4 grid gap-2 text-sm leading-6 text-white/78">
            <p>Menos sobrecarga</p>
            <p>Mais previsibilidade</p>
            <p>Cuidado no seu ritmo</p>
          </div>
        </div>
      </div>

      <div className="mt-8  pt-4 text-xs text-white/60">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>{new Date().getFullYear()} Haven.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-[#C9D8EA]"
              >
                MAGUI.studio
              </Link>
            </span>
            <span className="text-white/24">|</span>
            <ScrollTopLink className="text-white transition-colors hover:text-[#C9D8EA]">
              Voltar ao topo
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
