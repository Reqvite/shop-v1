import {
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { PriceTag, QuantityPicker } from "@/shared/ui";

type CartItemProps = {
  name: string;
  quantity: number;
  shopQuantity: number;
  price: number;
  currency: string;
  img: any;
  options: any;
  onChangeQuantity?: (quantity: number) => void;
  onClickDelete?: () => void;
};

export const CartItem = (props: CartItemProps) => {
  const {
    name,
    quantity,
    shopQuantity,
    img,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
    options,
  } = props;

  let description = options.reduce((acc, el) => {
    if (el?.label) {
      return el?.label + " " + acc;
    }
  }, "");

  return (
    <Stack direction="row" spacing="5">
      <Image
        rounded="md"
        minWidth="24"
        maxWidth="24"
        height={{ base: "20", md: "24" }}
        fit="cover"
        src={img}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Stack width="full" spacing="3">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="3"
          alignItems="flex-start"
        >
          <Stack spacing="0.5" width="full">
            <Text fontWeight="medium">{name}</Text>
            <Text color={useColorModeValue("gray.500", "gray.300")}>
              {description}
            </Text>
          </Stack>
          <PriceTag price={price} currency={currency} />
        </Stack>
        <Flex width="full" justifyContent="space-between" alignItems="center">
          <QuantityPicker defaultValue={quantity} max={shopQuantity} />
          <Link
            as="button"
            type="button"
            fontWeight="medium"
            fontSize="sm"
            color={useColorModeValue("blue.500", "blue.200")}
            onClick={onClickDelete}
          >
            Remove
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
};
