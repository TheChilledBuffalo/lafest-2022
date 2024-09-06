import { Elianto } from "@/components/fonts";
import NavBar from "@/components/ui/NavBar";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Particles from "@/components/ui/particles";

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
        <Particles className={"fixed inset-0 z-[-10]"} />
        {children}
      </body>
    </html>
  );
}
