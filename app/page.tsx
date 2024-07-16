import Image from "next/image";
import { RussoOne } from "@/app/ui/fonts";
import SocialWidget from "@/app/ui/SocialWidget";

export default function Home() {
    return (
        <div className={"h-full w-full fixed"}>
            <div className={"absolute h-full w-full flex flex-col items-center justify-center"}>
                <Image
                    src="/logo_white.png"
                    alt={"LA Fest Logo"}
                    height={400}
                    width={400}
                />
                <h1 className={`${RussoOne.className} text-center text-3xl m-2`}>
                    A DAY IN REALITY <br/>
                    AN EPOCH IN MEMORY
                </h1>
            </div>
            <div className={"z-10 h-full absolute flex flex-col items-center justify-center invert gap-5 mx-5"}>
                <SocialWidget
                    path={"/youtube.png"}
                    description={"Youtube Channel"}
                    url={"https://www.youtube.com/channel/UC-2rdXxP10HKeRjbrIFm3UA/featured"}
                />
                <SocialWidget
                    path={"/instagram.png"}
                    description={"Instagram page"}
                    url={"https://www.instagram.com/lafest.22"}
                />
            </div>
        </div>
    )
}