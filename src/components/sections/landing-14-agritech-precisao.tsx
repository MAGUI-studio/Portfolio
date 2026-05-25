"use client";

import { Plant } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing14AgritechPrecisao() {
  return (
    <PremiumLandingModel
      index="14"
      name="TerraMetria"
      tone="agritech de precisao"
      eyebrow="dados de campo para decisoes melhores"
      promise="A fazenda precisa enxergar antes de agir."
      text="Sensoriamento, mapas e recomendacoes agronomicas para propriedades que querem reduzir desperdicio, antecipar risco e operar talhao por talhao."
      secondary="Imagem, solo, clima e manejo conectados em leitura simples."
      accent="#4e6d2c"
      background="#eff1e8"
      dark="#11170c"
      icon={Plant}
      nav={["Metodo", "Prova", "Contato"]}
      stats={[
        { value: "3cm", label: "resolucao operacional para leituras de estresse e variabilidade" },
        { value: "12", label: "camadas de dados combinadas em mapas acionaveis" },
        { value: "30d", label: "ciclo de acompanhamento para ajustar manejo e investimento" },
      ]}
      tracks={[
        { title: "Diagnostico por talhao", text: "Leitura de historico, solo, produtividade e manejo para priorizar areas." },
        { title: "Monitoramento remoto", text: "Imagens recorrentes e alertas para anomalias, falhas e estresse." },
        { title: "Prescricao variavel", text: "Recomendacao aplicada para fertilidade, defensivo, irrigacao e colheita." },
        { title: "Caderno de campo", text: "Registro organizado de operacoes e decisoes por safra." },
        { title: "Clima operacional", text: "Janelas de acao com risco e prioridade por cultura." },
        { title: "Painel do gestor", text: "Resumo claro para dono, consultor e equipe de campo." },
        { title: "Integração de maquinas", text: "Arquivos e mapas compatíveis com operacao existente." },
        { title: "Custo por hectare", text: "Indicadores de eficiencia para enxergar retorno." },
        { title: "Auditoria de safra", text: "Historico para comparar decisoes e resultados." },
        { title: "Escala progressiva", text: "Comeco por area critica e expansao sem ruptura." },
      ]}
    />
  );
}
