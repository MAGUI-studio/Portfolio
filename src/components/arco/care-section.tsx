import Image from "next/image";
import {
  ChatsCircle,
  FirstAidKit,
  MonitorPlay,
} from "@phosphor-icons/react/dist/ssr";

import { arcoImages } from "./data";
import { ActionLink, Eyebrow } from "./ui";

const pillars = [
  {
    icon: ChatsCircle,
    title: "Escuta e personalização",
    text: "As decisões clínicas começam entendendo suas necessidades, expectativas e prioridades.",
  },
  {
    icon: MonitorPlay,
    title: "Tecnologia para planejar",
    text: "Diagnóstico digital e planejamento preciso para oferecer mais clareza e segurança.",
  },
  {
    icon: FirstAidKit,
    title: "Cuidado contínuo",
    text: "Acompanhamento próximo em cada fase para garantir conforto, previsibilidade e confiança.",
  },
];

export function ArcoCareSection() {
  return (
    <section
      id="clinica"
      className="bg-[#F8FCFE] px-5 py-20 text-[#123A5C] md:px-10 md:py-28 lg:px-14"
    >
      <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
        <div>
          <Eyebrow>Nossa filosofia</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Mais do que cuidar de dentes, cuidamos de confianca.
          </h2>
        </div>
        <p className="max-w-3xl text-lg leading-8 text-[#4A6477] md:text-xl md:leading-9">
          Um bom atendimento comeca ouvindo. Por isso, a ARCO planeja cada
          tratamento de forma individual, com explicações claras, cuidado
          genuíno e foco em resultados duradouros.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <article key={title} className="p-7">
            <Icon size={32} className="text-[#1F5687]" />
            <h3 className="mt-12 text-2xl font-semibold">{title}</h3>
            <p className="mt-4 leading-7 text-[#4A6477]">{text}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-[0.48fr_0.52fr]">
        <figure className="relative min-h-[430px] overflow-hidden rounded-lg bg-[#D7EAF5]">
          <Image
            src={arcoImages.reception}
            alt="Recepcao clara e acolhedora da ARCO Odontologia"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </figure>
        <div className="grid content-between rounded-lg bg-[#1F5687] p-7 text-white md:p-10">
          <Image
            src={arcoImages.logoWhite}
            alt="ARCO Odontologia"
            width={172}
            height={52}
            className="h-auto w-36"
          />
          <div className="mt-20">
            <h3 className="text-4xl font-semibold leading-tight md:text-6xl">
              Um ambiente planejado para que você se sinta bem em cada etapa do
              cuidado.
            </h3>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Espaços acolhedores, tecnologia atual e uma equipe atenta aos
              detalhes criam uma experiência mais confortável, tranquila e
              segura para o seu tratamento.
            </p>

            <div className="mt-8">
              <ActionLink href="#contato" light>
                Conversar com a clínica
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
