import { marquee } from "./data";
import { syncopate } from "./fonts";

export function VittaMarqueeSection() {
  const repeated = [...marquee, ...marquee];

  return (
    <section className="overflow-hidden bg-[#27362D] py-0 text-white">
      <div className="border-y border-white/10 py-6">
        <div className="vitta-marquee-track flex w-max items-center gap-0">
          {repeated.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span
                className={`${syncopate.className} whitespace-nowrap text-xl font-light uppercase tracking-[0.18em] text-white/72 md:text-3xl`}
              >
                {item}
              </span>
              <span className="mx-8 h-px w-16 bg-[#D7A98B]/45" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
