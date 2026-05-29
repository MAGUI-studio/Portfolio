"use client";

import { usePulseCart } from "./cart";

export function PulseToast() {
  const { lastToast } = usePulseCart();

  return (
    <div
      className={`fixed bottom-5 left-1/2 z-[10000] -translate-x-1/2 transition duration-300 ${
        lastToast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-live="polite"
    >
      <div className="bg-[#1A1A1A] px-5 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
        {lastToast?.message}
      </div>
    </div>
  );
}
