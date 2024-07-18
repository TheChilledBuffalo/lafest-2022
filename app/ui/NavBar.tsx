"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function NavBar() {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

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
    <>
      <nav
        className={`sticky top-0 z-10 flex w-full flex-row items-center p-5 font-semibold tracking-wide antialiased duration-200 ${header ? "-translate-y-[100%]" : ""} ${headerColor || showMenu ? "bg-black" : "bg-transparent"}`}
      >
        <div>
          <Link href={"/"} className={"text-3xl"}>
            LA FEST
          </Link>
        </div>
        <div
          className={
            "absolute right-0 hidden flex-row gap-x-4 p-5 text-lg lg:flex"
          }
        >
          <NavBarLink title={"LEGACY"} url={"/legacy"} />
          <NavBarLink title={"EVENTS"} url={"/events"} />
          <NavBarLink title={"RULES"} url={"/rules"} />
          <NavBarLink title={"ABOUT US"} url={"/about-us"} />
        </div>
        <div className={"absolute right-0 flex px-5 invert lg:hidden"}>
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <Image
                src={"/x-mark.svg"}
                alt={"Close Button"}
                width={40}
                height={40}
              />
            ) : (
              <Image
                src={"/hamburger.svg"}
                alt={"Menu"}
                width={40}
                height={40} />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`fixed z-10 h-full w-full flex-col justify-center items-center bg-black bg-opacity-80 pb-32 ${
          showMenu ? 'flex' : 'hidden'
        }`}
      >
        <Link href="/" className={"p-5"} onClick={() => setShowMenu(!showMenu)}>HOME</Link>
        <Separator className={"w-2/3"} />
        <Link href={"/legacy"} className={"p-5"} onClick={() => setShowMenu(!showMenu)}>LEGACY</Link>
        <Separator className={"w-2/3"} />
        <Link href={"/events"} className={"p-5"} onClick={() => setShowMenu(!showMenu)}>EVENTS</Link>
        <Separator className={"w-2/3"} />
        <Link href={"/rules"} className={"p-5"} onClick={() => setShowMenu(!showMenu)}>RULES</Link>
        <Separator className={"w-2/3"} />
        <Link href={"/about-us"} className={"p-5"} onClick={() => setShowMenu(!showMenu)}>ABOUT US</Link>
      </div>
    </>
  );
}

type NavBarProps = {
  title: string;
  url: string;
};

function NavBarLink({ title, url }: NavBarProps) {
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
