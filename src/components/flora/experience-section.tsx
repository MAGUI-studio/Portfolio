import Image from "next/image";

import { floraExperiencePoints, floraImages } from "./data";
import { FloraImageReveal, FloraReveal } from "./motion";

export function FloraExperienceSection() {
  return (
    <section
      id="ambientes"
      className="overflow-hidden bg-[#FAFAFA] px-5 py-20 text-[#3A402C] md:px-8 md:py-24 lg:px-10"
    >
      <div className="grid gap-8 xl:grid-cols-[0.38fr_0.62fr] xl:items-end">
        <FloraReveal className="grid gap-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#70835B]">
            Ambientes vivos
          </p>
          <h2 className="text-5xl leading-[0.92] md:text-7xl">
            Natureza pensada como atmosfera, não como detalhe.
          </h2>
          <p className="text-base leading-8 text-[#5A4A3D]/84 md:text-lg">
            A Flora aproxima o verde de interiores sofisticados com uma curadoria
            que conversa com arquitetura, iluminação, textura e bem-estar.
          </p>
        </FloraReveal>

        <FloraReveal delay={0.06} className="grid gap-4 md:grid-cols-3">
          {floraExperiencePoints.map((item) => (
            <div
              key={item}
              className="rounded-[30px] bg-white px-5 py-6 text-sm leading-7 text-[#5A4A3D]/84 shadow-[0_18px_50px_rgba(58,64,44,0.05)]"
            >
              {item}
            </div>
          ))}
        </FloraReveal>
      </div>

      <div className="mt-12 grid gap-5 xl:grid-cols-[0.7fr_0.3fr]">
        <FloraImageReveal>
          <article className="relative overflow-hidden rounded-[42px] bg-[#D7D0C2] shadow-[0_28px_80px_rgba(58,64,44,0.1)]">
            <figure className="relative min-h-[640px]">
              <Image
                src={floraImages.interior}
                alt="Vista interna do garden center Flora"
                fill
                sizes="(min-width: 1280px) 64vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,34,21,0.04),rgba(27,34,21,0.48))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="rounded-[32px] bg-white/10 px-6 py-6 text-white backdrop-blur-md md:w-[58%]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                  Sensação da marca
                </p>
                <p className="mt-4 text-3xl leading-tight md:text-[40px]">
                  Entrar na Flora deve parecer como entrar em uma estufa
                  contemporânea.
                </p>
              </div>
            </div>
          </article>
        </FloraImageReveal>

        <FloraImageReveal delay={0.08}>
          <article className="grid h-full overflow-hidden rounded-[38px] bg-[#232A1C] text-[#F4F0E8] shadow-[0_24px_70px_rgba(24,28,18,0.2)]">
            <figure className="relative min-h-[360px]">
              <Image
                src={floraImages.packaging}
                alt="Embalagem premium da Flora"
                fill
                sizes="(min-width: 1280px) 28vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="grid content-between gap-6 px-6 py-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/46">
                  Curadoria material
                </p>
                <p className="mt-4 text-2xl leading-tight">
                  Vasos, embalagens e acabamentos seguem a mesma lógica de
                  elegância natural.
                </p>
              </div>
              <p className="text-sm leading-7 text-white/70">
                Tudo é pensado para sustentar uma experiência mais próxima de uma
                boutique de design do que de uma floricultura convencional.
              </p>
            </div>
          </article>
        </FloraImageReveal>
      </div>
    </section>
  );
}
