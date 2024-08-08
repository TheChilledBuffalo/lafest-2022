"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

type EventCardProps = {
  shadow: string;
  linkPath: string;
  imagePath: string;
};

export default function EventCard(Props: EventCardProps) {
  return (
    <Tilt
      scale={1.1}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className={`${Props.shadow} h-[180px] w-[325px] rounded-xl`}
    >
      <div className={"rounded-xl"}>
        <Link href={Props.linkPath}>
          <Image
            src={Props.imagePath}
            alt={"Harmony"}
            width={325}
            height={180}
            className={"rounded-xl"}
          />
        </Link>
      </div>
    </Tilt>
  );
}
