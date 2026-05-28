import Image from "next/image";
import Link from "next/link";
import { shinobiBrand, shinobiNav } from "./data";

export function ShinobiFooter() {
  return (
    <footer className="bg-black px-5 pb-10 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1540px] border-t border-white/10 pt-12">
        <div className="grid gap-12 lg:grid-cols-[0.52fr_0.22fr_0.26fr]">
          <div>
            <div className="relative h-24 w-72 max-w-full">
              <Image src={shinobiBrand.logo} alt="SHINOBI" fill sizes="290px" className="object-contain object-left" />
            </div>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/56">
              Energetico de identidade noturna, sabores frutados e impacto visual pensado para freezer, evento e cultura
              digital.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.26em] text-white/36">navegacao</p>
            <div className="mt-6 grid gap-3 text-sm text-white/56">
              {shinobiNav.map((item) => (
                <Link key={item.href} href={item.href} className="w-fit transition duration-300 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.26em] text-white/36">comercial</p>
            <div className="mt-6 grid gap-3 text-sm text-white/56">
              <Link href="mailto:comercial@shinobi.example" className="w-fit transition duration-300 hover:text-white">
                comercial@shinobi.example
              </Link>
              <p>Distribuicao e ativacoes</p>
              <p>Freezer, evento e varejo</p>
            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-white/44 md:flex-row md:items-center md:justify-between">
          <p>SHINOBI Energia. Identidade noturna e sabores frutados.</p>

          <div className="flex flex-wrap items-center gap-3">
            <span>
              Oferecido por{" "}
              <Link
                href="https://magui.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition duration-300 hover:text-[#e73543] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e73543] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <strong className="font-black">MAGUI</strong>
                <span className="text-[#e73543]">.</span>
                <span>studio</span>
              </Link>
            </span>

            <span aria-hidden="true" className="text-white/20">
              |
            </span>

            <Link
              href="#inicio"
              className="inline-flex cursor-pointer items-center gap-1 text-white transition duration-300 hover:text-[#e73543] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e73543] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Voltar ao topo
              <span aria-hidden="true">&uarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
