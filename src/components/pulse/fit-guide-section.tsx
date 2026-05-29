"use client";

import { ArrowRight, Ruler, Sparkle, TShirt } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { pulseImages } from "./data";
import {
  motion,
  pulseImageReveal,
  pulseItemReveal,
  pulseSectionReveal,
  pulseStagger,
  pulseViewport,
} from "./motion";

const fitNotes = [
  {
    icon: Ruler,
    title: "caimento preciso",
    text: "Escolha seu tamanho usual para ajuste firme ou um acima para conforto leve.",
  },
  {
    icon: TShirt,
    title: "uso versatil",
    text: "Sets pensados para treino, deslocamento e rotina sem troca de visual.",
  },
  {
    icon: Sparkle,
    title: "acabamento premium",
    text: "Linhas limpas, toque macio e estrutura visual sem excesso.",
  },
];

export function PulseFitGuideSection() {
  return (
    <motion.section
      id="guia"
      className="bg-black px-5 py-16 text-white md:px-8 lg:px-10 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={pulseViewport}
      variants={pulseSectionReveal}
    >
      <div className="mx-auto grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
        <motion.div
          variants={pulseStagger}
          className="grid content-between p-6 md:p-8 lg:p-10"
        >
          <motion.div variants={pulseItemReveal}>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#F97316]">
              guia de compra
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] md:text-6xl">
              escolha pelo ajuste. use pela rotina.
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/58">
              A Pulse foi desenhada para vestir com firmeza, acompanhar
              movimento e manter presença depois do treino.
            </p>
          </motion.div>

          <motion.div variants={pulseStagger} className="mt-12 grid gap-px">
            {fitNotes.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={pulseItemReveal}
                className="grid gap-4 py-5 md:grid-cols-[auto_1fr]"
              >
                <Icon size={25} weight="duotone" className="text-[#F97316]" />
                <div>
                  <h3 className="text-2xl font-extrabold uppercase leading-none">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/56">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={pulseItemReveal} className="mt-10">
            <Link
              href="#colecao"
              className="inline-flex items-center gap-3 bg-[#F97316] px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0B0B0B] transition hover:bg-white"
            >
              voltar para vitrine
              <ArrowRight size={15} weight="bold" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={pulseStagger} className="grid gap-4 md:grid-cols-2">
          <motion.figure
            variants={pulseImageReveal}
            className="relative min-h-[520px] overflow-hidden md:min-h-[680px]"
          >
            <Image
              src={pulseImages.casal03}
              alt="Look Pulse em rotina ativa"
              fill
              sizes="(min-width: 1024px) 29vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0B0B]/82 to-transparent p-6 pt-24">
              <p className="text-3xl font-extrabold uppercase leading-none">
                treino + rotina
              </p>
            </div>
          </motion.figure>

          <div className="grid gap-4">
            <motion.figure
              variants={pulseImageReveal}
              className="relative min-h-[250px] overflow-hidden"
            >
              <Image
                src={pulseImages.feminino03}
                alt="Set feminino Pulse"
                fill
                sizes="(min-width: 1024px) 29vw, 100vw"
                className="object-cover"
              />
            </motion.figure>
            <motion.figure
              variants={pulseImageReveal}
              className="relative min-h-[250px] overflow-hidden"
            >
              <Image
                src={pulseImages.masculino03}
                alt="Set masculino Pulse"
                fill
                sizes="(min-width: 1024px) 29vw, 100vw"
                className="object-cover"
              />
            </motion.figure>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
