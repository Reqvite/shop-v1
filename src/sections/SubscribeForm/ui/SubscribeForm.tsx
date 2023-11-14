"use client";

import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";

import { ButtonType, InputType } from "@/shared/types/components";
import { Input } from "@/shared/ui";

interface Props {
  subscribeButton: ButtonType;
  inputSubscribe: InputType;
  description: string | null;
  title: string | null;
}
type SubscribeFormProps = {
  data: Props;
};

export const SubscribeForm = ({ data }: SubscribeFormProps) => {
  const { title, description, subscribeButton, inputSubscribe } = data;
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial",
  );
  const [error, setError] = useState(false);

  return (
    <Box as="section" p={10} position={"relative"}>
      <Container
        maxW={"8xl"}
        boxShadow={"var(--chakra-shadows-mainShadow)"}
        background={"whiteAlpha.300"}
        rounded={"lg"}
        py={3}
        px={7}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          py={{ base: "12", md: "16" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Stack spacing={{ base: 10 }} maxW={"600px"}>
            <Heading
              as="h2"
              textTransform={"uppercase"}
              lineHeight={1.1}
              color={"var(--chakra-colors-accentColor)"}
              fontSize={{ base: "4xl" }}
            >
              {title}
            </Heading>
            <Text
              as={"p"}
              fontSize={{ base: "3xl" }}
              color={useColorModeValue(
                "var(--chakra-colors-mainBgColorDark)",
                "var(--chakra-colors-mainBgColorLight)",
              )}
            >
              {description}
            </Text>
          </Stack>
          <Box>
            <Stack
              direction={{ base: "column", md: "row" }}
              as={"form"}
              spacing={"12px"}
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                setError(false);
                setState("submitting");
                setTimeout(() => {
                  if (email === "fail@example.com") {
                    setError(true);
                    setState("initial");
                    return;
                  }

                  setState("success");
                }, 1000);
              }}
            >
              <FormControl>
                <Input
                  label={"Email"}
                  name={"email"}
                  type={"email"}
                  borderWidth={1}
                  color={"gray.800"}
                  _placeholder={{
                    color: "gray.400",
                  }}
                  id={"email"}
                  //@ts-ignore
                  required
                  aria-label={"Your Email"}
                  value={email}
                  disabled={state !== "initial"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                />
              </FormControl>
              <FormControl w={{ base: "100%", md: "40%" }}>
                <Button
                  variant={subscribeButton.variant}
                  colorScheme={state === "success" ? "green" : "blue"}
                  isLoading={state === "submitting"}
                  w="100%"
                  type={state === "success" ? "button" : "submit"}
                >
                  {state === "success" ? <CheckIcon /> : "Submit"}
                </Button>
              </FormControl>
            </Stack>
            <Text
              color={useColorModeValue(
                "var(--chakra-colors-mainBgColorDark)",
                "var(--chakra-colors-mainBgColorLight)",
              )}
              mt={2}
              textAlign={"center"}
            >
              {error
                ? "Oh no an error occured! 😢 Please try again later."
                : "You won't receive any spam! ✌️"}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
