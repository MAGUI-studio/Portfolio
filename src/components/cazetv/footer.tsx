import Image from "next/image";
import Link from "next/link";
import { ScrollTopLink } from "@/components/scroll-top-link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-900 bg-neutral-950 pt-12 pb-24 text-zinc-500">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between pb-8 border-b border-zinc-900/60">
          {/* Logo & Description */}
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="relative h-20 w-44 transition-opacity duration-300">
              <Image
                src="/images/cazetv/logo-caze-tv-texto-branco.webp"
                alt="CazéTV Logo"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Calendário interativo de jogos para a Copa do Mundo FIFA 2026. Acompanhe os resultados e o chaveamento eliminatório.
            </p>
          </div>

          {/* Copyright & Project Attributions */}
          <div className="flex flex-col gap-2 md:items-end text-xs">
            <p className="font-semibold text-zinc-400">
              © {new Date().getFullYear()} CazéTV • Projeto de Portfólio
            </p>
            <div className="flex items-center gap-3 text-zinc-500">
              <span>
                Oferecido por{" "}
                <Link
                  href="https://magui.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-zinc-400 hover:text-orange-500 transition duration-200"
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

        {/* Legal Disclaimer Box */}
        <div className="mt-8 rounded-2xl bg-zinc-900/10 border border-zinc-900/50 p-6 text-[10px] text-zinc-500 leading-relaxed">
          <p className="font-extrabold uppercase text-zinc-300 mb-2 tracking-wider flex items-center gap-1.5">
            <span className="text-orange-500 text-xs">⚠️</span>
            Aviso de Propriedade Intelectual e Isenção de Responsabilidade
          </p>
          <p>
            Este website é um projeto não-oficial desenvolvido exclusivamente com finalidade demonstrativa de portfólio acadêmico, design de interfaces e estudo de tecnologia. Todos os logotipos, marcas registradas, nomes comerciais e direitos de imagem associados à CazéTV pertencem à Live Mode / CazéTV. Todos os direitos e propriedade intelectual sobre o torneio Copa do Mundo FIFA 2026 e suas marcas associadas pertencem à FIFA e entidades parceiras. Este site não possui fins lucrativos, comerciais ou afiliação comercial, não pretendendo representar, agir em nome ou sugerir vínculo oficial com as entidades proprietárias das marcas.
          </p>
        </div>
      </div>
    </footer>
  );
}
