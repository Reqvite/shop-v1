import { Box, SimpleGrid } from "@chakra-ui/react";

import { Product } from "@/shared/types/product";

import { ProductCard } from "./ProductCard";

interface ProductsListProps {
  products: { id: number; attributes: Product }[];
}
export const ProductsList = ({ products }: ProductsListProps) => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
      gap={{ base: "8", lg: "10" }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product.attributes} />
      ))}
    </SimpleGrid>
  </Box>
);
