import { Gauge, Lightning, TestTube, Wind } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { flowImages } from "./data";

const equipment = [
  {
    icon: Lightning,
    title: "Iluminação",
    text: "Espectro, PAR e programação pensados para crescimento e cor.",
  },
  {
    icon: Wind,
    title: "Circulação",
    text: "Fluxo adequado para troca gasosa, nutrientes e saúde dos corais.",
  },
  {
    icon: Gauge,
    title: "Filtragem",
    text: "Skimmers, mídias e sump dimensionados para estabilidade real.",
  },
  {
    icon: TestTube,
    title: "Química",
    text: "Sais, suplementos e testes para leitura precisa da água.",
  },
];

export function FlowEquipmentSection() {
  return (
    <section
      id="equipamentos"
      className="relative min-h-120 w-full overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={flowImages.products}
          alt="Aquário Marinho"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between pt-24 text-white">
        <div className="px-6 text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            Tecnologia para estabilidade
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white sm:text-6xl">
            Produtos certos antes do primeiro peixe
          </h2>
          <p className="mt-6 text-white">
            Aquarismo marinho premium exige compatibilidade. A FLOW organiza
            cada componente em uma arquitetura que trabalha em perfeita
            sintonia.
          </p>
        </div>

        <div className="w-full bg-white">
          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="relative overflow-hidden p-8 transition-colors"
              >
                <Icon
                  size={160}
                  weight="fill"
                  className="absolute -bottom-6 -right-6 text-black opacity-[0.03]"
                />
                <div className="relative z-10">
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-black">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}