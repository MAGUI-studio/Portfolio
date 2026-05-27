import {
  CalendarCheck,
  ChartLineUp,
  CheckCircle,
  Drop,
  FirstAidKit,
  Heartbeat,
  Leaf,
  Needle,
  ShieldCheck,
  Sparkle,
  SunHorizon,
  Waves,
  ActivityIcon
} from "@phosphor-icons/react/ssr";

export const brand = {
  name: "VITTA",
  email: "contato@clinicavitta.com.br",
  phone: "+55 11 96872-4100",
  address: "Alameda Lorena, 1822 - Jardins, Sao Paulo",
};

export const links = {
  whatsapp:
    "https://wa.me/5511968724100?text=Ola%2C%20VITTA.%20quero%20agendar%20uma%20avaliacao%20para%20saude%20da%20pele.",
  instagram: "https://www.instagram.com/clinicavitta",
  location:
    "https://www.google.com/maps/search/?api=1&query=Alameda%20Lorena%201822%20Jardins%20Sao%20Paulo",
};

export const images = {
  hero: "/images/vitta/cover.png",
  products: "/images/vitta/itens.png",
  wallpaper: "/images/vitta/clinica.png",
  consultation:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1700&q=90",
  team: "/images/vitta/time.png",
  ritual:
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=90",
  room: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=90",
  portrait:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=90",
};

export const nav = [
  { label: "Pele", href: "#pele" },
  { label: "Protocolos", href: "#protocolos" },
  { label: "Metodo", href: "#metodo" },
  { label: "Produtos", href: "#produtos" },
  { label: "Agenda", href: "#agenda" },
];

export const heroMetrics = [
  { value: "360°", label: "pele, rotina, histórico e ambiente" },
  { value: "4 etapas", label: "preparo, protocolo, retorno e manutenção" },
  { value: "30 dias", label: "primeira revisão para ajuste de conduta" },
];

export const marquee = [
  "mapa de tolerancia cutanea",
  "sinais de inflamacao silenciosa",
  "ritmo de renovacao celular",
  "prioridade clinica antes da queixa",
  "estabilidade antes da tecnologia",
  "rotina real de manutencao",
  "envelhecimento natural de alta performance",
];

export const skinPillars = [
  {
    icon: Drop,
    title: "Sustentação da Barreira",
    text: "Restabelecimento da integridade lipídica e dos níveis hidrodinâmicos primários, devolvendo tolerância imunológica à pele antes de qualquer estímulo invasivo.",
  },
  {
    icon: ShieldCheck,
    title: "Modulação Inflamatória",
    text: "Gerenciamento sutil de eritemas, sensibilidade crônica e estresse oxidativo, neutralizando os gatilhos biológicos que aceleram o envelhecimento celular.",
  },
  {
    icon: SunHorizon,
    title: "Cromatismo e Fotoproteção",
    text: "Clareamento adaptativo e controle melanogênico progressivo. Uma abordagem realista que trata hiperpigmentações sem rebote e sem agredir o tecido.",
  },
  {
    icon: Waves,
    title: "Refino de Textura",
    text: "Renovação celular microfluídica e tecnologias não-ablativas que reestruturam o relevo cutâneo, suavizando poros e linhas sem comprometer a estabilidade orgânica.",
  },
  {
    icon: ActivityIcon,
    title: "Arquitetura Dérmica",
    text: "Estímulo direcionado à matriz extracelular através de bioestimuladores de última geração, preservando os vetores naturais de firmeza e elasticidade do rosto.",
  },
  {
    icon: Leaf,
    title: "Longevidade Celular",
    text: "Programas personalizados de manutenção biológica que blindam os níveis de colágeno e sustentam o viço em ciclos perenes e de alta previsibilidade.",
  },
];

export const protocols = [
  {
    title: "Reset de pele sensivel",
    tag: "barreira",
    text: "Para peles reativas, ressecadas ou inflamadas. A VITTA reduz irritacao, reorganiza rotina e devolve tolerancia.",
  },
  {
    title: "Glow clinico",
    tag: "vico",
    text: "Hidratacao profunda, limpeza, antioxidantes e procedimentos leves para uma pele descansada sem efeito artificial.",
  },
  {
    title: "Firmeza progressiva",
    tag: "colageno",
    text: "Bioestimuladores e tecnologias combinadas para melhorar sustentacao, contorno e qualidade da derme.",
  },
  {
    title: "Manchas sob controle",
    tag: "tom",
    text: "Plano gradual para melasma, marcas pos-inflamatorias e dano solar, com acompanhamento fora da cabine.",
  },
  {
    title: "Natural lift",
    tag: "expressao",
    text: "Injetaveis conservadores para suavizar linhas e preservar movimento, identidade e proporcao facial.",
  },
];

export const method = [
  ["01", "Escuta e historico", "Entendemos pele, sono, estresse, exposicao solar, rotina, medicamentos e experiencias anteriores."],
  ["02", "Mapa fotografado", "Registramos textura, manchas, sensibilidade, flacidez e assimetrias para orientar escolhas reais."],
  ["03", "Preparo da pele", "Antes do procedimento, ajustamos barreira, ativos e cuidados para aumentar seguranca e resposta."],
  ["04", "Protocolo por fases", "Combinamos tecnologia, injetaveis e skincare em intervalos que respeitam recuperacao e resultado."],
  ["05", "Retorno e manutencao", "Avaliamos evolucao, ajustamos rotina e definimos o calendario de cuidados para os proximos meses."],
];

export const technologies = [
  {
    icon: Sparkle,
    title: "Laser e luz",
    text: "Textura, poros, manchas e estimulo de colageno com parametros escolhidos para cada fototipo.",
  },
  {
    icon: Needle,
    title: "Injetaveis precisos",
    text: "Toxina, skinbooster, preenchimento e bioestimulacao com doses moderadas e objetivo claro.",
  },
  {
    icon: Heartbeat,
    title: "Recuperacao assistida",
    text: "LED, cuidados pos-procedimento e comunicacao proxima para reduzir ansiedade e acelerar conforto.",
  },
  {
    icon: ChartLineUp,
    title: "Evolucao medida",
    text: "Comparativos fotograficos e revisoes programadas para acompanhar resposta, nao apenas promessa.",
  },
];

export const principles = [
  {
    icon: CalendarCheck,
    title: "Agenda sem pressa",
    text: "Consulta longa para diagnostico e explicacao antes de qualquer decisao estetica.",
  },
  {
    icon: ShieldCheck,
    title: "Criterio clinico",
    text: "Indicamos o que faz sentido para a pele agora, inclusive quando o melhor caminho e esperar.",
  },
  {
    icon: FirstAidKit,
    title: "Plano integrativo",
    text: "Cabine, injetaveis, tecnologias e rotina diaria trabalham juntos, em vez de competir.",
  },
  {
    icon: CheckCircle,
    title: "Naturalidade",
    text: "O resultado precisa parecer descanso, saude e vitalidade, nao mudanca brusca de rosto.",
  },
];

export const products = [
  {
    category: "barreira",
    title: "Limpadores e reparadores",
    text: "Produtos escolhidos para reduzir atrito, preservar hidratação e preparar a pele para responder melhor aos protocolos.",
  },
  {
    category: "ativos",
    title: "Séruns de tratamento",
    text: "Antioxidantes, renovadores e calmantes indicados conforme sensibilidade, manchas, textura e fase do plano.",
  },
  {
    category: "proteção",
    title: "Fotoproteção diária",
    text: "Filtros e complementos para manter resultado, controlar pigmentação e proteger a pele entre consultas.",
  },
];
