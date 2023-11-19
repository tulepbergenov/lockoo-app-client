"use client";

import { IChildren } from "@/shared/types";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./ChakraUIProvider.theme";

export const ChakraUIProvider = ({ children }: IChildren) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};
