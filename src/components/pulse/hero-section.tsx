"use client";

import { ArrowRight, Bag } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { pulseImages, pulseWhatsapp } from "./data";
import { motion, pulseSectionReveal } from "./motion";

const banners = [
  {
    image: pulseImages.hero,
    eyebrow: "nova colecao pulse",
    title: "Performance com caimento premium.",
    text: "Roupas fitness para homens e mulheres que treinam com disciplina, conforto real e presenca.",
    cta: "comprar novidades",
    href: "#colecao",
  },
  {
    image: pulseImages.casal01,
    eyebrow: "sets para treino",
    title: "Treino forte. Visual limpo.",
    text: "Conjuntos com sustentacao, elasticidade e design refinado para acompanhar repeticao intensa.",
    cta: "ver feminino",
    href: "#colecao",
  },
  {
    image: pulseImages.casal02,
    eyebrow: "rotina ativa",
    title: "Do treino para a rua.",
    text: "Pecas que mantem caimento e presenca depois da ultima serie.",
    cta: "explorar looks",
    href: "#lookbook",
  },
  {
    image: pulseImages.casal03,
    eyebrow: "movimento diario",
    title: "Tecnologia sem excesso.",
    text: "Respirabilidade, toque seco e estrutura para uma rotina que nao desacelera.",
    cta: "ver tecnologia",
    href: "#tecnologia",
  },
  {
    image: pulseImages.casal04,
    eyebrow: "presenca pulse",
    title: "O essencial elevado.",
    text: "Performance, estetica e disciplina em equilíbrio para vestir dentro e fora do treino.",
    cta: "falar com a pulse",
    href: pulseWhatsapp,
  },
];

export function PulseHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = banners[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="inicio"
      className="overflow-hidden bg-[#F5F5F3] text-[#1A1A1A]"
      initial="hidden"
      animate="show"
      variants={pulseSectionReveal}
    >
      <div className="border-b border-[#1A1A1A]/10 bg-[#F97316] px-5 py-3 text-center text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#0B0B0B] md:px-8">
        Frete gratis acima de R$ 499 · primeira colecao Pulse disponivel
      </div>

      <div className="relative min-h-180 overflow-hidden md:min-h-250">
        {banners.map((banner, index) => (
          <div
            key={banner.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={banner.image}
              alt={`${banner.title} Pulse`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/60" />

        <div className="relative mx-auto flex min-h-[640px] max-w-[1540px] items-end px-5 py-8 md:min-h-[760px] md:px-8 lg:px-10 lg:py-12">
          <div key={active.title} className="max-w-3xl text-white transition">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#F97316]">
              {active.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl font-extrabold uppercase leading-[0.92] md:text-7xl lg:text-8xl">
              {active.title}
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/72 md:text-lg">
              {active.text}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={active.href}
                target={active.href.startsWith("http") ? "_blank" : undefined}
                rel={active.href.startsWith("http") ? "noreferrer" : undefined}
                className="group inline-flex items-center justify-center gap-3 bg-[#F97316] px-7 py-5 text-sm font-extrabold uppercase tracking-[0.18em] text-[#0B0B0B] transition hover:bg-white"
              >
                {active.cta}
                <Bag size={17} weight="bold" />
              </Link>
              <Link
                href="#colecao"
                className={`inline-flex items-center justify-center gap-3 border px-7 py-5 text-sm font-extrabold uppercase tracking-[0.18em] transition ${"border-white/24 text-white hover:border-[#F97316] hover:text-[#F97316]"}`}
              >
                ver colecao
                <ArrowRight size={17} weight="bold" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
          {banners.map((banner, index) => (
            <button
              key={banner.image}
              type="button"
              aria-label={`Ver banner ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-9 bg-[#F97316]"
                  : "w-2.5 bg-white/70 ring-1 ring-[#1A1A1A]/18 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
