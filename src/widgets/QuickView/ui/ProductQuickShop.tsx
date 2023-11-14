import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { FiClock, FiHeart } from "react-icons/fi";
import { RiRulerLine } from "react-icons/ri";

import { getStrapiMedia } from "@/shared/api/api-helpers";
import { productRender } from "@/shared/lib/productRender";
import { Product } from "@/shared/types/product";
import {
  Gallery,
  PriceTag,
  ProductBadge,
  QuantityPicker,
  Rating,
} from "@/shared/ui";

interface ProductQuickShopProps {
  product: Product;
  rootProps?: StackProps;
}

export const ProductQuickShop = (props: ProductQuickShopProps) => {
  const { product, rootProps } = props;
  const {
    title,
    discount,
    currency,
    price,
    rating,
    images,
    slug,
    detailsButton,
    quantity,
    options,
  } = product;

  const pathname = usePathname();

  const mapImages = images.data.map((el: any, idx: number) => {
    return {
      id: idx,
      src: getStrapiMedia(el.attributes.url),
      alt: el.attributes.alternativeText,
    };
  });

  const sections = options.map((section: any, index: number) =>
    productRender(section, index),
  );

  return (
    <Stack
      direction={{ base: "column", xl: "row" }}
      spacing={{ base: "8", lg: "16" }}
      {...rootProps}
    >
      <Box flex="1">
        <Gallery images={mapImages} />
      </Box>
      <Box flex="1">
        <Stack spacing={{ base: "4", md: "8" }}>
          <Stack spacing={{ base: "2", md: "4" }}>
            <Stack spacing="3">
              <ProductBadge bg="red.500" color="white">
                On Sale
              </ProductBadge>
            </Stack>
            <Heading size="lg" fontWeight="medium">
              {title}
            </Heading>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="1"
              align="baseline"
              justify="space-between"
            >
              <PriceTag
                price={price}
                salePrice={discount}
                currency={currency}
                rootProps={{ fontSize: "xl" }}
              />
              <HStack spacing="2" alignSelf="baseline">
                <Rating defaultValue={rating} size="sm" />
                <Link href="#" fontSize="sm" fontWeight="medium">
                  {rating} Reviews
                </Link>
              </HStack>
            </Stack>
            <Text>{product.description}</Text>
          </Stack>
          <Stack
            spacing={{ base: "4", md: "8" }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex="1">
              {sections[0] && sections[0]}
              <HStack
                spacing="1"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {quantity <= 5 && (
                  <>
                    <Icon as={FiClock} />
                    <Text fontSize="xs" fontWeight="medium">
                      Low stock
                    </Text>
                  </>
                )}
              </HStack>
            </Stack>
            {sections[1] && sections[1]}
          </Stack>
          <HStack
            spacing={{ base: "4", md: "8" }}
            align="flex-end"
            justify="space-evenly"
          >
            <Box flex="1">
              <QuantityPicker defaultValue={1} max={5} />
            </Box>
            <Box flex="1">
              <Button
                variant="secondary"
                size="lg"
                fontSize="md"
                width="full"
                leftIcon={<Icon as={FiHeart} boxSize="4" />}
              >
                Favorite
              </Button>
            </Box>
          </HStack>
          <Stack spacing="3">
            <Button variant="primary" size="lg">
              Add to cart
            </Button>
            <Link textAlign="center" href={`${pathname}/${slug}`}>
              {detailsButton.label}
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
