import { FlowSystemCard } from "./ui";
import { flowImages, flowSystems } from "./data";
import Image from "next/image";

export function FlowReefSection() {
  return (
    <section
      id="reefs"
      className="bg-white px-5 py-20 text-[#061421] md:px-8 lg:px-10 lg:py-28"
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.42fr)_minmax(520px,0.58fr)]">
        <div className="min-w-0 xl:sticky xl:top-28 xl:self-start">
          <p className="text-xs font-extrabold uppercase text-[#061421]/54">Sistemas completos</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[0.98] tracking-normal sm:text-5xl md:text-6xl xl:text-7xl">
            Do primeiro nano ao reef de alta demanda.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#061421]/62">
            Cada montagem parte do objetivo do aquarista, da rotina de manutenção
            e da vida marinha desejada. O resultado e um sistema coerente,
            bonito e biologicamente estável.
          </p>
        </div>

        <div className="grid min-w-0 gap-5">
          <div className="relative min-h-[320px] overflow-hidden bg-[#061421] sm:min-h-[400px] xl:min-h-[460px]">
            <Image
              src={flowImages.aquariumInterior}
              alt="Aquario marinho exposto no interior da loja FLOW"
              fill
              sizes="(min-width: 1280px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#061421]/32 to-transparent" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {flowSystems.map((system) => (
              <FlowSystemCard key={system.title} {...system} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
