"use client";

import Image from "next/image";

import { dragonTattooImages } from "./data";

const tattooGallery = [
  { src: dragonTattooImages.gallery01 },
  { src: dragonTattooImages.gallery02 },
  { src: dragonTattooImages.gallery03 },
  { src: dragonTattooImages.gallery04 },
];

export function DragonTattooGallerySection() {
  return (
    <section
      id="portfolio"
      className="bg-[#F0F0F0] py-24 text-[#080706] md:py-32"
    >
      <div className="px-5 md:px-10 lg:px-14">
        <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.36em] text-[#9B7430]">
              Portfólio
            </p>

            <h2 className="mt-6 text-6xl font-black uppercase leading-[0.78] tracking-[-0.08em] md:text-8xl lg:text-[7rem]">
              Obras
              <br />
              recentes
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-[#080706]/60">
            Projetos executados no estúdio. Cada composição foi construída para
            funcionar na anatomia específica de quem a carrega.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[420px_320px_420px]">
          <div className="relative overflow-hidden lg:col-span-7 lg:row-span-2">
            <Image
              src={tattooGallery[0].src}
              alt=""
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="relative overflow-hidden lg:col-span-5">
            <Image
              src={tattooGallery[1].src}
              alt=""
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="flex items-center border border-[#080706]/10 p-8 lg:col-span-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#9B7430]">
                Dragon Tattoo
              </p>

              <p className="mt-5 max-w-sm text-2xl font-bold leading-tight">
                Grandes escalas orientais pensadas para durar décadas.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden lg:col-span-4">
            <Image
              src={tattooGallery[2].src}
              alt=""
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="relative overflow-hidden lg:col-span-8">
            <Image
              src={tattooGallery[3].src}
              alt=""
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}