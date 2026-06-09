import type { Metadata } from "next";

import type { SectionEntry } from "@/components/sections/registry";

export const siteConfig = {
  name: "MAGUI.studio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.magui.studio",
  title: "MAGUI.studio | Landing pages premium para marcas digitais",
  description:
    "Portfólio de landing pages autorais criadas pela MAGUI.studio, com direção visual, design responsivo e desenvolvimento web focado em conversão.",
  ogImage: "/utils/page-banner.webp",
  locale: "pt_BR",
  keywords: [
    "landing page",
    "landing pages premium",
    "design responsivo",
    "desenvolvimento web",
    "portfólio de landing pages",
    "sites para marcas",
    "MAGUI.studio",
  ],
} as const;

const mojibakeMap: Record<string, string> = {
  "Ã¡": "á",
  "Ã ": "à",
  "Ã¢": "â",
  "Ã£": "ã",
  "Ã¤": "ä",
  "Ã©": "é",
  "Ã¨": "è",
  "Ãª": "ê",
  "Ã«": "ë",
  "Ã­": "í",
  "Ã¬": "ì",
  "Ã®": "î",
  "Ã¯": "ï",
  "Ã³": "ó",
  "Ã²": "ò",
  "Ã´": "ô",
  "Ãµ": "õ",
  "Ã¶": "ö",
  "Ãº": "ú",
  "Ã¹": "ù",
  "Ã»": "û",
  "Ã¼": "ü",
  "Ã§": "ç",
  "Ã±": "ñ",
  "Ã": "Á",
  "Ã€": "À",
  "Ã‚": "Â",
  "Ãƒ": "Ã",
  "Ã‰": "É",
  "ÃŠ": "Ê",
  "Ã": "Í",
  "Ã“": "Ó",
  "Ã”": "Ô",
  "Ã•": "Õ",
  "Ãš": "Ú",
  "Ã‡": "Ç",
  "â€™": "'",
  "â€œ": '"',
  "â€": '"',
  "â€“": "-",
  "â€”": "-",
  "Â©": "©",
  "Âº": "º",
};

export function sanitizeText(value: string) {
  return Object.entries(mojibakeMap).reduce(
    (text, [from, to]) => text.replaceAll(from, to),
    value,
  );
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: siteConfig.title,
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          alt: "Portfólio da MAGUI.studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
  };
}

export function buildProjectMetadata(entry: SectionEntry): Metadata {
  const title = `MAGUI.studio | ${sanitizeText(entry.title)}`;
  const description = sanitizeText(
    `${entry.description} Projeto de ${entry.projectType.toLowerCase()} desenvolvido pela MAGUI.studio.`,
  );

  return {
    title,
    description,
    keywords: [
      ...siteConfig.keywords,
      sanitizeText(entry.title),
      sanitizeText(entry.industry),
      sanitizeText(entry.projectType),
      ...entry.tags.map(sanitizeText),
    ],
    alternates: {
      canonical: `/sections/${entry.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/sections/${entry.slug}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: entry.cardImage ?? siteConfig.ogImage,
          alt: `${sanitizeText(entry.title)} | Projeto da MAGUI.studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [entry.cardImage ?? siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/favicon.ico"),
    description: siteConfig.description,
    sameAs: [
      "https://www.instagram.com/_magui.studio",
      "https://www.linkedin.com/company/magui-studio",
    ],
  };
}

export function createPortfolioJsonLd(entries: SectionEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: entries.map((entry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: sanitizeText(entry.title),
        url: absoluteUrl(`/sections/${entry.slug}`),
      })),
    },
  };
}

export function createProjectJsonLd(entry: SectionEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: sanitizeText(entry.title),
    headline: sanitizeText(entry.title),
    description: sanitizeText(entry.description),
    url: absoluteUrl(`/sections/${entry.slug}`),
    image: entry.cardImage ? [absoluteUrl(entry.cardImage)] : undefined,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: [
      sanitizeText(entry.projectType),
      sanitizeText(entry.industry),
      ...entry.tags.map(sanitizeText),
    ],
    inLanguage: "pt-BR",
  };
}

export function createBreadcrumbJsonLd(entry: SectionEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: sanitizeText(entry.title),
        item: absoluteUrl(`/sections/${entry.slug}`),
      },
    ],
  };
}
