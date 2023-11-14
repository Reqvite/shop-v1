import {
  ButtonGroup,
  Icon,
  IconButton,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";

import { QuickView } from "@/widgets/QuickView";

const options = [
  {
    icon: FiHeart,
    label: "Add to favourite",
  },
  {
    icon: FiShoppingCart,
    label: "Add to cart",
  },
  {
    icon: FiEye,
    label: "Quick view",
    isQuick: true,
  },
];

export const ProductButtonGroup = () => {
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const [isOpenQuick, setIsOpenQuick] = useState(false);

  const onOpenQuick = () => {
    setIsOpenQuick(!isOpenQuick);
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
        {options.map((option) => (
          <Tooltip key={option.label} label={option.label}>
            <IconButton
              rounded="sm"
              sx={{ ":not(:hover)": { color: iconColor } }}
              _focus={{ boxShadow: "none" }}
              _focusVisible={{ boxShadow: "outline" }}
              width="full"
              aria-label={option.label}
              icon={<Icon as={option.icon} boxSize="5" />}
              onClick={onOpenQuick}
            />
          </Tooltip>
        ))}
      </ButtonGroup>
      {isOpenQuick && <QuickView setIsOpenQuick={onOpenQuick} />}
    </>
  );
};
