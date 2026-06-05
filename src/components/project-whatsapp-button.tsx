import { WhatsappButton } from "@/components/whatsapp-button";
import { arcoWhatsappMessage, arcoWhatsappNumber } from "@/components/arco/data";
import { bitesWhatsapp } from "@/components/bites/data";
import { dragonTattooWhatsappMessage, dragonTattooPhoneNumber } from "@/components/dragon-tattoo/data";
import { whatsapp as laCremeWhatsapp } from "@/components/la-creme/data";
import { whatsappHref as kromaWhatsapp } from "@/components/kroma/data";
import { nachoLibreWhatsapp } from "@/components/nacho-libre/data";
import { powervetWhatsappMessage, powervetWhatsappNumber } from "@/components/powervet/data";
import { pulseWhatsapp } from "@/components/pulse/data";
import { sayegWhatsappMessage, sayegWhatsappNumber } from "@/components/sayeg/data";
import { shinobiWhatsappHref } from "@/components/shinobi/data";
import { links as vittaLinks } from "@/components/vitta/data";

type ProjectWhatsappConfig = {
  message: string;
  phoneNumber: string;
};

type ProjectWhatsappButtonProps = {
  projectSlug: string;
  projectTitle: string;
};

const defaultPhoneNumber = "5500000000000";

function parseWhatsappHref(href: string): ProjectWhatsappConfig {
  const url = new URL(href);
  const phoneNumber = url.pathname.replace(/\D/g, "");
  const message = url.searchParams.get("text") ?? "";

  return { phoneNumber, message };
}

const projectWhatsappConfig: Record<string, ProjectWhatsappConfig> = {
  "atlas-living": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Atlas Living. Quero receber informacoes sobre o empreendimento.",
  },
  "arco-odontologia": {
    phoneNumber: arcoWhatsappNumber,
    message: arcoWhatsappMessage,
  },
  bites: parseWhatsappHref(bitesWhatsapp),
  flow: {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, FLOW. Quero orientação para montar ou evoluir meu aquário marinho.",
  },
  "cifrasec": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, CifraSec. Quero falar sobre segurança digital para minha empresa.",
  },
  "cume-vinhos": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Cume Vinhos. Quero saber mais sobre visitas, rotulos e clube de vinhos.",
  },
  "doca-norte": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Doca Norte. Quero entender melhor a solucao para operacao portuaria.",
  },
  "dragon-tattoo": {
    phoneNumber: dragonTattooPhoneNumber,
    message: dragonTattooWhatsappMessage,
  },
  kroma: parseWhatsappHref(kromaWhatsapp),
  "la-creme": parseWhatsappHref(laCremeWhatsapp),
  "nacho-libre": parseWhatsappHref(nachoLibreWhatsapp),
  "nivela-cold": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Nivela Cold. Quero falar sobre logistica fria para minha operacao.",
  },
  "norte-prive": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Norte Prive. Quero receber informacoes sobre a experiência residencial.",
  },
  "novera-labs": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Novera Labs. Quero conversar sobre desenvolvimento, qualidade e transferencia.",
  },
  powervet: {
    phoneNumber: powervetWhatsappNumber,
    message: powervetWhatsappMessage,
  },
  "prisma-fellows": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Prisma Fellows. Quero saber mais sobre a formacao executiva.",
  },
  pulse: parseWhatsappHref(pulseWhatsapp),
  "reforma-atelier": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Reforma Atelier. Quero falar sobre curadoria, reparo ou redesign de peças.",
  },
  "sayeg-beauty-studio": {
    phoneNumber: sayegWhatsappNumber,
    message: sayegWhatsappMessage,
  },
  shinobi: parseWhatsappHref(shinobiWhatsappHref),
  "terrametria": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, TerraMetria. Quero falar sobre agricultura de precisão e dados de campo.",
  },
  vitta: parseWhatsappHref(vittaLinks.whatsapp),
};

export function ProjectWhatsappButton({
  projectSlug,
  projectTitle,
}: ProjectWhatsappButtonProps) {
  const config = projectWhatsappConfig[projectSlug] ?? {
    phoneNumber: defaultPhoneNumber,
    message: `Oi, ${projectTitle}. Quero saber mais sobre o projeto.`,
  };

  return (
    <WhatsappButton
      phoneNumber={config.phoneNumber}
      message={config.message}
    />
  );
}
