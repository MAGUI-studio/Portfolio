"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import type { PortfolioProject } from "@/app/portfolio-projects";

type FeaturedProjectsProps = {
  projects: PortfolioProject[];
};

const slideDuration = 6500;

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (isPaused || projects.length < 2) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, slideDuration);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, isPaused, projects.length]);

  if (!activeProject) {
    return null;
  }

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % projects.length);
  }

  return (
    <section
      id="destaques"
      className="w-full bg-[#FCFCFC] px-6 pb-20 pt-16 md:px-12 lg:px-16"
    >
      <div className="mb-8 flex items-end justify-between gap-6 border-b border-black/10 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase text-[#0093C8]">
            Curadoria
          </p>
          <h2 className="mt-2 text-3xl font-light leading-none text-black md:text-4xl">
            Em destaque
          </h2>
        </div>
        <p className="hidden max-w-md text-right text-xs leading-6 text-neutral-500 md:block">
          Uma seleção de projetos recentes com direção visual e desenvolvimento
          autoral.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-black/8 bg-white shadow-xl shadow-neutral-100/40 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/40">
        <div className="grid lg:grid-cols-[0.62fr_0.38fr]">
          <Link
            key={`${activeProject.slug}-image`}
            href={`/projetos/${activeProject.slug}`}
            className="group relative aspect-[4/3] overflow-hidden bg-neutral-100 sm:aspect-[16/10] lg:min-h-[600px] lg:aspect-auto"
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] animate-[featured-image-in_700ms_ease-out]"
              priority
            />
            <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-transparent" />
            <span className="absolute left-5 top-5 rounded-md bg-white/92 px-3 py-2 text-[10px] font-semibold uppercase text-black backdrop-blur-md shadow-xs">
              Projeto 0{activeIndex + 1}
            </span>
          </Link>

          <div
            key={`${activeProject.slug}-content`}
            className="flex min-h-[560px] flex-col justify-between p-6 animate-[featured-content-in_500ms_ease-out] md:min-h-[580px] md:p-8 lg:min-h-[600px] lg:p-10"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] font-semibold uppercase text-[#0093C8] tracking-wider">
                  {activeProject.industry} / {activeProject.projectType}
                </p>
                <span className="text-xs font-semibold text-neutral-400">
                  0{activeIndex + 1} / 0{projects.length}
                </span>
              </div>

              <h3 className="mt-9 min-h-[120px] text-5xl font-medium leading-none text-black tracking-tight md:min-h-[144px] md:text-6xl">
                {activeProject.title}
              </h3>
              <p className="mt-6 min-h-[84px] text-sm leading-7 text-neutral-600">
                {activeProject.description}
              </p>

              <div className="mt-8 min-h-[144px] border-t border-black/8 pt-6">
                <p className="text-[10px] font-semibold uppercase text-neutral-400 tracking-wider">
                  Objetivo
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {activeProject.goal}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xs bg-neutral-100 px-2 py-1 text-[10px] font-medium text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/projetos/${activeProject.slug}`}
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-[#0093C8] transition-colors"
              >
                Abrir projeto
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid border-t border-black/8 lg:grid-cols-[1fr_auto]">
          <div className="grid grid-cols-2 sm:grid-flow-col sm:auto-cols-fr">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative border-b border-r border-black/8 px-5 py-4 text-left transition-colors last:border-r-0 sm:border-b-0 ${
                    isActive ? "bg-neutral-50" : "bg-white hover:bg-neutral-50"
                  }`}
                >
                  <span className="text-[10px] font-semibold text-neutral-400">
                    0{index + 1}
                  </span>
                  <span className="ml-3 text-sm font-medium text-black">
                    {project.title}
                  </span>
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden bg-black/8">
                      <span
                        key={`${activeIndex}-${isPaused}`}
                        className="block h-full bg-[#0093C8] animate-[featured-progress_6500ms_linear_forwards]"
                        style={{
                          animationPlayState: isPaused ? "paused" : "running",
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-1 bg-white p-3">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Projeto anterior"
              className="inline-flex size-10 items-center justify-center rounded-md border border-black/8 text-black transition-colors hover:bg-neutral-50 cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((current) => !current)}
              aria-label={isPaused ? "Continuar carrossel" : "Pausar carrossel"}
              className="inline-flex size-10 items-center justify-center rounded-md border border-black/8 text-black transition-colors hover:bg-neutral-50 cursor-pointer"
            >
              {isPaused ? <Play size={16} weight="fill" /> : <Pause size={16} weight="fill" />}
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Próximo projeto"
              className="inline-flex size-10 items-center justify-center rounded-md border border-black/8 text-black transition-colors hover:bg-neutral-50 cursor-pointer"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes featured-progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes featured-image-in {
          from { opacity: .5; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes featured-content-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
