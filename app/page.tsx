import Image from "next/image";
import { RussoOne } from "@/app/ui/fonts";
import SocialWidget from "@/app/ui/SocialWidget";

export default function Home() {
  return (
    <div className={"fixed h-full w-full"}>
      <div
        className={
          "absolute flex h-full w-full flex-col items-center justify-center"
        }
      >
        <Image
          src="/logo_white.png"
          alt={"LA Fest Logo"}
          height={400}
          width={400}
        />
        <h1 className={`${RussoOne.className} m-2 text-center text-3xl`}>
          A DAY IN REALITY <br />
          AN EPOCH IN MEMORY
        </h1>
      </div>
      <div
        className={
          "absolute z-10 mx-5 flex h-full flex-col items-center justify-center gap-5 invert"
        }
      >
        <SocialWidget
          path={"/youtube.png"}
          description={"Youtube Channel"}
          url={
            "https://www.youtube.com/channel/UC-2rdXxP10HKeRjbrIFm3UA/featured"
          }
        />
        <SocialWidget
          path={"/instagram.png"}
          description={"Instagram page"}
          url={"https://www.instagram.com/lafest.22"}
        />
      </div>
    </div>
  );
}
