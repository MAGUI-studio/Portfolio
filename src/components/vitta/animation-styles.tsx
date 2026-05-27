export function VittaAnimationStyles() {
  return (
    <style>{`
      @keyframes vitta-fade-up {
        from { opacity: 0; transform: translateY(28px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes vitta-soft-zoom {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.055); }
      }

      @keyframes vitta-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      @keyframes vitta-orbit {
        0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        50% { transform: translate3d(12px, -16px, 0) rotate(7deg); }
      }

      .vitta-reveal {
        animation: vitta-fade-up 0.78s cubic-bezier(0.22, 1, 0.36, 1) both;
      }

      .vitta-delay-1 { animation-delay: 0.08s; }
      .vitta-delay-2 { animation-delay: 0.16s; }
      .vitta-delay-3 { animation-delay: 0.24s; }

      .vitta-soft-zoom {
        animation: vitta-soft-zoom 18s ease-in-out infinite;
        transform-origin: center;
      }

      .vitta-marquee-track {
        animation: vitta-marquee 26s linear infinite;
      }

      .vitta-orbit {
        animation: vitta-orbit 9s ease-in-out infinite;
      }

      .vitta-card {
        transition: transform 0.35s ease, border-color 0.35s ease, background-color 0.35s ease, color 0.35s ease;
      }

      .vitta-card:hover {
        transform: translateY(-7px);
      }

      .vitta-cta {
        transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      }

      .vitta-cta:hover {
        transform: translateY(-2px);
      }

      @supports (animation-timeline: view()) {
        .vitta-reveal {
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .vitta-reveal,
        .vitta-soft-zoom,
        .vitta-marquee-track,
        .vitta-orbit {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }

        .vitta-card,
        .vitta-cta {
          transition: none !important;
        }
      }
    `}</style>
  );
}
