import { Product } from "@/shared/types/product";

export const addProduct = (state: any, item: Product) => {
  const existingItem = state.cartItems.find(
    (cartItem) => cartItem.slug === item.slug,
  );

  if (existingItem) {
    const updatedCartItems = state.cartItems.map((cartItem) =>
      cartItem.slug === item.slug
        ? {
            ...item,
            quantity: cartItem.quantity + (item.quantity || 1),
          }
        : cartItem,
    );
    return { cartItems: updatedCartItems };
  } else {
    return {
      cartItems: [
        ...state.cartItems,
        { ...item, quantity: item.quantity || 1 },
      ],
    };
  }
};
