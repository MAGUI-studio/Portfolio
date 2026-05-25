"use client";

import { ThermometerCold } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing13LogisticaFria() {
  return (
    <PremiumLandingModel
      index="13"
      name="Nivela Cold"
      tone="logistica fria"
      eyebrow="cadeia fria para produtos sensiveis"
      promise="Temperatura certa, rastreabilidade inteira."
      text="Operacao frigorificada para alimentos, vacinas e insumos sensiveis, com controle de temperatura, documentacao e resposta rapida em cada etapa da rota."
      secondary="Armazem, transporte e monitoramento em uma unica governanca."
      accent="#246f8f"
      background="#edf3f4"
      dark="#0d171b"
      icon={ThermometerCold}
      nav={["Metodo", "Prova", "Contato"]}
      stats={[
        { value: "-25C", label: "faixas operacionais para congelado, resfriado e controlado" },
        { value: "99%", label: "visibilidade da jornada com logs, alertas e comprovantes" },
        { value: "4h", label: "janela de resposta para ocorrencias criticas em rotas prioritarias" },
      ]}
      tracks={[
        { title: "Mapa termico", text: "Classificacao de produto, faixa, tolerancia e risco por etapa logistica." },
        { title: "Rota auditavel", text: "Documentos, sensores e eventos organizados para conferência e conformidade." },
        { title: "Plano de contingencia", text: "Procedimentos claros para falha, atraso, recusa ou excursao de temperatura." },
        { title: "Armazem dedicado", text: "Recebimento, separacao e expedicao com zonas e protocolos definidos." },
        { title: "Frota qualificada", text: "Veiculos adequados para janela, volume e criticidade da carga." },
        { title: "Torre de controle", text: "Monitoramento proativo e comunicacao objetiva com cliente e destino." },
        { title: "Embalagem correta", text: "Solucoes passivas e ativas para proteger produto em transicoes." },
        { title: "SLA por perfil", text: "Indicadores diferentes para farma, food service e laboratorio." },
        { title: "Equipe treinada", text: "Rotina operacional com checklists e responsabilidade clara." },
        { title: "Relatorio executivo", text: "Resumo de performance, desvios e melhoria continua." },
      ]}
    />
  );
}
