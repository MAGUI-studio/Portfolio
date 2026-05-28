"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

export function ShinobiHeroBannerSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="shinobi-awakening-title"
      className="group relative min-h-[88svh] overflow-hidden bg-[#050302] text-white"
    >
      <Image
        src="/images/shinobi/homem.png"
        alt="Latas SHINOBI em destaque"
        fill
        priority
        sizes="100vw"
        className="object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-0 group-hover:blur-[3px]"
      />

      <Image
        src="/images/shinobi/samurai.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-0 blur-[5px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:opacity-100 group-hover:blur-0"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,3,2,0.95)_0%,rgba(5,3,2,0.68)_36%,rgba(5,3,2,0.14)_72%,rgba(5,3,2,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(244,38,28,0.2),transparent_34%)]" />
      <div className="absolute inset-0 bg-[#F4261C]/0 mix-blend-screen transition duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#F4261C]/10" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050302] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-400 flex-col justify-end px-5 py-24 md:px-10 lg:py-28">
        <div className="max-w-7xl">
          <h1
            id="shinobi-awakening-title"
            className="mt-7 max-w-5xl text-6xl font-black uppercase leading-[0.9] md:text-8xl lg:text-[116px]"
          >
            Um gole.
            <span className="block text-[#F4261C]">O samurai acorda.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-xl md:leading-9">
            SHINOBI transforma o instante em ritual: energia intensa, presença
            escura e uma explosão de sabor para entrar no modo foco absoluto.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#sabores"
              className="group/link inline-flex items-center gap-3 rounded-full bg-[#F4261C] px-7 py-4 text-sm font-black uppercase text-white transition hover:scale-105"
            >
              Ver sabores
              <ArrowRight
                className="transition group-hover/link:translate-x-1"
                size={18}
              />
            </a>

            <a
              href="#pedido"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-black uppercase text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
            >
              Pedir agora
            </a>
          </div>
        </div>

        <div className="mt-16 grid w-fit grid-cols-3 py-5">
          {[
            ["06", "sabores"],
            ["100%", "modo shinobi"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-r border-white/15 px-4 first:pl-0 last:border-r-0 md:px-8"
            >
              <p className="text-3xl font-black uppercase text-white md:text-5xl">
                {value}
              </p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/56">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
