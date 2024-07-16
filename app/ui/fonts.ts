import localFont from 'next/font/local';
import { Russo_One } from "next/font/google";

export const Elianto = localFont({
    src: '../fonts/Elianto-Regular.ttf',
});

export const RussoOne = Russo_One({
    weight: "400",
    subsets: ["latin"]
});

export const Helvetica = localFont({
    src: '../fonts/Helvetica.ttf',
})