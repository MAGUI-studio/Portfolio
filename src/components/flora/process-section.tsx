import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { floraProcessSteps, floraWhatsappHref } from "./data";
import { FloraHoverLink, FloraImageReveal, FloraReveal } from "./motion";

export function FloraProcessSection() {
  return (
    <section
      id="atendimento"
      className="overflow-hidden bg-[#FAFAFA] px-5 py-20 text-[#3A402C] md:px-8 md:py-24 lg:px-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
        <FloraReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#70835B]">
            Atendimento
          </p>
          <h2 className="mt-5 text-5xl leading-[0.92] md:text-7xl">
            Um processo simples para escolher melhor.
          </h2>
        </FloraReveal>

        <FloraReveal delay={0.06}>
          <p className="text-base leading-8 text-[#5A4A3D]/86 md:text-lg">
            A experiência da Flora funciona como uma conversa orientada. Em vez
            de decidir no improviso, você sai com uma escolha mais segura para o
            espaço e para a rotina.
          </p>
        </FloraReveal>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {floraProcessSteps.map((item, index) => (
          <FloraImageReveal key={item.eyebrow} delay={index * 0.06}>
            <article className="relative h-full overflow-hidden rounded-[34px] border border-[#EAEAEA] bg-white px-6 py-7 shadow-[0_14px_34px_rgba(58,64,44,0.035)]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#70835B]">
                {item.eyebrow}
              </span>
              <h3 className="mt-5 text-3xl leading-tight">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5A4A3D]/82">
                {item.text}
              </p>
            </article>
          </FloraImageReveal>
        ))}
      </div>

      <FloraReveal
        delay={0.12}
        className="mt-10 flex flex-col gap-4 rounded-[30px] border border-[#EAEAEA] bg-white px-6 py-6 text-[#3A402C] shadow-[0_14px_34px_rgba(58,64,44,0.03)] md:flex-row md:items-center md:justify-between"
      >
        <div className="max-w-[620px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#70835B]">
            Próximo passo
          </p>
          <p className="mt-3 text-2xl leading-tight">
            Se quiser, a Flora já pode indicar um caminho com base no seu
            ambiente.
          </p>
        </div>
        <FloraHoverLink
          href={floraWhatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-[#EAEAEA] bg-white px-5 py-3 text-sm font-semibold text-[#24301C] shadow-[0_10px_24px_rgba(58,64,44,0.04)]"
        >
          Solicitar orientação
          <ArrowUpRight size={16} />
        </FloraHoverLink>
      </FloraReveal>
    </section>
  );
}
