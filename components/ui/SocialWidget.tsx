import Image from "next/image";
import Link from "next/link";

type WidgetLinkImage = {
  path: string;
  description: string;
  url: string;
};

export default function SocialWidget(Props: WidgetLinkImage) {
  return (
    <div
      className={
        "flex h-5 w-5 items-center justify-center transition hover:scale-125"
      }
    >
      <Link href={Props.url} target={"_blank"}>
        <Image
          src={Props.path}
          alt={Props.description}
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
