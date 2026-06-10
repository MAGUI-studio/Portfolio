"use client";

import Image from "next/image";
import { ArrowsHorizontal } from "@phosphor-icons/react";
import {
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  useId,
  useRef,
  useState,
} from "react";

type BeforeAfterSliderProps = {
  afterAlt: string;
  afterImage: string;
  beforeAlt: string;
  beforeImage: string;
};

export function BeforeAfterSlider({
  afterAlt,
  afterImage,
  beforeAlt,
  beforeImage,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  function clampPosition(value: number) {
    return Math.min(100, Math.max(0, value));
  }

  function updateFromClientX(clientX: number) {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const bounds = container.getBoundingClientRect();
    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(clampPosition(nextPosition));
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    updateFromClientX(event.clientX);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!isDragging) {
      return;
    }

    updateFromClientX(event.clientX);
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((current) => clampPosition(current - 2));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((current) => clampPosition(current + 2));
    }
  }

  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/48">
        <span>Antes</span>
        <span>Depois</span>
      </div>

      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-labelledby={sliderId}
        aria-label="Comparador de antes e depois"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        className="relative aspect-[1.18/1] cursor-ew-resize overflow-hidden touch-none outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        <p id={sliderId} className="sr-only">
          Arraste a linha para comparar o estado antes e depois do sneaker.
        </p>

        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="100vw"
          className="pointer-events-none select-none object-cover object-center"
          draggable={false}
        />

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="100vw"
            className="pointer-events-none select-none object-cover object-center"
            draggable={false}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-10"
          style={{ left: `calc(${position}% - 1px)` }}
        >
          <div className="relative h-full w-px bg-white/90">
            <div className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/16 bg-[#0A0A0A]/92 text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur">
              <ArrowsHorizontal size={20} weight="bold" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-6 bottom-8 z-10 h-px bg-white/24" />
      </div>
    </div>
  );
}
