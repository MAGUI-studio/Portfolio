"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { ScrollTopLink } from "@/components/scroll-top-link";

import {
  dragonTattooImages,
  dragonTattooNav,
  dragonTattooWhatsapp,
} from "./data";

export function DragonTattooFooter() {
  return (
    <footer
      id="contato"
      className="bg-[#F0F0F0] px-5 pt-24 pb-10 text-[#080706] md:px-10 md:pt-32 lg:px-14"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-14 border-b border-[#080706]/10 pb-20 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <Image
              src={dragonTattooImages.logoWhite}
              alt="Dragon Tattoo"
              width={220}
              height={110}
              className="w-40 invert md:w-56"
            />

            <h2 className="mt-12 max-w-4xl text-6xl font-black uppercase leading-[0.78] tracking-[-0.08em] md:text-8xl lg:text-[7rem]">
              Seu projeto
              <br />
              começa
              <br />
              em conversa.
            </h2>
          </div>

          <div className="max-w-md lg:ml-auto">
            <p className="text-lg leading-8 text-[#080706]/60">
              Traga uma referência, uma ideia ou apenas o conceito. A partir
              disso, construímos uma composição oriental autoral para a sua
              anatomia.
            </p>

            <Link
              href={dragonTattooWhatsapp}
              target="_blank"
              className="mt-9 inline-flex items-center gap-3 bg-[#080706] px-7 py-4 text-[10px] font-black uppercase tracking-[0.28em] text-[#F4F0E8] transition hover:bg-[#9B7430]"
            >
              Iniciar atendimento
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 border-b border-[#080706]/10 py-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            {dragonTattooNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.28em] text-[#080706]/58 transition hover:text-[#9B7430]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-[10px] font-black uppercase tracking-[0.24em] text-[#080706]/42 md:flex-row md:justify-end md:gap-10">
            <p>Atendimento sob consulta</p>
            <p>São José dos Campos, SP</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-8 text-[10px] font-black uppercase tracking-[0.22em] text-[#080706]/36 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Dragon Tattoo. Todos os direitos
            reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                className="text-[#080706] transition hover:text-[#9B7430]"
              >
                MAGUI.STUDIO
              </Link>
            </span>

            <span className="hidden h-3 w-px bg-[#080706]/18 md:block" />

            <ScrollTopLink className="cursor-pointer text-[#080706] transition hover:text-[#9B7430]">
              Voltar ao topo
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}