"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { nachoLibreImages, nachoLibreWhatsapp } from "./data";
import {
  imageReveal,
  itemReveal,
  motion,
  sectionReveal,
  staggerReveal,
  viewport,
} from "./motion";

const rhythm = [
  ["chegar", "drink gelado, luz baixa, mesa chamando"],
  ["dividir", "nachos no centro, tacos passando, molhos abertos"],
  ["ficar", "conversa longa, churros no final, mais uma rodada"],
];

export function NachoLibreExperienceSection() {
  return (
    <motion.section
      id="rodizio"
      className="relative overflow-hidden bg-[#111111] px-5 py-20 text-[#F0F0F0] md:px-8 lg:px-10 lg:py-28"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={sectionReveal}
    >
      <div className="absolute inset-0">
        <Image
          src={nachoLibreImages.rodizio}
          alt="Mesa de rodizio mexicano da Nacho Libre"
          fill
          sizes="100vw"
          className="object-cover opacity-44"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#111111]/96 via-[#111111]/82 to-[#111111]/42" />
        <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-transparent to-[#111111]/70" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_16px,rgba(255,255,255,0.16)_16px_17px)] opacity-30" />
      </div>

      <div className="relative mx-auto max-w-[1540px]">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
          variants={staggerReveal}
        >
          <motion.div variants={itemReveal}>
            <div className="inline-flex items-center gap-3 border-y border-[#E86A17] py-3 pr-5">
              <span className="h-2.5 w-2.5 bg-[#C62828]" />
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E86A17]">
                experiencia da casa
              </p>
            </div>

            <h2 className="mt-8 max-w-5xl text-6xl font-black uppercase leading-[0.78] tracking-[0] text-[#F0F0F0] sm:text-7xl md:text-8xl lg:text-[9rem]">
              A mesa vira o centro
            </h2>
          </motion.div>

          <motion.div variants={itemReveal} className="grid gap-7 lg:pb-4">
            <p className="max-w-2xl text-xl font-semibold leading-8 text-[#F0F0F0]/78 md:text-2xl md:leading-9">
              Na Nacho Libre, o pedido nao fica parado: comida no centro,
              copos rodando, molho aberto e conversa subindo junto com a noite.
            </p>

            <Link
              href={nachoLibreWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center justify-center gap-4 bg-[#E86A17] px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#111111] transition-colors hover:bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#E86A17]"
            >
              reservar mesa
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 border-y border-[#F0F0F0]/14 py-7 md:grid-cols-3"
          variants={staggerReveal}
        >
          {rhythm.map(([title, text], index) => (
            <motion.div key={title} variants={itemReveal} className="border-l border-[#E86A17] pl-5">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#E86A17]">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-[0] text-[#F0F0F0] md:text-5xl">
                {title}
              </h3>
              <p className="mt-3 max-w-sm text-sm font-semibold uppercase leading-6 tracking-[0.08em] text-[#F0F0F0]/62">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 grid gap-4 lg:grid-cols-[0.62fr_0.38fr]"
          variants={staggerReveal}
        >
          <motion.figure
            variants={imageReveal}
            className="relative min-h-[420px] overflow-hidden bg-[#111111] md:min-h-[520px]"
          >
            <Image
              src={nachoLibreImages.casal}
              alt="Mesa compartilhada na Nacho Libre"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#111111]/82 via-[#111111]/8 to-transparent" />
            <div className="absolute bottom-0 left-0 h-3 w-full bg-[#E86A17]" />
            <figcaption className="absolute bottom-8 left-6 right-6 md:left-8 md:right-8">
              <p className="max-w-3xl text-4xl font-black uppercase leading-[0.88] tracking-[0] text-[#F0F0F0] md:text-6xl">
                luz baixa, mesa cheia, energia alta.
              </p>
            </figcaption>
          </motion.figure>

          <motion.div variants={staggerReveal} className="grid gap-4">
            <motion.figure
              variants={imageReveal}
              className="relative min-h-[250px] overflow-hidden bg-[#111111] md:min-h-[310px]"
            >
              <Image
                src={nachoLibreImages.drinks}
                alt="Drinks da Nacho Libre"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#111111]/76 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-3xl font-black uppercase leading-none tracking-[0] text-[#F0F0F0] md:text-4xl">
                bar aceso ate o ultimo gole.
              </p>
            </motion.figure>

            <motion.div
              variants={itemReveal}
              className="bg-[#E86A17] px-6 py-7 text-[#111111] md:px-8 md:py-9"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.24em]">
                ritual livre
              </p>
              <p className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[0] md:text-5xl">
                sem prato comportado. o pedido nasce para circular.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
