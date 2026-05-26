export function KromaAnimationStyles() {
  return (
    <style>{`
      @keyframes kroma-fade-up {
        from { opacity: 0; transform: translateY(26px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes kroma-kenburns {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.045); }
      }

      @keyframes kroma-scan {
        from { transform: translateY(-100%); opacity: 0; }
        18% { opacity: 0.32; }
        to { transform: translateY(100%); opacity: 0; }
      }

      @keyframes kroma-pulse {
        0%, 100% { opacity: 0.35; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.35); }
      }

      @keyframes kroma-bar {
        0%, 100% { transform: scaleY(0.48); opacity: 0.38; }
        50% { transform: scaleY(1); opacity: 0.9; }
      }

      @keyframes kroma-drift {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(0, -10px, 0); }
      }

      .kroma-reveal {
        animation: kroma-fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
      }

      .kroma-delay-1 { animation-delay: 0.08s; }
      .kroma-delay-2 { animation-delay: 0.16s; }
      .kroma-delay-3 { animation-delay: 0.24s; }

      .kroma-kenburns {
        animation: kroma-kenburns 18s ease-in-out infinite;
        transform-origin: center;
      }

      .kroma-drift {
        animation: kroma-drift 7s ease-in-out infinite;
      }

      .kroma-scanline::after {
        content: "";
        position: absolute;
        inset: -35% 0;
        pointer-events: none;
        background: linear-gradient(180deg, transparent, rgba(255, 188, 79, 0.14), transparent);
        animation: kroma-scan 7s ease-in-out infinite;
        mix-blend-mode: screen;
      }

      .kroma-card-hover {
        isolation: isolate;
        position: relative;
        transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, background-color 0.35s ease;
      }

      .kroma-card-hover:hover {
        transform: translateY(-6px);
        border-color: rgba(255, 255, 255, 0.24);
        box-shadow: 0 28px 90px rgba(0, 0, 0, 0.24);
      }

      .kroma-cta {
        transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      }

      .kroma-cta:hover {
        transform: translateY(-2px);
      }

      .kroma-pulse-dot {
        animation: kroma-pulse 2.4s ease-in-out infinite;
      }

      .kroma-bars > span,
      .kroma-bars > button {
        transform-origin: bottom;
        animation: kroma-bar 2.8s ease-in-out infinite;
      }

      .kroma-bars > span:nth-child(2n),
      .kroma-bars > button:nth-child(2n) { animation-delay: 0.22s; }
      .kroma-bars > span:nth-child(3n),
      .kroma-bars > button:nth-child(3n) { animation-delay: 0.44s; }
      .kroma-bars > span:nth-child(4n),
      .kroma-bars > button:nth-child(4n) { animation-delay: 0.66s; }

      .kroma-link-underline {
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size 0.3s ease, color 0.3s ease;
      }

      .kroma-link-underline:hover {
        background-size: 100% 1px;
      }

      @supports (animation-timeline: view()) {
        .kroma-reveal {
          animation-timeline: view();
          animation-range: entry 0% cover 28%;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .kroma-reveal,
        .kroma-kenburns,
        .kroma-drift,
        .kroma-scanline::after,
        .kroma-pulse-dot,
        .kroma-bars > span,
        .kroma-bars > button {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }

        .kroma-card-hover,
        .kroma-cta,
        .kroma-link-underline {
          transition: none !important;
        }
      }
    `}</style>
  );
}
