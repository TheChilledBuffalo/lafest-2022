import type { Metadata } from "next";
import "./globals.css";
import { Elianto } from "@/app/ui/fonts";
import Header from "@/app/ui/Header";

export const metadata: Metadata = {
    title: "LA Fest",
    description: "The Colosseum reopens after an interlude of VI years. Here the fight isn't over till only the winner stands. Legacy Repeats. The promised land awaits your arrival.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${Elianto.className} antialiased w-full h-full`}>
                <Header />
                {children}
            </body>
        </html>
  );
}
