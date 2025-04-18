"use client";

import { Separator } from "@/components/ui/separator";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [transition, setTransition] = useState(true);

  function hideHeader() {
    if (window.scrollY > scrollY) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  const currentPath = usePathname();

  function headerBackground() {
    if (currentPath.includes("about-us") || currentPath.includes("events")) {
      setHeaderColor(false);
      return;
    }
    if (window.scrollY > 40) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  }

  function HamburgerClick() {
    setShowMenu(!showMenu);
    document.querySelector("body")?.classList.toggle("overflow-hidden");
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      hideHeader();
      headerBackground();
      setScrollY(window.scrollY);
    });
  });

  useEffect(() => {
    if (currentPath.includes("about-us") || currentPath.includes("events")) {
      setTransition(false);
    } else {
      setTransition(true);
    }
  }, [currentPath]);

  return (
    <>
      <nav
        className={`sticky top-0 z-1000 flex w-full select-none flex-row items-center p-5 font-semibold tracking-wide antialiased duration-200 ${header ? "-translate-y-[100%]" : ""} ${headerColor || showMenu ? "bg-black bg-opacity-80" : "bg-transparent"} ${transition ? "" : "transition-none"}`}
      >
        <div>
          <Link
            href={"/"}
            className={"text-3xl"}
            onClick={() => setShowMenu(false)}
          >
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
          <button onClick={HamburgerClick}>
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
                height={40}
              />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`fixed z-1000 h-full w-full select-none flex-col items-center justify-center bg-black bg-opacity-80 pb-32 text-2xl ${
          showMenu ? "flex" : "hidden"
        }`}
      >
        <Link href="/" className={"p-5"} onClick={HamburgerClick}>
          HOME
        </Link>
        <Separator className={"w-2/3"} />
        <Link href={"/legacy"} className={"p-5"} onClick={HamburgerClick}>
          LEGACY
        </Link>
        <Separator className={"w-2/3"} />
        <Link href={"/events"} className={"p-5"} onClick={HamburgerClick}>
          EVENTS
        </Link>
        <Separator className={"w-2/3"} />
        <Link href={"/rules"} className={"p-5"} onClick={HamburgerClick}>
          RULES
        </Link>
        <Separator className={"w-2/3"} />
        <Link href={"/about-us"} className={"p-5"} onClick={HamburgerClick}>
          ABOUT US
        </Link>
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
          "bg-white tracking-[4px] text-black": currentPath.includes(url),
        },
      )}
    >
      {title}
    </Link>
  );
}
