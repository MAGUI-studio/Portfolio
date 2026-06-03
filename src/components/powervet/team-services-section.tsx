import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

import { powervetImages } from "./data";
import { Eyebrow } from "./ui";

const teamRoles = [
  "Médicos veterinários",
  "Enfermagem especializada",
  "Recepção acolhedora",
];

const services = [
  "Orientação pré-consulta",
  "Consultas",
  "Exames",
  "Cirurgias",
  "Internação",
  "Emergências",
  "Acompanhamento clínico",
  "Check-ups preventivos",
];

const openingPillars = [
  "Equipe interpreta sinais",
  "Ambiente orienta manejo",
  "Conduta fecha o cuidado",
];

const serviceImages = [
  {
    image: powervetImages.consultingRoom,
    label: "Consulta",
    text: "Avaliação orientada por espécie, comportamento e histórico clínico.",
  },
  {
    image: powervetImages.surgery,
    label: "Procedimentos",
    text: "Centro cirúrgico preparado para condutas delicadas e monitoradas.",
  },
  {
    image: powervetImages.observation,
    label: "Recuperação",
    text: "Observação próxima para acompanhar sinais, conforto e evolução.",
  },
];

export function PowervetTeamServicesSection() {
  return (
    <section
      id="equipe"
      className="relative overflow-hidden bg-[#021C00] px-5 py-24 text-white md:px-10 md:py-32 lg:px-14"
    >
      <div className="pointer-events-none absolute -left-20 top-12 h-130 w-130 rounded-full bg-[#DDD6C8]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-110 w-110 rounded-full bg-[#F4F1EB]/6 blur-3xl" />

      <div className="relative">
        <p className="pointer-events-none absolute -top-8 right-0 hidden text-8xl font-semibold leading-none text-white/[0.035] md:block lg:text-[160px] xl:text-[220px]">
          POWERVET
        </p>

        <div>
          <Eyebrow light>Equipe e serviços</Eyebrow>
          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.075em] md:text-7xl lg:text-[92px]">
            Pessoas, estrutura e conduta operando juntas.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {openingPillars.map((pillar, index) => (
              <div key={pillar} className="bg-[#F4F1EB]/8 px-5 py-5">
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#DDD6C8]">
                  0{index + 1}
                </span>
                <p className="mt-4 text-lg font-semibold leading-tight tracking-[-0.04em] text-white/82">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-16 grid gap-8 lg:grid-cols-[0.64fr_0.36fr] lg:items-stretch">
        <figure className="group relative min-h-140 overflow-hidden bg-[#173B14]">
          <Image
            src={powervetImages.team}
            alt="Equipe multidisciplinar da POWERVET"
            fill
            sizes="(max-width: 1024px) 100vw, 64vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,28,0,.58),transparent_52%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DDD6C8]">
              Equipe multidisciplinar
            </p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
              Uma jornada humana por trás da precisão clínica.
            </h3>
          </div>
        </figure>

        <div className="grid content-between p-7 md:p-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#DDD6C8]">
              Núcleo de atendimento
            </p>
            <p className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.055em] md:text-4xl">
              Leitura técnica, calma no manejo e comunicação clara com o tutor.
            </p>
          </div>

          <div className="mt-12 grid gap-3">
            {teamRoles.map((role, index) => (
              <div
                key={role}
                className="group flex items-center justify-between gap-5  p-5"
              >
                <span className="text-lg font-semibold tracking-[-0.04em]">
                  {role}
                </span>
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#DDD6C8] transition-colors duration-300 group-hover:text-[#173B14]">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-20 grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
        <div>
          <Eyebrow light>Serviços</Eyebrow>
          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.065em] md:text-7xl">
            O cuidado continua em cada sala.
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {serviceImages.map((item, index) => (
            <article key={item.label} className="group p-2">
              <div className="relative h-78 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,28,0,.76),transparent_66%)]" />
                <p className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#DDD6C8]">
                  0{index + 1} / {item.label}
                </p>
              </div>
              <p className="px-3 pb-4 pt-5 text-sm leading-6 text-white/62">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service}
            className="group flex min-h-30 items-end justify-between gap-4 bg-[#F4F1EB]/8 px-5 py-5 text-sm font-semibold text-white/80 transition-colors duration-300 hover:bg-[#F4F1EB] hover:text-[#021C00]"
          >
            <span className="text-xl font-semibold tracking-[-0.055em] md:text-2xl">
              {service}
            </span>
            <CheckCircle
              size={22}
              weight="thin"
              className="shrink-0 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
