"use client";
import {
  FormControl,
  FormControlProps,
  FormLabel,
  HStack,
  Icon,
  Link,
  Stack,
  useColorModeValue,
  useRadioGroup,
  UseRadioGroupProps,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { RiRulerLine } from "react-icons/ri";

import { useConstructorStore } from "@/global/store/cart";

import { SizePickerButton } from "./SizePickerButton";

interface Option {
  label: string;
  value: string;
}

interface SizePickerProps extends UseRadioGroupProps {
  options: Option[];
  rootProps?: FormControlProps;
  hideLabel?: boolean;
  label?: string;
}

export const SizePicker = (props: SizePickerProps) => {
  const { options, rootProps, hideLabel, label, ...rest } = props;
  const { getRadioProps, getRootProps, value } = useRadioGroup(rest);
  const selectedOption = options.find((option) => option.value == value);
  const onSetSize = useConstructorStore((state) => state.setSizeOption);

  useEffect(() => {
    if (value) {
      onSetSize(selectedOption || options[0]);
    }
  }, [onSetSize, options, selectedOption, value]);

  useEffect(() => {
    onSetSize(options[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormControl {...rootProps}>
      {!hideLabel && (
        <FormLabel fontSize="sm" fontWeight="medium">
          {`Size: ${selectedOption?.label || label || options[0].label}`}
        </FormLabel>
      )}
      <Stack>
        <HStack {...getRootProps()}>
          {options.map((option) => (
            <SizePickerButton
              key={option.value}
              label={option.label}
              {...getRadioProps({ value: option.value })}
            />
          ))}
        </HStack>
        <HStack spacing="1" color={useColorModeValue("gray.600", "gray.400")}>
          <Icon as={RiRulerLine} />
          <Link
            href="#"
            fontSize="xs"
            fontWeight="medium"
            textDecoration="underline"
          >
            View our sizing guide
          </Link>
        </HStack>
      </Stack>
    </FormControl>
  );
};
