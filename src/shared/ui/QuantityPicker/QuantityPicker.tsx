"use client";
import {
  Center,
  Flex,
  FormControl,
  FormControlProps,
  FormLabel,
  IconButton,
  IconButtonProps,
  Text,
  useControllableState,
  UseControllableStateProps,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import { useConstructorStore } from "@/global/store/cart";

interface QuantityPickerProps extends UseControllableStateProps<number> {
  max?: number;
  min?: number;
  rootProps?: FormControlProps;
}

export const QuantityPicker = (props: QuantityPickerProps) => {
  const { min = 1, max, rootProps, ...rest } = props;

  const [value, setValue] = useControllableState(rest);
  const onSetQuantity = useConstructorStore((state) => state.setQuantity);
  const handleDecrement = () => setValue(value === min ? value : value - 1);
  const handleIncrement = () => setValue(value === max ? value : value + 1);

  useEffect(() => {
    if (value) {
      onSetQuantity(value);
    }
  }, [onSetQuantity, value]);
  return (
    <FormControl {...rootProps}>
      <FormLabel fontSize="sm" fontWeight="medium">
        Quantity
      </FormLabel>
      <Flex
        borderRadius="base"
        px="2"
        py="0.4375rem"
        borderWidth="1px"
        justifyContent="space-between"
      >
        <QuantityPickerButton
          onClick={handleDecrement}
          icon={<FiMinus />}
          isDisabled={value === min}
          aria-label="Decrement"
          variant={"primary"}
        />
        <Center minW="8">
          <Text as="span" fontWeight="semibold" userSelect="none">
            {value}
          </Text>
        </Center>
        <QuantityPickerButton
          onClick={handleIncrement}
          icon={<FiPlus />}
          isDisabled={value === max}
          aria-label="Increment"
          variant={"primary"}
        />
      </Flex>
    </FormControl>
  );
};

const QuantityPickerButton = (props: IconButtonProps) => (
  <IconButton
    size="sm"
    fontSize="md"
    _focus={{ boxShadow: "none" }}
    _focusVisible={{ boxShadow: "outline" }}
    {...props}
  />
);
