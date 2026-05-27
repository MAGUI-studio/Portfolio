import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";

import { images, links, products } from "./data";
import { syncopate } from "./fonts";

export function VittaProductsSection() {
  return (
    <section id="produtos" className="relative overflow-hidden bg-[#0A0A0A] px-6 py-28 text-white md:px-12 md:py-36">
      <Image
        src={images.products}
        fill
        alt="Produtos VITTA usados nas consultas e disponíveis para venda"
        sizes="100vw"
        className="absolute inset-0 object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A0A0A_0%,rgba(10,10,10,0.86)_38%,rgba(10,10,10,0.26)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]/10" />

      <div className="relative z-10 mx-auto grid min-h-[760px] max-w-[1600px] gap-16 lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
        <div className="vitta-reveal flex flex-col justify-between gap-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#D7A98B]">
              {"// home care VITTA"}
            </p>
            <h2 className={`${syncopate.className} mt-6 text-4xl font-light leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl`}>
              produtos que continuam o tratamento fora da clínica.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/52 md:text-lg">
              Os produtos usados em consulta também ficam disponíveis para venda na VITTA, sempre com indicação individual e orientação de uso.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 backdrop-blur-md">
            {products.map((product, index) => (
              <article key={product.title} className="group grid gap-5 bg-[#0A0A0A]/62 p-6 transition-colors duration-300 hover:bg-[#0A0A0A]/78 md:grid-cols-[0.18fr_0.82fr]">
                <div>
                  <span className={`${syncopate.className} text-xl font-light text-[#D7A98B]`}>0{index + 1}</span>
                  <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.28em] text-white/28">{product.category}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-light leading-tight tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#D7A98B]">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/46 md:text-base">{product.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="vitta-reveal vitta-delay-1 flex justify-end lg:pb-8">
          <div className="max-w-xl border border-white/10 bg-[#0A0A0A]/46 p-7 backdrop-blur-md md:p-9">
            <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-[#D7A98B]">
              {"// prescrição assistida"}
            </p>
            <p className="mt-5 max-w-xl text-2xl font-light leading-snug text-white/88">
              A rotina de casa é parte do resultado clínico, não um complemento aleatório.
            </p>
            <Link
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="vitta-cta group/link mt-8 inline-flex items-center gap-3 border border-white/12 px-6 py-4 font-mono text-[11px] uppercase tracking-widest text-white transition-all duration-300 hover:border-[#D7A98B] hover:bg-[#D7A98B] hover:text-[#0A0A0A]"
            >
              Consultar disponibilidade
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
