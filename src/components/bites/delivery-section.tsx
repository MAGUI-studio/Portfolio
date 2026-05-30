import Image from "next/image";
import { bitesImages, bitesWhatsapp } from "./data";
import { bitesHeading } from "./fonts";
import Link from "next/link";

const deliveryFlow = [
  {
    number: "01",
    label: "preparo",
    title: "Fritura no ponto.",
    text: "Salgado quente, crosta dourada e processo pensado para manter textura.",
    image: bitesImages.processo,
    alt: "Processo de fritura dos salgados Bites",
  },
  {
    number: "02",
    label: "entrega",
    title: "Pedido pronto para sair.",
    text: "Embalagem forte, leitura rapida e uma entrega com presenca propria.",
    image: bitesImages.delivery,
    alt: "Delivery Bites entregando sacola",
  },
] as const;

export function BitesDeliverySection() {
  return (
    <section
      id="delivery"
      className="w-full bg-[#F5F5F5] text-[#030401] antialiased selection:bg-[#FB5F00] selection:text-white"
    >
      <div className="w-full border-b border-[#030401] px-4 pb-12 md:px-12 md:pb-16">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 bg-[#FB5F00]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#030401]/60">
                Preparo e entrega
              </p>
            </div>
            <h2
              className={`${bitesHeading.className} text-6xl font-black uppercase leading-[0.85] tracking-tighter sm:text-7xl md:text-8xl lg:text-[9rem]`}
            >
              Frito na hora.
              <br />
              <span className="text-[#FB5F00]">Entregue com cuidado.</span>
            </h2>
          </div>

          <p className="max-w-3xl border-l-2 border-[#FB5F00] pl-4 text-base font-medium leading-8 text-[#030401]/76 md:text-lg">
            Da fritura ao delivery, a Bites cuida da crocancia, da temperatura e
            da apresentacao para o pedido chegar bonito, quente e pronto para a
            primeira mordida.
          </p>
        </div>
      </div>

      <div className="grid w-full overflow-hidden border-b border-[#030401] lg:grid-cols-2">
        {deliveryFlow.map((item, index) => (
          <article
            key={item.title}
            className={`group relative min-h-[560px] overflow-hidden ${
              index === 0
                ? "z-10 lg:-mr-24 lg:[clip-path:polygon(0_0,100%_0,86%_100%,0_100%)]"
                : "border-t border-[#030401] lg:-ml-24 lg:border-t-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />

            <div
              className={`absolute inset-x-0 bottom-0 z-10 p-6 text-white md:p-10 ${index === 1 ? "lg:pl-32" : ""}`}
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="text-xs font-bold text-[#FB5F00]">
                  [ {item.number} ]
                </span>
                <span className="border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm">
                  {item.label}
                </span>
              </div>

              <h3
                className={`${bitesHeading.className} text-3xl uppercase leading-none md:text-5xl`}
              >
                {item.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75">
                {item.text}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FB5F00] transition-transform duration-300 group-hover:translate-x-2">
                <span>
                  {index === 0 ? "Preparado na hora" : "Pronto para chegar"}
                </span>
                <span className="font-bold">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="w-full px-4 pt-12 md:px-12 md:pt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h4 className="text-xl font-black uppercase tracking-tight text-[#030401]">
            Pronto para a primeira mordida?
          </h4>
          <p className="text-xs text-[#030401]/50">
            Lote atual disponível. Fritos sob demanda rigorosa.
          </p>
        </div>
        <Link
          href={bitesWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#030401] hover:bg-[#FB5F00] text-white text-xs  uppercase tracking-widest px-10 py-5 transition-colors duration-300 w-full sm:w-auto text-center"
        >
          Pedir agora
        </Link>
      </div>
    </section>
  );
}
