"use client";

import { Wine } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing18VinhoAltitude() {
  return (
    <PremiumLandingModel
      index="18"
      name="Cume Vinhos"
      tone="vinho de altitude"
      eyebrow="vinicola boutique de clima frio"
      promise="Vinhos de altitude para mesas que preferem silencio a excesso."
      text="Vinicola boutique com producao limitada, visitas intimistas e narrativa territorial para consumidores, restaurantes e clubes de assinatura."
      secondary="Terroir, safra e experiencia em uma presenca digital sobria."
      accent="#713245"
      background="#f0ecea"
      dark="#171012"
      icon={Wine}
      nav={["Metodo", "Prova", "Contato"]}
      stats={[
        { value: "980m", label: "altitude media dos vinhedos de clima frio" },
        { value: "8k", label: "garrafas por safra com lotes limitados e numerados" },
        { value: "12", label: "experiencias privadas por mes para preservar a visita" },
      ]}
      tracks={[
        { title: "Narrativa de terroir", text: "Solo, altitude, vento e safra explicados sem romantizacao vazia." },
        { title: "Portfolio enxuto", text: "Rótulos organizados por ocasiao, perfil aromatico e guarda." },
        { title: "Visita privada", text: "Experiencia sob agendamento com degustacao guiada." },
        { title: "Clube de safra", text: "Assinatura com alocacao limitada e conteudo de enologo." },
        { title: "Restaurantes", text: "Argumentos claros para harmonizacao e carta." },
        { title: "E-commerce elegante", text: "Compra direta com foco em lote, historia e disponibilidade." },
        { title: "Prova social", text: "Premios, notas e parcerias apresentados com sobriedade." },
        { title: "Fotografia editorial", text: "Espaco para garrafa, paisagem, adega e mesa." },
        { title: "Calendario de safra", text: "Lancamentos e eventos com ritmo de exclusividade." },
        { title: "Contato comercial", text: "Canal para restaurantes, presentes corporativos e colecionadores." },
      ]}
    />
  );
}
