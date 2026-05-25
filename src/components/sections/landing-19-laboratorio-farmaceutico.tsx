"use client";

import { Flask } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing19LaboratorioFarmaceutico() {
  return (
    <PremiumLandingModel
      index="19"
      name="Novera Labs"
      tone="laboratorio farmaceutico"
      eyebrow="desenvolvimento, qualidade e escala"
      promise="Pesquisa so vira produto quando qualidade entra desde o inicio."
      text="Laboratorio farmaceutico para desenvolvimento, estabilidade, controle de qualidade e transferencia tecnologica com rigor documental e comunicacao executiva."
      secondary="Da bancada ao lote piloto com rastreabilidade e criterio regulatorio."
      accent="#3d6180"
      background="#edf1f2"
      dark="#10161a"
      icon={Flask}
      nav={["Metodo", "Prova", "Contato"]}
      stats={[
        { value: "GxP", label: "rotinas desenhadas para ambientes regulados e auditaveis" },
        { value: "36", label: "ensaios fisico-quimicos e microbiologicos disponiveis" },
        { value: "5", label: "frentes: P&D, estabilidade, qualidade, validacao e transferencia" },
      ]}
      tracks={[
        { title: "Desenvolvimento", text: "Formula, processo, especificacao e criterios de aceitacao desde a origem." },
        { title: "Estabilidade", text: "Protocolos, estudos e relatorios para tomada de decisao regulatoria." },
        { title: "Controle de qualidade", text: "Ensaios com rastreabilidade, padronizacao e revisão tecnica." },
        { title: "Documentacao", text: "Dossies, registros e evidencias organizados para auditoria." },
        { title: "Validacao", text: "Metodos e processos avaliados com criterio proporcional ao risco." },
        { title: "Transferencia", text: "Passagem de escala com reducao de ambiguidade operacional." },
        { title: "Equipe tecnica", text: "Especialistas por disciplina com governanca de revisao." },
        { title: "Prazos realistas", text: "Cronogramas com dependencias, janelas e riscos claros." },
        { title: "Confidencialidade", text: "Fluxos e acessos adequados para projetos sensiveis." },
        { title: "Relatorio executivo", text: "Leitura objetiva para diretoria tecnica e negocios." },
      ]}
    />
  );
}
