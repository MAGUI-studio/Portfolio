const faqs = [
  {
    question: "A Haven atende apenas crianças autistas?",
    answer:
      "Não. A Haven atende crianças, adolescentes e adultos autistas, além de outras pessoas neurodivergentes que buscam um ambiente mais acolhedor, previsível e confortável para realizar seus cuidados pessoais.",
  },
  {
    question: "Meu filho nunca conseguiu cortar o cabelo. Vocês podem ajudar?",
    answer:
      "Sim. Nossa equipe foi preparada para compreender diferentes necessidades sensoriais e comportamentais. Respeitamos o tempo de cada cliente e adaptamos o atendimento para tornar a experiência mais tranquila e positiva.",
  },
  {
    question: "Posso acompanhar meu filho durante todo o atendimento?",
    answer:
      "Claro. Pais, mães e responsáveis podem permanecer junto ao cliente durante todo o processo, oferecendo apoio e segurança sempre que necessário.",
  },
  {
    question: "Como funciona a primeira visita?",
    answer:
      "A primeira visita é focada em acolhimento e adaptação. Conversamos com a família, entendemos as necessidades do cliente e explicamos cada etapa do atendimento antes de iniciar qualquer procedimento.",
  },
  {
    question: "Vocês atendem pessoas com sensibilidade a sons, luzes ou toque?",
    answer:
      "Sim. Nosso ambiente foi pensado para reduzir estímulos excessivos e proporcionar maior conforto sensorial. Sempre buscamos adaptar o atendimento às necessidades individuais de cada pessoa.",
  },
  {
    question: "O atendimento é feito com horário agendado?",
    answer:
      "Sim. Trabalhamos principalmente com agendamento para garantir um atendimento mais tranquilo, sem longas esperas e com atenção individualizada para cada cliente.",
  },
  {
    question: "O que acontece se meu filho ficar desconfortável durante o atendimento?",
    answer:
      "Não há problema. Respeitamos os limites de cada pessoa. Se necessário, fazemos pausas, ajustamos a abordagem ou reagendamos o atendimento. O bem-estar do cliente vem sempre em primeiro lugar.",
  },
  {
    question: "A Haven atende apenas pessoas autistas?",
    answer:
      "Não. Atendemos qualquer pessoa que procure um ambiente acolhedor, tranquilo e respeitoso. Nossa especialização em neurodiversidade beneficia clientes de todas as idades e perfis.",
  },
  {
    question: "Quais serviços vocês oferecem?",
    answer:
      "Realizamos cortes masculinos, femininos e infantis, além de outros cuidados pessoais, sempre com foco em conforto, acolhimento e atendimento humanizado.",
  },
  {
    question: "Como posso agendar uma visita ou atendimento?",
    answer:
      "Você pode entrar em contato conosco através do WhatsApp, telefone ou formulário disponível em nosso site. Nossa equipe terá prazer em esclarecer dúvidas e encontrar o melhor horário para você e sua família.",
  },
];

export function HavenFaqSection() {
  return (
    <section
      id="faq"
      className="bg-[#f5f5f5] px-5 py-24 text-[#14283D] md:px-8 md:py-28 lg:px-10"
    >
      <div className="border-t border-[#14283D]/10 pt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#14283D]">
          FAQ
        </p>
        <h2 className="mt-7 text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
          Perguntas que costumam vir antes da visita.
        </h2>
        <p className="mt-7 text-base leading-8 text-[#14283D]/68">
          Reunimos aqui as dúvidas mais comuns para deixar o primeiro contato
          mais simples, claro e tranquilo para você e sua família.
        </p>
      </div>

      <div className="mt-14 grid gap-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group overflow-hidden rounded-[1.75rem] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 open:shadow-[0_10px_30px_rgba(20,40,61,0.06)] md:px-6"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left marker:hidden">
              <span className="text-lg font-semibold leading-7 md:text-xl">
                {item.question}
              </span>
              <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#14283D]/10 text-[#14283D]/46 transition-all duration-300 group-open:rotate-45 group-open:bg-[#14283D] group-open:text-white">
                +
              </span>
            </summary>
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-open:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="pt-5 text-sm leading-7 text-[#14283D]/68 md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
