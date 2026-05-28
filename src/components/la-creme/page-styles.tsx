"use client";

import { ease } from "./motion";

export function LaCremePageStyles() {
  return (
<style>{`
        @keyframes pastry-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes pastry-float {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-14px) rotate(1deg); }
        }

        @keyframes pastry-glow {
          0%, 100% { opacity: 0.34; }
          50% { opacity: 0.74; }
        }

        @keyframes pastry-carousel {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 12px)); }
        }

        @keyframes cream-rise {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes pastry-drift {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0, -18px, 0) rotate(0.8deg); }
        }

        @keyframes pastry-shimmer {
          0% { transform: translateX(-120%); opacity: 0; }
          28% { opacity: 0.72; }
          100% { transform: translateX(120%); opacity: 0; }
        }

        .sweet-carousel:hover {
          animation-play-state: paused;
        }

        .cream-reveal {
          animation: cream-rise 0.8s cubic-bezier(${ease.join(",")}) both;
        }

        .pastry-drift {
          animation: pastry-drift 8s ease-in-out infinite;
        }

        .pastry-shimmer::after {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.36), transparent);
          content: "";
          inset: 0;
          position: absolute;
          transform: translateX(-120%);
          animation: pastry-shimmer 4.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sweet-carousel,
          .pastry-drift,
          .pastry-shimmer::after {
            animation: none !important;
          }
        }
      `}</style>
  );
}
