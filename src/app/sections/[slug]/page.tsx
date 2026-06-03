import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectWhatsappButton } from "@/components/project-whatsapp-button";
import { sectionMap, sections } from "@/components/sections/registry";

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata(
  props: PageProps<"/sections/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const entry = sectionMap[slug];

  if (!entry) {
    return {
      title: "MAGUI.studio | Projeto nao encontrado",
    };
  }

  const title = `MAGUI.studio | ${entry.title}`;
  const description = `${entry.description} Projeto de ${entry.projectType.toLowerCase()} desenvolvido pela MAGUI.studio.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/sections/${entry.slug}`,
    },
    openGraph: {
      title,
      description,
      images: entry.cardImage ? [entry.cardImage] : undefined,
      url: `/sections/${entry.slug}`,
      siteName: "MAGUI.studio",
      type: "website",
    },
  };
}

export default async function SectionPage(props: PageProps<"/sections/[slug]">) {
  const { slug } = await props.params;
  const entry = sectionMap[slug];

  if (!entry) {
    notFound();
  }

  const SectionComponent = entry.component;

  return (
    <main className="bg-[var(--canvas)]">
      <SectionComponent />
      <ProjectWhatsappButton projectSlug={entry.slug} projectTitle={entry.title} />
    </main>
  );
}
