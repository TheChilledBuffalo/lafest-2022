"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  function hideHeader() {
    if (window.scrollY > scrollY) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  function headerBackground() {
    if (window.scrollY > 40) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      hideHeader();
      headerBackground();
      setScrollY(window.scrollY);
    });
  });

  return (
    <div
      className={`sticky top-0 flex w-full flex-row items-center p-5 font-semibold tracking-wide antialiased duration-200 ${header ? "-translate-y-[100%]" : ""} ${headerColor ? "bg-black" : "bg-transparent"}`}
    >
      <Link href={"/"} className={"header text-3xl"}>
        LA FEST
      </Link>
      <div className={"absolute right-0 flex flex-row gap-x-4 p-5 text-lg"}>
        <HeaderPageLink title={"LEGACY"} url={"/legacy"} />
        <HeaderPageLink title={"EVENTS"} url={"/events"} />
        <HeaderPageLink title={"RULES"} url={"/rules"} />
        <HeaderPageLink title={"ABOUT US"} url={"/about-us"} />
      </div>
    </div>
  );
}

type HeaderProps = {
  title: string;
  url: string;
};

function HeaderPageLink({ title, url }: HeaderProps) {
  const currentPath = usePathname();

  return (
    <Link
      href={url}
      className={clsx(
        "rounded-2xl px-2 duration-500 hover:bg-white hover:tracking-[4px] hover:text-black",
        {
          "bg-white tracking-[4px] text-black": currentPath === url,
        },
      )}
    >
      {title}
    </Link>
  );
}
