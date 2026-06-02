"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { nachoLibreImages, nachoLibreWhatsapp } from "./data";

export function NachoLibreHeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#111111] px-5 pb-16 pt-32 text-[#F0F0F0] sm:px-6 md:px-8 md:pb-20 lg:px-12 lg:pb-24 lg:pt-40"
    >
      <div className="absolute inset-0">
        <Image
          src={nachoLibreImages.hero}
          alt="Tacos da Nacho Libre"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#111111]/92 via-transparent to-[#111111]/72" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_16px,rgba(255,255,255,0.18)_16px_17px)] opacity-20" />
      </div>

      <div className="relative mx-auto flex max-w-[1540px] flex-col">
        <div className="max-w-[980px] pt-8 lg:pt-16">
          <div className="inline-flex items-center gap-3 border-y border-[#E86A17] py-3 pr-5">
            <span className="h-2.5 w-2.5 bg-[#C62828]" />
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E86A17]">
              comida de verdade para gente de verdade
            </p>
          </div>

          <h1 className="mt-8 max-w-5xl text-[5rem] font-black uppercase leading-[0.78] tracking-[0] text-[#F0F0F0] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem]">
            Nacho
            <span className="block text-[#E86A17]">Libre</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl font-semibold leading-8 text-[#F0F0F0]/82 md:text-2xl md:leading-9">
            Restaurante mexicano com pratos generosos, rodizio para dividir e
            um bar aceso para transformar jantar em programa.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={nachoLibreWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-4 bg-[#E86A17] px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#111111] transition-colors hover:bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#E86A17]"
            >
              Reservar mesa
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#menu"
              className="inline-flex items-center justify-center border border-[#F0F0F0]/22 px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#F0F0F0] transition-colors hover:border-[#E86A17] hover:text-[#E86A17] focus:outline-none focus:ring-2 focus:ring-[#F0F0F0]/30"
            >
              Ver menu
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-[#F0F0F0]/14 pt-7 md:grid-cols-3 lg:max-w-4xl">
          {[
            ["Rodizio", "tacos, nachos e quesadillas na mesa"],
            ["Bar aceso", "margaritas, frutas e gelo no ponto"],
            ["Mesa cheia", "pratos grandes para dividir sem pressa"],
          ].map(([title, text]) => (
            <div key={title} className="border-l border-[#E86A17] pl-5">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#E86A17]">
                {title}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase leading-5 tracking-[0.08em] text-[#F0F0F0]/62">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
