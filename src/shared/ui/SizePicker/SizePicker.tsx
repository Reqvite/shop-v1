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
import { RiRulerLine } from "react-icons/ri";

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

  return (
    <FormControl {...rootProps}>
      {!hideLabel && (
        <FormLabel fontSize="sm" fontWeight="medium">
          {`Size: ${selectedOption?.label || label || options[0].label}`}
        </FormLabel>
      )}
      <Stack flex="1">
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
