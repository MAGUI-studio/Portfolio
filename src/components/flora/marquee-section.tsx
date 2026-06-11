const items = [
  "Plantas que transformam ambientes",
  "Arquitetura verde",
  "Espécies tropicais",
  "Mais verde, mais vida",
  "Decoração natural",
  "Cultive beleza todos os dias",
] as const;

export function FloraMarqueeSection() {
  const repeated = [...items, ...items];

  return (
    <section className="overflow-hidden bg-[#FAFAFA] py-0 text-[#3A402C]">
      <style>{`
        @keyframes flora-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .flora-marquee-track {
          animation: flora-marquee 28s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .flora-marquee-track {
            animation: none !important;
          }
        }
      `}</style>

      <div className="bg-[#FAFAFA] py-5 md:py-6">
        <div className="flora-marquee-track flex w-max items-center">
          {repeated.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.24em] text-[#3A402C]/76 md:text-lg">
                {item}
              </span>
              <span className="mx-6 h-px w-10 bg-[#70835B]/45 md:mx-8 md:w-14" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
