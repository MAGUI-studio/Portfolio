"use client";

const shinobiMarquee = [
  "energia gelada",
  "seis sabores",
  "modo foco",
  "ritual noturno",
  "lata 269 ml",
  "presenca no freezer",
  "sabor intenso",
  "despertar shinobi",
];

export function ShinobiMarqueeSection() {
  const repeated = [...shinobiMarquee, ...shinobiMarquee, ...shinobiMarquee];

  return (
    <section className="relative overflow-hidden bg-transparent py-0 text-white z-20">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shinobi-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .shinobi-marquee-track {
          animation: shinobi-marquee 40s linear infinite;
        }

        .shinobi-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .shinobi-marquee-track {
            animation: none;
            overflow-x: auto;
          }
        }
      `}} />

      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-black via-transparent to-black opacity-60" />

      <div className="border-y border-white/10 bg-black/40 backdrop-blur-md py-6">
        <div className="shinobi-marquee-track flex w-max items-center gap-0">
          {repeated.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="whitespace-nowrap text-xl font-extrabold uppercase tracking-[0.2em] text-neutral-200 transition-colors duration-300 [font-family:var(--font-shinobi-display)] hover:text-white md:text-2xl">
                {item}
              </span>
              <span className="mx-10 h-px w-6 bg-neutral-800" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}