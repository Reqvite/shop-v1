export const getDiscount = (price: number, discount: number): number => {
  const discountedPrice = price - (price * discount) / 100;
  return discountedPrice;
};
