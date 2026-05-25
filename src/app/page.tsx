import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, SquaresFour, X } from "@phosphor-icons/react/dist/ssr";
import { sectionCategories, sectionMap, sections } from "@/components/sections/registry";

export default async function Home(props: PageProps<"/">) {
  const searchParams = await props.searchParams;
  const activeSlug = typeof searchParams.section === "string" ? searchParams.section : undefined;
  const activeIndex = sections.findIndex((section) => section.slug === activeSlug);
  const activeEntry = activeIndex >= 0 ? sections[activeIndex] : undefined;
  const previousEntry = activeIndex > 0 ? sections[activeIndex - 1] : undefined;
  const nextEntry = activeIndex >= 0 && activeIndex < sections.length - 1 ? sections[activeIndex + 1] : undefined;
  const ActiveComponent = activeEntry ? sectionMap[activeEntry.slug].component : null;

  if (activeEntry && ActiveComponent) {
    return (
      <main className="bg-[var(--canvas)]">
        <div className="bg-[rgba(246,242,235,0.92)] shadow-[0_12px_40px_rgba(17,17,17,0.04)]">
          <div className="flex w-full items-center justify-between gap-4 px-4 py-4 md:px-6">
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">{activeEntry.category}</p>
              <h1 className="truncate text-lg font-semibold tracking-[-0.04em] text-[var(--ink-strong)]">
                {activeEntry.title}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={previousEntry ? `/?section=${previousEntry.slug}` : "#"}
                scroll={false}
                aria-disabled={!previousEntry}
                className={`inline-flex h-11 w-11 items-center justify-center bg-white shadow-[0_10px_30px_rgba(17,17,17,0.06)] transition duration-300 ${previousEntry ? "hover:-translate-y-0.5 hover:bg-[#f1f1f1]" : "pointer-events-none opacity-30"}`}
              >
                <ArrowLeft size={18} />
              </Link>
              <Link
                href={nextEntry ? `/?section=${nextEntry.slug}` : "#"}
                scroll={false}
                aria-disabled={!nextEntry}
                className={`inline-flex h-11 w-11 items-center justify-center bg-white shadow-[0_10px_30px_rgba(17,17,17,0.06)] transition duration-300 ${nextEntry ? "hover:-translate-y-0.5 hover:bg-[#f1f1f1]" : "pointer-events-none opacity-30"}`}
              >
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/"
                scroll={false}
                className="inline-flex h-11 w-11 items-center justify-center bg-white shadow-[0_10px_30px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f1f1f1]"
              >
                <X size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <ActiveComponent />
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[var(--canvas)] px-6 py-8 text-[var(--ink)] md:px-10 lg:px-14">
      <div className="w-full space-y-10">
        <section className="section-shell overflow-hidden bg-[var(--surface)]">
          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8 p-8 md:p-12">
              <div className="inline-flex items-center gap-3 bg-[#f6f6f6] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)] shadow-[inset_0_0_0_1px_rgba(17,17,17,0.04)]">
                <SquaresFour size={14} />
                Colecao de landing pages
              </div>
              <div className="w-full space-y-5">
                <h1 className="font-sans text-4xl font-semibold tracking-[-0.07em] text-[var(--ink-strong)] md:text-6xl">
                  Dez modelos completos, cada um de um segmento, com visual clean, moderno e premium.
                </h1>
                <p className="text-sm leading-7 text-[var(--muted-strong)] md:text-base">
                  Abra qualquer landing para navegar em tela cheia sem sair da pagina e comparar direcoes visuais bem diferentes.
                </p>
              </div>
            </div>

            <div className="grid bg-[#fafafa]">
              {sectionCategories.map((category) => (
                <div key={category.label} className="p-6 md:p-8">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                    {category.label}
                  </p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <p className="text-sm leading-7 text-[var(--muted-strong)]">
                      {category.description}
                    </p>
                    <span className="text-4xl font-semibold tracking-[-0.07em] text-[var(--ink-strong)]">
                      {category.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {sectionCategories.map((category) => (
          <section key={category.label} className="space-y-4">
            <div className="flex items-end justify-between pb-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  {category.label}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[var(--ink-strong)]">
                  {category.description}
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {sections
                .filter((section) => section.category === category.label)
                .map((section) => (
                  <Link
                    key={section.slug}
                    href={`/?section=${section.slug}`}
                    scroll={false}
                    className="section-shell group flex min-h-72 flex-col justify-between bg-[var(--surface)] p-6 transition duration-500 hover:-translate-y-1 hover:bg-white"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                          {section.index}
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="text-[var(--ink)] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[var(--ink-strong)]">
                          {section.title}
                        </h3>
                        <p className="text-sm leading-7 text-[var(--muted-strong)]">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-5 text-[11px] uppercase tracking-[0.24em] text-[var(--muted-strong)]">
                      <span>{section.mode}</span>
                      <span>Abrir</span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
