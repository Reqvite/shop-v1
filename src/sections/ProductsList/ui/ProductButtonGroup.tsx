"use client";
import {
  ButtonGroup,
  Icon,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";

import { useAddProduct } from "@/shared/lib/hooks/useAddProduct";
import { Product } from "@/shared/types/product";
import { QuickView } from "@/widgets/QuickView";

const options = [
  {
    icon: FiHeart,
    label: "Add to favourite",
  },
  {
    icon: FiShoppingCart,
    label: "Add to cart",
    isAddCart: true,
  },
  {
    icon: FiEye,
    label: "Quick view",
    isQuick: true,
  },
];

interface ProductButtonGroupProps {
  product: Product;
}
export const ProductButtonGroup = ({ product }: ProductButtonGroupProps) => {
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const { onAddProductToCartWithoutOptions } = useAddProduct();

  const [isOpenQuick, setIsOpenQuick] = useState(false);

  const onOpenQuick = () => {
    setIsOpenQuick(!isOpenQuick);
  };

  const onAddWishlist = () => {};

  const onAddProdcut = () => {
    onAddProductToCartWithoutOptions(product);
  };

  return (
    <>
      <ButtonGroup
        variant="tertiary"
        colorScheme="blue"
        width="full"
        size="sm"
        spacing="1"
      >
        {options.map((option, idx) => (
          <Tooltip key={option.label} label={option.label}>
            <IconButton
              rounded="sm"
              sx={{ ":not(:hover)": { color: iconColor } }}
              _focus={{ boxShadow: "none" }}
              _focusVisible={{ boxShadow: "outline" }}
              width="full"
              aria-label={option.label}
              icon={<Icon as={option.icon} boxSize="5" />}
              onClick={
                idx === 0
                  ? onAddWishlist
                  : idx === 1
                    ? onAddProdcut
                    : onOpenQuick
              }
            />
          </Tooltip>
        ))}
      </ButtonGroup>
      {isOpenQuick && (
        <QuickView setIsOpenQuick={onOpenQuick} product={product} />
      )}
    </>
  );
};
