export function PulsePageStyles() {
  return (
    <style>{`
      .pulse-page {
        font-family: var(--font-pulse-text), sans-serif;
      }

      .pulse-page h1,
      .pulse-page h2,
      .pulse-page h3,
      .pulse-display {
        font-family: var(--font-pulse-display), sans-serif;
        letter-spacing: -0.04em;
      }

      .pulse-hairline {
        background-image:
          linear-gradient(rgba(26, 26, 26, 0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26, 26, 26, 0.055) 1px, transparent 1px);
        background-size: 64px 64px;
      }

      .pulse-product-scroll {
        scrollbar-width: none;
      }

      .pulse-product-scroll::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  );
}
