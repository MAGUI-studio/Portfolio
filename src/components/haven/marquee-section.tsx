const items = [
  "Cortes com mais calma",
  "Ambiente acolhedor",
  "Atendimento individualizado",
  "Mais previsibilidade",
  "Menos sobrecarga sensorial",
  "Cuidado no seu ritmo",
];

export function HavenMarqueeSection() {
  const repeated = [...items, ...items];

  return (
    <section className="overflow-hidden bg-[#14283D] py-0 text-white">
      <style>{`
        @keyframes haven-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .haven-marquee-track {
          animation: haven-marquee 26s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .haven-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <div className="border-y border-white/10 py-5 md:py-6">
        <div className="haven-marquee-track flex w-max items-center">
          {repeated.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.24em] text-white/72 md:text-lg">
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
