"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import {
  dragonTattooImages,
  dragonTattooNav,
  dragonTattooWhatsapp,
} from "./data";

export function DragonTattooHeroSection() {
  return (
    <section
      id="inicio"
      className="overflow-hidden bg-[#F0F0F0] text-[#080706]"
    >
      <div className="2xl:grid 2xl:grid-cols-2">
        <div className="flex flex-col">
          <div className="px-5 md:px-10 lg:px-14 pb-10">
            <div className="flex items-center gap-5 justify-between w-full  py-10">
              <Link
                href="#inicio"
                aria-label="Ir para o inicio da Dragon Tattoo"
                className="inline-flex shrink-0 items-center"
              >
                <Image
                  src={dragonTattooImages.logoBlack}
                  alt="Dragon Tattoo"
                  width={744}
                  height={405}
                  className="h-auto w-32 md:w-38"
                />
              </Link>

              <nav className="hidden items-center gap-1 lg:flex">
                {dragonTattooNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-black"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <h1 className="mt-10 text-7xl font-black uppercase leading-[0.76] tracking-[-0.08em] md:text-[7rem] lg:text-[8rem] xl:text-[9rem]">
              Arte
              <br />
              Oriental
            </h1>

            <p className="mt-8  text-lg leading-8 text-[#080706]/58">
              Dragões, samurais, máscaras, flores, ondas e serpentes
              transformados em composições permanentes de alto impacto visual.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={dragonTattooWhatsapp}
                className="group inline-flex items-center justify-center gap-3 bg-[#080706] px-7 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#F4F0E8] transition hover:bg-[#9B7430]"
              >
                Iniciar projeto
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 border border-[#080706]/15 px-7 py-4 text-[11px] font-black uppercase tracking-[0.22em] transition hover:border-[#9B7430] hover:text-[#9B7430]"
              >
                Ver portfólio
                <ArrowDown size={16} weight="bold" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[720px]">
          <Image
            src={dragonTattooImages.heroImage}
            alt="Dragon Tattoo"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />

          <div className="absolute right-5 top-5 bg-[#F0F0F0] px-5 py-3 md:right-10 md:top-10">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9B7430]">
              Japanese Tattoo Studio
            </p>
          </div>

          <div className="absolute bottom-0 left-0 bg-[#F0F0F0] p-6 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9B7430]">
              Especialidade
            </p>

            <p className="mt-4 max-w-sm text-xl font-bold leading-tight">
              Grandes composições orientais com foco em anatomia e longevidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
