"use client";

import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ShinobiFlavor, shinobiFlavors } from "./data";

type ShinobiFlavorsSectionProps = {
  onFlavorChange?: (flavor: ShinobiFlavor) => void;
};

export function ShinobiFlavorsSection({
  onFlavorChange,
}: ShinobiFlavorsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFlavor = shinobiFlavors[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % shinobiFlavors.length;
        onFlavorChange?.(shinobiFlavors[nextIndex]);
        return nextIndex;
      });
    }, 4200);

    return () => clearInterval(interval);
  }, [onFlavorChange]);

  return (
    <section
      id="sabores"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      <Image
        key={activeFlavor.fundo}
        src={activeFlavor.fundo}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />

      <div className="relative z-10 mx-auto min-h-screen max-w-[1500px] items-center gap-10 px-5 py-28 md:px-10">
        <h2 className="text-[64px] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[104px] lg:text-[124px]">
          Seis sabores.
          <span className="block" style={{ color: activeFlavor.accent }}>
            Um só destino.
          </span>
        </h2>

        <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
          Descubra a coleção completa de energéticos SHINOBI. Cada lata possui
          uma identidade própria, um sabor marcante e a mesma explosão de
          energia que transformou a marca em uma lenda.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#pedido"
            className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-black uppercase text-black transition hover:scale-105"
            style={{ backgroundColor: activeFlavor.accent }}
          >
            Pedir seu sabor
            <ArrowRight
              className="transition group-hover:translate-x-1"
              size={18}
            />
          </a>

          <a
            href="#energia"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-black uppercase text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
          >
            A Formula
          </a>
        </div>

        <motion.div
          key={activeFlavor.slug}
          initial={{ opacity: 0, y: 90, rotate: -8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 h-[760px] w-full"
        >
          <Image
            src={activeFlavor.lata}
            alt={`Lata SHINOBI sabor ${activeFlavor.name}`}
            fill
            priority
            sizes="760px"
            className="object-cover drop-shadow-[0_55px_110px_rgba(0,0,0,0.9)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
