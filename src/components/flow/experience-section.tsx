import { ArrowRight, MapPin, Sparkle } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { flowExperience, flowImages } from "./data";

export function FlowExperienceSection() {
  return (
    <section
      id="loja"
      className="bg-white px-5 md:px-8 lg:px-10 py-20 text-[#061421]  lg:py-28"
    >
      <div className="flex flex-col gap-10">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase text-[#061421]/54">
            <MapPin size={16} weight="bold" />
            Loja, técnica e calma
          </p>
          <h2 className="mt-5 text-5xl font-bold leading-[0.96] md:text-7xl">
            Um espaço para observar antes de escolher.
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-base leading-8 text-[#061421]/62">
            A FLOW foi pensada como um ambiente de decisão: vitrine aberta,
            displays de vivos, bancada de atendimento e produtos organizados
            para transformar curiosidade em sistema estável.
          </p>

          <div className="flex items-end justify-between gap-5 border-t border-[#061421]/14 pt-5">
            <Image
              src={flowImages.logoDark}
              alt="FLOW"
              width={190}
              height={40}
              className="h-9 w-auto"
            />
            <Link
              href="#metodo"
              className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase text-[#061421]"
            >
              Agendar orientação
              <ArrowRight
                size={15}
                weight="bold"
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.48fr_0.52fr]">
        <article className="group relative min-h-[700px] overflow-hidden bg-[#061421] text-white">
          <Image
            src={flowExperience[0].image}
            alt={flowExperience[0].alt}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#061421]/82 via-[#061421]/12 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
            <p className="text-xs font-extrabold uppercase text-white/62">
              {flowExperience[0].title}
            </p>
            <p className="mt-3 max-w-md text-2xl font-bold leading-tight">
              {flowExperience[0].text}
            </p>
          </div>
        </article>

        <div className="grid gap-5">
          <article className="relative min-h-[340px] overflow-hidden bg-[#061421] text-white">
            <Image
              src={flowExperience[1].image}
              alt={flowExperience[1].alt}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#061421]/80 to-transparent" />
            <div className="absolute left-0 top-0 max-w-sm p-7">
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase text-white/62">
                <Sparkle size={15} weight="fill" />
                {flowExperience[1].title}
              </p>
              <p className="mt-3 text-xl font-bold leading-tight">
                {flowExperience[1].text}
              </p>
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {flowExperience.slice(2).map((item) => (
              <article
                key={item.title}
                className="group border border-[#061421]/12 bg-white"
              >
                <div className="relative min-h-[300px] overflow-hidden bg-[#061421]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 26vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-extrabold uppercase text-[#061421]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#061421]/62">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
