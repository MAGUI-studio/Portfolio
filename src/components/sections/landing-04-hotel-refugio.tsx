"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bed,
  CalendarCheck,
  Campfire,
  CarProfile,
  Coffee,
  Compass,
  CookingPot,
  DoorOpen,
  MapPinLine,
  Mountains,
  Sparkle,
  SwimmingPool,
  TreeEvergreen,
} from "@phosphor-icons/react";

const images = {
  hero: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1800&q=90",
  suite: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=90",
  cabin: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1500&q=90",
  bath: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1500&q=90",
  table: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1500&q=90",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1500&q=90",
  trail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=90",
  fire: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1400&q=90",
  breakfast: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1500&q=90",
};

const ease = [0.22, 1, 0.36, 1] as const;

const stays = [
  ["Vista da Serra", "Suíte ampla, varanda aberta e banheira voltada para a neblina da manhã.", images.suite],
  ["Casa do Bosque", "Mais privacidade, lareira própria e silêncio para estadias longas.", images.cabin],
  ["Refúgio Termal", "Banho aquecido, cama baixa e chegada preparada antes do check-in.", images.bath],
];

const itinerary = [
  ["15h", "Chegada sem fila", "Recepção breve, chá quente e malas entregues direto na suíte."],
  ["17h", "Trilha leve", "Caminho curto pela mata, com guia local e pausa para vista."],
  ["20h", "Jantar de estação", "Menu fechado, ingredientes da serra e mesa reservada."],
  ["09h", "Manhã lenta", "Café estendido, banho quente e late checkout quando disponível."],
];

const reasons = [
  {
    icon: Bed,
    title: "Poucas suítes",
    text: "A propriedade recebe poucos hóspedes por noite para preservar silêncio, serviço e privacidade.",
  },
  {
    icon: CookingPot,
    title: "Mesa de estação",
    text: "Café e jantar mudam com produtores próximos, clima da semana e ritmo da casa.",
  },
  {
    icon: SwimmingPool,
    title: "Spa sem espetáculo",
    text: "Calor, água, massagem e repouso em sessões conduzidas sem performance.",
  },
];

function CTA({
  children,
  href = "#reservar",
  light = false,
}: {
  children: string;
  href?: string;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm transition-transform duration-300 hover:-translate-y-1",
        light ? "bg-[#fbf7ef] text-[#20352a]" : "bg-[#20352a] text-[#fbf7ef]",
      ].join(" ")}
    >
      {children}
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} />
    </a>
  );
}

