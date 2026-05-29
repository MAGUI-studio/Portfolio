import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "@phosphor-icons/react/dist/ssr";
import { PortfolioProjects, type PortfolioProject } from "@/app/portfolio-projects";
import { sectionMap, visibleSections } from "@/components/sections/registry";

interface PageProps<T extends string> {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Home(props: PageProps<"/">) {
  const searchParams = await props.searchParams;
  const activeSlug =
    typeof searchParams.project === "string"
      ? searchParams.project
      : typeof searchParams.section === "string"
        ? searchParams.section
        : undefined;
        
  const activeEntry = activeSlug ? sectionMap[activeSlug] : undefined;
  const activeIndex = activeEntry
    ? visibleSections.findIndex((section) => section.slug === activeEntry.slug)
    : -1;
  const navigationIndex = activeIndex >= 0 ? activeIndex : 0;
  
  const previousEntry =
    visibleSections[(navigationIndex - 1 + visibleSections.length) % visibleSections.length];
  const nextEntry =
    visibleSections[(navigationIndex + 1) % visibleSections.length];
  const ActiveComponent = activeEntry?.component ?? null;
  
  const portfolioProjects: PortfolioProject[] = visibleSections.map((section) => ({
    description: section.description,
    goal: section.goal,
    image: section.cardImage ?? "/utils/placeholder.svg",
    index: section.index,
    industry: section.industry,
    projectType: section.projectType,
    slug: section.slug,
    tags: section.tags,
    title: section.title,
  }));

  // INTERFACE: Visão Detalhada do Projeto Aberto
  if (activeEntry && ActiveComponent) {
    return (
      <main className="min-h-screen w-full bg-[var(--canvas)]">
        <ActiveComponent />

        <nav
          aria-label="Navegação entre projetos"
          className="fixed inset-x-0 bottom-4 z-[80] flex justify-center px-4 md:bottom-6 w-fit! mx-auto"
        >
          <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/70 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            <Link
              href={`/?project=${previousEntry.slug}`}
              scroll
              title={`Abrir ${previousEntry.title}`}
              className="inline-flex size-8 items-center justify-center rounded-full text-[var(--ink-strong)] transition duration-300 hover:bg-black hover:text-white md:size-9"
            >
              <ArrowLeft size={15} weight="bold" />
            </Link>

            <Link
              href={`/?project=${nextEntry.slug}`}
              scroll
              title={`Abrir ${nextEntry.title}`}
              className="inline-flex size-8 items-center justify-center rounded-full text-[var(--ink-strong)] transition duration-300 hover:bg-black hover:text-white md:size-9"
            >
              <ArrowRight size={15} weight="bold" />
            </Link>

            <span className="mx-1.5 h-4 w-px bg-black/10" aria-hidden="true" />

            <Link
              href="/"
              scroll={false}
              title="Fechar projeto"
              className="inline-flex size-8 items-center justify-center rounded-full text-[var(--ink-strong)] transition duration-300 hover:bg-neutral-100 md:size-9 md:hover:bg-red-50 md:hover:text-red-500"
            >
              <X size={15} weight="bold" />
            </Link>
          </div>
        </nav>
      </main>
    );
  }

  // INTERFACE: Landing Page / Portfólio Principal (Full-Width)
  return (
    <main className="min-h-screen w-full bg-[var(--canvas)] text-[var(--ink)] antialiased selection:bg-black selection:text-white">
      
      {/* 1. BANNER HERO BLOCK (100% da largura) */}
      <section className="w-full bg-[#0796bc]">
        <Image
          src="/utils/magui-banner.png"
          alt="MAGUI.studio"
          width={2048}
          height={854}
          priority
          sizes="100vw"
          className="h-auto w-full block"
        />
      </section>

      {/* 2. HEADLINE SECTION */}
      <section className="w-full px-6 py-16 md:px-12 lg:px-16">
        <div className="border-b border-black/10 pb-12">
          <h1 className="text-3xl font-light leading-[1.15] tracking-tight text-[var(--ink-strong)] md:text-5xl lg:text-6xl xl:text-7xl">
            Explore projetos por <span className="font-medium text-black">segmento</span>, <span className="font-medium text-black">objetivo comercial</span> e <span className="font-medium text-black">estilo de marca</span>.
          </h1>
        </div>
      </section>

      {/* 3. DINAMIC PORTFOLIO SECTION */}
      <section className="w-full pb-24">
        <PortfolioProjects projects={portfolioProjects} />
      </section>
      
      {/* 4. MINIMAL FOOTER */}
      <footer className="w-full border-t border-black/5 bg-neutral-50/50 py-12 px-6 md:px-12 lg:px-16 text-center md:flex md:justify-between md:items-center text-xs text-neutral-400">
        <p>{new Date().getFullYear()} MAGUI.studio. Todos os direitos reservados.</p>
      </footer>

    </main>
  );
}