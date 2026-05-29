"use client";

import Image from "next/image";
import { pulseImages } from "./data";
import {
  motion,
  pulseImageReveal,
  pulseSectionReveal,
  pulseViewport,
} from "./motion";

export function PulseTechnologySection() {
  return (
    <motion.section
      id="tecnologia"
      initial="hidden"
      whileInView="show"
      viewport={pulseViewport}
      variants={pulseSectionReveal}
    >
      <motion.figure
        variants={pulseImageReveal}
        className="relative w-full overflow-hidden"
      >
        <Image
          src={pulseImages.technology}
          alt="Tecnologia de tecido Pulse"
          width={1440}
          height={810}
          priority
          className="h-auto w-full object-contain"
          sizes="(min-width: 1440px) 1312px, calc(100vw - 48px)"
        />
      </motion.figure>
    </motion.section>
  );
}
