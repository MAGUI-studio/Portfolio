"use client";

import Image from "next/image";
import { images, nav } from "./data";
import { logoFont, maguiFont } from "./fonts";
import {
  imageReveal,
  itemReveal,
  motion,
  sectionReveal,
  staggerReveal,
  viewport,
} from "./motion";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";

export function LaCremeFooter() {
  return (
    <motion.footer
      className="relative w-full overflow-hidden bg-[#fffdfa] text-[#2b1714]"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={sectionReveal}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[#2b1714]/10" />

      <motion.div
        className="mx-auto max-w-[1540px] px-5 py-24 md:px-8 lg:px-10 lg:py-32"
        variants={staggerReveal}
      >
        <motion.div
          className="flex flex-col border-b border-[#2b1714]/10 pb-12 lg:flex-row lg:items-end lg:justify-between"
          variants={itemReveal}
        >
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9d2d40]">
              Estética & Cuidado
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#2b1714] sm:text-5xl md:text-6xl lg:text-7xl">
              A excelência impressa <br className="hidden sm:block" /> em cada
              detalhe.
            </h2>
          </div>

          <div className="mt-6 max-w-md lg:mt-0">
            <p className="text-base leading-relaxed text-[#2b1714]/80">
              Nossas criações são pensadas para ir além do sabor. Desenvolvemos
              embalagens minimalistas e sofisticadas que transformam cada doce
              em um presente memorável e autêntico.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {[
            images.embalagem_bolo,
            images.embalagem_doce,
            images.embalagem_docinhos,
            images.embalagem_sobremesa,
          ].map((img, index) => (
            <motion.div
              key={img}
              variants={imageReveal}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -1 : 1 }}
              className="relative aspect-[3/4] w-full overflow-hidden bg-[#2b1714]/5 transition-all duration-500 hover:opacity-90"
            >
              <Image
                src={img}
                alt="Apresentação de embalagens e confeitaria autoral"
                fill
                quality={72}
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-103"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-[#2b1714]/10 bg-[#2b1714] text-white">
        <motion.div
          className="mx-auto grid max-w-[1540px] gap-12 px-5 py-16 md:px-8 lg:grid-cols-[0.40fr_0.22fr_0.19fr_0.19fr] lg:px-10 lg:py-20"
          variants={staggerReveal}
        >
          <motion.div
            className="flex flex-col justify-between"
            variants={itemReveal}
          >
            <div>
              <span
                className={`${logoFont.className} text-4xl font-normal leading-none tracking-tight text-[#ffd8df]`}
              >
                La Crème
              </span>
              <p className="mt-4 max-w-xs text-xs leading-relaxed">
                Ateliê de confeitaria artesanal especializado em bolos festivos,
                doces finos e sobremesas autorais para celebrações.
              </p>
            </div>
            <p className="mt-8 hidden text-[10px]  lg:block">
              © {new Date().getFullYear()} La Crème. Todos os direitos
              reservados.
            </p>
          </motion.div>

          <motion.div variants={itemReveal}>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffd8df]">
              Ateliê & Retiradas
            </p>
            <div className="mt-6 space-y-4 text-xs font-medium">
              <div>
                <span className="block  text-[10px] font-bold uppercase tracking-wider text-[#ffd8df]">
                  Endereço
                </span>
                <p className="mt-1">Rua das Flores, 128 — Ateliê Central</p>
              </div>
              <div>
                <span className="block  text-[10px] font-bold uppercase tracking-wider text-[#ffd8df]">
                  Horário de Retirada
                </span>
                <p className="mt-1">Terça a Sábado, das 10h às 18h</p>
              </div>
              <div>
                <span className="block  text-[10px] font-bold uppercase tracking-wider text-[#ffd8df]">
                  Encomendas
                </span>
                <p className="mt-1">
                  Produção limitada mediante agendamento prévio
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemReveal}>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffd8df]">
              Navegação
            </p>
            <div className="mt-6 flex flex-col gap-3 text-xs font-medium">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit transition-colors duration-200 hover:text-[#ffd8df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemReveal}>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffd8df]">
              Nosso Menu
            </p>
            <div className="mt-6 flex flex-col gap-3 text-xs font-medium">
              {[
                ["#bolos", "Bolos Festivos"],
                ["#doces", "Doces & Monoporções"],
                ["#sazonais", "Cardápio Sazonal"],
                ["#Corporativo", "Eventos & Corporativo"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="w-fit transition-colors duration-200 hover:text-[#ffd8df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>

          <p className="mt-4 border-t border-[#2b1714]/5 pt-6 text-[10px]  lg:hidden">
            © {new Date().getFullYear()} La Crème.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto flex max-w-[1540px] flex-wrap items-center justify-end gap-3 border-t border-[#2b1714]/10 px-5 py-5 md:px-8 lg:px-10"
          variants={itemReveal}
        >
          <span className="text-xs font-medium">
            Oferecido por{" "}
            <Link
              href="https://magui.studio"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition duration-300 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b1714] ${maguiFont.className}`}
            >
              <strong className="font-black">MAGUI</strong>
              <span className="text-[#0094C8]">.</span>
              <span className="font-semibold">studio</span>
            </Link>
          </span>

          <span aria-hidden="true" className="text-white/32">
            |
          </span>

          <ScrollTopLink
            className="inline-flex items-center gap-1 text-xs font-medium text-white transition duration-300 hover:text-[#ffd8df] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0094C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b1714] cursor-pointer"
          >
            Voltar ao topo
            <span aria-hidden="true">↑</span>
          </ScrollTopLink>
        </motion.div>
      </div>
    </motion.footer>
  );
}
