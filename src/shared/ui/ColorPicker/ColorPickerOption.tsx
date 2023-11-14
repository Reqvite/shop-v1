"use client";
import {
  Box,
  chakra,
  Circle,
  Text,
  useColorModeValue,
  useRadio,
  UseRadioProps,
  VisuallyHidden,
} from "@chakra-ui/react";

interface ColorPickerOptionProps extends UseRadioProps {
  color: string;
  label?: string;
  colordata: string;
}

export const ColorPickerOption = (props: ColorPickerOptionProps) => {
  const { colordata, color, value, label } = props;
  const { getInputProps, htmlProps, getLabelProps, state } = useRadio(props);
  const letterToUpperCase: any = {
    "&:first-letter": {
      textTransform: "uppercase",
    },
  };
  const isPicked = label === color;
  return (
    <Box
      display={"flex"}
      _hover={{ borderColor: "green.100" }}
      color={isPicked ? "green.100" : "white"}
      borderRadius={10}
      tabIndex={0}
      cursor={"pointer"}
      _focus={{
        outline: "1px solid",
        outlineColor: "green.100",
        borderColor: "transparent",
      }}
    >
      <chakra.label
        cursor="pointer"
        {...htmlProps}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <chakra.input {...getInputProps()} />
        <Circle
          size="10"
          borderWidth="1px"
          _checked={{
            borderWidth: "2px",
            borderColor: useColorModeValue("blue.500", "blue.200"),
          }}
        >
          <Circle size="8" bg={colordata} />
        </Circle>
        <VisuallyHidden {...getLabelProps()}>
          {value} color selected
        </VisuallyHidden>
      </chakra.label>
    </Box>
  );
};
