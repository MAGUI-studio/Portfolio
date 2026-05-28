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
  const repeated = [...shinobiMarquee, ...shinobiMarquee];

  return (
    <section className="overflow-hidden bg-[#5D9601] py-0 text-white">
      <style>{`
        @keyframes shinobi-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .shinobi-marquee-track {
          animation: shinobi-marquee 30s linear infinite;
        }

        .shinobi-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .shinobi-marquee-track {
            animation: none;
          }
        }
      `}</style>

      <div className="border-y border-white/15 py-6">
        <div className="shinobi-marquee-track flex w-max items-center gap-0">
          {repeated.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="whitespace-nowrap text-xl font-black uppercase tracking-[0.18em] text-white md:text-3xl">
                {item}
              </span>
              <span className="mx-8 h-px w-16 bg-white/45" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
