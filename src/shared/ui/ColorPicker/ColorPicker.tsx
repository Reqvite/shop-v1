import {
  FormControl,
  FormControlProps,
  FormLabel,
  HStack,
  useRadioGroup,
  UseRadioGroupProps,
} from "@chakra-ui/react";
import { useEffect } from "react";

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

  useEffect(() => {
    if (value) {
      setValue(value);
    }
  }, [setValue, value]);

  return (
    <FormControl {...rootProps}>
      {!hideLabel && (
        <FormLabel fontSize="sm" fontWeight="medium">
          {label ?? `Color: ${selectedOption?.label ?? options[0].label}`}
        </FormLabel>
      )}
      <HStack {...getRootProps()}>
        {options?.map((option, idx) => (
          <ColorPickerOption
            key={idx}
            label={label}
            color={option.color}
            colordata={option.colorData || ""}
            {...getRadioProps({ value: option.colorData })}
          />
        ))}
      </HStack>
    </FormControl>
  );
};
