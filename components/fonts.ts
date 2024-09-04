import { Russo_One } from "next/font/google";
import localFont from "next/font/local";

export const Elianto = localFont({
  src: "../app/fonts/Elianto-Regular.ttf",
});

export const RussoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

export const Helvetica = localFont({
  src: "../app/fonts/Helvetica.ttf",
});
