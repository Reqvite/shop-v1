"use client";
import {
  FormControl,
  FormControlProps,
  FormLabel,
  HStack,
  Text,
  useRadioGroup,
  UseRadioGroupProps,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useConstructorStore } from "@/global/store/cart";

import { ColorPickerOption } from "./ColorPickerOption";

interface ColorPickerProps extends UseRadioGroupProps {
  options: any[];
  rootProps?: FormControlProps;
  hideLabel?: boolean;
  label?: string;
  onChange: (value?: string) => void;
}

export const ColorPicker = (props: ColorPickerProps) => {
  const {
    label,
    options,
    rootProps,
    hideLabel,
    onChange = () => console.log(1),
    ...rest
  } = props;
  const { getRadioProps, getRootProps, value, setValue } = useRadioGroup(rest);
  const selectedOption = options?.find((option) => option.colorData === value);

  const onSetColor = useConstructorStore((state) => state.setColorOption);

  useEffect(() => {
    if (value) {
      onSetColor(selectedOption || options[0]);
    }
  }, [onSetColor, options, selectedOption, value]);

  useEffect(() => {
    onSetColor(options[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormControl {...rootProps}>
      {!hideLabel && (
        <FormLabel fontSize="sm" fontWeight="medium">
          {`Color: ${selectedOption?.label || label || options[0].label}`}
        </FormLabel>
      )}
      <HStack {...getRootProps()}>
        {options?.map((option, idx) => (
          <ColorPickerOption
            key={idx}
            label={label}
            color={option.label}
            colordata={option.colorData || ""}
            {...getRadioProps({ value: option.colorData })}
          />
        ))}
      </HStack>
    </FormControl>
  );
};
