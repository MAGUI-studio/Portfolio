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

      .dragon-fade {
        animation: dragon-fade 0.7s cubic-bezier(.22,1,.36,1) both;
      }

      .dragon-fade-delay {
        animation-delay: 0.14s;
      }

      .dragon-photo {
        transition: transform 700ms cubic-bezier(.22,1,.36,1), filter 700ms cubic-bezier(.22,1,.36,1);
      }

      .dragon-photo-wrap:hover .dragon-photo {
        transform: scale(1.025);
        filter: contrast(1.03);
      }

      @media (prefers-reduced-motion: reduce) {
        .dragon-fade,
        .dragon-photo {
          animation: none;
          transition: none;
        }
      }
    `}</style>
  );
}
