"use client";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useColorModeValue,
} from "@chakra-ui/react";

type InputProps = ChakraInputProps & {
  label: string;
  helperText?: string;
  error?: string;
};
export const Input = (props: InputProps) => {
  const { label, helperText, error, ...otherProps } = props;

  return (
    <FormControl variant="floating" id={label} isRequired>
      <ChakraInput
        placeholder=" "
        {...otherProps}
        _hover={{ borderColor: "var(--chakra-colors-accentColor)" }}
        _focus={{ borderColor: "var(--chakra-colors-accentColor)" }}
        borderColor={useColorModeValue(
          "var(--chakra-colors-mainBgColorDark)",
          "var(--chakra-colors-mainBgColorLight)",
        )}
      />
      <FormLabel>{label}</FormLabel>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
