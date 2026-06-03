"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  CaretDown,
  ChatCircleText,
  FirstAidKit,
  PawPrint,
  ThermometerSimple,
} from "@phosphor-icons/react";

import { ActionLink, Eyebrow } from "./ui";

const categories = [
  { id: "primeira-visita", label: "Primeira visita", icon: PawPrint },
  { id: "urgencias", label: "Urgências", icon: FirstAidKit },
  { id: "estrutura", label: "Estrutura", icon: ThermometerSimple },
] as const;

const questions = [
  {
    category: "primeira-visita",
    q: "Quais espécies a POWERVET atende?",
    a: "Atendemos aves, répteis, quelônios, pequenos mamíferos, anfíbios e outros animais silvestres ou exóticos que precisam de manejo clínico específico.",
  },
  {
    category: "primeira-visita",
    q: "É necessário agendar a consulta?",
    a: "Sim. O agendamento ajuda a equipe a preparar o ambiente, reservar tempo adequado e orientar o transporte conforme a espécie.",
  },
  {
    category: "primeira-visita",
    q: "Como devo transportar meu animal?",
    a: "Use caixa de transporte segura, ventilada e protegida de excesso de calor, frio ou estímulos. Ao agendar, orientamos o preparo mais indicado para cada espécie.",
  },
  {
    category: "primeira-visita",
    q: "Meu animal precisa de jejum?",
    a: "Depende da espécie, idade, condição clínica e objetivo da visita. Informe esses detalhes no agendamento para receber a orientação correta.",
  },
  {
    category: "primeira-visita",
    q: "Posso levar meu pet para corte de unhas ou bico?",
    a: "Sim. Procedimentos de manejo de rotina são feitos com técnica, contenção segura e avaliação do motivo por trás do crescimento ou desgaste inadequado.",
  },
  {
    category: "urgencias",
    q: "A clínica atende emergências?",
    a: "Sim. Em uma situação urgente, fale pelo WhatsApp para a equipe orientar os primeiros passos e avaliar a melhor forma de receber o animal.",
  },
  {
    category: "urgencias",
    q: "Como sei se meu animal está estressado?",
    a: "Apatia, agressividade atípica, alteração de apetite, penas eriçadas, queda de penas ou mudança brusca de comportamento merecem avaliação especializada.",
  },
  {
    category: "urgencias",
    q: "Qual a frequência ideal de check-ups?",
    a: "Animais exóticos costumam esconder sintomas. Em geral, recomendamos acompanhamento semestral ou anual, ajustado ao histórico e à espécie.",
  },
  {
    category: "urgencias",
    q: "Aceitam convênios pet?",
    a: "O atendimento é particular, com foco em especialização técnica, estrutura dedicada e condutas de maior complexidade para silvestres e exóticos.",
  },
  {
    category: "estrutura",
    q: "Realizam exames laboratoriais?",
    a: "Sim. Trabalhamos com parceiros laboratoriais especializados para ampliar a precisão diagnóstica em diferentes grupos de animais.",
  },
  {
    category: "estrutura",
    q: "Vocês realizam cirurgias?",
    a: "Sim. A clínica conta com centro cirúrgico equipado e equipe preparada para procedimentos em aves, répteis e pequenos mamíferos.",
  },
  {
    category: "estrutura",
    q: "Como funciona a internação?",
    a: "A internação usa alas adaptadas com controle de temperatura, umidade e iluminação, pontos essenciais para recuperação de espécies sensíveis.",
  },
  {
    category: "estrutura",
    q: "Vocês atendem primatas?",
    a: "O atendimento segue normas legais de conservação e conduta clínica. A equipe avalia cada caso conforme espécie, documentação e necessidade do animal.",
  },
  {
    category: "estrutura",
    q: "A clínica é especializada em nutrição?",
    a: "Sim. Nutrição é um pilar da saúde exótica. Avaliamos a dieta atual e ajustamos o manejo alimentar às necessidades biológicas do paciente.",
  },
  {
    category: "estrutura",
    q: "Qual a diferença de um veterinário de silvestres?",
    a: "É uma formação voltada a fisiologia, comportamento, contenção, nutrição e doenças específicas de cada grupo, indo além da rotina da clínica tradicional.",
  },
] satisfies Array<{
  category: (typeof categories)[number]["id"];
  q: string;
  a: string;
}>;

const preparationNotes = [
  "Espécie, idade e tempo de convivência",
  "Fotos do recinto, dieta e fezes recentes",
  "Histórico de exames, medicações ou quedas",
];

