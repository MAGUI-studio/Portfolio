import Image from "next/image";
import {
  BuildingsIcon,
  StethoscopeIcon,
  LeafIcon,
  UserCircleIcon,
} from "@phosphor-icons/react/ssr";

import { powervetImages } from "./data";
import { Eyebrow } from "./ui";

const species = [
  {
    title: "Aves",
    text: "Papagaios, araras, periquitos e demais aves ornamentais e silvestres.",
    image: powervetImages.birds,
    className: "lg:col-span-4 lg:row-span-2",
    imageClassName: "object-[46%_center]",
  },
  {
    title: "Répteis",
    text: "Serpentes, lagartos, geckos e espécies exóticas com manejo específico.",
    image: powervetImages.reptiles,
    className: "lg:col-span-4",
    imageClassName: "object-[38%_center]",
  },
  {
    title: "Quelônios",
    text: "Tartarugas e jabutis acompanhados com atenção a cada fase de vida.",
    image: powervetImages.turtles,
    className: "lg:col-span-4",
    imageClassName: "object-[58%_center]",
  },
  {
    title: "Pequenos mamíferos",
    text: "Roedores, furões, primatas e outros animais de pequeno porte.",
    image: powervetImages.mammals,
    className: "lg:col-span-4",
    imageClassName: "object-center",
  },
  {
    title: "Anfíbios",
    text: "Sapos, rãs e espécies que exigem ambiente e protocolos cuidadosos.",
    image: powervetImages.amphibians,
    className: "lg:col-span-4",
    imageClassName: "object-[55%_center]",
  },
];

const features = [
  {
    title: "Sem estética de pet shop",
    desc: "Ambiente clínico focado exclusivamente no bem-estar e saúde.",
    icon: BuildingsIcon,
  },
  {
    title: "Manejo por espécie",
    desc: "Protocolos adaptados para as necessidades biológicas de cada animal.",
    icon: StethoscopeIcon,
  },
  {
    title: "Ambiente de baixo estresse",
    desc: "Espaços projetados para minimizar a ansiedade durante a consulta.",
    icon: LeafIcon,
  },
  {
    title: "Conduta individualizada",
    desc: "Atendimento personalizado que entende a singularidade do seu pet.",
    icon: UserCircleIcon,
  },
];

export function PowervetSpeciesSection() {
  return (
    <section
      id="especialidades"
      className="relative overflow-hidden bg-[#F4F1EB] px-5 py-24 text-[#021C00] md:px-10 md:py-32 lg:px-14"
    >
      <div className=" tracking-[-0.09em] pointer-events-none absolute top-10 right-10 hidden text-8xl font-semibold leading-none text-[#021C00]/[0.035] md:block lg:text-[160px] xl:text-[220px]">
        FAUNA
      </div>
      <div className="relative w-full">
        <div className="grid gap-8 md:grid-cols-[0.58fr_0.42fr] md:items-end">
          <div>
            <Eyebrow>Especialidades</Eyebrow>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.075em] md:text-7xl lg:text-[94px]">
              Seu animal é único.
              <br />O cuidado também.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#365233] md:justify-self-end md:text-lg md:leading-8 lg:w-[76%]">
            Cada espécie pede leitura clínica, manejo e protocolos próprios. A
            POWERVET foi desenhada para atender essa diversidade com segurança.
          </p>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[360px]">
          {species.map((item, index) => (
            <article
              key={item.title}
              className={`group relative min-h-88 overflow-hidden bg-[#173B14] shadow-[0_24px_70px_rgba(2,28,0,0.08)] ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${item.imageClassName}`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,28,0,.82),rgba(2,28,0,.2)_45%,rgba(2,28,0,.02)_100%)]" />
              <div className="absolute inset-x-5 top-5 h-px origin-left scale-x-35 bg-white/34 transition-transform duration-500 group-hover:scale-x-100" />
              <div className="absolute right-5 top-5 flex size-16 items-center justify-center border border-white/20 bg-white/4.5 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-[#DDD6C8]/20">
                <Image
                  src={powervetImages.iconLight}
                  alt=""
                  width={30}
                  height={30}
                  className="size-7 object-contain opacity-90 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#DDD6C8]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.055em] md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/72 md:w-[88%]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-start text-left"
            >
              <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-[#D6D0C4]/30 text-[#173B14] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#173B14] group-hover:text-white">
                <item.icon size={28} weight="light" />
              </div>
              <h4 className="text-lg font-semibold tracking-tight text-[#021C00]">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#365233]/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
