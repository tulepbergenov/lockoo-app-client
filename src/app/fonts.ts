import { Open_Sans, Raleway } from "next/font/google";

export const openSansFont = Open_Sans({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--app-fm-open-sans",
});

export const ralewayFont = Raleway({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--app-fm-raleway",
});
