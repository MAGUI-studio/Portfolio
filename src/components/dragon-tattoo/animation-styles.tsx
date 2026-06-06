export function DragonTattooAnimationStyles() {
  return (
    <style>{`
      @keyframes dragon-fade {
        from {
          opacity: 0;
          transform: translateY(18px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes dragon-reveal {
        from {
          opacity: 0;
          transform: translateY(30px);
          filter: blur(10px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
      }

      .dragon-fade {
        animation: dragon-fade 0.7s cubic-bezier(.22,1,.36,1) both;
      }

      .dragon-fade-delay {
        animation-delay: 0.14s;
      }

      .dragon-reveal,
      .dragon-reveal-late {
        opacity: 1;
        transform: translateY(0);
      }

      .dragon-hover-panel,
      .dragon-cta,
      .dragon-header-link,
      .dragon-text-link,
      .dragon-logo-hover {
        transition-duration: 360ms;
        transition-timing-function: cubic-bezier(.22,1,.36,1);
      }

      .dragon-hover-panel {
        transition-property: transform, border-color, background-color, box-shadow, opacity;
      }

      .dragon-hover-panel:hover {
        transform: translateY(-5px);
        box-shadow: 0 22px 60px rgba(0,0,0,.12);
      }

      .dragon-hover-panel:hover .dragon-number {
        transform: translateX(3px);
        opacity: 1;
      }

      .dragon-number {
        display: inline-block;
        transition: transform 360ms cubic-bezier(.22,1,.36,1), opacity 360ms cubic-bezier(.22,1,.36,1);
      }

      .dragon-cta {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        transition-property: transform, background-color, color, border-color;
      }

      .dragon-cta::after {
        content: "";
        position: absolute;
        inset: -1px;
        z-index: 1;
        pointer-events: none;
        transform: translateX(-115%);
        background: linear-gradient(110deg, transparent 0%, rgba(255,255,255,.34) 45%, transparent 72%);
        transition: transform 620ms cubic-bezier(.22,1,.36,1);
      }

      .dragon-cta:hover {
        transform: translateY(-2px);
      }

      .dragon-cta:hover::after {
        transform: translateX(115%);
      }

      .dragon-header-link,
      .dragon-text-link {
        position: relative;
        transition-property: color, opacity, transform;
      }

      .dragon-header-link::after,
      .dragon-text-link::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: .85rem;
        height: 1px;
        transform: scaleX(0);
        transform-origin: left;
        background: currentColor;
        opacity: .55;
        transition: transform 360ms cubic-bezier(.22,1,.36,1);
      }

      .dragon-text-link::after {
        bottom: -.18rem;
      }

      .dragon-header-link:hover::after,
      .dragon-text-link:hover::after {
        transform: scaleX(1);
      }

      .dragon-logo-hover {
        transition-property: transform, opacity, filter;
      }

      .dragon-logo-hover:hover {
        transform: translateY(-2px) scale(1.015);
        filter: drop-shadow(0 18px 30px rgba(0,0,0,.28));
      }

      .dragon-photo {
        transition: transform 900ms cubic-bezier(.22,1,.36,1), filter 900ms cubic-bezier(.22,1,.36,1);
      }

      .dragon-photo-wrap {
        isolation: isolate;
      }

      .dragon-photo-wrap::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        background: linear-gradient(135deg, rgba(255,255,255,.13), transparent 38%);
        opacity: 0;
        transition: opacity 700ms cubic-bezier(.22,1,.36,1);
      }

      .dragon-photo-wrap:hover .dragon-photo {
        transform: scale(1.035);
        filter: contrast(1.04) saturate(1.03);
      }

      .dragon-photo-wrap:hover::after {
        opacity: 1;
      }

      @supports (animation-timeline: view()) {
        .dragon-reveal,
        .dragon-reveal-late {
          opacity: 0;
          transform: translateY(30px);
          animation-name: dragon-reveal;
          animation-fill-mode: both;
          animation-duration: 1s;
          animation-timing-function: cubic-bezier(.22,1,.36,1);
          animation-timeline: view();
        }

        .dragon-reveal {
          animation-range: entry 14% cover 34%;
        }

        .dragon-reveal-late {
          animation-range: entry 22% cover 42%;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .dragon-fade,
        .dragon-reveal,
        .dragon-reveal-late,
        .dragon-photo,
        .dragon-hover-panel,
        .dragon-cta,
        .dragon-header-link,
        .dragon-text-link,
        .dragon-logo-hover {
          animation: none;
          transition: none;
          transform: none;
          filter: none;
        }

        .dragon-cta::after,
        .dragon-photo-wrap::after,
        .dragon-header-link::after,
        .dragon-text-link::after {
          display: none;
        }
      }
    `}</style>
  );
}
