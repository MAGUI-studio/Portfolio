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
      className="relative overflow-hidden bg-[#080706] text-[#F4F0E8]"
    >
      <div className="absolute inset-0">
        <Image
          src={dragonTattooImages.heroImage}
          alt="Dragon Tattoo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#080706] via-transparent to-[#080706]/10" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-[#080706] to-transparent" />
      </div>

      <div className="relative z-10 px-5 md:px-10 lg:px-14">
        <header className="flex items-center justify-between py-6">
          <Link href="#inicio" aria-label="Ir para o início da Dragon Tattoo">
            <Image
              src={dragonTattooImages.logoBlack}
              alt="Dragon Tattoo"
              width={744}
              height={405}
              className="h-auto w-32 brightness-0 invert md:w-40"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {dragonTattooNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#F4F0E8]/64 transition hover:text-[#F4F0E8]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={dragonTattooWhatsapp}
            className="hidden items-center gap-3 border border-[#F4F0E8]/18 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] transition hover:border-[#9B7430] hover:text-[#9B7430] md:inline-flex"
          >
            Orçamento
            <ArrowUpRight size={14} weight="bold" />
          </Link>
        </header>

        <div className="grid min-h-[720px] items-end pb-10 pt-20 md:min-h-[760px] md:pb-14 lg:min-h-[820px] lg:grid-cols-[0.72fr_0.28fr] lg:gap-10 lg:pb-16">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-[#9B7430]" />
              <span className="text-[10px] font-black uppercase tracking-[0.34em] text-[#9B7430]">
                Japanese Tattoo Studio
              </span>
            </div>

            <h1 className="text-[4.2rem] font-black uppercase leading-[0.82] tracking-[-0.075em] md:text-[7.4rem] ">
              O oriental
              <br />
              levado a sério.
            </h1>

            <div className="mt-8 max-w-3xl border-l border-[#9B7430] pl-5 md:mt-10 md:pl-7">
              <p className="text-lg leading-8 text-[#F4F0E8]/72 md:text-xl md:leading-9">
                Tatuagens orientais autorais com dragões, samurais, máscaras de
                oni, serpentes, flores e ondas — criadas para acompanhar o corpo
                com presença, equilíbrio e permanência.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={dragonTattooWhatsapp}
                className="group inline-flex items-center justify-center gap-3 bg-[#F4F0E8] px-7 py-4 text-[11px] font-black uppercase tracking-[0.22em] text-[#080706] transition hover:bg-[#9B7430] hover:text-[#F4F0E8]"
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
                className="inline-flex items-center justify-center gap-3 border border-[#F4F0E8]/20 px-7 py-4 text-[11px] font-black uppercase tracking-[0.22em] transition hover:border-[#9B7430] hover:text-[#9B7430]"
              >
                Ver portfólio
                <ArrowDown size={16} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="mt-12 hidden self-end lg:block">
            <div className="border-t border-[#F4F0E8]/14">
              {[
                ["01", "Oriental autoral"],
                ["02", "Grandes fechamentos"],
                ["03", "Desenho anatômico"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="grid grid-cols-[56px_1fr] border-b border-[#F4F0E8]/14 py-5"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9B7430]">
                    {number}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.1em] text-[#F4F0E8]/78">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid border-y border-[#F4F0E8]/12 sm:grid-cols-3 lg:hidden">
            {[
              ["01", "Oriental autoral"],
              ["02", "Grandes fechamentos"],
              ["03", "Desenho anatômico"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="border-[#F4F0E8]/12 py-5 sm:border-r sm:px-5 last:sm:border-r-0"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#9B7430]">
                  {number}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-[#F4F0E8]/82">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
