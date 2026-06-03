import { Gauge, Lightning, TestTube, Wind } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { flowImages } from "./data";

const equipment = [
  {
    icon: Lightning,
    title: "Iluminacao",
    text: "Espectro, PAR e programacao pensados para crescimento e cor.",
  },
  {
    icon: Wind,
    title: "Circulacao",
    text: "Fluxo adequado para troca gasosa, nutrientes e saude dos corais.",
  },
  {
    icon: Gauge,
    title: "Filtragem",
    text: "Skimmers, midias e sump dimensionados para estabilidade real.",
  },
  {
    icon: TestTube,
    title: "Quimica",
    text: "Sais, suplementos e testes para leitura precisa da agua.",
  },
] as const;

export function FlowEquipmentSection() {
  return (
    <section
      id="equipamentos"
      className="bg-white px-5 py-20 text-[#061421] md:px-8 lg:px-10 lg:py-28"
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.52fr)_minmax(480px,0.48fr)] xl:items-start">
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase text-[#061421]/54">
            Tecnologia para estabilidade
          </p>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[0.98] tracking-normal sm:text-5xl md:text-6xl xl:text-7xl">
            Equipamento certo antes do primeiro peixe.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#061421]/64">
            Aquarismo marinho premium exige compatibilidade. A FLOW organiza
            iluminacao, bombas, skimmers, filtragem, rochas, substratos e
            insumos em uma arquitetura que trabalha junta.
          </p>

          <div className="mt-10 grid gap-px bg-[#061421]/12 sm:grid-cols-2">
            {equipment.map(({ icon: Icon, title, text }) => (
              <article key={title} className="min-w-0 bg-white p-5 sm:p-6">
                <Icon size={26} weight="duotone" className="text-[#061421]" />
                <h3 className="mt-10 text-xl font-bold leading-tight sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#061421]/62">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-85 overflow-hidden bg-[#061421] sm:min-h-115 xl:min-h-200">
          <Image
            src={flowImages.products}
            alt="Produtos e equipamentos disponiveis para aquarios marinhos"
            fill
            sizes="(min-width: 1280px) 48vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
