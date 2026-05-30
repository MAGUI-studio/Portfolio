export function BitesPageStyles() {
  return (
    <style>{`
      @keyframes bites-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-33.333%); }
      }
    `}</style>
  );
}
