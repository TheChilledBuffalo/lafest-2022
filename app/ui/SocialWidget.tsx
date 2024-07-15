import Link from "next/link";
import Image from "next/image";
import React from "react";

type WidgetLinkImage = {
    path: string
    description: string
    url: string
}

export default function SocialWidget(
    {
        path,
        description,
        url
    }: WidgetLinkImage
) {
    return (
        <div className={"hover:scale-125 h-5 w-5 transition flex justify-center items-center"}>
            <Link
                href={url}
                target={"_blank"}
            >
                <Image
                    src={path}
                    alt={description}
                    width={20}
                    height={20}
                />
            </Link>
        </div>
    )
}