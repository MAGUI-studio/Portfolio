"use client";

import { useRef, useState, type PointerEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChartLineUp,
  CompassTool,
  Factory,
  FileText,
  Gauge,
  SolarPanel,
} from "@phosphor-icons/react";
import { process } from "./data";
import { alexandria } from "./fonts";
import { ease, motion } from "./motion";

const processIcons = [
  Gauge,
  CompassTool,
  FileText,
  ChartLineUp,
  SolarPanel,
  Factory,
] as const;

export function KromaProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const dragState = useRef({
    pointerDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  function selectCard(index: number) {
    const nextIndex = (index + process.length) % process.length;
    const track = trackRef.current;
    const card = cardRefs.current[nextIndex];

    setActiveIndex(nextIndex);

    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  }

  function updateActiveCard() {
    const track = trackRef.current;

    if (!track) return;

    const nearestIndex = cardRefs.current.reduce((nearest, card, index) => {
      if (!card) return nearest;

      const currentDistance = Math.abs(
        card.offsetLeft - track.offsetLeft - track.scrollLeft,
      );
      const nearestCard = cardRefs.current[nearest];
      const nearestDistance = nearestCard
        ? Math.abs(nearestCard.offsetLeft - track.offsetLeft - track.scrollLeft)
        : Number.POSITIVE_INFINITY;

      return currentDistance < nearestDistance ? index : nearest;
    }, 0);

    setActiveIndex(nearestIndex);
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;

    if (!track) return;

    dragState.current = {
      pointerDown: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;

    if (!track || !dragState.current.pointerDown) return;

    const distance = event.clientX - dragState.current.startX;
    track.scrollLeft = dragState.current.scrollLeft - distance;
  }

  function stopDragging(event: PointerEvent<HTMLDivElement>) {
    if (!dragState.current.pointerDown) return;

    dragState.current.pointerDown = false;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
    updateActiveCard();
  }

  return (
    <section
      id="processo"
      className="bg-[#1E1E1E] px-5 py-24 text-white md:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto max-w-[1560px]">
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease }}
            className="py-6 md:py-8 lg:py-10"
          >
            <h2
              className={`text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl lg:text-8xl ${alexandria.className} uppercase`}
            >
              Da análise inicial ao sistema gerando energia.
            </h2>

            <div className="mt-10 flex flex-col gap-6 pt-6 lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-3xl text-base leading-8 text-white/64">
                Engenharia, homologação e instalação conectadas em uma jornada
                clara, com escopo, prazo e performance acompanháveis.
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => selectCard(activeIndex - 1)}
                  aria-label="Card anterior"
                  className="grid size-12 place-items-center bg-[#242424] text-white transition duration-300 hover:bg-[#FFBC4F] hover:text-[#2A2A2A]"
                >
                  <ArrowLeft size={18} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={() => selectCard(activeIndex + 1)}
                  aria-label="Proximo card"
                  className="grid size-12 place-items-center bg-[#FFBC4F] text-[#2A2A2A] transition duration-300 hover:bg-white"
                >
                  <ArrowRight size={18} weight="bold" />
                </button>
                <p className="ml-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/42">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(process.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.62, delay: 0.08, ease }}
          className="mt-12"
        >
          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            onScroll={updateActiveCard}
            className={`flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {process.map(([number, title, text], index) => {
              const Icon = processIcons[index];
              const isActive = activeIndex === index;

              return (
                <article
                  key={title}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className={`group relative flex min-h-[430px] w-[84vw] shrink-0 snap-start flex-col justify-between overflow-hidden border border-white/10 bg-[#242424]/72 p-7 shadow-[0_24px_90px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-300 md:w-[48vw] lg:w-[31.6%] ${
                    isActive
                      ? "border-white/18 bg-[#2A2A2A]/84"
                      : "hover:border-white/16 hover:bg-[#2A2A2A]/72"
                  }`}
                >
                  <Icon
                    size={240}
                    weight="duotone"
                    className="pointer-events-none absolute -right-14 -bottom-12 text-white/8 transition duration-500 group-hover:scale-105 group-hover:text-white/12"
                  />

                  <div className="relative z-10 flex items-center justify-between gap-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/42">
                      etapa {number}
                    </span>
                    <span className="grid size-12 place-items-center bg-white/6 text-white/54">
                      <Icon size={24} weight="duotone" />
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="font-mono text-7xl font-light tracking-[-0.1em] text-white/12">
                      {number}
                    </span>
                    <h3
                      className={`mt-5 text-4xl font-semibold leading-none tracking-[-0.04em] text-white md:text-5xl ${alexandria.className}`}
                    >
                      {title}
                    </h3>
                    <p className="mt-6 max-w-md text-base leading-8 text-white/58">
                      {text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-2">
              {process.map(([number, title], index) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => selectCard(index)}
                  aria-label={`Ir para etapa ${number}: ${title}`}
                  className={`h-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "w-12 bg-[#FFBC4F]"
                      : "w-2 bg-white/22 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
