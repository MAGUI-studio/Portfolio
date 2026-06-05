import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { ScrollTopLink } from "@/components/scroll-top-link";

import {
  dragonTattooBudgetWhatsapp,
  dragonTattooImages,
  dragonTattooNav,
  dragonTattooScheduleWhatsapp,
} from "./data";

export function DragonTattooFooter() {
  return (
    <footer
      id="contato"
      className="bg-[#090706] px-5 pt-24 pb-10 text-[#F4F0E8] md:px-10 md:pt-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1720px]">
        <div className="grid gap-12 border-y border-[#F4F0E8]/12 py-14 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <Image
              src={dragonTattooImages.logoWhite}
              alt="Dragon Tattoo"
              width={744}
              height={405}
              className="h-auto w-44 md:w-60"
            />

            <h2 className="mt-12 max-w-5xl text-5xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl">
              Seu projeto começa em conversa.
            </h2>
          </div>

          <div className="max-w-md lg:ml-auto">
            <p className="text-lg leading-8 text-[#F4F0E8]/62">
              Traga uma referência, uma ideia ou apenas o conceito. A partir
              disso, construímos uma composição oriental autoral para a sua
              anatomia.
            </p>

            <div className="mt-9 grid gap-3">
              <Link
                href={dragonTattooBudgetWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#F4F0E8] px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#080706] transition hover:bg-white"
              >
                Solicitar orçamento
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href={dragonTattooScheduleWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-[#F4F0E8]/18 px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] transition hover:border-[#F4F0E8] hover:text-white"
              >
                Marcar horário
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-[#F4F0E8]/10 py-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {dragonTattooNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.24em] text-[#F4F0E8]/52 transition hover:text-[#D6A858]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-[#F4F0E8]/42 md:flex-row md:justify-end md:gap-10">
            <p>Atendimento sob consulta</p>
            <p>São José dos Campos, SP</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-8 text-[10px] font-black uppercase tracking-[0.2em] text-[#F4F0E8]/38 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Dragon Tattoo. Todos os direitos
            reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noreferrer"
                className="text-[#F4F0E8] transition hover:text-[#D6A858]"
              >
                MAGUI.studio
              </Link>
            </span>

            <span className="hidden h-3 w-px bg-[#F4F0E8]/18 md:block" />

            <ScrollTopLink className="cursor-pointer text-[#F4F0E8] transition hover:text-[#D6A858]">
              Voltar ao topo
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
