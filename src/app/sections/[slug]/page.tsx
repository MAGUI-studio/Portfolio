import { notFound } from "next/navigation";
import { sectionMap, sections } from "@/components/sections/registry";

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }));
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
    </main>
  );
}
