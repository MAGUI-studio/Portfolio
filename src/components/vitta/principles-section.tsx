import { principles } from "./data";
import { syncopate } from "./fonts";

export function VittaPrinciplesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] px-6 py-28 text-white md:px-12 md:py-36">

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="vitta-reveal grid gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#D7A98B]">
              critério clínico
            </p>
            <h2 className={`${syncopate.className} mt-6 text-4xl font-light leading-[1.06] tracking-[-0.04em] sm:text-5xl md:text-6xl`}>
              precisão antes da intervenção.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-white/52 md:text-lg">
            O cuidado não começa pela técnica mais forte. Começa por entender prioridade, tolerância e manutenção possível.
          </p>
        </div>

        <div className="vitta-reveal vitta-delay-1 mt-20 grid gap-6 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group min-h-[340px] bg-white/[0.025] p-7 transition-colors duration-500 hover:bg-white/[0.055]">
              <Icon size={25} weight="light" className="text-[#D7A98B]/78" />
              <div className="mt-24">
                <h3 className="text-3xl font-light leading-tight tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#D7A98B]">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-white/46 md:text-base">{text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="vitta-reveal mt-12 max-w-4xl text-xl font-light leading-relaxed text-white/64 md:text-2xl">
          Quando a pele não está pronta, o melhor caminho é preparar. Quando está pronta, a dose precisa respeitar a resposta biológica.
        </p>
      </div>
    </section>
  );
}
