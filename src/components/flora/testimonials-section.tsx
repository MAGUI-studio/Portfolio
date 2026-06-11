import Image from "next/image";

import { floraImages } from "./data";
import { FloraImageReveal, FloraReveal } from "./motion";

const testimonialImages = [
  {
    src: floraImages.testimonial01,
    alt: "Depoimento visual de cliente da Flora sobre a experiência com a marca",
  },
  {
    src: floraImages.testimonial02,
    alt: "Depoimento visual de arquiteto parceiro da Flora",
  },
  {
    src: floraImages.testimonial03,
    alt: "Depoimento visual de cliente da Flora sobre atendimento e atmosfera da loja",
  },
] as const;

export function FloraTestimonialsSection() {
  return (
    <section
      id="depoimentos"
      aria-label="Depoimentos de clientes da Flora"
      className="overflow-hidden bg-[#FAFAFA] px-5 py-20 text-[#3A402C] md:px-8 md:py-24 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
        <FloraReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#70835B]">
            Depoimentos
          </p>
          <h2 className="mt-5 text-5xl leading-[0.92] md:text-7xl">
            Relatos reais que reforçam a delicadeza da experiência Flora.
          </h2>
        </FloraReveal>

        <FloraReveal delay={0.06}>
          <p className="text-base leading-8 text-[#5A4A3D]/86 md:text-lg">
            As próprias peças já contam a história. Aqui, os depoimentos entram
            como uma galeria limpa e contemplativa, preservando a leitura e o
            cuidado visual da marca.
          </p>
        </FloraReveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialImages.map((item, index) => (
          <FloraImageReveal key={item.src} delay={index * 0.06}>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={item.src}
                alt={item.alt}
                width={1536}
                height={1024}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          </FloraImageReveal>
        ))}
      </div>
    </section>
  );
}