"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Chair,
  CheckCircle,
  Clock,
  FirstAidKit,
  Heartbeat,
  Needle,
  ShieldCheck,
  Smiley,
  Sparkle,
  Tooth,
  WaveSine,
} from "@phosphor-icons/react";

const images = {
  hero: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1800&q=90",
  clinic: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1700&q=90",
  chair: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1500&q=90",
  smile: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=90",
  tools: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1400&q=90",
  waiting: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1500&q=90",
  portrait: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=90",
};

const ease = [0.22, 1, 0.36, 1] as const;

const treatments = [
  ["Reabilitação oral", "Função, mordida, estética e conforto planejados em fases claras."],
  ["Lentes e cerâmicas", "Naturalidade, proporção e preservação de estrutura dental."],
  ["Implantes guiados", "Planejamento digital, previsibilidade cirúrgica e recuperação acompanhada."],
  ["Prevenção premium", "Consultas longas, manutenção personalizada e educação simples."],
];

const protocol = [
  {
    icon: Clock,
    title: "Tempo clínico real",
    text: "A primeira consulta não é encaixe: é uma leitura completa de histórico, imagem e expectativa.",
  },
  {
    icon: ShieldCheck,
    title: "Plano sem pressão",
    text: "Você entende prioridades, riscos, alternativas e fases antes de aceitar qualquer procedimento.",
  },
  {
    icon: Smiley,
    title: "Resultado natural",
    text: "O sorriso precisa conversar com rosto, idade, fala e personalidade. Brilho demais também envelhece.",
  },
];

const journey = [
  ["01", "Escuta", "Queixa, rotina, medo, expectativa estética e histórico de tratamentos anteriores."],
  ["02", "Imagem", "Fotos, escaneamento, radiografias e análise funcional para enxergar o conjunto."],
  ["03", "Plano", "Sequência por fases, investimento previsto, tempo de tratamento e manutenção."],
  ["04", "Cuidado", "Execução com especialistas e revisões para manter saúde e estabilidade."],
];

