import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-900 bg-neutral-950 py-8 text-zinc-600">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs font-medium">
            © {new Date().getFullYear()} CazéTV • Calendário de Jogos Copa do Mundo 2026.
          </p>
          <div className="flex items-center gap-3 text-xs">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-zinc-400 hover:text-orange-500 transition duration-200"
              >
                <strong>MAGUI</strong>.studio
              </Link>
            </span>
            <span className="text-zinc-800">|</span>
            <ScrollTopLink className="text-zinc-400 hover:text-orange-500 transition duration-200 cursor-pointer">
              Voltar ao topo ↑
            </ScrollTopLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
