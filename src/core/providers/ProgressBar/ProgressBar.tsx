"use client";

import { IChildren } from "@/shared/types";
import { AppProgressBar } from "next-nprogress-bar";

export const ProgressBar = ({ children }: IChildren) => {
  return (
    <>
      {children}
      <AppProgressBar
        height="3px"
        color="#3182ce"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
