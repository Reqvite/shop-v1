"use client";
import { ChakraProvider as Chakra } from "@chakra-ui/react";
import { ReactNode } from "react";

import { theme } from "../styles/theme";

interface ChakraProviderProps {
  children: ReactNode;
}
function ChakraProvider({ children }: ChakraProviderProps) {
  return <Chakra theme={theme}>{children}</Chakra>;
}

export default ChakraProvider;
