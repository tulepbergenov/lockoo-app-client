import { IChildren } from "@/shared/types";
import { ChakraUIProvider } from "./ChakraUIProvider";
import { ProgressBar } from "./ProgressBar";

export const Providers = ({ children }: IChildren) => {
  return (
    <ChakraUIProvider>
      <ProgressBar>{children}</ProgressBar>
    </ChakraUIProvider>
  );
};
