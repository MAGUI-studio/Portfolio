import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  X,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import {
  PortfolioProjects,
  type PortfolioProject,
} from "@/app/portfolio-projects";
import { sectionMap, visibleSections } from "@/components/sections/registry";

interface HomePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Home(props: HomePageProps) {
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
    visibleSections[
      (navigationIndex - 1 + visibleSections.length) % visibleSections.length
    ];
  const nextEntry =
    visibleSections[(navigationIndex + 1) % visibleSections.length];
  const ActiveComponent = activeEntry?.component ?? null;

  const portfolioProjects: PortfolioProject[] = visibleSections.map(
    (section) => ({
      description: section.description,
      goal: section.goal,
      image: section.cardImage ?? "/utils/placeholder.svg",
      index: section.index,
      industry: section.industry,
      projectType: section.projectType,
      slug: section.slug,
      tags: section.tags,
      title: section.title,
    }),
  );

  if (activeEntry && ActiveComponent) {
    return (
      <main className="min-h-screen w-full bg-[#FCFCFC]">
        <ActiveComponent />
        <nav
          aria-label="Navegação entre projetos"
          className="fixed inset-x-0 bottom-8 z-80 flex justify-center px-4 w-fit mx-auto"
        >
          <div className="flex items-center gap-1 border border-black/10 bg-white px-3 py-2 rounded-lg shadow-sm">
            <Link
              href={`/?project=${previousEntry.slug}`}
              scroll
              title={`Anterior: ${previousEntry.title}`}
              className="inline-flex size-7 items-center justify-center rounded-md text-black hover:bg-neutral-50 transition-colors"
            >
              <ArrowLeft size={14} weight="bold" />
            </Link>

            <Link
              href={`/?project=${nextEntry.slug}`}
              scroll
              title={`Próximo: ${nextEntry.title}`}
              className="inline-flex size-7 items-center justify-center rounded-md text-black hover:bg-neutral-50 transition-colors"
            >
              <ArrowRight size={14} weight="bold" />
            </Link>

            <span className="mx-2 h-4 w-px bg-black/10" aria-hidden="true" />

            <Link
              href="/"
              scroll={false}
              title="Voltar ao portfólio"
              className="inline-flex size-7 items-center justify-center rounded-md text-black hover:bg-neutral-50 hover:text-red-500 transition-colors"
            >
              <X size={14} weight="bold" />
            </Link>
          </div>
        </nav>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#FCFCFC] text-black antialiased selection:bg-black selection:text-white">
      <section className="w-full">
        <Image
          src="/utils/page-banner.png"
          alt="MAGUI.studio"
          width={2048}
          height={854}
          priority
          sizes="100vw"
          className="h-auto w-full block"
        />
      </section>

      <section className="w-full">
        <PortfolioProjects projects={portfolioProjects} />
      </section>

      <footer className="w-full mt-40 border-t border-black/10 bg-white pt-24 pb-12 px-6 md:px-12 lg:px-16">
        <div className="space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0093C8]">
                {`// Vamos conversar?`}
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-none">
                Pronto para transformar sua presença digital?
              </h2>
            </div>
            <div className="lg:pt-6 lg:justify-self-end">
              <Link
                href="https://magui.studio/contato"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-sm font-medium transition-transform active:scale-98 hover:bg-[#0093C8] duration-300"
              >
                Iniciar um projeto
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/5">
            <div className="space-y-3">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Navegação
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#projetos"
                    className="hover:text-[#0093C8] transition-colors"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://magui.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0093C8] transition-colors"
                  >
                    Sobre nós
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Redes
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://www.instagram.com/_magui.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0093C8] transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/magui-studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0093C8] transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 md:col-span-2 md:justify-self-end text-left md:text-right">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Contato
              </p>
              <p className="text-sm">contato@magui.studio</p>
              <p className="text-xs text-neutral-400 max-w-xs md:ml-auto">
                Disponível para novos projetos.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-black/5 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-[11px] text-neutral-400 font-mono tracking-wider">
            <p>MAGUI.STUDIO</p>
            <p>© {new Date().getFullYear()} — TODOS OS DIREITOS RESERVADOS.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
