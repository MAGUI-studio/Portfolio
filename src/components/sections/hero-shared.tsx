import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const heroImages = [
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1580281657527-47c4f0f31f96?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
];

export function HeroButton({ children }: { children: ReactNode }) {
  return (
    <button className="group relative inline-flex items-center gap-3 overflow-hidden bg-black px-6 py-3 text-sm font-semibold text-white transition duration-500 hover:text-black">
      <span className="absolute inset-0 -translate-x-full bg-white transition duration-500 group-hover:translate-x-0" />
      <span className="relative z-10">{children}</span>
      <ArrowRight size={18} className="relative z-10 transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
    </button>
  );
}

export function HeroButtonLight({ children }: { children: ReactNode }) {
  return (
    <button className="group relative inline-flex items-center gap-3 overflow-hidden bg-white px-6 py-3 text-sm font-semibold text-black transition duration-500 hover:text-white">
      <span className="absolute inset-0 translate-y-full bg-black transition duration-500 group-hover:translate-y-0" />
      <span className="relative z-10">{children}</span>
      <ArrowRight size={18} className="relative z-10 transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
    </button>
  );
}

export function HeroImage({
  alt,
  className,
  variant = 0,
}: {
  alt: string;
  className?: string;
  variant?: number;
}) {
  return (
    <Image
      src={heroImages[((variant % heroImages.length) + heroImages.length) % heroImages.length]}
      alt={alt}
      width={1600}
      height={1200}
      className={className ?? "h-full w-full object-cover"}
    />
  );
}

export function HeroEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">{children}</p>
  );
}
