import {
  Button,
  chakra,
  useColorModeValue,
  useRadio,
  UseRadioProps,
  VisuallyHidden,
} from "@chakra-ui/react";

export type SizePickerButtonProps = UseRadioProps & {
  label?: string;
};

export const SizePickerButton = (props: SizePickerButtonProps) => {
  const { value, label } = props;
  const { getInputProps, htmlProps, getCheckboxProps, getLabelProps } =
    useRadio(props);

  return (
    <chakra.label {...htmlProps}>
      <chakra.input {...getInputProps()} />
      <Button
        as="span"
        px="0"
        cursor="pointer"
        variant="secondary"
        colorScheme="var(--chakra-colors-accentColorTransparent)"
        color={useColorModeValue("gray.600", "gray.400")}
        borderRadius="base"
        borderColor={"var(--chakra-colors-accentColor)"}
        _checked={{
          color: "var(--chakra-colors-accentColor)",
          bg: "var(--chakra-colors-accentColorTransparent)",
          borderColor: "var(--chakra-colors-accentColor)",
          borderWidth: "2px",
        }}
        _focus={{ boxShadow: "none" }}
        _focusVisible={{ boxShadow: "outline" }}
        {...getCheckboxProps()}
      >
        {value}
      </Button>
      <VisuallyHidden {...getLabelProps()}>{label} selected</VisuallyHidden>
    </chakra.label>
  );
};
