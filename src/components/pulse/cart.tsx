"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type PulseCartItem = {
  id: string;
  image: string;
  name: string;
  price: string;
  quantity: number;
  size: string;
};

type PulseCartContextValue = {
  addItem: (item: Omit<PulseCartItem, "id" | "quantity">) => void;
  closeCart: () => void;
  decreaseQuantity: (id: string) => void;
  increaseQuantity: (id: string) => void;
  isCartOpen: boolean;
  itemCount: number;
  items: PulseCartItem[];
  lastToast: null | { id: number; message: string };
  openCart: () => void;
  removeItem: (id: string) => void;
  subtotal: number;
  updateItemVariant: (id: string, variant: { size?: string }) => void;
};

const PulseCartContext = createContext<PulseCartContextValue | null>(null);

function priceToNumber(price: string) {
  return Number(price.replace(/\D/g, ""));
}

export function PulseCartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState<PulseCartItem[]>([]);
  const [lastToast, setLastToast] = useState<null | { id: number; message: string }>(
    null,
  );

  const showToast = useCallback((message: string) => {
    setLastToast({ id: Date.now(), message });
  }, []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const addItem = useCallback((item: Omit<PulseCartItem, "id" | "quantity">) => {
    const id = `${item.name}-${item.size}`;

    setItems((current) => {
      const existingItem = current.find((cartItem) => cartItem.id === id);

      if (existingItem) {
        return current.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...current, { ...item, id, quantity: 1 }];
    });
    showToast(`${item.name} tamanho ${item.size} adicionado ao carrinho`);
  }, [showToast]);

  const removeItem = useCallback((id: string) => {
    setItems((current) => {
      const item = current.find((cartItem) => cartItem.id === id);

      if (item) {
        showToast(`${item.name} removido do carrinho`);
      }

      return current.filter((cartItem) => cartItem.id !== id);
    });
  }, [showToast]);

  const increaseQuantity = useCallback((id: string) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const decreaseQuantity = useCallback((id: string) => {
    setItems((current) =>
      current.flatMap((item) => {
        if (item.id !== id) {
          return [item];
        }

        if (item.quantity <= 1) {
          showToast(`${item.name} removido do carrinho`);
          return [];
        }

        return [{ ...item, quantity: item.quantity - 1 }];
      }),
    );
  }, [showToast]);

  const updateItemVariant = useCallback(
    (id: string, variant: { size?: string }) => {
      setItems((current) => {
        const itemToUpdate = current.find((item) => item.id === id);

        if (!itemToUpdate) {
          return current;
        }

        const updatedItem = {
          ...itemToUpdate,
          ...variant,
        };
        const updatedId = `${updatedItem.name}-${updatedItem.size}`;
        const otherItems = current.filter((item) => item.id !== id);
        const matchingItem = otherItems.find((item) => item.id === updatedId);

        if (matchingItem) {
          return otherItems.map((item) =>
            item.id === updatedId
              ? { ...item, quantity: item.quantity + updatedItem.quantity }
              : item,
          );
        }

        return [...otherItems, { ...updatedItem, id: updatedId }];
      });
    },
    [],
  );

  useEffect(() => {
    if (!lastToast) {
      return;
    }

    const timer = window.setTimeout(() => setLastToast(null), 2400);

    return () => window.clearTimeout(timer);
  }, [lastToast]);

  const value = useMemo(
    () => ({
      addItem,
      closeCart,
      decreaseQuantity,
      increaseQuantity,
      isCartOpen,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      items,
      lastToast,
      openCart,
      removeItem,
      subtotal: items.reduce(
        (total, item) => total + priceToNumber(item.price) * item.quantity,
        0,
      ),
      updateItemVariant,
    }),
    [
      addItem,
      closeCart,
      decreaseQuantity,
      increaseQuantity,
      isCartOpen,
      items,
      lastToast,
      openCart,
      removeItem,
      updateItemVariant,
    ],
  );

  return (
    <PulseCartContext.Provider value={value}>
      {children}
    </PulseCartContext.Provider>
  );
}

export function usePulseCart() {
  const context = useContext(PulseCartContext);

  if (!context) {
    throw new Error("usePulseCart must be used inside PulseCartProvider");
  }

  return context;
}
