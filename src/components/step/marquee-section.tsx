const items = [
  "Sneaker care técnico",
  "Preservação de materiais",
  "Leitura de acabamento",
  "Conservação visual",
  "Processo com critério",
  "Entrega premium",
] as const;

export function StepMarqueeSection() {
  const repeated = [...items, ...items];

  return (
    <section className="overflow-hidden bg-black py-0 text-white">
      <style>{`
        @keyframes step-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .step-marquee-track {
          animation: step-marquee 28s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .step-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <div className="border-y border-white/10 py-5 md:py-6">
        <div className="step-marquee-track flex w-max items-center">
          {repeated.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.26em] text-white/70 md:text-lg">
                {item}
              </span>
              <span className="mx-6 h-px w-10 bg-white/24 md:mx-8 md:w-14" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
