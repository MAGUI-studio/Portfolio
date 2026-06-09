import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectWhatsappButton } from "@/components/project-whatsapp-button";
import { sectionMap, sections } from "@/components/sections/registry";
import {
  buildProjectMetadata,
  createBreadcrumbJsonLd,
  createProjectJsonLd,
  sanitizeText,
} from "@/lib/seo";

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
      title: "MAGUI.studio | Projeto não encontrado",
    };
  }

  return buildProjectMetadata(entry);
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
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createProjectJsonLd(entry)),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createBreadcrumbJsonLd(entry)),
        }}
      />
      <SectionComponent />
      <ProjectWhatsappButton
        projectSlug={entry.slug}
        projectTitle={sanitizeText(entry.title)}
      />
    </main>
  );
}
