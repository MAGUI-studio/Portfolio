import { WhatsappButton } from "@/components/whatsapp-button";
import { bitesWhatsapp } from "@/components/bites/data";
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
  "aura-estetica": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Aura Estetica. Quero agendar uma avaliacao para conhecer os tratamentos.",
  },
  bites: parseWhatsappHref(bitesWhatsapp),
  "brasa-studio": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, Brasa Studio. Quero conversar sobre um projeto de branding.",
  },
  "cifrasec": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, CifraSec. Quero falar sobre seguranca digital para minha empresa.",
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
      "Oi, Norte Prive. Quero receber informacoes sobre a experiencia residencial.",
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
      "Oi, Reforma Atelier. Quero falar sobre curadoria, reparo ou redesign de pecas.",
  },
  "sayeg-beauty-studio": {
    phoneNumber: sayegWhatsappNumber,
    message: sayegWhatsappMessage,
  },
  shinobi: parseWhatsappHref(shinobiWhatsappHref),
  "terrametria": {
    phoneNumber: defaultPhoneNumber,
    message:
      "Oi, TerraMetria. Quero falar sobre agricultura de precisao e dados de campo.",
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
