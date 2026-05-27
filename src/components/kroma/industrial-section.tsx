import Image from "next/image";
import { alexandria } from "./fonts";

export function KromaIndustrialSection() {
  return (
    <section className="bg-[#1E1E1E] text-white">
      <div className="grid min-h-170 w-full overflow-hidden sm:min-h-150 sm:grid-cols-[minmax(0,1fr)_11rem]">
        <div className="kroma-scanline relative min-h-150 overflow-hidden sm:min-h-150 sm:[clip-path:polygon(0_0,calc(100%_-_72px)_0,100%_72px,100%_calc(100%_-_72px),calc(100%_-_72px)_100%,0_100%)]">
          <Image
            src="/images/kroma/paineis.webp"
            alt="Paineis solares KROMA em instalacao industrial"
            fill
            sizes="(min-width: 1024px) calc(100vw - 176px), 100vw"
            className="kroma-kenburns object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,0.72)_0%,rgba(16,16,16,0.30)_44%,rgba(16,16,16,0.06)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(180deg,transparent,rgba(16,16,16,0.72))]" />
          <div className="absolute top-0 right-0 hidden h-18 w-18 bg-[#1E1E1E] [clip-path:polygon(100%_0,100%_100%,0_0)] sm:block" />
          <div className="absolute right-0 bottom-0 hidden h-18 w-18 bg-[#1E1E1E] [clip-path:polygon(100%_0,100%_100%,0_100%)] sm:block" />

          <div
            className="kroma-card-hover kroma-reveal relative z-20 m-6 w-[calc(100%-3rem)] max-w-xl bg-[#1E1E1E]/42 p-7 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-md sm:m-10 md:m-12 md:p-9"
          >
            <div className="flex items-center justify-between gap-5 border-b border-white/12 pb-5">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFBC4F]">
                operacao industrial
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/46">
                100 kWp+
              </span>
            </div>

            <h2
              className={`mt-6 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl ${alexandria.className}`}
            >
              Potencia solar <br />
              sem parar a planta.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              Engenharia, homologacao e comissionamento para transformar area
              disponivel em energia propria.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["telhado", "solo", "carport", "monitoramento"].map((item) => (
                <span
                  key={item}
                  className="border border-white/12 bg-white/8 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 transition duration-300 hover:border-[#FFBC4F] hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none relative flex h-24 select-none flex-col items-center justify-center bg-[#1E1E1E] sm:h-auto">
          <div className="flex items-center justify-center [writing-mode:horizontal-tb] sm:[writing-mode:vertical-lr] sm:rotate-180">
            <p className="kroma-drift whitespace-nowrap text-5xl tracking-[0.04em]">
              <span className={`${alexandria.className} text-white`}>
                KROMA
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
