"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkle } from "@phosphor-icons/react";
import { sayegImages } from "./data";
import { sayegDisplay, sayegText } from "./fonts";
import Link from "next/link";

export function SayegHeroSection() {
  return (
    <section
      id="inicio"
      className={`${sayegText.className} relative bg-[#fafafa] px-6 pt-40 pb-20 md:px-12 lg:px-16 w-full overflow-hidden`}
    >
      {/* Texto de Fundo Editorial em Grande Escala (Apenas em telas XL) */}
      <div className="absolute right-[-2vw] bottom-[-2vw] pointer-events-none select-none hidden xl:block z-0">
        <span className={`${sayegDisplay.className} block text-[240px] font-bold leading-none tracking-tighter text-[#f0f0f0] 2xl:text-[280px]`}>
          BEATRIZ
        </span>
      </div>

      <div className="w-full relative z-10">
        
        {/* Bloco Superior: Título Editorial e Descrição */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 w-full">
          
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#806e68]">
              <Sparkle size={12} weight="fill" className="text-[#c5a89e]" />
              Lash & Brows Specialist
            </span>
            <h1 className={`${sayegDisplay.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-[#2c221e]`}>
              Beleza que respeita <br />
              <span className="font-serif italic text-[#8a7268] pl-4 md:pl-10">seus traços.</span>
            </h1>
          </div>
          
          <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
            <p className="mb-6 text-base leading-relaxed text-[#665853] md:text-lg">
              Sobrancelhas, lábios e visagismo para revelar harmonia com precisão, leveza e intenção.
            </p>
            <div>
              <Link href="#especialidades" className="inline-flex items-center gap-3 border-b border-[#2c221e] pb-1 text-[#2c221e] hover:text-[#8a7268] hover:border-[#8a7268] transition-colors duration-300">
                <span className="font-medium tracking-wide text-sm">Conhecer especialidades</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bloco Inferior: Grid de Imagens com alturas fixas controladas */}
        <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-start lg:mt-16 w-full">
          
          {/* Imagem Maior (Hero) */}
          <div className="relative md:col-span-7 lg:col-span-8 w-full">
            <div className="relative w-full rounded-2xl bg-[#fffaf5] border border-[#f0e6e1]/60 overflow-hidden h-85 sm:h-110 md:h-125 lg:h-140">
              <Image
                src={sayegImages.studio}
                alt="Retrato feminino com beleza natural e maquiagem suave"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px] tracking-widest text-[#806e68] uppercase">
              <span>[ 01 ] Editorial Natural</span>
              <span className="h-px w-6 bg-[#ebdcd5]" />
              <span>Visagismo Integrado</span>
            </div>
          </div>

          {/* Coluna da Direita (Imagem Menor + Nome) */}
          <div className="relative md:col-span-5 lg:col-span-4 md:mt-12 lg:mt-20 w-full">
            
            <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(70,42,38,0.04)] bg-[#fffaf5] h-70 sm:h-95 md:h-100 lg:h-112.5">
              <Image
                src={sayegImages.profile}
                alt="Retrato feminino em close destacando o olhar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="mt-6 text-left">
              <p className={`${sayegDisplay.className} text-2xl lg:text-3xl font-light tracking-wide text-[#2c221e]`}>
                Beatriz Sayeg
              </p>
              <p className="text-[11px] uppercase tracking-widest text-[#806e68] mt-1 font-medium">
                Lash, Brows & Visagismo
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
