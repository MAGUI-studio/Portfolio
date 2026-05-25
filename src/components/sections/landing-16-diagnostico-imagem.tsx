"use client";

import { Scan } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing16DiagnosticoImagem() {
  return (
    <PremiumLandingModel
      index="16"
      name="Lumen Diagnostica"
      tone="diagnostico por imagem"
      eyebrow="precisao clinica com experiencia tranquila"
      promise="Exames claros para medicos, pacientes e familias."
      text="Centro de diagnostico por imagem com fluxo acolhedor, laudos consistentes e tecnologia preparada para rotinas clinicas de alta exigencia."
      secondary="Do agendamento ao laudo, cada ponto reduz atrito e ansiedade."
      accent="#2f6f68"
      background="#eef2ef"
      dark="#0f1715"
      icon={Scan}
      nav={["Metodo", "Prova", "Contato"]}
      stats={[
        { value: "48h", label: "prazo padrao para laudos eletivos com revisao especializada" },
        { value: "7", label: "linhas de exame organizadas por necessidade clinica" },
        { value: "1", label: "canal de apoio para paciente, medico solicitante e convenio" },
      ]}
      tracks={[
        { title: "Jornada acolhedora", text: "Orientacoes, preparo e recepcao desenhados para reduzir duvidas." },
        { title: "Protocolo tecnico", text: "Padronizacao por exame, indicacao e perfil de paciente." },
        { title: "Laudo consistente", text: "Revisao, contexto clinico e linguagem util para decisao medica." },
        { title: "Equipamentos", text: "Tecnologia adequada para nitidez, velocidade e conforto." },
        { title: "Equipe especializada", text: "Medicos e tecnicos com rotina de qualidade e atualizacao." },
        { title: "Integração digital", text: "Resultados acessiveis para paciente e medico com seguranca." },
        { title: "Preparo simples", text: "Comunicacao clara antes do exame para evitar remarcacoes." },
        { title: "Fluxo prioritario", text: "Atendimento diferenciado para casos sensiveis." },
        { title: "Controle de qualidade", text: "Auditoria interna de imagem, tempo e experiencia." },
        { title: "Relacao medica", text: "Canal direto para discussao de casos e complementos." },
      ]}
    />
  );
}
