import Image from "next/image";
import { flowImages } from "./data";

const lifeItems = [
  [
    "Corais",
    "Frag plugs, peças especiais e curadoria por exigencia de luz, fluxo e maturidade do sistema.",
  ],
  [
    "Peixes",
    "Especies ornamentais selecionadas para compatibilidade, comportamento e saúde do reef.",
  ],
  [
    "Ambiente",
    "Loja organizada para observação calma, comparação técnica e decisão sem pressa.",
  ],
] as const;

export function FlowLifeSection() {
  return (
    <section
      id="vivos"
      className="bg-white px-5 py-20 text-[#061421] md:px-8 lg:px-10 lg:py-28"
    >
      <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-end">
        <h2 className="text-5xl font-bold leading-[0.96] md:text-7xl">
          Vida marinha tratada com precisão e respeito.
        </h2>
        <p className="text-base leading-8 text-[#061421]/62">
          Peixes, corais e invertebrados entram na conversa com critérios de
          compatibilidade, maturidade do aquário e compromisso com estabilidade.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.36fr_0.28fr_0.36fr]">
        <ImageTile
          src={flowImages.coralArea}
          alt="Area de corais raros separados por frag plugs"
          tall
        />
        <ImageTile
          src={flowImages.fishWall}
          alt="Parede de aquários com peixes ornamentais disponiveis"
        />
        <ImageTile
          src={flowImages.rareFishWall}
          alt="Parede de aquários com espécies marinhas raras"
          tall
        />
      </div>

      <div className="mt-5 grid gap-px bg-[#061421]/12 md:grid-cols-3">
        {lifeItems.map(([title, text]) => (
          <article key={title} className="bg-white p-7">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#061421]/62">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ImageTile({
  src,
  alt,
  tall = false,
}: {
  src: string;
  alt: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#061421] ${tall ? "min-h-[620px]" : "min-h-[440px] lg:mt-24"}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
