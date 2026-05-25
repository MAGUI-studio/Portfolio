"use client";

import { TShirt } from "@phosphor-icons/react";
import PremiumLandingModel from "./landing-premium-model";

export default function Landing17ModaCircular() {
  return (
    <PremiumLandingModel
      index="17"
      name="Reforma Atelier"
      tone="moda circular premium"
      eyebrow="guarda-roupa autoral, consciente e duravel"
      promise="A peca mais elegante e a que continua fazendo sentido."
      text="Atelier de moda circular para curadoria, reparo, redesign e revenda premium, com experiencia discreta para clientes que valorizam permanencia."
      secondary="Curadoria, ajuste e narrativa para roupas que merecem nova temporada."
      accent="#8b5144"
      background="#f2ece8"
      dark="#1a1210"
      icon={TShirt}
      nav={["Metodo", "Prova", "Contato"]}
      stats={[
        { value: "4", label: "servicos centrais: curadoria, reparo, redesign e consignacao" },
        { value: "21d", label: "ciclo medio para diagnostico, prova, ajuste e entrega" },
        { value: "1:1", label: "atendimento privado para leitura de estilo e acervo" },
      ]}
      tracks={[
        { title: "Leitura de acervo", text: "Entendemos rotina, proporcao, ocasioes e pecas de maior potencial." },
        { title: "Redesign sob medida", text: "Intervencoes precisas para atualizar sem descaracterizar." },
        { title: "Reparo invisivel", text: "Acabamento tecnico para prolongar vida util com discricao." },
        { title: "Curadoria de compra", text: "Apoio para adquirir menos e melhor." },
        { title: "Consignacao premium", text: "Selecao, fotografia, precificacao e venda de pecas especiais." },
        { title: "Prova guiada", text: "Ajustes presenciais com decisao clara sobre caimento." },
        { title: "Arquivo pessoal", text: "Registro de medidas, preferencias e historico de pecas." },
        { title: "Materiais nobres", text: "Cuidado especifico para seda, couro, la e alfaiataria." },
        { title: "Estetica atemporal", text: "Decisoes de design orientadas por permanencia." },
        { title: "Entrega refinada", text: "Embalagem, orientacao de uso e manutencao." },
      ]}
    />
  );
}
