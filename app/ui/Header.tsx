'use client'

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
    })

    return (
        <div className=
                 {`w-full sticky top-0 p-5 flex duration-200 flex-row items-center font-semibold tracking-wide 
                 antialiased ${header ? "-translate-y-[100%]" : ""} ${headerColor ? "bg-black" : "bg-transparent"}`}
        >
            <Link href={'/'} className={"header text-3xl"}>
                LA FEST
            </Link>
            <div className={"flex flex-row absolute right-0 p-5 gap-x-4 text-lg"}>
                <HeaderPageLink title={"LEGACY"} url={"/legacy"} />
                <HeaderPageLink title={"EVENTS"} url={"/events"} />
                <HeaderPageLink title={"RULES"} url={"/rules"} />
                <HeaderPageLink title={"ABOUT US"} url={"/about-us"} />
            </div>
        </div>
    )
}

type HeaderProps = {
    title: string
    url: string
}

function HeaderPageLink(
    { title, url }: HeaderProps,
) {
    const currentPath = usePathname();

    return (
        <Link
            href={url}
            className={clsx(
                "rounded-2xl px-2 duration-500 hover:tracking-[4px] hover:bg-white hover:text-black",
                {
                    "text-black bg-white tracking-[4px]": currentPath === url
                }
            )}
        >
            {title}
        </Link>
    )
}
