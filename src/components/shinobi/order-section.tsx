import Image from "next/image";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { shinobiFlavors, shinobiWhatsappHref } from "./data";

const getFlavorWhatsappHref = (flavorName: string) =>
  `${shinobiWhatsappHref}%20Sabor%3A%20${encodeURIComponent(flavorName)}`;

export function ShinobiOrderSection() {
  return (
    <section
      id="pedido"
      className="bg-[#050302] px-5 py-28 text-white md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1540px]">
        <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/38">
              pedido rapido
            </p>
            <h2 className="mt-6 text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl">
              Escolha seu sabor e chame no WhatsApp.
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-white/58">
              A prateleira fica escura para a cor trabalhar. Selecione a lata
              que combina com sua missao e envie o pedido direto para o
              atendimento.
            </p>
            <a
              href={shinobiWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase text-black transition hover:-translate-y-1 hover:bg-[#F4261C] hover:text-white"
            >
              <WhatsappLogo size={20} weight="bold" />
              Pedir no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shinobiFlavors.map((flavor) => (
            <article
              key={flavor.slug}
              className="group overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              <figure className="relative h-[520px] overflow-hidden bg-[#0A0A0A]">
                <Image
                  src={flavor.final}
                  alt={`Lata SHINOBI sabor ${flavor.name}`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(0,0,0,0.84))]" />
                <span
                  className="absolute left-5 top-5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black"
                  style={{ backgroundColor: flavor.accent }}
                >
                  {flavor.profile}
                </span>
              </figure>

              <div className="p-6">
                <h3 className="text-4xl font-black tracking-[-0.05em]">
                  {flavor.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  {flavor.description}
                </p>
                <a
                  href={getFlavorWhatsappHref(flavor.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:text-[#F4261C]"
                >
                  Pedir este sabor
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>

              <div
                className="h-1.5"
                style={{ backgroundColor: flavor.accent }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