export default function Landing03CosmeticoEssencial() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const heroX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const heroY = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const orbitX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const orbitY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  return (
    <main
      className="overflow-hidden bg-[#fbfaf6] text-[#18201c]"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <header className="px-6 pt-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="grid gap-5 md:grid-cols-[0.24fr_0.52fr_0.24fr] md:items-stretch"
        >
          <a href="#inicio" className="group grid bg-[#e8f0e8] p-5">
            <span className="flex items-center justify-between">
              <span className="grid size-12 place-items-center rounded-full bg-[#18201c] text-[#fbfaf6] transition-transform duration-500 group-hover:scale-90">
                <Tooth size={22} weight="duotone" />
              </span>
              <span className="text-xs text-[#6d756f]">desde 2012</span>
            </span>
            <span className="mt-12 text-4xl font-semibold leading-none">Clara</span>
            <span className="mt-1 text-sm text-[#6d756f]">odontologia boutique</span>
          </a>

          <nav className="grid grid-cols-2 gap-px bg-[#cad8cc] text-sm md:grid-cols-4">
            {[
              ["Tratamentos", "#tratamentos"],
              ["Método", "#metodo"],
              ["Equipe", "#equipe"],
              ["Agenda", "#agenda"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group grid place-items-center bg-[#fbfaf6] px-4 py-5 transition-colors duration-300 hover:bg-[#edf4ed]"
              >
                <span>{label}</span>
                <span className="mt-3 h-px w-8 origin-center scale-x-0 bg-[#18201c] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="grid gap-3 bg-[#18201c] p-5 text-[#fbfaf6]">
            <p className="text-sm leading-6 text-[#dce5dc]">Consultas com hora marcada, imagem digital e plano explicado sem pressa.</p>
            <a href="#agenda" className="group inline-flex items-center justify-between bg-[#fbfaf6] px-4 py-3 text-sm text-[#18201c]">
              Agendar avaliação
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={16} />
            </a>
          </div>
        </motion.div>
      </header>

      <section id="inicio" className="px-6 pb-24 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease }}>
            <p className="inline-flex items-center gap-3 rounded-full bg-[#e8f0e8] px-5 py-3 text-sm text-[#607066]">
              <Sparkle size={17} />
              Odontologia estética, reabilitadora e preventiva
            </p>
            <h1 className="mt-10 text-[68px] font-semibold leading-[0.88] md:text-[136px] lg:text-[172px]">
              Sorrisos sem exagero.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="grid gap-8"
          >
            <p className="text-2xl leading-10 text-[#56625b]">
              Tratamentos planejados para devolver saúde, função e naturalidade, com tempo clínico de verdade e
              comunicação simples em cada etapa.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="#agenda" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#18201c] px-6 py-4 text-[#fbfaf6] transition-transform duration-300 hover:-translate-y-1">
                Começar avaliação
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </a>
              <a href="#metodo" className="inline-flex items-center justify-center rounded-full bg-[#e8f0e8] px-6 py-4 text-[#18201c] transition-transform duration-300 hover:-translate-y-1">
                Ver jornada
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.66fr_0.34fr]">
          <motion.figure
            style={{ x: heroX, y: heroY }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative overflow-hidden rounded-[34px]"
          >
            <Image
              src={images.hero}
              width={1800}
              height={1150}
              alt="Paciente em atendimento odontológico premium"
              className="h-[620px] w-full object-cover"
              priority
            />
            <figcaption className="absolute bottom-6 left-6 right-6 grid gap-5 rounded-[28px] bg-[#fbfaf6]/92 p-6 backdrop-blur md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm text-[#6d756f]">Primeira consulta</p>
                <p className="mt-1 text-3xl font-semibold">50 minutos para entender, fotografar e explicar.</p>
              </div>
              <CalendarCheck size={34} />
            </figcaption>
          </motion.figure>

          <div className="grid gap-6">
            <motion.div
              style={{ x: orbitX, y: orbitY }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26, ease }}
              className="rounded-[30px] bg-[#dbe9de] p-8"
            >
              <WaveSine size={34} />
              <p className="mt-20 text-5xl font-semibold leading-none">0 pressa</p>
              <p className="mt-5 text-lg leading-8 text-[#56625b]">Nada é vendido antes de diagnóstico, prioridades e alternativas estarem claros.</p>
            </motion.div>
            <motion.figure
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease }}
              className="overflow-hidden rounded-[30px]"
            >
              <Image src={images.clinic} width={900} height={900} alt="Sala clínica odontológica clara" className="h-[330px] w-full object-cover" />
            </motion.figure>
          </div>
        </div>
      </section>

      <section id="tratamentos" className="px-6 py-24 md:px-10">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75, ease }} className="grid gap-8 md:grid-cols-[0.54fr_0.46fr] md:items-end">
          <h2 className="text-6xl font-semibold leading-none md:text-9xl">O plano vem antes do procedimento.</h2>
          <p className="text-xl leading-9 text-[#56625b]">
            A Clara cruza queixa, função, imagem, gengiva, proporção facial e manutenção antes de indicar qualquer caminho.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4">
          {treatments.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -26 : 26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: index * 0.05, ease }}
              className="group grid gap-6 rounded-[28px] bg-[#edf4ed] p-6 transition-colors duration-300 hover:bg-[#18201c] hover:text-[#fbfaf6] md:grid-cols-[0.15fr_0.35fr_0.5fr] md:p-8"
            >
              <span className="text-sm text-current/55">0{index + 1}</span>
              <h3 className="text-3xl font-semibold leading-tight">{title}</h3>
              <p className="text-lg leading-8 text-current/70">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 px-6 py-24 md:px-10 lg:grid-cols-[0.4fr_0.6fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="grid content-between rounded-[34px] bg-[#18201c] p-8 text-[#fbfaf6] md:p-10"
        >
          <Heartbeat size={40} />
          <div className="mt-24">
            <p className="text-6xl font-semibold leading-none md:text-8xl">Saúde primeiro.</p>
            <p className="mt-7 text-xl leading-9 text-[#dce5dc]">
              Estética boa precisa ser estável, confortável e fácil de manter.
            </p>
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, clipPath: "inset(8% 0 8% 0 round 34px)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0 0% 0 round 34px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-[34px]"
        >
          <Image src={images.chair} width={1600} height={1000} alt="Consultório odontológico moderno e claro" className="h-[650px] w-full object-cover" />
          <div className="absolute bottom-6 left-6 right-6 rounded-[28px] bg-[#fbfaf6]/92 p-6 backdrop-blur">
            <p className="text-3xl font-semibold leading-tight md:text-5xl">
              Clareza clínica diminui ansiedade. O paciente precisa entender o porquê antes do como.
            </p>
          </div>
        </motion.figure>
      </section>

      <section id="metodo" className="px-6 py-24 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.34fr_0.66fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }}>
            <FirstAidKit size={40} />
            <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">Uma jornada sem sustos.</h2>
          </motion.div>
          <div className="grid gap-px bg-[#cdd9ce]">
            {journey.map(([number, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.58, delay: index * 0.06, ease }}
                className="grid gap-5 bg-[#fbfaf6] p-6 transition-colors duration-300 hover:bg-[#e8f0e8] md:grid-cols-[0.16fr_0.28fr_0.56fr]"
              >
                <span className="text-[#7c897f]">{number}</span>
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="text-lg leading-8 text-[#56625b]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {protocol.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease }}
              whileHover={{ y: -8 }}
              className="rounded-[30px] bg-white p-8 shadow-[0_18px_70px_rgba(28,40,34,0.07)]"
            >
              <Icon size={36} />
              <h3 className="mt-20 text-4xl font-semibold leading-tight">{title}</h3>
              <p className="mt-5 text-lg leading-8 text-[#56625b]">{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="equipe" className="grid gap-8 px-6 py-24 md:px-10 lg:grid-cols-[0.55fr_0.45fr]">
        <motion.figure
          initial={{ opacity: 0, rotate: -1.5, y: 30 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="overflow-hidden rounded-[34px]"
        >
          <Image src={images.portrait} width={1300} height={1500} alt="Dentista responsável pela clínica" className="h-[700px] w-full object-cover" />
        </motion.figure>
        <motion.div
          initial={{ opacity: 0, rotate: 1.5, y: 30 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="grid content-between rounded-[34px] bg-[#e8f0e8] p-8 md:p-12"
        >
          <Chair size={42} />
          <div className="mt-20">
            <h2 className="text-6xl font-semibold leading-none md:text-8xl">A cadeira não precisa intimidar.</h2>
            <p className="mt-8 text-xl leading-9 text-[#56625b]">
              Atendimento calmo, anestesia cuidadosa, explicação visual e pausas combinadas fazem parte do tratamento.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }}>
            <Needle size={40} />
            <h2 className="mt-8 text-6xl font-semibold leading-none md:text-8xl">Tecnologia só aparece quando melhora a decisão.</h2>
          </motion.div>
          <div className="grid gap-5">
            {["Escaneamento intraoral", "Fotografia clínica", "Planejamento digital do sorriso", "Cirurgia guiada em implantes"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.05, ease }}
                className="flex items-center justify-between rounded-full bg-[#edf4ed] px-6 py-5 text-lg"
              >
                {item}
                <CheckCircle size={22} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-6 py-24 md:px-10 lg:grid-cols-[0.42fr_0.58fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75, ease }} className="rounded-[34px] bg-[#18201c] p-8 text-[#fbfaf6] md:p-10">
          <blockquote className="text-5xl font-semibold leading-tight md:text-7xl">
            “Pela primeira vez entendi meu tratamento antes de começar. Isso mudou tudo.”
          </blockquote>
          <p className="mt-10 text-lg text-[#dce5dc]">Larissa Duarte · reabilitação estética e funcional</p>
        </motion.div>
        <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75, delay: 0.08, ease }} className="overflow-hidden rounded-[34px]">
          <Image src={images.smile} width={1500} height={950} alt="Paciente sorrindo com naturalidade" className="h-[560px] w-full object-cover" />
        </motion.figure>
      </section>

      <section id="agenda" className="px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.75, ease }}
          className="relative overflow-hidden rounded-[40px] bg-[#dbe9de] p-8 md:p-14"
        >
          <Image src={images.waiting} width={1500} height={1000} alt="Recepção clara de clínica premium" className="absolute right-0 top-0 hidden h-full w-[42%] object-cover opacity-75 lg:block" />
          <div className="relative grid gap-10 lg:grid-cols-[0.56fr_0.44fr]">
            <div>
              <p className="inline-flex items-center gap-3 text-sm text-[#607066]">
                <CalendarCheck size={18} />
                Avaliação inicial
              </p>
              <h2 className="mt-8 text-6xl font-semibold leading-none md:text-9xl">Marque com tempo para entender.</h2>
            </div>
            <div className="rounded-[30px] bg-[#fbfaf6]/94 p-7 backdrop-blur">
              <p className="text-xl leading-9 text-[#56625b]">
                Envie sua principal queixa, disponibilidade e se já possui exames recentes. A equipe retorna com horários e orientações para a primeira consulta.
              </p>
              <a href="mailto:agenda@claraodontologia.com" className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#18201c] px-6 py-4 text-[#fbfaf6] transition-transform duration-300 hover:-translate-y-1">
                Solicitar horário
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </a>
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
          className="relative overflow-hidden rounded-[40px] bg-[#e8f0e8] p-7 md:p-10"
        >
          <div className="absolute -right-20 -top-20 hidden size-72 rounded-full border border-[#18201c]/10 md:block" />
          <div className="relative grid gap-12 lg:grid-cols-[0.48fr_0.24fr_0.28fr]">
            <div>
              <p className="inline-flex items-center gap-3 rounded-full bg-[#fbfaf6] px-4 py-2 text-sm text-[#607066]">
                <Tooth size={17} />
                Clara Odontologia
              </p>
              <h2 className="mt-10 text-6xl font-semibold leading-none md:text-8xl">
                Natural é quando saúde, função e rosto combinam.
              </h2>
            </div>
            <div className="grid content-between gap-8">
              <div className="grid gap-3 text-[#56625b]">
                <a className="transition-colors hover:text-[#18201c]" href="#tratamentos">Tratamentos</a>
                <a className="transition-colors hover:text-[#18201c]" href="#metodo">Método</a>
                <a className="transition-colors hover:text-[#18201c]" href="#equipe">Equipe</a>
                <a className="transition-colors hover:text-[#18201c]" href="#agenda">Agenda</a>
              </div>
              <p className="text-sm leading-7 text-[#607066]">Reabilitação oral, estética natural, implantes guiados e prevenção personalizada.</p>
            </div>
            <div className="rounded-[30px] bg-[#fbfaf6] p-6">
              <p className="text-sm text-[#607066]">Atendimento com hora marcada</p>
              <p className="mt-5 text-3xl font-semibold leading-tight">Rua Haddock Lobo, 1240 · São Paulo</p>
              <p className="mt-7 leading-7 text-[#56625b]">agenda@claraodontologia.com</p>
            </div>
          </div>
          <div className="relative mt-14 grid gap-4 border-t border-[#18201c]/10 pt-6 text-sm text-[#607066] md:grid-cols-[1fr_auto]">
            <span>© Clara Odontologia. Cuidado clínico, estética natural e prevenção.</span>
            <span>Instagram · WhatsApp · Localização</span>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
