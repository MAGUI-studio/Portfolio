export function PowervetAnimationStyles() {
  return (
    <style>{`
      @keyframes powervet-rise {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes powervet-drift {
        0%, 100% { transform: translate3d(0, 0, 0); }
        50% { transform: translate3d(0, -10px, 0); }
      }
      @keyframes powervet-scan {
        from { transform: translateX(-110%); }
        to { transform: translateX(110%); }
      }
      .powervet-rise { animation: powervet-rise .8s cubic-bezier(.22, 1, .36, 1) both; }
      .powervet-rise-delay { animation-delay: .14s; }
      .powervet-rise-delay-2 { animation-delay: .28s; }
      .powervet-drift { animation: powervet-drift 7s ease-in-out infinite; }
      .powervet-scan { animation: powervet-scan 4.8s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .powervet-rise, .powervet-drift, .powervet-scan { animation: none; }
      }
    `}</style>
  );
}
