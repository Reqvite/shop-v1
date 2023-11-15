import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { addProduct } from "@/shared/lib/addProduct/addProduct";

type State = {
  cartItems: any[];
  quantity: number;
  sizeOptions: object | undefined;
  colorOptions: object | undefined;
  addToCart: (item: object) => void;
  deleteFromCart: (item: object) => void;
  reset: () => void;
  setQuantity: (quantity: number) => void;
  setSizeOption: (options: object) => void;
  setColorOption: (options: object) => void;
  updateQuantity: (quantity: number) => void;
};

export const useConstructorStore = create<State>()(
  persist(
    (set) => ({
      sizeOptions: undefined,
      colorOptions: undefined,
      cartItems: [],
      quantity: 1,
      reset: () => {
        set({ cartItems: [] });
      },
      addToCart: (item) => {
        set((state) => {
          return addProduct(state, item);
        });
      },
      deleteFromCart: (index) => {
        set((state) => {
          const newCartItems = [...state.cartItems];
          newCartItems.splice(index, 1);
          return { cartItems: newCartItems };
        });
      },
      setQuantity: (quantity) => {
        set({ quantity });
      },
      setSizeOption: (option) => {
        set({ sizeOptions: option });
      },
      setColorOption: (option) => {
        set({ colorOptions: option });
      },
      updateQuantity: (quantity) => {
        set((state) => {
          const newCartItems = [...state.cartItems];
          newCartItems.splice(index, 1);
          return { cartItems: newCartItems };
        });
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
