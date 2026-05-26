import { alexandria } from "./fonts";

const marqueeItems = [
  "modulos solares",
  "inversores",
  "baterias",
  "carport",
  "homologacao",
  "monitoramento",
] as const;

export function KromaMarqueeSection() {
  return (
    <section className="overflow-hidden bg-[#FFBC4F] py-6 text-[#2A2A2A]">
      <style>{`
        @keyframes kroma-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .kroma-marquee-track {
          animation: kroma-marquee 24s linear infinite;
        }

        .kroma-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .kroma-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className={`kroma-marquee-track flex w-max items-center gap-10 whitespace-nowrap text-3xl font-black uppercase tracking-[-0.04em] md:text-5xl ${alexandria.className}`}
        aria-label="Componentes do sistema Kroma"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
          (item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-10"
            >
              {item}
              <span className="size-3 bg-[#2A2A2A]" />
            </span>
          ),
        )}
      </div>
    </section>
  );
}
