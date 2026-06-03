import Image from "next/image";

import { powervetImages } from "./data";
import { Eyebrow } from "./ui";

const clinicSpaces = [
  {
    title: "Recepção",
    text: "Chegada clara, acolhimento tranquilo e primeira orientação para tutores.",
    image: powervetImages.reception,
  },
  {
    title: "Consultório",
    text: "Avaliação clínica com manejo cuidadoso e escuta individualizada.",
    image: powervetImages.consultingRoom,
  },
  {
    title: "Cirurgia",
    text: "Ambiente técnico para procedimentos que exigem precisão e controle.",
    image: powervetImages.surgery,
  },
  {
    title: "Observação",
    text: "Recuperação assistida em sala preparada para acompanhamento próximo.",
    image: powervetImages.observation,
  },
];

const careLayers = [
  {
    title: "Ambientes reais",
    text: "Fotos da própria estrutura, com espaços pensados para atendimento clínico.",
  },
  {
    title: "Manejo especializado",
    text: "Fluxos adaptados para espécies sensíveis, exóticas e silvestres.",
  },
  {
    title: "Acompanhamento clínico",
    text: "Da avaliação à recuperação, cada etapa tem observação e conduta.",
  },
  {
    title: "Baixo estresse",
    text: "Rotina de cuidado desenhada para reduzir ruído, pressa e improviso.",
  },
];

export function PowervetStructureSection() {
  return (
    <section
      id="estrutura"
      className="relative overflow-hidden bg-[#021C00] px-5 py-24 text-white md:px-10 md:py-32 lg:px-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(221,214,200,.7),transparent)]" />
      <div className="pointer-events-none absolute -right-20 top-20 h-150 w-150 rounded-full bg-[#DDD6C8]/10 blur-3xl" />

      <div className="relative w-full  pb-12">
        <p className="pointer-events-none absolute -top-8 right-0 hidden text-8xl font-semibold leading-none text-white/[0.035] md:block lg:text-[160px] xl:text-[220px]">
          CLÍNICA
        </p>
        <div className="relative grid gap-10 lg:grid-cols-[0.68fr_0.32fr] lg:items-end">
          <div>
            <Eyebrow light>Estrutura especializada</Eyebrow>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.075em] md:text-7xl lg:text-[94px]">
              Preparada para espécies fora do comum.
            </h2>
          </div>

          <p className="text-base leading-7 text-white/68">
            Uma clínica-hospital para animais silvestres e exóticos: chegada
            acolhedora, avaliação técnica, centro cirúrgico e recuperação
            assistida.
          </p>
        </div>
      </div>

      <div className="relative mt-16 grid w-full gap-4 lg:grid-cols-[0.56fr_0.44fr]">
        <figure className="group relative min-h-150 overflow-hidden">
          <Image
            src={powervetImages.facade}
            alt="Fachada da clínica POWERVET"
            width={1672}
            height={941}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,28,0,.78),rgba(2,28,0,.05)_62%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DDD6C8]">
              01 / Fachada
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
              Uma chegada que já comunica segurança.
            </h3>
          </div>
        </figure>

        <div className="grid gap-4 sm:grid-cols-2">
          {clinicSpaces.map((space, index) => (
            <article
              key={space.title}
              className="group relative min-h-72 overflow-hidden bg-white/4"
            >
              <Image
                src={space.image}
                alt={space.title}
                fill
                sizes="(max-width: 1024px) 720px, 360px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,28,0,.82),rgba(2,28,0,.08)_70%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] font-bold tracking-[0.28em] text-[#DDD6C8]">
                  0{index + 2}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.055em]">
                  {space.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/68">
                  {space.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6  pt-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DDD6C8]">
            Camadas de cuidado
          </p>
          <p className="mt-4 text-sm leading-6 text-white/48">
            O valor da estrutura aparece no jeito como cada ambiente organiza a
            jornada clínica.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {careLayers.map((item, index) => (
            <article
              key={item.title}
              className="group relative border-l border-white/16 pl-5"
            >
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#DDD6C8]">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.055em] transition-colors duration-300 group-hover:text-[#DDD6C8]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/54">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
