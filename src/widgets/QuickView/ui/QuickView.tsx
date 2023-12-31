"use client";
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";

import { Product } from "@/shared/types/product";

import { ProductQuickShop } from "./ProductQuickShop";

interface QuickViewProps {
  setIsOpenQuick: () => void;
  product: Product;
}

export const QuickView = ({ setIsOpenQuick, product }: QuickViewProps) => (
  <Box height="100vh">
    <Modal
      isOpen={true}
      onClose={setIsOpenQuick}
      size="7xl"
      blockScrollOnMount={false}
      trapFocus={false}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius="none"
        mx={{ base: "2.5", lg: "16" }}
        my={{ base: "2.5", md: "16" }}
      >
        <ModalCloseButton
          top="3"
          right="5"
          size="lg"
          _hover={{ bg: "var(--chakra-colors-accentColor)" }}
        />
        <ModalBody
          bg={useColorModeValue(
            "var(--chakra-colors-secondaryBgColorLight)",
            "var(--chakra-colors-secondaryBgColorDark)",
          )}
          color={useColorModeValue(
            "var(--chakra-colors-mainColorLight)",
            "var(--chakra-colors-mainColorDark)",
          )}
          px={{ base: "5", lg: "16" }}
          pt="16"
          pb={{ base: "10", lg: "16" }}
        >
          <ProductQuickShop product={product} />
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
);
