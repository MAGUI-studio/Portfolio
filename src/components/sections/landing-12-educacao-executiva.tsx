"use client";

import { GraduationCap } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing12EducacaoExecutiva() {
  return (
    <PremiumLandingModel
      index="12"
      name="Prisma Fellows"
      tone="educacao executiva"
      eyebrow="formacao para liderancas seniores"
      promise="Executivos aprendem melhor quando o conteudo encontra a agenda real."
      text="Programas de curta duracao para liderancas que precisam transformar estrategia, comunicacao e tomada de decisao em repertorio aplicavel na segunda-feira."
      secondary="Mentores, encontros presenciais e casos vivos de mercado."
      accent="#7d1f2d"
      background="#f1ece8"
      dark="#171111"
      icon={GraduationCap}
      nav={["Metodo", "Prova", "Contato"]}
      stats={[
        { value: "6", label: "trilhas executivas desenhadas para desafios de crescimento" },
        { value: "12h", label: "carga compacta com preparacao, imersao e mentoria aplicada" },
        { value: "1:1", label: "devolutiva individual para transformar aula em plano de acao" },
      ]}
      tracks={[
        { title: "Diagnostico de agenda", text: "Entendemos pressao do cargo, mercado, equipe e decisoes em aberto." },
        { title: "Casos contextualizados", text: "Discussao guiada por dilemas reais, nao por teoria solta." },
        { title: "Mentoria aplicada", text: "Plano de acao individual com prioridades, riscos e comunicacao." },
        { title: "Turmas curadas", text: "Grupos menores para troca franca entre pares de senioridade semelhante." },
        { title: "Corpo docente", text: "Especialistas com experiencia pratica em conselhos, produto e operacao." },
        { title: "Ritual pos-programa", text: "Acompanhamento para medir aplicacao e destravar barreiras." },
        { title: "Conteudo direto", text: "Materiais concisos, templates e leituras para consulta posterior." },
        { title: "Ambiente premium", text: "Experiencia presencial discreta, confortavel e produtiva." },
        { title: "Rede qualificada", text: "Conexoes cuidadosamente mediadas entre participantes." },
        { title: "Impacto mensuravel", text: "Indicadores de evolucao, aplicacao e percepcao de lideranca." },
      ]}
    />
  );
}
