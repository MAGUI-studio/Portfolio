"use client";

import Image from "next/image";
import {
  ArrowRight,
  ChefHat,
  Clock,
  ForkKnife,
  SealCheck,
  Sparkle,
  Star,
} from "@phosphor-icons/react";
import { CTA, WhatsAppCTA } from "@/components/la-creme/actions";
import {
  dailyDrops,
  heroBadges,
  images,
  menu,
  occasions,
  signatures,
  steps,
  sweets,
  tastingNotes,
  testimonials,
  video,
  whatsapp,
} from "@/components/la-creme/data";
import { LaCremeFooter } from "@/components/la-creme/footer";
import { LaCremeHeader } from "@/components/la-creme/header";
import {
  AnimatedSection,
  ease,
  imageReveal,
  itemReveal,
  LaCremeMotionProvider,
  motion,
  staggerReveal,
} from "@/components/la-creme/motion";

export default function Landing16ConfeitariaLaCreme() {
  return (
    <LaCremeMotionProvider>
      <main className="overflow-hidden bg-[#fff8ef] text-[#2b1714]">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[#2b1714] focus:shadow-[0_18px_48px_rgba(43,23,20,0.18)]"
        >
          Pular para conteúdo
        </a>
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

        @media (prefers-reduced-motion: reduce) {
          .sweet-carousel,
          .pastry-drift,
          .pastry-shimmer::after {
            animation: none !important;
          }
        }
      `}</style>

      <LaCremeHeader />

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
          quality={86}
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
                  quality={74}
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
                    quality={74}
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
                      quality={72}
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
              quality={74}
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
          className="absolute inset-y-0 right-0 w-full opacity-40 md:[clip-path:polygon(12%_0%,100%_0%,100%_100%,0%_100%)] lg:w-1/2 lg:opacity-100"
          variants={imageReveal}
        >
          <video
            aria-hidden="true"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            preload="none"
            playsInline
            poster={images.processo_la_creme}
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
            quality={74}
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
                  quality={74}
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
                  quality={72}
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
            quality={74}
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

      <LaCremeFooter />

      </main>
    </LaCremeMotionProvider>
  );
}
