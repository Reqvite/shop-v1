"use client";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { categories } from "./_data";
import { CategoryCard } from "./CatetgoryCard";

interface CategoriesProps {
  data: any;
}

const MSimpleGrid = motion(SimpleGrid);
export const Categories = ({ data }: CategoriesProps) => {
  console.log(data);
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack spacing={{ base: "6", md: "8", lg: "12" }}>
        <Flex
          justify="space-between"
          align={{ base: "start", md: "center" }}
          direction={{ base: "column", md: "row" }}
        >
          <Heading
            color={useColorModeValue(
              "var(--chakra-colors-mainBgColorDark)",
              "var(--chakra-colors-mainBgColorLight)",
            )}
            size="lg"
          >
            Season&rsquo;s Favorites
          </Heading>
          <HStack spacing={{ base: "2", md: "3" }}>
            <Link
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="bold"
              color={useColorModeValue(
                "var(--chakra-colors-mainBgColorDark)",
                "var(--chakra-colors-mainBgColorLight)",
              )}
            >
              See all categories
            </Link>
            <Icon
              as={FaArrowRight}
              color={useColorModeValue(
                "var(--chakra-colors-mainBgColorDark)",
                "var(--chakra-colors-mainBgColorLight)",
              )}
              fontSize={{ base: "sm", md: "md" }}
            />
          </HStack>
        </Flex>
        <MSimpleGrid
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: "8", lg: "16" }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </MSimpleGrid>
      </Stack>
    </Box>
  );
};
