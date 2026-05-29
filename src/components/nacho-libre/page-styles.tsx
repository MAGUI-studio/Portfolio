export function NachoLibrePageStyles() {
  return (
    <style>{`
      .nacho-page {
        font-family: var(--font-nacho-text), sans-serif;
      }

      .nacho-page h1,
      .nacho-page h2,
      .nacho-page h3,
      .nacho-page .nacho-marquee,
      .nacho-page [class*="text-5xl"],
      .nacho-page [class*="text-6xl"],
      .nacho-page [class*="text-7xl"],
      .nacho-page [class*="text-8xl"] {
        font-family: var(--font-nacho-display), sans-serif;
        letter-spacing: 0;
      }

      .nacho-marquee {
        animation: nacho-marquee 28s linear infinite;
      }

      @keyframes nacho-marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }

      .nacho-noise {
        background-image:
          radial-gradient(circle at 1px 1px, rgba(242, 233, 220, 0.12) 1px, transparent 0),
          linear-gradient(135deg, rgba(232, 106, 23, 0.1), transparent 38%);
        background-size: 22px 22px, 100% 100%;
      }

      .nacho-cut-corner {
        clip-path: polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 26px 100%, 0 calc(100% - 26px));
      }

      .nacho-mask-lines {
        background:
          linear-gradient(90deg, transparent 0 48%, rgba(232, 106, 23, 0.26) 48% 52%, transparent 52%),
          repeating-linear-gradient(135deg, transparent 0 16px, rgba(242, 233, 220, 0.08) 16px 17px);
      }
    `}</style>
  );
}
