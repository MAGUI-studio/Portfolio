"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  MagnifyingGlass,
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
    <section className="w-full px-6 pb-24 md:px-12 lg:px-16 space-y-12 bg-[#FCFCFC]">
      <div className="w-full flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-black/5 pb-8 pt-4">
        <label className="relative block w-full md:max-w-sm">
          <span className="sr-only">Buscar projetos</span>
          <MagnifyingGlass
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar projetos..."
            className="h-10 w-full border border-black/10 bg-white pl-9 pr-4 text-xs text-black outline-none transition rounded-md focus:border-black"
          />
        </label>

        <div className="flex flex-wrap items-center gap-1.5">
          {industries.map((industry) => (
            <button
              key={industry}
              type="button"
              onClick={() => setActiveIndustry(industry)}
              className={`h-8 px-3 text-xs font-medium transition rounded-md ${
                activeIndustry === industry
                  ? "bg-[#0093C8] text-white"
                  : "bg-white border border-black/5 text-black/60 hover:border-black/20"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="w-full grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/?project=${project.slug}`}
              className="group flex flex-col space-y-3"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />

                <span className="absolute right-3 bottom-3 bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs rounded-sm">
                  {project.industry}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-medium text-black tracking-tight group-hover:underline">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    className="text-black/40 group-hover:text-black transition-colors"
                  />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-[#0093C8]">
                  {project.projectType}
                </p>

                <p className="text-sm text-neutral-600 line-clamp-2 pt-1 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags Internas Discretas */}
              <div className="flex flex-wrap gap-1 pt-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full py-16 text-center border border-dashed border-black/10 rounded-lg bg-white">
          <p className="text-sm font-medium text-black">
            Nenhum projeto encontrado.
          </p>
        </div>
      )}
    </section>
  );
}
