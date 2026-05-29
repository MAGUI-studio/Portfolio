"use client";

import { ArrowRight, Clock, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import {
  nachoLibreAddress,
  nachoLibreImages,
  nachoLibreWhatsapp,
} from "./data";
import {
  imageReveal,
  itemReveal,
  motion,
  sectionReveal,
  staggerReveal,
  viewport,
} from "./motion";

const visitInfo = [
  {
    icon: MapPin,
    label: "Endereco",
    value: nachoLibreAddress,
  },
  {
    icon: Clock,
    label: "Horario",
    value: "todos os dias, 12h as 23h",
  },
  {
    icon: WhatsappLogo,
    label: "Reserva",
    value: "mesa em grupo pelo whatsapp",
  },
];

export function NachoLibreVisitSection() {
  return (
    <motion.section
      id="visite"
      className="overflow-hidden bg-[#F0F0F0] px-5 py-20 text-[#111111] md:px-8 lg:px-10 lg:py-28"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={sectionReveal}
    >
      <div className="mx-auto max-w-[1540px]">
        <motion.div
          className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-end"
          variants={staggerReveal}
        >
          <motion.div variants={itemReveal}>
            <div className="inline-flex items-center gap-3 border-y border-[#E86A17] py-3 pr-5">
              <span className="h-2.5 w-2.5 bg-[#C62828]" />
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C62828]">
                visite a casa
              </p>
            </div>

            <h2 className="mt-8 max-w-5xl text-6xl font-black uppercase leading-[0.78] tracking-[0] text-[#111111] sm:text-7xl md:text-8xl lg:text-[9rem]">
              venha conhecer
            </h2>
          </motion.div>

          <motion.div variants={itemReveal} className="grid gap-7">
            <p className="max-w-2xl text-xl font-semibold leading-8 text-[#111111]/68 md:text-2xl md:leading-9">
              Entre pelo letreiro, escolha a mesa e deixe a noite seguir:
              comida quente, bar aceso e tempo suficiente para pedir mais uma.
            </p>

            <Link
              href={nachoLibreWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center justify-center gap-4 bg-[#E86A17] px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#E86A17]"
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
          className="mt-14 grid gap-4 lg:grid-cols-[0.62fr_0.38fr]"
          variants={staggerReveal}
        >
          <motion.figure
            variants={imageReveal}
            className="relative min-h-[520px] overflow-hidden bg-[#111111] md:min-h-[640px]"
          >
            <Image
              src={nachoLibreImages.fachada}
              alt="Fachada iluminada da Nacho Libre"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/78 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_16px,rgba(255,255,255,0.16)_16px_17px)] opacity-24" />
            <figcaption className="absolute bottom-7 left-6 right-6 md:left-8 md:right-8">
              <p className="max-w-3xl text-4xl font-black uppercase leading-[0.88] tracking-[0] text-[#F0F0F0] md:text-6xl">
                te esperamos de mesa pronta.
              </p>
            </figcaption>
          </motion.figure>

          <motion.div variants={staggerReveal} className="grid gap-4">
            <motion.div
              variants={itemReveal}
              className="bg-[#E86A17] px-6 py-8 text-[#111111] md:px-8 md:py-10"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.24em]">
                ponto de encontro
              </p>
              <p className="mt-5 text-5xl font-black uppercase leading-[0.86] tracking-[0] md:text-6xl">
                almoco longo, jantar cheio, noite sem pressa.
              </p>
            </motion.div>

            <motion.div
              variants={staggerReveal}
              className="grid gap-px bg-[#111111]/14"
            >
              {visitInfo.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={itemReveal}
                  className="grid gap-5 bg-[#FAFAFA] p-6 md:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C62828]">
                      {label}
                    </p>
                    <Icon size={24} weight="bold" className="text-[#E86A17]" />
                  </div>
                  <p className="text-3xl font-black uppercase leading-none tracking-[0] text-[#111111] md:text-4xl">
                    {value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemReveal}
          className="mt-4 grid gap-4 border-y border-[#111111]/14 py-7 md:grid-cols-[1fr_auto] md:items-center"
        >
          <p className="max-w-4xl text-3xl font-black uppercase leading-[0.9] tracking-[0] md:text-5xl">
            venha com fome, tempo e gente para dividir.
          </p>
          <Link
            href={nachoLibreWhatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-4 border border-[#111111] px-7 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#F0F0F0]"
          >
            chamar no whatsapp
            <ArrowRight size={18} weight="bold" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
