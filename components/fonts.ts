import { Inter, Russo_One } from "next/font/google";
import localFont from "next/font/local";

export const Elianto = localFont({
  src: "../app/fonts/Elianto-Regular.ttf",
});

export const RussoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
});

export const InterFont = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
