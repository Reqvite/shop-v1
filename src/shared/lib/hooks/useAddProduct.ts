"use client";
import { useConstructorStore } from "@/global/store/cart";
import { getStrapiMedia } from "@/shared/api/api-helpers";
import { Product } from "@/shared/types/product";

import { getDiscount } from "../getDiscount/getDiscount";

export const useAddProduct = () => {
  const quantity = useConstructorStore((state) => state.quantity);
  const size = useConstructorStore((state) => state.sizeOptions);
  const color = useConstructorStore((state) => state.colorOptions);
  const addProduct = useConstructorStore((state) => state.addToCart);

  const onAddProductToCart = (product: Product) => {
    const productToAdd = {
      name: product.title,
      img: getStrapiMedia(product.images.data[0].attributes.url),
      currency: product?.currency,
      slug: product?.slug,
      price: getDiscount(product?.price, product?.discount),
      quantity,
      shopQuantity: product.quantity,
      color:
        color ||
        product?.options?.find(
          (el: any) => el.__component === "product.color-picker",
        ).color[0] ||
        null,
      size:
        size ||
        product?.options?.find((el: any) => el.__component === "product.size")
          .size[0] ||
        null,
    };
    addProduct(productToAdd);
  };

  const onAddProductToCartWithoutOptions = (product: Product) => {
    let options = [
      product?.options?.find(
        (el: any) => el.__component === "product.color-picker",
      )?.color[0] || null,
      product?.options?.find((el: any) => el.__component === "product.size")
        ?.size[0] || null,
    ];

    const productToAdd = {
      name: product.title,
      img: getStrapiMedia(product.images.data[0].attributes.url),
      currency: product?.currency,
      slug: product?.slug,
      //@ts-ignore
      price: getDiscount(product?.price, product?.discount),
      quantity,
      shopQuantity: product.quantity,
      options,
    };
    addProduct(productToAdd);
  };

  return { onAddProductToCart, onAddProductToCartWithoutOptions };
};
