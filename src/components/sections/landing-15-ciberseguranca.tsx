"use client";

import { ShieldCheckered } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing15Ciberseguranca() {
  return (
    <PremiumLandingModel
      index="15"
      name="CifraSec"
      tone="ciberseguranca corporativa"
      eyebrow="defesa digital para empresas reguladas"
      promise="Seguranca precisa ser rotina, nao susto."
      text="Programa de ciberseguranca para empresas que precisam proteger dados, continuidade e reputacao com governanca executiva e operacao pratica."
      secondary="Risco, monitoramento, resposta e cultura em um sistema continuo."
      accent="#5c63a8"
      background="#eeeef3"
      dark="#10111a"
      icon={ShieldCheckered}
      nav={["Metodo", "Prova", "Contato"]}
      stats={[
        { value: "72h", label: "diagnostico inicial de superficie, acesso e criticidade" },
        { value: "24/7", label: "monitoramento e resposta para ambientes prioritarios" },
        { value: "14", label: "controles essenciais organizados por maturidade" },
      ]}
      tracks={[
        { title: "Mapa de risco", text: "Ativos, acessos, fornecedores e exposicoes priorizados por impacto." },
        { title: "Hardening pratico", text: "Controles aplicados sem paralisar time, sistema ou operacao." },
        { title: "Resposta a incidente", text: "Papeis, contatos, playbooks e simulados para reduzir improviso." },
        { title: "Gestao de acesso", text: "MFA, permissoes, desligamentos e revisoes periodicas." },
        { title: "Conscientizacao", text: "Treinamento objetivo para reduzir phishing e vazamento humano." },
        { title: "Monitoramento", text: "Eventos relevantes, alertas e triagem para agir no que importa." },
        { title: "Backup e continuidade", text: "Rotina testada para recuperacao e retomada." },
        { title: "Fornecedores", text: "Avaliacao de risco de terceiros com criterio proporcional." },
        { title: "Relatorio executivo", text: "Linguagem clara para conselho, diretoria e auditoria." },
        { title: "Evolucao mensal", text: "Roadmap de maturidade com ganhos cumulativos." },
      ]}
    />
  );
}
