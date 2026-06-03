import { ArrowRight, Fish, Waves } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { flowImages } from "./data";

const heroSignals = [
  ["Nano reef", "Primeiro sistema com base técnica"],
  ["Reef misto", "Vida marinha, corais e estabilidade"],
  ["Avancado", "Performance para alta demanda"],
] as const;

export function FlowHeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white px-5 pb-14 pt-32 2xl:pt-24 text-[#061421] md:px-8 lg:px-10 lg:pb-20"
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(520px,1fr)] xl:items-end 2xl:grid-cols-[minmax(0,0.82fr)_minmax(640px,1fr)]">
        <div className="min-w-0 pt-6 xl:flex xl:h-full xl:flex-col xl:justify-between xl:gap-12 xl:pt-12">
          <div>
            <span className="inline-flex max-w-full items-center gap-3 text-xs font-extrabold uppercase">
              <Waves size={17} weight="bold" />
              <span className="min-w-0">FLOW Aquarismo Marinho Premium</span>
            </span>
            <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-[0.92] tracking-normal sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[112px]">
              Oceano em equilíbrio, dentro do seu espaço.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#061421]/68">
              Aquários marinhos, equipamentos de alta performance, corais
              selecionados e orientação para montar um reef bonito, estavel e
              tecnicamente correto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#metodo"
                className="group inline-flex items-center justify-center gap-3 bg-[#061421] px-6 py-4 text-sm font-extrabold uppercase text-white transition hover:bg-[#061421]/88"
              >
                Planejar reef
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#vivos"
                className="inline-flex items-center justify-center gap-3 border border-[#061421] px-6 py-4 text-sm font-bold uppercase text-[#061421] transition hover:bg-[#061421] hover:text-white"
              >
                Ver espécies
                <Fish size={17} weight="bold" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-px bg-[#061421]/12 md:grid-cols-3 xl:mt-0">
            {heroSignals.map(([title, text]) => (
              <div key={title} className="min-w-0 bg-white p-5">
                <p className="text-2xl font-bold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[#061421]/58">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid min-w-0 gap-5 2xl:grid-cols-[minmax(0,0.58fr)_minmax(260px,0.42fr)]">
          <div className="relative min-h-130 overflow-hidden bg-[#061421] md:min-h-160 xl:min-h-180">
            <Image
              src={flowImages.hero}
              alt="Casal admirando aquário marinho premium com peixes palhaco"
              fill
              priority
              sizes="(min-width: 1536px) 32vw, (min-width: 1280px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#061421]/58 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-7">
              <p className="text-xs font-extrabold uppercase text-white/66">
                Experiencia FLOW
              </p>
              <p className="mt-3 max-w-sm text-2xl font-bold leading-tight md:text-3xl">
                Projeto, vida marinha e manutencao em uma unica jornada.
              </p>
            </div>
          </div>

          <div className="grid min-w-0 gap-5 md:grid-cols-3 2xl:grid-cols-1">
            <HeroImage
              src={flowImages.coralArea}
              alt="Area de corais raros separados por frag plugs"
              label="Corais selecionados"
            />
            <HeroImage
              src={flowImages.products}
              alt="Produtos e equipamentos disponiveis para aquários marinhos"
              label="Equipamentos premium"
            />
            <div className="flex min-h-60 flex-col items-center justify-center bg-[#061421] p-6 text-white">
              <Image
                src={flowImages.logoLight}
                alt="FLOW"
                width={160}
                height={46}
                className="h-8 w-auto"
              />
              <p className="mt-8 max-w-56 text-center text-base leading-7">
                Tecnologia, vida e oceano em equilíbrio para reefs de todos os
                niveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage({
  alt,
  label,
  src,
}: {
  alt: string;
  label: string;
  src: string;
}) {
  return (
    <div className="relative min-h-60 min-w-0 overflow-hidden bg-[#061421]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1536px) 18vw, (min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#061421]/66 to-transparent" />
      <p className="absolute bottom-0 left-0 right-0 p-5 text-xs font-extrabold uppercase text-white">
        {label}
      </p>
    </div>
  );
}
