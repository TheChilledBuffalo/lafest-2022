import type { Metadata } from "next";
import "./globals.css";
import { Elianto } from "@/app/ui/fonts";
import NavBar from "@/app/ui/NavBar";
import React from "react";

export const metadata: Metadata = {
  title: "LA Fest",
  description:
    "The Colosseum reopens after an interlude of VI years. Here the fight isn't over till only the winner stands. Legacy Repeats. The promised land awaits your arrival.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Elianto.className} h-full w-full antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
