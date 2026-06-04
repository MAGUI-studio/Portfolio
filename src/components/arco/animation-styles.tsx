export function ArcoAnimationStyles() {
  return (
    <style>{`
      @keyframes arco-rise {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes arco-soft-scale {
        from { opacity: 0; transform: scale(.98); }
        to { opacity: 1; transform: scale(1); }
      }

      .arco-rise {
        animation: arco-rise .75s cubic-bezier(.22,1,.36,1) both;
      }

      .arco-rise-delay {
        animation-delay: .12s;
      }

      .arco-rise-delay-2 {
        animation-delay: .24s;
      }

      .arco-scale {
        animation: arco-soft-scale .9s cubic-bezier(.22,1,.36,1) both;
      }
    `}</style>
  );
}
