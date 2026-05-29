"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  MagnifyingGlass,
  SlidersHorizontal,
} from "@phosphor-icons/react";
import { useMemo, useState } from "react";

export type PortfolioProject = {
  description: string;
  goal: string;
  image: string;
  index: string;
  industry: string;
  projectType: string;
  slug: string;
  tags: string[];
  title: string;
};

type PortfolioProjectsProps = {
  projects: PortfolioProject[];
};

export function PortfolioProjects({ projects }: PortfolioProjectsProps) {
  const [query, setQuery] = useState("");
  const [activeIndustry, setActiveIndustry] = useState("Todos");

  const industries = useMemo(
    () => [
      "Todos",
      ...Array.from(new Set(projects.map((project) => project.industry))),
    ],
    [projects],
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesIndustry =
        activeIndustry === "Todos" || project.industry === activeIndustry;
      const searchable = [
        project.title,
        project.description,
        project.goal,
        project.industry,
        project.projectType,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesIndustry &&
        (!normalizedQuery || searchable.includes(normalizedQuery))
      );
    });
  }, [activeIndustry, projects, query]);

  return (
    <section className="w-full px-6 pb-24 md:px-12 lg:px-16 space-y-12">
      
      {/* BARRA DE FILTROS E BUSCA (FULL WIDTH) */}
      <div className="w-full border border-black/10 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.03)] md:p-6 rounded-sm">
        <div className="grid gap-6 xl:grid-cols-[400px_1fr] xl:items-center">
          
          {/* Input de Busca Avançado */}
          <label className="relative block w-full">
            <span className="sr-only">Buscar projetos</span>
            <MagnifyingGlass
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/45"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por nicho, marca ou objetivo"
              className="h-[48px] w-full border border-black/10 bg-[#fbfbf9] pl-11 pr-4 text-sm text-[var(--ink-strong)] outline-none transition rounded-xs placeholder:text-black/40 focus:border-black/40 focus:bg-white"
            />
          </label>

          {/* Botões de Filtro */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 inline-flex h-10 items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/45">
              <SlidersHorizontal size={14} weight="bold" />
              Filtros
            </span>
            {industries.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => setActiveIndustry(industry)}
                className={`h-9 border px-4 text-xs font-medium transition duration-300 rounded-xs ${
                  activeIndustry === industry
                    ? "border-[#0796bc] bg-[#0796bc] text-white"
                    : "border-black/10 bg-white text-black/60 hover:border-black/30 hover:text-black"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* HEADLINE DA GALERIA */}
      <div className="w-full flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-black/5 pb-6">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
            Galeria de projetos
          </p>
          <h2 className="mt-2 text-2xl font-light leading-tight tracking-tight text-[var(--ink-strong)] md:text-4xl">
            Soluções reais desenvolvidas sob medida.
          </h2>
        </div>
        <p className="text-xs font-medium tracking-wide uppercase text-black/40">
          Showing {filteredProjects.length} — {projects.length} Projetos
        </p>
      </div>

      {/* GRID DE PROJETOS FULL-WIDTH DILATADO */}
      {filteredProjects.length > 0 ? (
        <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/?project=${project.slug}`}
              scroll
              className="group flex flex-col justify-between overflow-hidden border border-black/5 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1.5 hover:border-black/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-sm"
            >
              {/* Container da Imagem */}
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.projectType}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                  <span className="absolute left-4 top-4 bg-white/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black/75 backdrop-blur-md border border-black/5 rounded-xs">
                    {project.industry}
                  </span>
                </div>

                {/* Info Principal do Card */}
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-black/40">
                      {project.projectType}
                    </p>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-medium tracking-tight text-[var(--ink-strong)] group-hover:text-[#0796bc] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black">
                        <ArrowUpRight size={14} weight="bold" />
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--muted-strong)] line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Seção de Objetivo interna com design polido */}
                  <div className="border-t border-black/5 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-black/35">
                      Objetivo Comercial
                    </p>
                    <p className="mt-1 text-ce text-xs leading-relaxed text-neutral-600 line-clamp-2">
                      {project.goal}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags fixadas no rodapé do Card */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex flex-wrap gap-1 border-t border-black/5 pt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-neutral-50 border border-black/5 px-2 py-0.5 text-[11px] font-medium text-neutral-500 rounded-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[11px] px-1 py-0.5 text-neutral-400 font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

            </Link>
          ))}
        </div>
      ) : (
        /* Feedback de busca limpa */
        <div className="w-full border border-black/10 bg-white px-6 py-16 text-center rounded-sm">
          <p className="text-base font-medium text-[var(--ink-strong)]">
            Nenhum projeto corresponde à sua busca.
          </p>
          <p className="mt-1 text-xs text-[var(--muted-strong)]">
            Experimente selecionar outro segmento ou limpe o campo de pesquisa.
          </p>
        </div>
      )}
    </section>
  );
}