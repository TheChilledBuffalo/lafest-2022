import Image from "next/image";
import { RussoOne } from "@/app/ui/fonts";
import SocialWidget from "@/app/ui/SocialWidget";

export default function Home() {
  return (
    <>
      <div
        className={
          "absolute flex h-full w-full flex-col items-center justify-center p-6 top-0"
        }
      >
        <Image
          src="/logo_white.png"
          alt={"LA Fest Logo"}
          height={500}
          width={500}
        />
        <h1 className={`${RussoOne.className} m-2 text-center text-2xl lg:text-3xl`}>
          A DAY IN REALITY <br />
          AN EPOCH IN MEMORY
        </h1>
      </div>
      <div
        className={
          "absolute mx-0 lg:mx-5 my-5 lg:my-0 h-max lg:h-full w-full lg:w-max flex flex-row lg:flex-col items-center justify-center gap-5 invert bottom-0"
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
    </>
  );
}
