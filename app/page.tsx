import { RussoOne } from "@/app/ui/fonts";
import SocialWidget from "@/app/ui/SocialWidget";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className={
          "absolute top-0 flex h-full w-full select-none flex-col items-center justify-center p-6"
        }
      >
        <Image
          src="/logo_white.png"
          alt={"LA Fest Logo"}
          height={500}
          width={500}
        />
        <h1
          className={`${RussoOne.className} m-2 text-center text-2xl lg:text-3xl`}
        >
          A DAY IN REALITY <br />
          AN EPOCH IN MEMORY
        </h1>
      </div>
      <div
        className={
          "absolute bottom-0 mx-0 my-5 flex h-max w-full flex-row items-center justify-center gap-5 invert lg:mx-5 lg:my-0 lg:h-full lg:w-max lg:flex-col"
        }
      >
        <SocialWidget
          path={"/youtube.png"}
          description={"Youtube Channel"}
          url={"https://www.youtube.com/@LAFEST-mm9ez"}
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
