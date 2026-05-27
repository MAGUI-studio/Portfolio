import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

import { images, links, method, protocols } from "./data";
import { syncopate } from "./fonts";

export function VittaProtocolsSection() {
  return (
    <section
      id="protocolos"
      className="relative -mt-20 overflow-hidden bg-[#27362D] px-6 pb-32 pt-44 text-white [clip-path:polygon(0_5.5rem,100%_0,100%_calc(100%_-_5rem),0_100%)] md:px-12 md:pb-44 md:pt-56"
    >
      <Image
        src={images.wallpaper}
        width={2200}
        height={1500}
        alt="Textura visual de fundo para a matriz terapêutica VITTA"
        className="absolute inset-0 size-full object-cover opacity-95"
      />
      <div className="absolute inset-0 bg-[#27362D]/54" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(39,54,45,0.88)_0%,rgba(39,54,45,0.62)_48%,rgba(39,54,45,0.38)_100%)]" />
      <div className="pointer-events-none absolute right-[-10%] top-20 size-[620px] rounded-full bg-white/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="vitta-reveal grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#F1C6AB]">
              matriz terapêutica
            </p>
            <h2 className={`${syncopate.className} mt-6 text-3xl font-light leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl`}>
              a pele no centro. o protocolo ao redor.
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              A conduta é desenhada conforme o que a pele permite agora: recuperar barreira, uniformizar tom,
              estimular colágeno ou manter resultado.
            </p>
            <Link
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="vitta-cta group inline-flex w-fit items-center justify-center gap-3 bg-white/18 px-8 py-5 font-mono text-[11px] uppercase tracking-widest text-white shadow-[0_20px_80px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-[#27362D]"
            >
              Desenhar protocolo privado
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="vitta-reveal vitta-delay-1 mt-20 overflow-hidden border border-white/24 bg-white/[0.16] shadow-[0_30px_120px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
          <div className="grid gap-px bg-white/18 lg:grid-cols-[0.34fr_0.66fr]">
            <div className="bg-white/[0.12] p-8 md:p-10 lg:p-12">
              <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-white/58">conceito central</p>
              <h3 className={`${syncopate.className} mt-7 text-3xl font-light tracking-wide text-white md:text-4xl`}>
                DIAGNÓSTICO VIVO
              </h3>
              <p className="mt-12 max-w-sm text-sm leading-relaxed text-white/68 md:text-base">
                A VITTA não empilha procedimentos. Lê a pele, define prioridades e revisa a conduta conforme resposta, tolerância e rotina.
              </p>
            </div>

            <div className="bg-[#0A0A0A]/18">
              {protocols.map((protocol, index) => (
                <article
                  key={protocol.title}
                  className="group grid gap-5 border-b border-white/16 px-7 py-7 last:border-b-0 transition-colors duration-300 hover:bg-white/[0.12] md:grid-cols-[0.18fr_0.3fr_0.52fr] md:items-start md:px-9"
                >
                  <div className="flex items-center justify-between md:block">
                    <span className={`${syncopate.className} text-2xl font-light text-[#F1C6AB]`}>0{index + 1}</span>
                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/50 md:mt-5">{protocol.tag}</p>
                  </div>
                  <h3 className="text-2xl font-light leading-tight tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#F1C6AB]">
                    {protocol.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/66 md:text-base">{protocol.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div id="metodo" className="relative mt-28 scroll-mt-28 md:mt-36">
          <div className="vitta-reveal grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#F1C6AB]">
                método VITTA
              </p>
              <h2 className={`${syncopate.className} mt-6 text-3xl font-light leading-[1.1] tracking-[-0.04em] sm:text-5xl md:text-6xl`}>
                do sinal clínico ao plano em movimento.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Você entende o que tratar agora, o que preparar antes, quais tecnologias entram depois e como manter o resultado sem transformar cuidado em excesso.
            </p>
          </div>

          <div className="vitta-reveal vitta-delay-1 mt-16 overflow-hidden border border-white/22 bg-white/[0.14] shadow-[0_28px_110px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
            <div className="grid gap-px bg-white/16 lg:grid-cols-5">
              {method.map(([number, title, text]) => (
                <article key={title} className="group min-h-[280px] bg-[#0A0A0A]/18 p-7 transition-colors duration-300 hover:bg-white/[0.12]">
                  <span className={`${syncopate.className} text-2xl font-light text-[#F1C6AB]`}>{number}</span>
                  <h3 className="mt-16 text-xl font-light leading-snug tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#F1C6AB] lg:text-lg xl:text-xl">
                    {title}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-white/64 lg:text-xs xl:text-sm">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="vitta-reveal mt-8 flex w-full flex-wrap justify-between gap-4 bg-white/[0.12] px-8 py-5 font-mono text-[9px] uppercase tracking-[0.3em] text-white/58 backdrop-blur-xl">
            <span className="text-[#F1C6AB]">01. leitura</span>
            <span>02. preparo</span>
            <span>03. procedimento</span>
            <span>04. retorno</span>
            <span>05. manutenção</span>
          </div>
        </div>
      </div>
    </section>
  );
}
