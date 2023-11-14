import { IconButton, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";

import { Cart } from "@/widgets/Cart";

export const CartToggler = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onToggle}
        bg={"var(--chakra-colors-accentColorTransparent)"}
        icon={
          <BsFillCartFill
            w={10}
            h={10}
            color={useColorModeValue(
              "var(--chakra-colors-mainColorLight)",
              "var(--chakra-colors-mainColorDark)",
            )}
          />
        }
        variant={"ghost"}
        _hover={{
          transform: "scale(1.05)",
        }}
        aria-label={"Toggle cart"}
      />
      {isOpen && <Cart onToggle={onToggle} />}
    </>
  );
};