export default function Landing04HotelRefugio() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24 });
  const heroX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const heroY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const cardX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const cardY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  return (
    <main
      className="overflow-hidden bg-[#f4eadb] text-[#20352a]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <header className="px-6 pt-7 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="grid gap-4 lg:grid-cols-[0.28fr_0.44fr_0.28fr]"
        >
          <a href="#inicio" className="group relative overflow-hidden rounded-[28px] bg-[#20352a] p-6 text-[#fbf7ef]">
            <TreeEvergreen className="absolute right-5 top-5 transition-transform duration-500 group-hover:-translate-y-1" size={28} />
            <span className="block text-sm text-[#d8cdbd]">hotel de montanha</span>
            <span className="mt-16 block font-serif text-5xl leading-none md:text-6xl">Serra Alta</span>
            <span className="mt-3 block text-sm text-[#d8cdbd]">Mantiqueira · 1.420 m</span>
          </a>

          <nav className="grid grid-cols-2 gap-3 rounded-[28px] bg-[#fbf7ef] p-3 shadow-[0_20px_80px_rgba(55,43,28,0.08)] md:grid-cols-4">
            {[
              ["Suítes", "#suites"],
              ["Experiência", "#experiência"],
              ["Mesa", "#mesa"],
              ["Reservas", "#reservar"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group grid place-items-center rounded-[22px] px-3 py-5 text-sm transition-colors duration-300 hover:bg-[#efe1cd]"
              >
                <span>{label}</span>
                <span className="mt-3 h-px w-8 origin-center scale-x-0 bg-[#20352a] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="grid gap-3 rounded-[28px] bg-[#e4d4bd] p-5">
            <p className="text-sm leading-6 text-[#607061]">Datas de inverno abrem em lotes pequenos. Reservas com confirmação humana.</p>
            <CTA>Consultar disponibilidade</CTA>
          </div>
        </motion.div>
      </header>

      <section id="inicio" className="px-6 pb-24 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[0.64fr_0.36fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease }}>
            <p className="inline-flex items-center gap-3 rounded-full bg-[#fbf7ef] px-5 py-3 text-sm text-[#607061] shadow-[0_16px_55px_rgba(55,43,28,0.07)]">
              <Mountains size={18} />
              Refúgio boutique para finais de semana sem pressa
            </p>
            <h1 className="mt-10 font-serif text-[74px] leading-[0.86] md:text-[148px] lg:text-[184px]">
              A serra faz o resto.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="grid gap-8"
          >
            <p className="text-2xl leading-10 text-[#566353]">
              Poucas suítes, jantar de estação, banho quente e silêncio suficiente para dois dias parecerem uma semana.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <CTA>Reservar estadia</CTA>
              <CTA href="#suites" light>
                Ver suítes
              </CTA>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.72fr_0.28fr]">
          <motion.figure
            style={{ x: heroX, y: heroY }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative overflow-hidden rounded-[38px]"
          >
            <Image
              src={images.hero}
              width={1800}
              height={1100}
              alt="Hotel boutique cercado por montanhas"
              className="h-[680px] w-full object-cover"
              priority
            />
            <figcaption className="absolute bottom-6 left-6 right-6 grid gap-5 rounded-[30px] bg-[#fbf7ef]/90 p-6 backdrop-blur md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm text-[#607061]">Pacote mais reservado</p>
                <p className="mt-1 text-3xl font-semibold">Duas noites, jantar, spa e late checkout.</p>
              </div>
              <CalendarCheck size={34} />
            </figcaption>
          </motion.figure>

          <div className="grid gap-6">
            <motion.div
              style={{ x: cardX, y: cardY }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
              className="rounded-[34px] bg-[#20352a] p-8 text-[#fbf7ef]"
            >
              <Compass size={34} />
              <p className="mt-20 text-5xl font-semibold leading-none">18 suítes</p>
              <p className="mt-5 text-lg leading-8 text-[#d8cdbd]">Ocupação pequena para preservar calma e atendimento.</p>
              <div className="mt-8">
                <CTA href="#suites" light>
                  Escolher suíte
                </CTA>
              </div>
            </motion.div>
            <motion.figure
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.36, ease }}
              className="overflow-hidden rounded-[34px]"
            >
              <Image src={images.fire} width={900} height={900} alt="Fogueira ao anoitecer na montanha" className="h-[340px] w-full object-cover" />
            </motion.figure>
          </div>
        </div>
      </section>

      <section id="suites" className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="grid gap-8 md:grid-cols-[0.56fr_0.44fr] md:items-end"
        >
          <h2 className="font-serif text-7xl leading-none md:text-9xl">Suítes para sumir um pouco.</h2>
          <div className="grid gap-6">
            <p className="text-xl leading-9 text-[#566353]">
              Cada acomodação foi desenhada para que a chegada seja simples: luz baixa, cama pronta, banho quente e vista
              sem disputa.
            </p>
            <CTA>Consultar datas das suítes</CTA>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8">
          {stays.map(([title, text, src], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.75, delay: index * 0.06, ease }}
              className="group grid gap-7 rounded-[36px] bg-[#fbf7ef] p-4 shadow-[0_24px_80px_rgba(55,43,28,0.08)] md:grid-cols-[0.52fr_0.48fr] md:items-center md:p-6"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="overflow-hidden rounded-[30px]">
                  <Image
                    src={src}
                    width={1500}
                    height={980}
                    alt={`Hospedagem ${title}`}
                    className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-4 md:p-10">
                <span className="text-sm text-[#8b7d69]">0{index + 1}</span>
                <h3 className="mt-8 font-serif text-6xl leading-none md:text-8xl">{title}</h3>
                <p className="mt-7 text-xl leading-9 text-[#566353]">{text}</p>
                <div className="mt-10">
                  <CTA>Ver disponibilidade</CTA>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experiência" className="px-6 py-24 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease }}
              whileHover={{ y: -8 }}
              className="rounded-[34px] bg-[#e4d4bd] p-8"
            >
              <Icon size={36} />
              <h3 className="mt-20 text-4xl font-semibold leading-tight">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-[#566353]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 px-6 py-24 md:px-10 lg:grid-cols-[0.42fr_0.58fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="grid content-between rounded-[38px] bg-[#20352a] p-8 text-[#fbf7ef] md:p-10"
        >
          <MapPinLine size={40} />
          <div className="mt-24">
            <h2 className="font-serif text-7xl leading-none md:text-9xl">O dia já vem quase pronto.</h2>
            <p className="mt-8 text-xl leading-9 text-[#d8cdbd]">
              A equipe sugere o ritmo, mas não invade: trilha, almoço, spa, lareira ou nada.
            </p>
            <div className="mt-10">
              <CTA light>Montar roteiro</CTA>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-[38px] bg-[#c9b79c]">
          {itinerary.map(([time, title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, delay: index * 0.06, ease }}
              className="grid gap-5 bg-[#fbf7ef] p-6 transition-colors duration-300 hover:bg-[#efe1cd] md:grid-cols-[0.18fr_0.3fr_0.52fr]"
            >
              <span className="text-[#8b7d69]">{time}</span>
              <h3 className="text-3xl font-semibold">{title}</h3>
              <p className="text-lg leading-8 text-[#566353]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="mesa" className="grid gap-8 px-6 py-24 md:px-10 lg:grid-cols-[0.58fr_0.42fr]">
        <motion.figure
          initial={{ opacity: 0, clipPath: "inset(7% 0 7% 0 round 38px)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 38px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="overflow-hidden rounded-[38px]"
        >
          <Image src={images.table} width={1600} height={1100} alt="Jantar de estação em hotel boutique" className="h-[680px] w-full object-cover" />
        </motion.figure>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.08, ease }}
          className="grid content-between rounded-[38px] bg-[#fbf7ef] p-8 shadow-[0_24px_80px_rgba(55,43,28,0.08)] md:p-12"
        >
          <Coffee size={40} />
          <div className="mt-20">
            <h2 className="font-serif text-7xl leading-none md:text-9xl">Mesa curta, noite longa.</h2>
            <p className="mt-8 text-xl leading-9 text-[#566353]">
              O jantar muda por estação. O café não tem pressa. E o bar serve pouco, mas serve bem.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTA>Reservar com jantar</CTA>
              <CTA href="#reservar" light>
                Ver pacote romântico
              </CTA>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[42px]"
        >
          <Image src={images.spa} width={1800} height={1050} alt="Spa natural com banho relaxante" className="h-[650px] w-full object-cover" />
          <div className="absolute inset-x-6 bottom-6 grid gap-6 rounded-[34px] bg-[#20352a]/88 p-7 text-[#fbf7ef] backdrop-blur md:grid-cols-[0.62fr_0.38fr] md:items-end">
            <div>
              <Sparkle size={32} />
              <h2 className="mt-8 font-serif text-6xl leading-none md:text-8xl">Spa que parece pausa.</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-[#d8cdbd]">Massagem, banho quente e repouso em horários reservados.</p>
              <div className="mt-6">
                <CTA light>Adicionar spa à reserva</CTA>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-8 px-6 py-24 md:px-10 lg:grid-cols-[0.4fr_0.6fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="rounded-[38px] bg-[#20352a] p-8 text-[#fbf7ef] md:p-10"
        >
          <Campfire size={42} />
          <blockquote className="mt-20 font-serif text-6xl leading-tight md:text-8xl">
            “A sensação foi de sair da própria agenda. O hotel sabe aparecer e desaparecer.”
          </blockquote>
          <p className="mt-10 text-lg text-[#d8cdbd]">Rafael e Júlia · hóspedes de inverno</p>
        </motion.div>
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.08, ease }}
          className="overflow-hidden rounded-[38px]"
        >
          <Image src={images.trail} width={1500} height={1000} alt="Trilha com vista para montanhas" className="h-[620px] w-full object-cover" />
        </motion.figure>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="grid gap-6 md:grid-cols-[0.5fr_0.25fr_0.25fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.7, ease }}
            className="rounded-[38px] bg-[#fbf7ef] p-8 shadow-[0_22px_80px_rgba(55,43,28,0.08)]"
          >
            <DoorOpen size={38} />
            <h2 className="mt-12 font-serif text-7xl leading-none md:text-9xl">Pacotes de chegada simples.</h2>
          </motion.div>
          {[
            ["Fim de semana", "Duas noites, jantar e café estendido."],
            ["Meio de semana", "Mais silêncio, melhor tarifa e spa com agenda aberta."],
          ].map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.7, delay: (index + 1) * 0.08, ease }}
              className="grid content-between rounded-[38px] bg-[#e4d4bd] p-7"
            >
              <div>
                <p className="text-4xl font-semibold">{title}</p>
                <p className="mt-8 text-lg leading-8 text-[#566353]">{text}</p>
              </div>
              <div className="mt-10">
                <CTA>Consultar pacote</CTA>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="reservar" className="px-6 pb-24 pt-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[42px] bg-[#d9c6aa] p-8 md:p-14"
        >
          <Image src={images.breakfast} width={1500} height={1000} alt="Café da manhã servido com calma" className="absolute right-0 top-0 hidden h-full w-[42%] object-cover opacity-80 lg:block" />
          <div className="relative grid gap-10 lg:grid-cols-[0.56fr_0.44fr]">
            <div>
              <p className="inline-flex items-center gap-3 text-sm text-[#607061]">
                <CarProfile size={18} />
                Reserva assistida
              </p>
              <h2 className="mt-8 font-serif text-7xl leading-none md:text-9xl">Escolha datas. A gente organiza o ritmo.</h2>
            </div>
            <div className="rounded-[32px] bg-[#fbf7ef]/94 p-7 backdrop-blur">
              <p className="text-xl leading-9 text-[#566353]">
                Envie datas desejadas, número de hóspedes e intenção da viagem. Retornamos com suíte, pacote e horários
                disponíveis.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <CTA>Solicitar reserva</CTA>
                <CTA href="mailto:reservas@serraalta.com" light>
                  Enviar e-mail
                </CTA>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 pb-8 pt-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[42px] bg-[#20352a] p-7 text-[#fbf7ef] md:p-10"
        >
          <div className="absolute -right-24 -top-24 hidden size-80 rounded-full border border-[#fbf7ef]/10 md:block" />
          <div className="relative grid gap-12 lg:grid-cols-[0.48fr_0.24fr_0.28fr]">
            <div>
              <p className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-[#d8cdbd]">
                <Mountains size={17} />
                Serra Alta
              </p>
              <h2 className="mt-10 font-serif text-7xl leading-none md:text-9xl">
                Poucas suítes. Muito tempo de volta.
              </h2>
            </div>
            <div className="grid content-between gap-8">
              <div className="grid gap-3 text-[#d8cdbd]">
                <a className="transition-colors hover:text-white" href="#suites">Suítes</a>
                <a className="transition-colors hover:text-white" href="#experiência">Experiência</a>
                <a className="transition-colors hover:text-white" href="#mesa">Mesa</a>
                <a className="transition-colors hover:text-white" href="#reservar">Reservas</a>
              </div>
              <p className="text-sm leading-7 text-[#c6bba9]">Hotel boutique na Serra da Mantiqueira, com reservas privativas e serviço sob medida.</p>
            </div>
            <div className="rounded-[32px] bg-[#fbf7ef] p-6 text-[#20352a]">
              <p className="text-sm text-[#607061]">Reservas</p>
              <p className="mt-5 text-3xl font-semibold leading-tight">reservas@serraalta.com</p>
              <p className="mt-7 leading-7 text-[#566353]">Serra da Mantiqueira · chegada assistida · estacionamento privativo.</p>
              <div className="mt-8">
                <CTA>Consultar disponibilidade</CTA>
              </div>
            </div>
          </div>
          <div className="relative mt-14 grid gap-4 border-t border-white/10 pt-6 text-sm text-[#c6bba9] md:grid-cols-[1fr_auto]">
            <span>© Serra Alta. Hotel boutique de montanha com 18 suítes.</span>
            <span>Instagram · Rotas · Política de reservas</span>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
