"use client";

import Image from "next/image";
import { nachoLibreImages } from "./data";
import {
  imageReveal,
  itemReveal,
  motion,
  sectionReveal,
  staggerReveal,
  viewport,
} from "./motion";

const menuItems = [
  {
    name: "Tacos",
    image: nachoLibreImages.tacos,
    type: "4 unidades",
    description: "Tortillas de milho, carne temperada, salsa fresca e limao.",
    details: ["tortilla de milho", "carne temperada", "salsa fresca", "limao"],
    accent: "#E86A17",
  },
  {
    name: "Burritos",
    image: nachoLibreImages.burritos,
    type: "grande",
    description: "Tortilla tostada, arroz mexicano, feijao e queijo derretido.",
    details: ["tortilla tostada", "arroz mexicano", "feijao", "queijo"],
    accent: "#C62828",
  },
  {
    name: "Quesadillas",
    image: nachoLibreImages.quesadillas,
    type: "para dividir",
    description: "Queijo derretido, carne lenta, pico de gallo e sour cream.",
    details: ["queijo derretido", "carne lenta", "pico de gallo", "sour cream"],
    accent: "#5D8C45",
  },
  {
    name: "Nachos",
    image: nachoLibreImages.nachos,
    type: "assinatura",
    description: "Chips crocantes, chilli, jalapeno e guacamole no centro da mesa.",
    details: ["chips crocantes", "chilli", "jalapeno", "guacamole"],
    accent: "#E86A17",
  },
  {
    name: "Drinks",
    image: nachoLibreImages.drinks,
    type: "bar",
    description: "Margarita, maracuja, frutas vermelhas e gelo para acompanhar.",
    details: ["margarita", "maracuja", "frutas vermelhas", "gelo"],
    accent: "#C62828",
  },
  {
    name: "Churros",
    image: nachoLibreImages.churros,
    type: "sobremesa",
    description: "Massa crocante, canela, acucar e doce de leite para fechar.",
    details: ["massa crocante", "canela", "acucar", "doce de leite"],
    accent: "#5D8C45",
  },
];

export function NachoLibreMarqueeSection() {
  return (
    <section className="overflow-hidden border-y border-[#111111]/10 bg-[#E86A17] py-4 text-[#111111]">
      <div className="nacho-marquee flex w-max items-center gap-7 whitespace-nowrap">
        {[...menuItems, ...menuItems, ...menuItems].map((item, index) => (
          <span
            key={`${item.name}-${index}`}
            className="inline-flex items-center gap-7 text-3xl font-black uppercase tracking-[-0.04em] md:text-5xl"
          >
            {item.name}
            <span className="text-[#C62828]">★</span>
          </span>
        ))}
      </div>
    </section>
  );
}

export function NachoLibreMenuSection() {
  return (
    <motion.section
      id="menu"
      className="bg-[#F0F0F0] px-5 py-20 text-[#111111] md:px-8 lg:px-10 lg:py-28"
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={sectionReveal}
    >
      <div className="mx-auto max-w-[1480px]">
        <motion.div
          className="grid gap-8 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          variants={staggerReveal}
        >
          <motion.div variants={itemReveal}>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C62828]">
              cardapio
            </p>
            <h2 className="mt-3 max-w-3xl text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl lg:text-8xl">
              Nacho Libre
            </h2>
          </motion.div>

          <motion.div variants={itemReveal} className="grid gap-5">
            <p className="max-w-2xl text-lg font-black uppercase leading-tight tracking-[-0.02em] text-[#111111] md:text-2xl">
              seis pedidos principais, organizados para escolher rapido e montar a mesa sem bagunca.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 gap-3 md:gap-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          }}
          variants={staggerReveal}
        >
          {menuItems.map((item) => (
            <motion.article
              key={item.name}
              variants={imageReveal}
              className="overflow-hidden border border-[#111111]/14 bg-[#FAFAFA]"
            >
              <figure className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                <Image
                  src={item.image}
                  alt={`${item.name} da Nacho Libre`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute bottom-0 left-0 h-2 w-full"
                  style={{ backgroundColor: item.accent }}
                />
              </figure>

              <div className="grid gap-6 p-5 md:p-7">
                <div>
                  <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.055em] sm:text-4xl md:text-5xl">
                    {item.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm font-bold uppercase leading-6 tracking-[0.06em] text-[#111111]/62">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="inline-flex min-h-10 items-center justify-center border border-[#111111]/16 bg-[#F0F0F0] px-3 py-2 text-center text-[10px] font-black uppercase leading-tight tracking-[0.08em] text-[#111111]/68 md:px-4 md:text-[11px]"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
