"use client";

import { SolarPanel } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing11EnergiaSolarIndustrial() {
  return (
    <PremiumLandingModel
      index="11"
      name="HelioGrid"
      tone="energia solar industrial"
      eyebrow="usinas solares para operacoes exigentes"
      promise="Energia previsivel para industrias em expansao."
      text="Projeto, implantacao e monitoramento de geracao solar para empresas que precisam reduzir custo sem abrir mao de disponibilidade, governanca e seguranca operacional."
      secondary="Do estudo de carga ao acompanhamento de performance com leitura executiva."
      accent="#b88418"
      background="#f4efe3"
      dark="#18150f"
      icon={SolarPanel}
      nav={["Metodo", "Prova", "Contato"]}
      stats={[
        { value: "18%", label: "economia media projetada em contratos industriais de longo prazo" },
        { value: "24/7", label: "monitoramento de geracao, alertas e disponibilidade por unidade" },
        { value: "90d", label: "ciclo estruturado para viabilidade, engenharia e decisao executiva" },
      ]}
      tracks={[
        { title: "Viabilidade tecnica", text: "Analise de consumo, telhado, solo, conexao, demanda contratada e impacto financeiro." },
        { title: "Engenharia executiva", text: "Dimensionamento, memoria tecnica, fornecedores e cronograma de implantacao." },
        { title: "Governanca energetica", text: "Indicadores, relatórios e cadencia de decisao para diretoria e operacao." },
        { title: "Capex controlado", text: "Cenarios comparativos para compra, locacao, financiamento ou geracao compartilhada." },
        { title: "Risco mapeado", text: "Leitura de contrato, manutencao, homologacao e requisitos de seguranca." },
        { title: "Performance viva", text: "Painel mensal com producao, economia, desvios e recomendacoes." },
        { title: "Contrato claro", text: "Escopo, SLA, garantia e responsabilidades organizadas antes da obra." },
        { title: "Instalacao limpa", text: "Planejamento para interferir pouco na rotina produtiva." },
        { title: "Dados auditaveis", text: "Historico de geracao e economia pronto para auditoria e ESG." },
        { title: "Escala modular", text: "Arquitetura preparada para novas unidades ou aumento de demanda." },
      ]}
    />
  );
}
