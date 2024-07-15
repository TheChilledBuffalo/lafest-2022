'use client'

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Header() {
     return (
         <div className={"w-screen p-5 flex flex-row items-center font-semibold tracking-wide antialiased bg-transparent"}>
              <Link href={'/'} className={"header text-3xl"}>
                   LA FEST
              </Link>
             <div className={"flex flex-row absolute right-0 p-5 gap-x-4 text-lg"}>
                 <HeaderPageLink title={"LEGACY"} url={"../legacy"} />
                 <HeaderPageLink title={"EVENTS"} url={"../events"} />
                 <HeaderPageLink title={"RULES"} url={"../rules"} />
                 <HeaderPageLink title={"ABOUT US"} url={"../about-us"} />
             </div>
         </div>
     )
}

type HeaderProps = {
    title: string
    url: string
}

export  function HeaderPageLink(
    { title, url }: HeaderProps,
) {
    const currentPath = usePathname();
    const pathName = `/${url.slice(3)}`

    return (
        <Link
            href={url}
            className={clsx(
                "rounded-2xl px-2 duration-500 hover:tracking-[4px] hover:bg-white hover:text-black",
                {
                    "text-black bg-white tracking-[4px]": currentPath === pathName
                }
            )}
        >
            {title}
        </Link>
    )
}