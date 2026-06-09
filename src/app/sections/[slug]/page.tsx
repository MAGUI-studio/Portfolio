import { permanentRedirect } from "next/navigation";
import { sections } from "@/components/sections/registry";

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }));
}

export default async function LegacySectionPage(
  props: PageProps<"/sections/[slug]">,
) {
  const { slug } = await props.params;
  permanentRedirect(`/projetos/${slug}`);
}
