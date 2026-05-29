"use client";

import { ArrowRight, CreditCard, HandTap, Receipt, Timer } from "@phosphor-icons/react";
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

const flow = [
  {
    icon: HandTap,
    title: "Pedido visual",
    text: "Categorias curtas, fotos grandes e escolha sem ficar decifrando cardapio.",
  },
  {
    icon: CreditCard,
    title: "Pagamento direto",
    text: "Cartao e aproximacao no proprio totem, sem interromper o movimento da casa.",
  },
  {
    icon: Receipt,
    title: "Cozinha acionada",
    text: "O pedido entra na fila certa e a retirada acontece sem perder mesa ou conversa.",
  },
];

export function NachoLibreOrderingSection() {
  return (
    <motion.section
      id="pedido"
      className="overflow-hidden bg-[#111111] py-24 text-[#F0F0F0] lg:py-32"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={sectionReveal}
    >
      <div className="mx-auto max-w-[1540px] px-5 md:px-8 lg:px-10">
        <motion.div
          className="grid gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-end"
          variants={staggerReveal}
        >
          <motion.div variants={itemReveal}>
            <p className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#E86A17]">
              <Timer size={16} weight="fill" />
              pedido sem atrito
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              Quando a casa enche, o pedido nao trava a noite.
            </h2>
          </motion.div>

          <motion.p variants={itemReveal} className="max-w-2xl text-lg leading-8 text-[#F0F0F0]/64">
            O totem nao entra como tecnologia fria. Ele organiza a fome: a pessoa
            escolhe olhando, paga ali e volta para a mesa enquanto a cozinha
            segue no ritmo.
          </motion.p>
        </motion.div>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1540px] gap-4 px-5 md:px-8 lg:grid-cols-[0.35fr_0.65fr] lg:px-10">
        <motion.div variants={staggerReveal} className="grid content-between gap-8 border-y border-[#F0F0F0]/12 py-8">
          <motion.div variants={itemReveal}>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C62828]">
              autoatendimento
            </p>
            <p className="mt-5 text-4xl font-black uppercase leading-[0.92] tracking-[-0.06em] md:text-6xl">
              menos fila, mais mesa, mais cozinha rodando.
            </p>
          </motion.div>

          <motion.div variants={staggerReveal} className="grid gap-0">
            {flow.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={itemReveal}
                className="grid gap-4 border-t border-[#F0F0F0]/12 py-6 md:grid-cols-[auto_1fr]"
              >
                <Icon size={24} weight="duotone" className="text-[#E86A17]" />
                <div>
                  <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#F0F0F0]/58">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemReveal} className="grid gap-3">
            <Link
              href={nachoLibreWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#E86A17] px-6 py-5 text-sm font-black uppercase tracking-[0.18em] text-[#111111] transition hover:-translate-y-0.5 hover:bg-[#FF6A00]"
            >
              pedir pelo whatsapp
              <ArrowRight size={18} weight="bold" className="transition group-hover:translate-x-1" />
            </Link>
            <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#F0F0F0]/38">
              ou escolha direto no totem da casa
            </p>
          </motion.div>
        </motion.div>

        <motion.figure variants={imageReveal} className="relative min-h-[760px] overflow-hidden bg-[#161616]">
          <Image
            src={nachoLibreImages.totem}
            alt="Totem de autoatendimento da Nacho Libre"
            fill
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.34)_0%,transparent_42%),linear-gradient(0deg,rgba(17,17,17,0.76)_0%,transparent_38%)]" />
          <figcaption className="absolute bottom-6 left-6 right-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#E86A17]">
                interface simples
              </p>
              <p className="mt-3 max-w-2xl text-4xl font-black uppercase leading-none tracking-[-0.05em] md:text-6xl">
                o menu aparece antes da duvida.
              </p>
            </div>
            <div className="border border-[#F0F0F0]/16 bg-[#111111]/72 px-5 py-4 text-right backdrop-blur">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#5D8C45]">
                casa cheia
              </p>
              <p className="mt-2 text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                fluxo continuo
              </p>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </motion.section>
  );
}
