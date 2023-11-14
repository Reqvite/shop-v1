"use client";
import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import { getStrapiMedia } from "@/shared/api/api-helpers";
import { Product } from "@/shared/types/product";
import { PriceTag, Rating } from "@/shared/ui";

import { ProductButtonGroup } from "./ProductButtonGroup";

interface Props {
  product: Product;
}

export const ProductCard = (props: Props) => {
  const { product } = props;
  const {
    title,
    discount,
    currency,
    price,
    tags,
    rating,
    images,
    slug,
    detailsButton,
  } = product;
  const pathname = usePathname();
  const color = useColorModeValue(
    "var(--chakra-colors-mainColorLight)",
    "var(--chakra-colors-mainColorDark)",
  );

  const themeBg = useColorModeValue(
    "var(--chakra-colors-secondaryBgColorLight)",
    "var(--chakra-colors-secondaryBgColorDark)",
  );

  const url = images?.data[0].attributes.url;
  const productImg = getStrapiMedia(url);

  return (
    <Stack spacing="3">
      <Box position="relative" className="group">
        <AspectRatio ratio={3 / 4}>
          <Image
            src={productImg || ""}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
          />
        </AspectRatio>
        <HStack spacing="3" position="absolute" top="4" left="4">
          {tags?.map((tag) => (
            <Tag
              key={tag.name}
              bg={`${tag.color}.500`}
              color="white"
              fontWeight="semibold"
            >
              {tag.name}
            </Tag>
          ))}
        </HStack>
        <Box
          opacity="0.55"
          transition="opacity 0.1s"
          _groupHover={{ opacity: 1 }}
          position="absolute"
          bottom="3"
          left="3"
          right="3"
          bg={themeBg}
          borderRadius="md"
          padding="1.5"
        >
          <ProductButtonGroup product={product} />
        </Box>
      </Box>
      <Stack spacing="1">
        <Heading as={"h2"} size="sm">
          {title}
        </Heading>
        {rating && (
          <HStack>
            <Rating defaultValue={rating} size="sm" />
            <Text fontWeight="medium" fontSize="sm" color={color}>
              {rating}
            </Text>
          </HStack>
        )}
      </Stack>
      <PriceTag
        currency={currency}
        price={price}
        salePrice={discount}
        salePriceProps={{
          color: "var(--chakra-colors-accentColor)",
          fontWeight: "bold",
        }}
        priceProps={{
          fontWeight: "bold",
          fontSize: "sm",
          color: color,
        }}
      />
      <Button
        as="a"
        href={`${pathname}/${slug}`}
        variant={detailsButton.variant}
      >
        {detailsButton.label}
      </Button>
    </Stack>
  );
};
