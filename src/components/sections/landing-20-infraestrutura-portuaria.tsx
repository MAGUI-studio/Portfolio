"use client";

import { Anchor } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing20InfraestruturaPortuaria() {
  return (
    <PremiumLandingModel
      index="20"
      name="Doca Norte"
      tone="infraestrutura portuaria"
      eyebrow="operacao portuaria com visibilidade executiva"
      promise="O porto performa quando cada janela tem dono."
      text="Consultoria e tecnologia operacional para terminais, operadores e embarcadores que precisam reduzir espera, aumentar previsibilidade e alinhar campo e diretoria."
      secondary="Berco, patio, gate e documentos coordenados por uma visao unica."
      accent="#315a68"
      background="#edf0ef"
      dark="#0f1618"
      icon={Anchor}
      nav={["Método", "Prova", "Contato"]}
      stats={[
        { value: "18%", label: "reducao potencial de espera com planejamento integrado de janelas" },
        { value: "4", label: "frentes criticas: berco, patio, gate e documentacao" },
        { value: "1h", label: "cadencia de atualizacao para operacoes de maior criticidade" },
      ]}
      tracks={[
        { title: "Mapa operacional", text: "Fluxo real de carga, pessoas, documentos, equipamentos e excecoes." },
        { title: "Torre de controle", text: "Visao por status, gargalo, prioridade e responsavel." },
        { title: "Planejamento de janela", text: "Alocacao coordenada para reduzir conflito entre patio, gate e berco." },
        { title: "Indicadores", text: "Tempo, ocupacao, produtividade e excecoes em linguagem executiva." },
        { title: "Rotina de campo", text: "Checklists e cadencia para diminuir dependencia de improviso." },
        { title: "Integração documental", text: "Dados e pendencias conectados ao fluxo operacional." },
        { title: "Gestao de risco", text: "Clima, atraso, indisponibilidade e fila tratados antes de virar crise." },
        { title: "Governanca", text: "Dono claro para cada decisão e escalonamento." },
        { title: "Melhoria continua", text: "Ciclos curtos para testar ajustes e medir impacto." },
        { title: "Escala multiunidade", text: "Modelo replicavel para terminais, corredores e clientes." },
      ]}
    />
  );
}
