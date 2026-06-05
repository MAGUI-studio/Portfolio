import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { dragonTattooImages, dragonTattooScheduleWhatsapp } from "./data";

const tattooGallery = [
  {
    src: dragonTattooImages.gallery01,
    alt: "Tatuagem oriental realizada no estúdio Dragon Tattoo",
  },
  {
    src: dragonTattooImages.gallery02,
    alt: "Projeto de tatuagem oriental com contraste e sombreado",
  },
  {
    src: dragonTattooImages.gallery03,
    alt: "Detalhe de tatuagem oriental autoral",
  },
  {
    src: dragonTattooImages.gallery04,
    alt: "Tatuagem oriental finalizada no estúdio",
  },
];

export function DragonTattooGallerySection() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#070604] py-24 text-[#F4F0E8] md:py-32"
    >
      <div className="mx-auto max-w-[1720px] px-5 md:px-10 lg:px-14">
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-[#D6A858]">
              Portfólio
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.9] md:text-7xl lg:text-8xl">
              Obras que seguram o olhar.
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg leading-8 text-white md:text-xl md:leading-9">
              Projetos executados no estúdio. Cada composição foi construída
              para funcionar na anatomia específica de quem a carrega.
            </p>

            <Link
              href={dragonTattooScheduleWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-3 border border-[#F4F0E8]/22 px-7 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[#F4F0E8] transition hover:bg-[#F4F0E8] hover:text-[#080706]"
            >
              Ver disponibilidade
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[210px_210px_210px_210px]">
          <div className="dragon-photo-wrap relative h-[420px] overflow-hidden border border-[#F4F0E8]/12 bg-[#111] lg:col-span-7 lg:row-span-3 lg:h-full">
            <Image
              src={tattooGallery[0].src}
              alt={tattooGallery[0].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="dragon-photo object-cover"
            />
            <div className="absolute left-0 top-0 border-r border-b border-[#F4F0E8]/14 bg-[#070604]/84 px-5 py-4 text-[10px] font-black uppercase tracking-[0.24em] text-[#D6A858] backdrop-blur">
              01 / Flow
            </div>
          </div>

          <div className="dragon-photo-wrap relative h-[340px] overflow-hidden border border-[#F4F0E8]/12 bg-[#111] lg:col-span-5 lg:row-span-2 lg:h-full">
            <Image
              src={tattooGallery[1].src}
              alt={tattooGallery[1].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="dragon-photo object-cover"
            />
          </div>

          <div className="flex h-[300px] items-end border border-[#F4F0E8]/12 bg-[#F4F0E8]/6 p-7 lg:col-span-5 lg:row-span-1 lg:h-full">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D6A858]">
                Permanência
              </p>

              <p className="mt-5 max-w-md text-3xl font-black uppercase leading-tight">
                Grandes escalas orientais pensadas para durar décadas.
              </p>
            </div>
          </div>

          <div className="dragon-photo-wrap relative h-[340px] overflow-hidden border border-[#F4F0E8]/12 bg-[#111] lg:col-span-4 lg:row-span-1 lg:h-full">
            <Image
              src={tattooGallery[2].src}
              alt={tattooGallery[2].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="dragon-photo object-cover"
            />
          </div>

          <div className="dragon-photo-wrap relative h-[420px] overflow-hidden border border-[#F4F0E8]/12 bg-[#111] lg:col-span-8 lg:row-span-1 lg:h-full">
            <Image
              src={tattooGallery[3].src}
              alt={tattooGallery[3].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="dragon-photo object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