export function PowervetFaqSection() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]["id"]>("primeira-visita");
  const [activeQuestion, setActiveQuestion] = useState(questions[0].q);

  const filteredQuestions = useMemo(
    () => questions.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  function selectCategory(category: (typeof categories)[number]["id"]) {
    setActiveCategory(category);
    setActiveQuestion(
      questions.find((item) => item.category === category)?.q ?? questions[0].q,
    );
  }

  return (
    <section
      id="duvidas"
      className="relative overflow-hidden bg-[#F4F1EB] px-5 py-24 text-[#021C00] md:px-10 md:py-32 lg:px-14"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[linear-gradient(115deg,rgba(244,241,235,0.96),rgba(244,241,235,0.82)_48%,rgba(23,59,20,0.08))]" />
      <div className="pointer-events-none absolute left-10 top-10 hidden text-[140px] font-semibold leading-none text-[#021C00]/4.5 md:block lg:text-[210px]">
        FAQ
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
        <aside className="lg:sticky lg:top-8">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.075em] md:text-7xl lg:text-[88px]">
            Chegue com mais calma à consulta.
          </h2>
          <p className="mt-6 text-base leading-7 text-[#365233] md:w-[82%]">
            Reunimos as principais orientações para tutores de animais
            silvestres e exóticos. Escolha um assunto e veja as respostas mais
            úteis antes de falar com a equipe.
          </p>

          <div className="mt-10 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => selectCategory(category.id)}
                  className={`group flex min-h-18 items-center justify-between gap-4 px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[#021C00] text-white shadow-[0_24px_70px_rgba(2,28,0,0.16)]"
                      : "bg-[#F4F1EB]/70 text-[#173B14] hover:bg-[#F4F1EB]"
                  }`}
                >
                  <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em]">
                    <Icon
                      size={22}
                      weight="thin"
                      className={
                        isActive
                          ? "text-[#DDD6C8]"
                          : "text-[#173B14] transition-transform duration-300 group-hover:scale-110"
                      }
                    />
                    {category.label}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.24em] opacity-55">
                    {
                      questions.filter((item) => item.category === category.id)
                        .length
                    }
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 bg-[#021C00] p-6 text-white md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center bg-[#DDD6C8]/12 text-[#DDD6C8]">
                <ChatCircleText size={25} weight="thin" />
              </div>
              <div>
                <p className="text-lg font-semibold tracking-[-0.045em]">
                  Ainda ficou uma dúvida?
                </p>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  Conte qual espécie você tem e o que está acontecendo. A equipe
                  orienta o próximo passo.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <ActionLink light>Falar no WhatsApp</ActionLink>
            </div>
          </div>
        </aside>

        <div>
          <div className="grid gap-3 md:grid-cols-3">
            {preparationNotes.map((note, index) => (
              <div
                key={note}
                className="flex min-h-34 flex-col justify-between bg-[#F4F1EB]/78 p-5"
              >
                <span className="text-[10px] font-bold tracking-[0.24em] text-[#31502E]/58">
                  LEVE 0{index + 1}
                </span>
                <p className="mt-8 text-lg font-semibold leading-tight tracking-[-0.045em] text-[#021C00]">
                  {note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid min-w-0 gap-3 overflow-hidden">
            {filteredQuestions.map((item, index) => {
              const isOpen = activeQuestion === item.q;

              return (
                <article
                  key={item.q}
                  className={`min-w-0 overflow-hidden transition-colors duration-300 ${
                    isOpen
                      ? "bg-[#F4F1EB] shadow-[0_30px_90px_rgba(2,28,0,0.1)]"
                      : "bg-[#F4F1EB]/62 hover:bg-[#F4F1EB]/90"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveQuestion(isOpen ? "" : item.q)}
                    className="grid w-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left md:px-7 md:py-6"
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center text-[10px] font-bold tracking-[0.18em] transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#173B14] text-white"
                          : "bg-[#DDD6C8] text-[#31502E]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 text-xl font-semibold leading-tight tracking-[-0.052em] text-[#021C00] md:text-2xl">
                      {item.q}
                    </span>
                    <CaretDown
                      size={22}
                      weight="thin"
                      className={`shrink-0 text-[#173B14] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                      >
                        <div className="grid min-w-0 gap-5 border-t border-[#021C00]/10 px-5 pb-6 pt-5 md:grid-cols-[0.28fr_minmax(0,0.72fr)] md:px-7 md:pb-7">
                          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#31502E]/70">
                            Resposta POWERVET
                          </p>
                          <p className="min-w-0 text-base leading-7 text-[#365233] md:text-lg md:leading-8">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
