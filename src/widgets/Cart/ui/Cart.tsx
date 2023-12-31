"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiPackage } from "react-icons/fi";

import { useConstructorStore } from "@/global/store/cart";

import { CartItem } from "./CartItem";

interface CartProps {
  onToggle: () => void;
}
export const Cart = ({ onToggle }: CartProps) => {
  const cartItems = useConstructorStore((state) => state.cartItems);

  const total = cartItems.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0,
  );

  return (
    <Box height="100vh">
      <Drawer
        isOpen
        onClose={() => void 0}
        size="md"
        blockScrollOnMount={false}
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent
          background={useColorModeValue(
            "var(--chakra-colors-mainBgColorLight)",
            "var(--chakra-colors-mainBgColorDark)",
          )}
          overflowY="auto"
        >
          <DrawerCloseButton
            _hover={{ bg: "var(--chakra-colors-accentColor)" }}
            size="lg"
            right={{ base: "4", md: "8" }}
            top="4"
            bg="inherit"
            onClick={onToggle}
          />
          <Stack
            padding={{ base: "6", md: "10" }}
            height="full"
            spacing="8"
            overflowY="auto"
          >
            <Heading size="md">
              Shopping Cart ({cartItems.length} items)
            </Heading>
            <Stack spacing={{ base: "8", md: "10" }}>
              {cartItems.map((item, idx) => (
                <CartItem key={idx} {...item} />
              ))}
            </Stack>
          </Stack>
          <Stack
            borderTopWidth="1px"
            px={{ base: "6", md: "10" }}
            py="4"
            spacing="5"
          >
            <Stack>
              <HStack fontSize="xl" fontWeight="semibold">
                <Text flex="1">Subtotal:</Text>
                <Text>${total}</Text>
              </HStack>
              <HStack
                spacing="2"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                <Icon as={FiPackage} />
                <Text>Shipping + taxes calculated at checkout</Text>
              </HStack>
            </Stack>
            <Button size="lg" fontSize="md" variant={"primary"}>
              Checkout
            </Button>
          </Stack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
