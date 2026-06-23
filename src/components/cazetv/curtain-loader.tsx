"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CurtainLoader() {
  const [stage, setStage] = useState<"visible" | "animating" | "hidden">("visible");

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Start curtain slide up after the logo assembly animation completes
    const animTimeout = setTimeout(() => {
      setStage("animating");
    }, 2200);

    const hideTimeout = setTimeout(() => {
      setStage("hidden");
      document.body.style.overflow = "unset";
    }, 3200);

    return () => {
      clearTimeout(animTimeout);
      clearTimeout(hideTimeout);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (stage === "hidden") return null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes cazeIconBounce {
              0% {
                transform: scale(0) rotate(-10deg);
                opacity: 0;
              }
              60% {
                transform: scale(1.15) rotate(5deg);
              }
              80% {
                transform: scale(0.95) rotate(-2deg);
              }
              100% {
                transform: scale(1) rotate(0deg);
                opacity: 1;
              }
            }

            @keyframes cazeTextReveal {
              0% {
                width: 0;
                opacity: 0;
                transform: scaleX(0.1);
                margin-left: -20px;
              }
              40% {
                opacity: 0.5;
              }
              70% {
                width: 170px;
                transform: scaleX(1.15);
                margin-left: 12px;
              }
              85% {
                transform: scaleX(0.95);
              }
              100% {
                width: 160px;
                opacity: 1;
                transform: scaleX(1);
                margin-left: 12px;
              }
            }

            .animate-caze-icon {
              animation: cazeIconBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }

            .animate-caze-text {
              animation: cazeTextReveal 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards;
              overflow: hidden;
              display: flex;
              align-items: center;
            }
          `
        }}
      />

      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 transition-transform duration-[1000ms] cubic-bezier(0.85, 0, 0.15, 1) ${
          stage === "animating" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex items-center justify-center">
          {/* Icon */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 opacity-0 animate-caze-icon z-10">
            <Image
              src="/images/cazetv/icone-caze-tv.webp"
              alt="CazéTV Icon"
              fill
              sizes="(max-width: 768px) 80px, 96px"
              className="object-contain"
              priority
            />
          </div>

          {/* Text wrapper with animated reveal from within/behind the icon */}
          <div className="animate-caze-text opacity-0 w-0 h-16 md:h-20 relative">
            <div className="relative w-[160px] h-full">
              <Image
                src="/images/cazetv/texto-caze-tv-branco.webp"
                alt="CazéTV Text"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
