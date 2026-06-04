import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  CheckCircle,
  Heartbeat,
  ShieldCheck,
  Tooth,
} from "@phosphor-icons/react/dist/ssr";

import { arcoImages } from "./data";
import { ActionLink, Eyebrow } from "./ui";

const careSignals = [
  { icon: ShieldCheck, text: "Seguranca em cada etapa" },
  { icon: Heartbeat, text: "Cuidado sem pressa" },
  { icon: CheckCircle, text: "Explicações transparentes" },
];

const processNotes = [
  ["01", "Ouvir", "Queixa, historia e objetivo"],
  ["02", "Planejar", "Fases claras e previsiveis"],
  ["03", "Acompanhar", "Retornos sem pressa"],
];

export function ArcoHeroSection() {
  return (
    <section id="inicio" className="overflow-hidden bg-white text-[#123A5C]">
      <div className="relative bg-[#DCECF5]">
        <div className="grid items-stretch md:grid-cols-[0.48fr_0.52fr]">
          <div className="flex min-h-[590px] flex-col justify-between bg-[#123A5C] p-6 text-white md:min-h-[700px] md:p-10 lg:min-h-[740px] lg:p-14">
            <div className="arco-rise">
              <Eyebrow light>Odontologia humana e moderna</Eyebrow>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px]">
                Sorrisos que conectam, cuidado que transforma.
              </h1>
            </div>

            <div className="arco-rise arco-rise-delay-2 mt-8 md:mt-12">
              <p className="max-w-xl text-base leading-7 text-white/78 md:text-lg md:leading-8">
                Tecnologia, planejamento personalizado e acolhimento para
                entregar tratamentos previsiveis, claros e feitos para cada
                paciente.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ActionLink light>Agendar avaliacao</ActionLink>
                <Link
                  href="#tratamentos"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Ver tratamentos
                </Link>
              </div>

              <div className="mt-8 grid gap-3 border-t border-white/18 pt-6 sm:grid-cols-3">
                {careSignals.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon size={22} className="shrink-0 text-[#B8D9EA]" />
                    <p className="text-xs font-bold leading-5 text-white/82">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[430px] self-stretch bg-[#DCECF5] md:h-full md:min-h-[700px] lg:min-h-[740px]">
            <Image
              src={arcoImages.hero}
              alt="Paciente sorrindo na ARCO Odontologia"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 52vw"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute right-5 top-5 w-44 overflow-hidden rounded-lg bg-white p-5 text-[#123A5C] shadow-[0_24px_70px_rgba(18,58,92,0.18)] md:w-48 lg:right-8 lg:top-8">
              <Tooth
                size={140}
                weight="fill"
                className="absolute -right-8 -top-6 text-[#1F5687]/8"
              />

              <div className="relative z-10">
                <p className="text-4xl font-semibold leading-none text-[#1F5687]">
                  8
                </p>

                <p className="mt-2 text-sm font-bold leading-5 text-[#4A6477]">
                  Tratamentos para cuidar da saúde, da função e da estética do
                  sorriso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid border-b border-[#1F5687]/10 lg:grid-cols-[0.78fr_0.22fr]">
        <div className="grid bg-[#1F5687]/10 md:grid-cols-3 md:gap-px">
          {processNotes.map(([number, title, text]) => (
            <div
              key={title}
              className="border-b border-[#1F5687]/10 bg-white p-6 md:border-b-0 lg:p-8"
            >
              <p className="text-xs font-bold text-[#1F5687]/60">{number}</p>
              <p className="mt-5 text-xl font-semibold text-[#1F5687]">
                {title}
              </p>
              <p className="mt-2 text-sm font-semibold leading-5 text-[#4A6477]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="#clinica"
          className="group flex min-h-36 items-end justify-between bg-[#EAF5FB] p-6 text-[#123A5C] transition-colors hover:bg-[#DCECF5] lg:p-8"
        >
          <span className="max-w-36 text-sm font-bold leading-5">
            Conheca a experiência ARCO
          </span>
          <ArrowDown
            size={22}
            className="text-[#1F5687] transition-transform duration-300 group-hover:translate-y-1"
          />
        </Link>
      </div>
    </section>
  );
}
