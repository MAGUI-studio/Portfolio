"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Onest, Playwrite_US_Modern } from "next/font/google";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ChefHat,
  Clock,
  ForkKnife,
  List,
  SealCheck,
  ShoppingBag,
  Sparkle,
  Star,
  X,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, amount: 0.18 } as const;

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 54 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease },
  },
};

const staggerReveal: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04, y: 28 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

const logoFont = Playwrite_US_Modern({
  display: "swap",
  weight: "400",
});

const maguiFont = Onest({
  display: "swap",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const images = {
  hero: "/images/lacreme/hero.png",
  display:
    "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&fm=jpg&q=84&w=1600",
  bolo_morango: "/images/lacreme/bolo_morango.mp4",
  table:
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&fm=jpg&q=84&w=1800",
  donuts:
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&fm=jpg&q=84&w=1400",
  macarons:
    "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&fm=jpg&q=84&w=1400",
  redvelvet: "/images/lacreme/naked_cake_morango.png",
  berries:
    "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&fm=jpg&q=84&w=1400",
  torta_frutas_vermelhas: "/images/lacreme/torta_frutas_vermelhas.png",
  torta_ferrero: "/images/lacreme/torta_ferrero.png",
  caixa_macarons: "/images/lacreme/caixa_macaron.png",
  torta_limao: "/images/lacreme/torta_limao.png",
  flor_de_baunilha: "/images/lacreme/flor_de_baunilha.png",
  brownie_nozes: "/images/lacreme/brownie_nozes.png",
  macaron_pistache: "/images/lacreme/macaron_pistache.png",
  mil_folhas_de_baunilha: "/images/lacreme/mil_folhas_de_baunilha.png",
  cookies: "/images/lacreme/cookies.png",
  processo_la_creme: "/images/lacreme/processo_la_creme.png",
  cupcake_morango: "/images/lacreme/cupcake_morango.png",
  copo_da_felicidade: "/images/lacreme/copo_da_felicidade.png",
  floresta_negra: "/images/lacreme/floresta_negra.png",
  embalagem_bolo: "/images/lacreme/embalagem_bolo.png",
  embalagem_doce: "/images/lacreme/embalagem_doce.png",
  embalagem_docinhos: "/images/lacreme/embalagem_docinhos.png",
  embalagem_sobremesa: "/images/lacreme/embalagem_sobremesa.png",
};

const video = "/images/lacreme/bolo_morango.mp4";
const whatsapp =
  "https://wa.me/5511999999999?text=Oi%2C%20La%20Cr%C3%A8me%21%20Quero%20fazer%20uma%20encomenda.";

const nav = [
  { label: "Vitrine", href: "#vitrine" },
  { label: "Atelier", href: "#atelier" },
  { label: "Encomendas", href: "#encomendas" },
  { label: "Menu", href: "#menu" },
  { label: "Contato", href: "#contato" },
];

const signatures = [
  {
    name: "Torta de Frutas Vermelhas",
    detail: "Massa amanteigada, creme leve e frutas vermelhas",
    price: "R$ 148",
    image: images.torta_frutas_vermelhas,
  },
  {
    name: "Caixa de Macarons",
    detail: "12 unidades para cafe, presente ou reuniao",
    price: "R$ 86",
    image: images.caixa_macarons,
  },
  {
    name: "Torta de Ferrero Rocher",
    detail: "Mousse 64%, crocante de avela e glaçagem espelhada",
    price: "R$ 172",
    image: images.torta_ferrero,
  },
];

const steps = [
  [
    "01",
    "Alinhamento e Formato",
    "Definição da estrutura ideal para a sua proposta, seja uma mesa de doces contemporânea, caixas corporativas ou bolos conceituais.",
  ],
  [
    "02",
    "Desenho de Sabores",
    "Planejamento meticuloso do perfil sensorial: equilibramos as notas de acidez, texturas e eventuais restrições alimentares.",
  ],
  [
    "03",
    "Produção sob Demanda",
    "Execução artesanal em pequenas jornadas exclusivas, garantindo o ponto exato de frescor, montagem e acabamento.",
  ],
  [
    "04",
    "Logística e Entrega",
    "Envio seguro com transporte climatizado e agendamento rigoroso, acompanhado de orientações de serviço e conservação.",
  ],
];

const menu = [
  "Bolos conceituais com acabamento botânico",
  "Tortas de frutas sazonais e creme leve",
  "Cookies artesanais de chocolate belga e flor de sal",
  "Macarons autorais em caixas para presente",
  "Mesa de doces estruturada para celebrações íntimas",
  "Café, fatia do dia e sobremesas individuais",
];

const sweets = [
  {
    title: "Brownie Belga",
    note: "Base densa de cacau intenso, finalizada com a crocância de nozes selecionadas.",
    image: images.brownie_nozes,
  },
  {
    title: "Macaron de Pistache",
    note: "Casquinha de amêndoas perfeitamente crocante com ganache aveludada de pistache puro.",
    image: images.macaron_pistache,
  },
  {
    title: "Mil Folhas de Baunilha",
    note: "Camadas ultra crocantes de massa folhada artesanal intercaladas com creme leve de confeiteiro.",
    image: images.mil_folhas_de_baunilha,
  },
  {
    title: "Flor de Baunilha",
    note: "Açúcar de confeiteiro polvilhado sobre pétalas de massa folhada e creme de baunilha real.",
    image: images.flor_de_baunilha,
  },
];

const occasions = [
  "Celebrações Íntimas",
  "Relações Corporativas",
  "Casamentos Civis & Mini Weddings",
  "Chás da Tarde Editoriais",
  "Sobremesas para Jantares",
  "Lançamentos & Eventos de Marca",
];

const heroBadges = [
  "Fruta Fresca",
  "Baunilha Real",
  "Cacau 64%",
  "Massa Amanteigada",
  "Doce Artesanal",
];

const dailyDrops = [
  "Bolo de Amora",
  "Cookie de Flor de Sal",
  "Torta de Limão",
  "Macaron de Pistache",
  "Entremet de Cacau",
  "Bolo de Cenoura com Chocolate",
  "Brownie Tradicional",
  "Cheesecake de Frutas Vermelhas",
];

const tastingNotes = [
  [
    "Textura & Base",
    "Massa amanteigada e delicada, projetada para ceder com precisão antes do creme.",
  ],
  [
    "Contraste Cítrico",
    "Notas vibrantes de frutas frescas, calculadas para despertar e limpar o paladar.",
  ],
  [
    "Densidade Leve",
    "Recheio aveludado e com doçura equilibrada, priorizando a leveza em cada camada.",
  ],
  [
    "Final Aromático",
    "Sinfonia discreta de baunilha real, raspas cítricas e o calor das castanhas tostadas.",
  ],
];

const testimonials = [
  [
    "A mesa parecia pequena ate todo mundo repetir.",
    "casamento civil, 38 convidados",
  ],
  [
    "O bolo chegou lindo e continuou perfeito depois do jantar.",
    "aniversário em casa",
  ],
  ["Virou presente fixo para clientes importantes.", "caixa corporativa"],
];

function CTA({
  children,
  href = "#contato",
  light = false,
}: {
  children: string;
  href?: string;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={
        light
          ? "group inline-flex items-center justify-center gap-3 bg-white px-7 py-5 text-sm font-semibold text-[#2b1714] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd8df]"
          : "group inline-flex items-center justify-center gap-3 bg-[#2b1714] px-7 py-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#9d2d40]"
      }
    >
      {children}
      <ArrowRight
        size={17}
        className="transition duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}

function WhatsAppCTA({ light = false }: { light?: boolean }) {
  return (
    <a
      href={whatsapp}
      className={
        light
          ? "inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-5 text-sm font-semibold text-[#12351f] shadow-[0_18px_48px_rgba(37,211,102,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-white"
          : "inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-5 text-sm font-semibold text-[#12351f] transition duration-300 hover:-translate-y-1 hover:bg-[#b8f7cb]"
      }
    >
      Pedir no WhatsApp
      <ArrowRight size={17} />
    </a>
  );
}

function AnimatedSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={sectionReveal}
    >
      {children}
    </motion.section>
  );
}

export default function Landing16ConfeitariaLaCreme() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#fff8ef] text-[#2b1714]">
      <style>{`
        @keyframes pastry-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes pastry-float {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-14px) rotate(1deg); }
        }

        @keyframes pastry-glow {
          0%, 100% { opacity: 0.34; }
          50% { opacity: 0.74; }
        }

        @keyframes pastry-carousel {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }

        @keyframes cream-rise {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes pastry-drift {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -18px, 0) rotate(0.8deg); }
        }

        @keyframes pastry-shimmer {
          0% { transform: translateX(-120%); opacity: 0; }
          28% { opacity: 0.72; }
          100% { transform: translateX(120%); opacity: 0; }
        }

        .sweet-carousel:hover {
          animation-play-state: paused;
        }

        .cream-reveal {
          animation: cream-rise 0.8s cubic-bezier(${ease.join(",")}) both;
        }

        .pastry-drift {
          animation: pastry-drift 8s ease-in-out infinite;
        }

        .pastry-shimmer::after {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.36), transparent);
          content: "";
          inset: 0;
          position: absolute;
          transform: translateX(-120%);
          animation: pastry-shimmer 4.8s ease-in-out infinite;
        }
      `}</style>

      <header className="relative z-30 border-b border-[#2b1714]/10 bg-[#fff8ef]">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-5 px-5 py-5 md:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:py-6 lg:px-10">
          <div className="hidden max-w-xs text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9d2d40] lg:block">
            atelier aberto de terça a sábado / retiradas com hora marcada
          </div>

          <a
            href="#inicio"
            onClick={() => setIsMenuOpen(false)}
            className="justify-self-start lg:justify-self-center"
          >
            <span
              className={`${logoFont.className} text-4xl leading-none tracking-[-0.08em] text-[#2b1714] sm:text-5xl`}
            >
              La Crème
            </span>
          </a>

          <div className="hidden items-center gap-3 lg:flex lg:justify-self-end">
            <a
              href="https://www.instagram.com/"
              className="rounded-full border border-[#2b1714]/14 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2b1714]/62 transition duration-300 hover:border-[#9d2d40] hover:text-[#9d2d40]"
            >
              Instagram
            </a>
            <a
              href={whatsapp}
              className="inline-flex items-center gap-3 rounded-full bg-[#2b1714] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(43,23,20,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#9d2d40]"
            >
              Encomendar
              <ShoppingBag size={16} />
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="group inline-flex size-12 items-center justify-center rounded-full border border-[#2b1714]/12 bg-white text-[#2b1714] shadow-[0_14px_34px_rgba(43,23,20,0.08)] transition duration-300 hover:border-[#9d2d40] hover:text-[#9d2d40] lg:hidden"
          >
            <motion.span
              key={isMenuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -18, scale: 0.82 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.22, ease }}
            >
              {isMenuOpen ? <X size={22} /> : <List size={24} />}
            </motion.span>
          </button>
        </div>

        <div className="hidden border-t border-[#2b1714]/10 bg-white/58 lg:block">
          <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-6 overflow-x-auto px-5 py-3 md:px-8 lg:px-10">
            <nav className="flex min-w-max items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2b1714]/58">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition duration-300 hover:text-[#9d2d40]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <p className="hidden min-w-max items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9d2d40] md:flex">
              <span className="size-1.5 rounded-full bg-[#25d366]" />
              agenda da semana aberta
            </p>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              className="border-t border-[#2b1714]/10 px-5 pb-5 md:px-8 lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.34, ease }}
            >
              <motion.div
                className="mx-auto mt-2 max-w-[1540px] overflow-hidden rounded-[30px] border border-[#2b1714]/10 bg-white shadow-[0_24px_70px_rgba(43,23,20,0.12)]"
                initial={{ y: -18, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: -12, scale: 0.98 }}
                transition={{ duration: 0.34, ease }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={images.torta_frutas_vermelhas}
                    alt="Torta artesanal La Crème"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2b1714]/82 via-[#2b1714]/38 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#ffd8df]">
                      menu la crème
                    </p>
                    <p className="mt-3 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.04em]">
                      Encomendas, vitrine e doces da semana.
                    </p>
                  </div>
                </div>

                <nav className="grid p-3">
                  {nav.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between rounded-[22px] px-4 py-4 text-[#2b1714] transition duration-300 hover:bg-[#fff1f3]"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9d2d40]/58">
                          0{index + 1}
                        </span>
                        <span className="text-lg font-semibold tracking-[-0.03em]">
                          {item.label}
                        </span>
                      </span>
                      <ArrowRight
                        size={16}
                        className="text-[#9d2d40] transition duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  ))}
                </nav>

                <div className="grid gap-3 border-t border-[#2b1714]/10 bg-[#fff8ef] p-4">
                  <a
                    href={whatsapp}
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2b1714] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#9d2d40]"
                  >
                    Pedir no WhatsApp
                    <ShoppingBag size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center rounded-full border border-[#2b1714]/12 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#2b1714]/62 transition duration-300 hover:border-[#9d2d40] hover:text-[#9d2d40]"
                  >
                    Instagram
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <motion.section
        id="inicio"
        className="relative min-h-[1040px] overflow-hidden px-6 py-14 text-white md:px-12 md:py-18 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease }}
      >
        <Image
          src={images.hero}
          alt="Bolo de chocolate com cobertura cremosa e morangos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_28%,rgba(255,216,223,0.16),transparent_28%),linear-gradient(110deg,rgba(28,18,16,0.96)_0%,rgba(28,18,16,0.86)_42%,rgba(28,18,16,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1c1210] via-[#1c1210]/62 to-transparent" />
        <div className="absolute top-0 left-6 h-full w-px bg-white/10 md:left-12 lg:left-20" />
        <div className="absolute top-0 right-6 h-full w-px bg-white/5 md:right-12 lg:right-20" />

        <div className="relative z-10 mx-auto flex min-h-[920px] max-w-[1600px] flex-col justify-between pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease }}
            className="grid gap-12 lg:grid-cols-[0.66fr_0.34fr] lg:items-start"
          >
            <div className="pl-4 md:pl-8">
              <div className="flex flex-wrap items-center gap-3">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] backdrop-blur-sm">
                  <Sparkle size={14} weight="fill" className="text-[#ffd8df]" />
                  confeitaria artesanal
                </p>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                  <Clock size={13} />
                  fornadas pequenas
                </p>
              </div>

              <h1 className="mt-14 max-w-6xl text-5xl font-light leading-[0.95] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[124px] xl:text-[142px]">
                Sobremesas feitas para virar lembrança.
              </h1>

              <p className="mt-9 max-w-2xl text-lg font-light leading-9 text-white/76 md:text-2xl md:leading-10">
                Bolos, tortas e caixas autorais preparados em pequenas fornadas,
                com fruta fresca, creme leve e acabamento de ateliê.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18, rotate: 1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease }}
              className="hidden border border-white/14 bg-[#fff8ef] p-5 text-[#2b1714] shadow-[0_28px_80px_rgba(0,0,0,0.22)] lg:block scale-80"
              style={{ animation: "pastry-float 7s ease-in-out infinite" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.redvelvet}
                  alt="Naked cake de red velvet com morangos"
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9d2d40]">
                    o clássico
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold leading-none tracking-[-0.04em]">
                    Red Velvet
                  </h3>
                </div>
                <p className="text-right text-xs leading-6 text-[#2b1714]/58">
                  massa aveludada
                  <br />
                  creme de ninho e morangos
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 pl-4 md:pl-8 lg:grid-cols-12 lg:gap-8 lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="max-w-2xl lg:col-span-7 xl:col-span-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTA light>Ver menu de encomendas</CTA>
                <WhatsAppCTA light />
                <a
                  href="#vitrine"
                  className="inline-flex items-center justify-center border-b border-white/40 px-2 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-[#ffd8df] hover:text-[#ffd8df]"
                >
                  Explorar vitrine
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/12 py-5">
                {[
                  ["24h", "pedido mínimo"],
                  ["12", "sabores sazonais"],
                  ["100%", "feito no ateliê"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border-r border-white/12 pr-4 last:border-r-0"
                  >
                    <p className="text-3xl font-semibold tracking-[-0.05em] text-[#ffd8df]">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/48">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
              className="w-full max-w-md border-l border-white/18 pl-6 lg:col-span-5 lg:ml-auto"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffd8df]">
                assinatura da casa
              </p>
              <h3 className="mt-4 text-3xl font-light leading-tight text-white">
                Camadas leves, fruta viva e aquele acabamento que chega bonito
                na mesa.
              </h3>
              <div className="mt-8 flex flex-wrap gap-2">
                {heroBadges.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/62"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 pl-4 sm:flex-row sm:items-center sm:justify-between md:pl-8"
          >
            <p className="max-w-2xl text-sm leading-7 text-white/52">
              Para aniversários, jantares, presentes e mesas pequenas que pedem
              um doce com presença, sem excesso.
            </p>
            <a
              href={whatsapp}
              className="inline-flex items-center gap-3 self-start text-[10px] font-bold uppercase tracking-[0.25em] text-white transition-colors hover:text-[#ffd8df] sm:self-auto"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#25d366] animate-pulse" />
              reservar sua data via whatsapp
            </a>
          </motion.div>
        </div>
      </motion.section>

      <AnimatedSection className="bg-[#ffd8df] py-7 text-[#2b1714]">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap text-4xl font-semibold tracking-[-0.05em] md:text-6xl"
          style={{ animation: "pastry-marquee 26s linear infinite" }}
        >
          {[...dailyDrops, ...dailyDrops, ...dailyDrops].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-10"
            >
              {item}
              <span className="size-3 rounded-full bg-[#9d2d40]" />
            </span>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="vitrine"
        className="px-5 py-24 md:px-8 md:py-32 lg:px-10"
      >
        <motion.div
          className="mx-auto max-w-[1540px]"
          variants={staggerReveal}
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <motion.div variants={itemReveal}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                vitrine
              </p>
              <h2 className="mt-7 max-w-4xl text-5xl font-semibold leading-none tracking-[-0.05em] md:text-7xl">
                Doces frescos, bonitos e prontos para roubar a mesa.
              </h2>
            </motion.div>
            <motion.p
              className="max-w-xl text-lg leading-8 text-[#2b1714]/62"
              variants={itemReveal}
            >
              Pequenas quantidades, sabores sazonais e uma seleção feita para
              café, presente ou celebração de última hora.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {signatures.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease }}
                whileHover={{ y: -12, transition: { duration: 0.35, ease } }}
                className="group overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(43,23,20,0.07)]"
              >
                <div className="relative h-[330px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 768px) 31vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b1714]/58 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#fff8ef] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9d2d40]">
                    vitrine 0{index + 1}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                    {item.name}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#2b1714]/62">
                    {item.detail}
                  </p>
                  <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#2b1714]/10 pt-6">
                    <p className="text-4xl font-semibold text-[#9d2d40]">
                      {item.price}
                    </p>
                    <a
                      href={whatsapp}
                      className="inline-flex items-center gap-2 rounded-full bg-[#2b1714] px-4 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-[#9d2d40]"
                    >
                      pedir
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="px-5 pb-24 md:px-8 md:pb-32 lg:px-10">
        <motion.div
          className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.38fr_0.62fr]"
          variants={staggerReveal}
        >
          <motion.div
            className="relative overflow-hidden rounded-[28px] bg-[#9d2d40] p-8 text-white md:p-10 flex flex-col justify-between min-h-[400px] pastry-shimmer"
            variants={itemReveal}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <Star size={44} className="text-[#ffd8df]" />
            <div>
              <h2 className="text-5xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
                Feito para pausar o tempo a cada mordida.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/68">
                Explore nossa seleção. Cada receita equilibra perfeitamente
                textura, acidez e um final inesquecível.
              </p>
            </div>
          </motion.div>

          <motion.div className="overflow-hidden" variants={itemReveal}>
            {/* Adicionado a classe hover:[animation-play-state:paused] para parar o carrossel no mouse hover */}
            <div
              className="sweet-carousel flex w-max gap-6 hover:[animation-play-state:paused] cursor-pointer"
              style={{ animation: "pastry-carousel 42s linear infinite" }}
            >
              {[...sweets, ...sweets].map((item, index) => (
                <motion.figure
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % sweets.length) * 0.03,
                    ease,
                  }}
                  className="w-[330px] shrink-0 overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(43,23,20,0.07)] md:w-[390px]"
                >
                  <div className="relative h-[360px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="390px"
                      className="object-cover transition duration-700 hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="p-6">
                    <h3 className="mt-6 text-3xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#2b1714]/62">
                      {item.note}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection
        id="atelier"
        className="bg-[#f4e6d6] px-5 py-24 md:px-8 md:py-32 lg:px-10"
      >
        <motion.div
          className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.58fr_0.42fr]"
          variants={staggerReveal}
        >
          <motion.figure
            className="relative min-h-[660px] overflow-hidden rounded-[28px]"
            variants={imageReveal}
            whileHover={{ scale: 0.985 }}
          >
            <Image
              src={images.processo_la_creme}
              alt="Bolo de chocolate sendo preparado com frutas"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 max-w-md rounded-[24px] bg-white/90 p-6 backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9d2d40]">
                atelier
              </p>
              <p className="mt-8 text-3xl font-semibold leading-tight">
                Massa, recheio e acabamento feitos perto da entrega.
              </p>
            </div>
          </motion.figure>

          <motion.div
            className="grid content-between gap-12 rounded-[28px] bg-[#2b1714] p-8 text-white md:p-10"
            variants={itemReveal}
            whileHover={{ y: -8 }}
          >
            <ChefHat size={44} className="text-[#ffd8df]" />
            <div>
              <h2 className="text-5xl font-semibold leading-none tracking-[-0.05em] md:text-6xl">
                Receita boa tem técnica, mas também tem gesto.
              </h2>
              <p className="mt-8 text-lg leading-8 text-white/64">
                Montamos doces em lotes pequenos para controlar textura, brilho,
                ponto de creme e conservação até a hora de servir.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="relative bg-[#2b1714] text-white overflow-hidden min-h-[640px] lg:min-h-[800px] flex items-center">
        {/* Container do Conteúdo (Texto) */}
        <div className="relative z-10 mx-auto w-full max-w-[1540px] px-5 py-24 md:px-8 md:py-32 lg:px-10">
          <motion.div
            className="max-w-xl lg:max-w-[38%]"
            variants={staggerReveal}
          >
            <p className="inline-flex items-center gap-3 rounded-full bg-[#ffd8df] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2b1714]">
              <ForkKnife size={17} weight="bold" />
              processo artesanal
            </p>
            <motion.h2
              className="mt-10 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl xl:text-7xl"
              variants={itemReveal}
            >
              Onde o tempo dita o ponto perfeito.
            </motion.h2>
            <motion.p
              className="mt-8 text-lg leading-8 text-white/64"
              variants={itemReveal}
            >
              A beleza está nos movimentos precisos, no caimento lento e no
              contraste que desperta os sentidos antes do primeiro pedaço.
            </motion.p>
          </motion.div>
        </div>

        {/* Container do Vídeo: Ocupa metade da tela no desktop e vira background responsivo no mobile */}
        <motion.div
          className="absolute inset-y-0 right-0 w-full opacity-40 lg:w-1/2 lg:opacity-100"
          variants={imageReveal}
          style={{
            clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={images.bolo_morango}
          >
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="px-5 py-20 md:px-8 md:py-24 lg:px-10 bg-[#fffdfa]">
        <motion.div
          className="mx-auto max-w-[1540px]"
          variants={staggerReveal}
        >
          {/* Header da Section */}
          <motion.div
            className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between pb-12"
            variants={itemReveal}
          >
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                alta degustação
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl text-[#2b1714]">
                Desenhamos a experiência da mordida antes da estética do topo.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#2b1714]/70 lg:mb-2">
              Antes do adorno, da linha e da apresentação, projetamos o
              equilíbrio: a textura que quebra, o recheio que envolve e o
              frescor que permanece.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {tastingNotes.map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04, ease }}
                className="group flex flex-col pt-6 border-t border-[#2b1714]/10"
              >
                <span className="text-[10px] font-medium tracking-[0.15em] text-[#9d2d40]/50 group-hover:text-[#9d2d40] transition-colors duration-300">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#2b1714]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#2b1714]/60">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection
        id="encomendas"
        className="px-5 py-24 md:px-8 md:py-32 lg:px-10 bg-[#fffdfa]"
      >
        <motion.div
          className="mx-auto max-w-[1540px]"
          variants={staggerReveal}
        >
          {/* Header da Section */}
          <motion.div
            className="grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:items-end border-b border-[#2b1714]/10 pb-12"
            variants={itemReveal}
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                encomendas exclusivas
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-7xl text-[#2b1714]">
                Do conceito à entrega final.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#2b1714]/70 md:max-w-xl">
              Desenvolvemos projetos sob medida para celebrações íntimas,
              eventos corporativos e momentos que exigem o máximo cuidado, sem
              qualquer excesso.
            </p>
          </motion.div>

          {/* Lista de Etapas (Layout Tabela Minimalista) */}
          <div className="mt-8 grid gap-0">
            {steps.map(([number, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease }}
                whileHover={{ x: 10 }}
                className="group relative grid gap-4 border-b border-[#2b1714]/10 py-10 last:border-b-0 md:grid-cols-[0.10fr_0.38fr_0.52fr] md:items-baseline transition-colors duration-300 hover:bg-[#2b1714]/[0.01]"
              >
                {/* Linha de progresso sutil no hover */}
                <div className="absolute top-0 left-0 w-0 h-px bg-[#9d2d40]/40 transition-all duration-500 group-hover:w-full" />

                <span className="text-xs font-mono font-medium text-[#9d2d40]/70 group-hover:text-[#9d2d40] transition-colors">
                  [{number}]
                </span>

                <h3 className="text-2xl font-semibold tracking-tight text-[#2b1714] md:text-3xl">
                  {title}
                </h3>

                <p className="text-base leading-7 text-[#2b1714]/65 md:max-w-2xl">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="relative min-h-[700px] lg:min-h-[850px] w-full overflow-hidden flex items-center bg-[#2b1714]">
        {/* Imagem como Plano de Fundo Absoluto */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          variants={imageReveal}
        >
          <Image
            src={images.cookies}
            alt="Cookies de chocolate em close"
            fill
            priority
            sizes="100vw"
            className="object-cover transition duration-1000 scale-100 hover:scale-[1.02]"
          />
          {/* Máscara de iluminação linear: Escurece a esquerda para leitura e revela a imagem na direita */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b1714] via-[#2b1714]/85 to-[#2b1714]/20 lg:via-[#2b1714]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1714] via-transparent to-transparent md:hidden" />
        </motion.div>

        {/* Conteúdo flutuando sobre o Background */}
        <div className="relative z-10 mx-auto w-full max-w-[1540px] px-5 py-24 md:px-8 md:py-32 lg:px-10">
          <motion.div
            className="max-w-xl lg:max-w-2xl"
            variants={staggerReveal}
          >
            {/* Badge Técnico Minimalista */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffd8df]">
              <SealCheck size={14} weight="bold" />
              rigor dos ingredientes
            </div>

            {/* Título Imponente */}
            <h2 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl text-white">
              A antítese do <br className="hidden sm:inline" />
              sabor industrial.
            </h2>

            {/* Bloco de Notas de Rodapé */}
            <div className="mt-12 max-w-lg border-l border-white/20 pl-6">
              <p className="text-lg leading-8 text-white/80">
                Manteiga fresca, ovos selecionados, frutas da estação e
                chocolate de origem. O que parece um preciosismo técnico se
                revela no equilíbrio exato e no final limpo a cada mordida.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#fff1f3] px-5 py-24 md:px-8 md:py-32 lg:px-10 overflow-hidden">
        <motion.div
          className="mx-auto max-w-[1540px]"
          variants={staggerReveal}
        >
          {/* Layout de Grade Assimétrica - Ajustado proporção para o novo texto */}
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            {/* Coluna da Esquerda: Textos e Tags de Ocasião */}
            <motion.div
              className="flex flex-col lg:sticky lg:top-12"
              variants={itemReveal}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                contexto & presença
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl text-[#2b1714]">
                Estruturas feitas para ditar o tom da mesa.
              </h2>

              {/* Lista Vertical de Ocasiões (Estilo Índice Minimalista) */}
              <div className="mt-12 flex flex-col border-t border-[#2b1714]/10">
                {occasions.map((item, index) => (
                  <motion.div
                    key={item}
                    variants={itemReveal}
                    className="group flex items-center justify-between border-b border-[#2b1714]/10 py-5 text-sm text-[#2b1714]/80 font-medium cursor-default transition-colors duration-300 hover:text-[#2b1714]"
                  >
                    <span className="pr-4 leading-relaxed">{item}</span>
                    <span className="text-[10px] font-mono text-[#9d2d40]/40 group-hover:text-[#9d2d40] transition-colors duration-300 shrink-0">
                      0{index + 1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Coluna da Direita: Composição Tridimensional de Imagens */}
            <motion.div
              className="relative w-full pt-12 md:pt-20 lg:pt-0"
              variants={imageReveal}
            >
              {/* Imagem de Fundo (Grande e Imponente) */}
              <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] shadow-[0_32px_80px_rgba(43,23,20,0.06)] group">
                <Image
                  src={images.copo_da_felicidade}
                  alt="Copos da felicidade"
                  fill
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover transition duration-1000 group-hover:scale-[1.02]"
                />
              </figure>

              {/* Imagem Flutuante Detalhe (Sobreposta na Frente) */}
              <figure className="absolute -bottom-12 -left-4 md:-bottom-20 md:left-12 w-[42%] aspect-[3/4] overflow-hidden rounded-[20px] border-8 border-[#fff1f3] shadow-[0_24px_48px_rgba(0,0,0,0.12)] hidden sm:block group pastry-drift">
                <Image
                  src={images.cupcake_morango}
                  alt="Cupcakes e doces decorados"
                  fill
                  sizes="25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
              </figure>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="px-5 py-24 md:px-8 md:py-32 lg:px-10 bg-[#fffdfa]">
        <motion.div
          className="mx-auto max-w-[1540px]"
          variants={staggerReveal}
        >
          {/* Cabeçalho Editorial */}
          <motion.div
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-[#2b1714]/10 pb-12"
            variants={itemReveal}
          >
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                relatos & experiências
              </p>
              <h2 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl xl:text-7xl text-[#2b1714]">
                O melhor elogio é o silêncio que acompanha a primeira garfada.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#2b1714]/65 font-medium uppercase tracking-wider lg:mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9d2d40]" />A
              perspectiva de quem experimenta.
            </p>
          </motion.div>

          {/* Grid de Depoimentos Minimalista (Sem caixas pesadas) */}
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-3 border-b border-[#2b1714]/10 pb-16">
            {testimonials.map(([quote, context], index) => (
              <motion.blockquote
                key={quote}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease }}
                whileHover={{ y: -8 }}
                className="flex flex-col justify-between pt-4 md:pt-0"
              >
                <div>
                  {/* Aspas decorativas sutis em formato de texto */}
                  <span className="text-4xl font-serif text-[#9d2d40]/30 block h-4">
                    “
                  </span>
                  <p className="text-2xl font-medium leading-relaxed tracking-tight text-[#2b1714] mt-2">
                    {quote}
                  </p>
                </div>

                <div className="mt-12 pt-4 border-t border-[#2b1714]/6 max-w-[80%]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.20em] text-[#9d2d40]">
                    {context}
                  </p>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="relative min-h-[760px] overflow-hidden px-5 py-24 text-white md:px-8 md:py-32 lg:px-10">
        <motion.div className="absolute inset-0" variants={imageReveal}>
          <Image
            src={images.floresta_negra}
            alt="Bolo floresta negra"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#2b1714]/64" />
        <motion.div
          className="relative z-10 mx-auto max-w-[1540px]"
          variants={staggerReveal}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd8df]">
            mesa doce
          </p>
          <motion.h2
            className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-8xl"
            variants={itemReveal}
          >
            Uma mesa bonita começa no equilíbrio entre cor, altura e vontade de
            repetir.
          </motion.h2>
        </motion.div>
      </AnimatedSection>

      {/* --- SEÇÃO: MENU (Lista Técnica de Linha Única) --- */}
      <AnimatedSection
        id="menu"
        className="px-5 py-24 md:px-8 md:py-32 lg:px-10 bg-[#fffdfa]"
      >
        <motion.div
          className="mx-auto max-w-[1540px]"
          variants={staggerReveal}
        >
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
            {/* Esquerda: Identificação de Seção */}
            <motion.div className="lg:sticky lg:top-16" variants={itemReveal}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9d2d40]">
                catálogo técnico
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl text-[#2b1714]">
                Menu de assinatura <br />e edições sazonais.
              </h2>
            </motion.div>

            {/* Direita: Lista Estendida de Linha Única */}
            <div className="flex flex-col border-t border-[#2b1714]/10">
              {menu.map((item, index) => (
                <motion.div
                  key={item}
                  variants={itemReveal}
                  whileHover={{ x: 8 }}
                  className="group flex items-baseline justify-between border-b border-[#2b1714]/10 py-6 cursor-default transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-6 pr-4">
                    <span className="text-[10px] font-mono text-[#9d2d40]/50 tracking-wider shrink-0">
                      [ 0{index + 1} ]
                    </span>
                    <p className="text-lg font-medium text-[#2b1714]/90 group-hover:text-[#9d2d40] transition-colors duration-300 tracking-tight">
                      {item}
                    </p>
                  </div>

                  {/* Linha de preenchimento sutil que cresce no hover */}
                  <div className="hidden md:block flex-grow border-b border-dotted border-[#2b1714]/10 group-hover:border-[#9d2d40]/30 mx-4 transition-colors" />

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#2b1714]/40 shrink-0">
                    Sazonal
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* --- SEÇÃO: CONTATO (Statement Monolítico Total) --- */}
      <AnimatedSection id="contato" className="w-full bg-[#2b1714] text-white">
        <motion.div
          className="mx-auto max-w-[1540px] px-5 py-24 md:px-8 md:py-32 lg:px-10"
          variants={staggerReveal}
        >
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            {/* Esquerda: Tipografia Monumental */}
            <motion.div className="lg:col-span-7" variants={itemReveal}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#ffd8df]/60">
                diretoria de encomendas
              </p>
              <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl">
                Defina a ocasião. <br />
                Projetamos o doce.
              </h2>
            </motion.div>

            {/* Direita: O Fluxo Seco e Direto */}
            <motion.div
              className="lg:col-span-5 flex flex-col items-start"
              variants={itemReveal}
            >
              <p className="text-base leading-7 text-white/70 max-w-lg">
                Envie data, volume, preferências de sabor e o formato da sua
                celebração. Alinhamos a proposta técnica e retornamos com
                sugestões e prazos de execução.
              </p>

              {/* Ações Geométricas Retas */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <WhatsAppCTA />
                <CTA href="mailto:pedidos@lacreme.example">Enviar E-mail</CTA>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      <motion.footer
        className="relative w-full overflow-hidden bg-[#fffdfa] text-[#2b1714]"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={sectionReveal}
      >
        {/* Linha técnica divisória de topo */}
        <div className="absolute inset-x-0 top-0 h-px bg-[#2b1714]/10" />

        {/* --- BLOCO SUPERIOR: Fechamento Conceitual --- */}
        <motion.div
          className="mx-auto max-w-[1540px] px-5 py-24 md:px-8 lg:px-10 lg:py-32"
          variants={staggerReveal}
        >
          {/* --- Bloco de Texto Superior: Alinhamento Editorial Limpo --- */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between border-b border-[#2b1714]/10 pb-12"
            variants={itemReveal}
          >
            <div className="max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#9d2d40]">
                03 // encomendas da semana
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl text-[#2b1714]">
                A sobremesa como <br className="hidden sm:block" /> objeto de
                design.
              </h2>
            </div>

            <div className="mt-6 lg:mt-0 max-w-md">
              <p className="text-base leading-relaxed text-[#2b1714]/70">
                Informe a data, a estimativa de convidados e as diretrizes do
                evento. Desenvolvemos a escala de proporções, perfis de sabor e
                acabamento estrutural com montagem cronometrada.
              </p>

              {/* Ações Diretas */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
                <WhatsAppCTA />
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[#2b1714]/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#2b1714] transition-colors duration-300 hover:border-[#2b1714] hover:bg-[#2b1714]/5 rounded-none"
                >
                  Ver Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* --- Galeria Inferior: Grid Monolítico de 4 Colunas --- */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {[
              images.embalagem_bolo,
              images.embalagem_doce,
              images.embalagem_docinhos,
              images.embalagem_sobremesa,
            ].map((img, index) => (
              <motion.div
                key={index}
                variants={imageReveal}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? -1 : 1 }}
                className="relative w-full aspect-[3/4] bg-[#2b1714]/5 overflow-hidden transition-all duration-500 hover:opacity-90"
              >
                <Image
                  src={img}
                  alt="Apresentação de confeitaria autoral"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-103"
                  priority={index < 2}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- BLOCO INFERIOR: Rodapé Institucional --- */}
        <div className="border-t border-[#2b1714]/10 bg-[#2b1714]/5">
          <motion.div
            className="mx-auto grid max-w-[1540px] gap-12 px-5 py-16 md:px-8 lg:grid-cols-[0.40fr_0.22fr_0.19fr_0.19fr] lg:px-10 lg:py-20"
            variants={staggerReveal}
          >
            {/* Branding & Descrição Realista */}
            <motion.div
              className="flex flex-col justify-between"
              variants={itemReveal}
            >
              <div>
                <span
                  className={`${logoFont.className} text-4xl font-normal leading-none tracking-tight text-[#2b1714]`}
                >
                  La Crème
                </span>
                <p className="mt-4 max-w-xs text-xs leading-relaxed text-[#2b1714]/60">
                  Ateliê de confeitaria artesanal especializado em bolos
                  festivos, doces finos e sobremesas autorais para celebrações.
                </p>
              </div>
              <p className="mt-8 text-[10px] font-mono text-[#2b1714]/40 hidden lg:block">
                © {new Date().getFullYear()} La Crème. Todos os direitos
                reservados.
              </p>
            </motion.div>

            {/* Atendimento e Retiradas */}
            <motion.div variants={itemReveal}>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9d2d40]">
                Ateliê & Retiradas
              </p>
              <div className="mt-6 space-y-4 text-xs text-[#2b1714]/70 font-medium">
                <div>
                  <span className="block font-bold text-[#2b1714] text-[10px] uppercase font-mono tracking-wider">
                    Endereço
                  </span>
                  <p className="mt-1">Rua das Flores, 128 — Ateliê Central</p>
                </div>
                <div>
                  <span className="block font-bold text-[#2b1714] text-[10px] uppercase font-mono tracking-wider">
                    Horário de Retirada
                  </span>
                  <p className="mt-1">Terça a Sábado, das 10h às 18h</p>
                </div>
                <div>
                  <span className="block font-bold text-[#2b1714] text-[10px] uppercase font-mono tracking-wider">
                    Encomendas
                  </span>
                  <p className="mt-1">
                    Produção limitada mediante agendamento prévio
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Links de Navegação Institucional */}
            <motion.div variants={itemReveal}>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9d2d40]">
                Navegação
              </p>
              <div className="mt-6 flex flex-col gap-3 text-xs font-medium text-[#2b1714]/70">
                {nav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-colors duration-200 hover:text-[#9d2d40] w-fit"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Catálogo / Menu rápido */}
            <motion.div variants={itemReveal}>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9d2d40]">
                Nosso Menu
              </p>
              <div className="mt-6 flex flex-col gap-3 text-xs font-medium text-[#2b1714]/70">
                <a
                  href="#bolos"
                  className="transition-colors duration-200 hover:text-[#9d2d40] w-fit"
                >
                  Bolos Festivos
                </a>
                <a
                  href="#doces"
                  className="transition-colors duration-200 hover:text-[#9d2d40] w-fit"
                >
                  Doces & Monoporções
                </a>
                <a
                  href="#sazonais"
                  className="transition-colors duration-200 hover:text-[#9d2d40] w-fit"
                >
                  Cardápio Sazonal
                </a>
                <a
                  href="#Corporativo"
                  className="transition-colors duration-200 hover:text-[#9d2d40] w-fit"
                >
                  Eventos & Corporativo
                </a>
              </div>
            </motion.div>

            {/* Copyright para telas menores */}
            <p className="mt-4 text-[10px] font-mono text-[#2b1714]/40 lg:hidden border-t border-[#2b1714]/5 pt-6">
              © {new Date().getFullYear()} La Crème.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto flex max-w-[1540px] justify-end border-t border-[#2b1714]/10 px-5 py-5 md:px-8 lg:px-10"
            variants={itemReveal}
          >
            <span
              className={`${maguiFont.className} text-xs font-semibold tracking-[-0.02em] text-[#2b1714]`}
            >
              Oferecido por{" "}
              <a
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:opacity-70"
              >
                <strong className="font-black text-[#2b1714]">MAGUI</strong>
                <span className="text-[#0094C8]">.</span>
                <span className="font-semibold text-[#2b1714]">studio</span>
              </a>
            </span>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}
