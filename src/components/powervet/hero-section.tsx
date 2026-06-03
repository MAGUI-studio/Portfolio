import Image from "next/image";
import { ArrowDown, Cross, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

import { powervetImages } from "./data";
import { ActionLink, Eyebrow } from "./ui";

const heroDetails = [
  { icon: ShieldCheck, title: "Equipe capacitada", text: "Medicina de silvestres" },
  { icon: Cross, title: "Estrutura completa", text: "Consulta à recuperação" },
  { icon: ArrowDown, title: "Conheça a POWERVET", text: "Role para explorar" },
];

export function PowervetHeroSection() {
  return (
    <section id="inicio" className="relative min-h-200 overflow-hidden bg-[#021C00] text-white">
      <Image src={powervetImages.hero} alt="Animais silvestres e exóticos atendidos pela POWERVET" fill priority unoptimized sizes="100vw" className="object-cover object-[72%_center] lg:object-right" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,28,0,.99)_0%,rgba(2,28,0,.94)_40%,rgba(2,28,0,.32)_76%,rgba(2,28,0,.12)_100%)] md:bg-[linear-gradient(90deg,rgba(2,28,0,.98)_0%,rgba(2,28,0,.88)_31%,rgba(2,28,0,.18)_67%,rgba(2,28,0,.04)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,28,0,.72),transparent_35%)]" />

      <div className="relative flex min-h-200 w-full flex-col justify-end  pb-10 pt-38 ">
        <div className="w-full lg:w-[56%] px-5 md:px-10 lg:px-14">
          <div className="powervet-rise"><Eyebrow light>Hospital veterinário especializado</Eyebrow></div>
          <h1 className="powervet-rise powervet-rise-delay mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[108px]">
            Medicina que entende o extraordinário.
          </h1>
          <p className="powervet-rise powervet-rise-delay-2 mt-6 text-base leading-7 text-white/74 md:text-lg md:leading-8 lg:w-[78%]">
            Cuidado especializado para animais silvestres e exóticos, com estrutura clínica preparada e atenção individual para cada espécie.
          </p>
          <div className="powervet-rise powervet-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <ActionLink light>Falar com a equipe</ActionLink>
            <ActionLink href="#especialidades">Conhecer a clínica</ActionLink>
          </div>
        </div>

        <div className="mt-20 grid gap-px border-y border-white/18 bg-white/18 sm:grid-cols-3">
          {heroDetails.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 bg-[#021C00]/76 px-4 py-4 backdrop-blur-sm">
              <Icon size={23} weight="thin" className="text-[#DDD6C8]" />
              <div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-white/54">{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
