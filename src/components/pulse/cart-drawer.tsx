"use client";

import { ArrowUpRight, Bag, Minus, Plus, Trash, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import type { PulseCartItem } from "./cart";
import { usePulseCart } from "./cart";
import { pulseProducts, pulseWhatsapp } from "./data";

export function PulseCartDrawer() {
  const {
    closeCart,
    decreaseQuantity,
    increaseQuantity,
    isCartOpen,
    itemCount,
    items,
    removeItem,
    subtotal,
    updateItemVariant,
  } = usePulseCart();

  return (
    <div className={`fixed inset-0 z-[9999] ${isCartOpen ? "visible" : "invisible"}`}>
      <div className="relative mx-auto h-dvh w-full max-w-440">
        <button
          type="button"
          aria-label="Fechar carrinho"
          onClick={closeCart}
          className={`absolute inset-0 bg-black/62 transition-opacity ${
            isCartOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex h-dvh w-full max-w-[480px] flex-col bg-[#F5F5F3] text-[#1A1A1A] shadow-2xl transition-transform duration-300 ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 bg-white p-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#F97316]">
                carrinho
              </p>
              <p className="mt-1 text-sm font-bold text-[#1A1A1A]/58">
                {itemCount} {itemCount === 1 ? "item" : "itens"}
              </p>
            </div>
            <button
              type="button"
              aria-label="Fechar carrinho"
              onClick={closeCart}
              className="grid size-11 place-items-center border border-[#1A1A1A]/10 bg-white transition hover:border-[#F97316] hover:text-[#F97316]"
            >
              <X size={18} weight="bold" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5">
            {items.length === 0 ? (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <Bag size={38} weight="duotone" className="mx-auto text-[#F97316]" />
                  <p className="mt-4 text-2xl font-black uppercase tracking-[-0.04em]">
                    seu carrinho esta vazio
                  </p>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#1A1A1A]/58">
                    Escolha o tamanho na vitrine para adicionar uma peça.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                {items.map((item) => (
                  <CartLineItem
                    key={item.id}
                    item={item}
                    onDecrease={() => decreaseQuantity(item.id)}
                    onIncrease={() => increaseQuantity(item.id)}
                    onRemove={() => removeItem(item.id)}
                    onUpdateSize={(size) => updateItemVariant(item.id, { size })}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-[#1A1A1A]/10 bg-white p-5">
            <div className="flex items-center justify-between text-sm font-black uppercase tracking-[0.16em]">
              <span>subtotal</span>
              <span>R$ {subtotal.toLocaleString("pt-BR")}</span>
            </div>
            <Link
              href={pulseWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 bg-[#F97316] px-5 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-black transition hover:bg-[#1A1A1A] hover:text-white"
            >
              finalizar pelo whatsapp
              <ArrowUpRight size={15} weight="bold" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function CartLineItem({
  item,
  onDecrease,
  onIncrease,
  onRemove,
  onUpdateSize,
}: {
  item: PulseCartItem;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
  onUpdateSize: (size: string) => void;
}) {
  const product = pulseProducts.find((currentProduct) => currentProduct.name === item.name);

  return (
    <article className="grid grid-cols-[92px_1fr] gap-4 bg-white p-3">
      <Image
        src={item.image}
        alt={item.name}
        width={92}
        height={120}
        className="h-[120px] w-[92px] object-cover"
      />
      <div className="grid gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-black uppercase leading-none">
              {item.name}
            </h3>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1A1A1A]/52">
              tamanho {item.size}
            </p>
          </div>
          <button
            type="button"
            aria-label={`Remover ${item.name}`}
            onClick={onRemove}
            className="grid size-9 shrink-0 place-items-center text-[#1A1A1A]/44 transition hover:text-[#F97316]"
          >
            <Trash size={17} weight="bold" />
          </button>
        </div>

        <div className="grid gap-2">
          <div className="flex flex-wrap gap-1.5">
            {product?.sizes.map((size) => (
              <button
                key={size}
                type="button"
                aria-label={`Alterar tamanho para ${size}`}
                onClick={() => onUpdateSize(size)}
                className={`grid size-8 place-items-center border text-[10px] font-black ${
                  item.size === size
                    ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                    : "border-[#1A1A1A]/12 text-[#1A1A1A]/58"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-black">{item.price}</p>
          <div className="grid grid-cols-[32px_36px_32px] border border-[#1A1A1A]/10">
            <button
              type="button"
              aria-label={`Diminuir quantidade de ${item.name}`}
              onClick={onDecrease}
              className="grid size-8 place-items-center transition hover:bg-[#F5F5F3]"
            >
              <Minus size={13} weight="bold" />
            </button>
            <span className="grid h-8 place-items-center border-x border-[#1A1A1A]/10 text-xs font-black">
              {item.quantity}
            </span>
            <button
              type="button"
              aria-label={`Aumentar quantidade de ${item.name}`}
              onClick={onIncrease}
              className="grid size-8 place-items-center transition hover:bg-[#F5F5F3]"
            >
              <Plus size={13} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
