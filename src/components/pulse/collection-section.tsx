"use client";

import { Bag, Check } from "@phosphor-icons/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { usePulseCart } from "./cart";
import { pulseProducts } from "./data";

const genders = ["Todos", "Feminino", "Masculino"] as const;

type Product = (typeof pulseProducts)[number];

function PulseProductCard({ product }: { product: Product }) {
  const { addItem } = usePulseCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [wasAdded, setWasAdded] = useState(false);

  function handleAdd() {
    addItem({
      image: product.image,
      name: product.name,
      price: product.price,
      size: selectedSize,
    });
    setWasAdded(true);
    window.setTimeout(() => setWasAdded(false), 1400);
  }

  return (
    <article className="group overflow-hidden border border-white/10 bg-black shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
      <figure className="relative aspect-[4/5] overflow-hidden bg-black">
        <Image
          src={product.image}
          alt={`${product.name} Pulse`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-[#0B0B0B]/86 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur">
          {product.audience}
        </span>
      </figure>

      <div className="grid gap-5 p-5 md:p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="text-3xl font-extrabold uppercase leading-none">
              {product.name}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/58">
              {product.text}
            </p>
          </div>
          <p className="shrink-0 text-xl font-extrabold text-[#F97316]">
            {product.price}
          </p>
        </div>

        <div className="grid gap-3">
          <div>
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/42">
              tamanho
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  aria-pressed={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                  className={`grid size-10 place-items-center border text-[11px] font-extrabold transition ${
                    selectedSize === size
                      ? "border-[#F97316] bg-[#F97316] text-[#0B0B0B]"
                      : "border-white/14 text-white/68 hover:border-[#F97316] hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className={`inline-flex items-center justify-center gap-3 px-5 py-4 text-[11px] font-extrabold uppercase tracking-[0.18em] transition ${
            wasAdded
              ? "bg-[#F97316] text-[#0B0B0B]"
              : "bg-white text-[#0B0B0B] hover:bg-[#F97316]"
          }`}
        >
          {wasAdded ? "adicionado" : "adicionar ao carrinho"}
          {wasAdded ? (
            <Check size={15} weight="bold" />
          ) : (
            <Bag size={15} weight="bold" />
          )}
        </button>
      </div>
    </article>
  );
}

export function PulseCollectionSection() {
  const [activeGender, setActiveGender] =
    useState<(typeof genders)[number]>("Todos");

  const visibleProducts = useMemo(() => {
    if (activeGender === "Todos") {
      return pulseProducts;
    }

    return pulseProducts.filter((product) => product.audience === activeGender);
  }, [activeGender]);

  return (
    <section
      id="colecao"
      className="bg-black px-5 py-16 text-white md:px-8 lg:px-10 lg:py-24"
    >
      <div className="grid gap-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#F97316]">
              vitrine
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] md:text-6xl">
              conjuntos para treinar forte e sair pronto.
            </h2>
          </div>

          <div className="grid grid-cols-3 border border-white/10 bg-[#151515] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.25)]">
            {genders.map((gender) => (
              <button
                key={gender}
                type="button"
                aria-pressed={activeGender === gender}
                onClick={() => setActiveGender(gender)}
                className={`px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] transition ${
                  activeGender === gender
                    ? "bg-[#F97316] text-[#0B0B0B]"
                    : "text-white/54 hover:text-white"
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        key={activeGender}
        className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {visibleProducts.map((product) => (
          <PulseProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
