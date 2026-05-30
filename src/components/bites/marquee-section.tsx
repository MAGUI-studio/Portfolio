import { bitesHeading } from "./fonts";

const words = ["crocante", "quente", "padronizado", "delivery-first", "premium", "sem frescura"];

export function BitesMarqueeSection() {
  return (
    <section className="overflow-hidden bg-[#FB5F00] py-5 text-[#030401]">
      <div className={`${bitesHeading.className} flex w-max animate-[bites-marquee_18s_linear_infinite] gap-6 whitespace-nowrap text-5xl font-extrabold uppercase tracking-[-0.04em] md:text-7xl`}>
        {[...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-6">
            {word}
            <span className="h-3 w-3 rounded-full bg-[#030401]" />
          </span>
        ))}
      </div>
    </section>
  );
}
