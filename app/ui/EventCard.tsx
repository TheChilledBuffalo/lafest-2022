'use client'

import Link from "next/link";
import Image from "next/image";
import Tilt from 'react-parallax-tilt'

type EventCardProps = {
  shadow: string,
  linkPath: string,
  imagePath: string
}

export default function EventCard(Props: EventCardProps) {
  return (
    <Tilt
      scale={1.1}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className={`${Props.shadow} rounded-xl`}>
      <div className={"w-[325px] h-[180px] rounded-xl"}>
        <Link href={Props.linkPath}>
          <Image
            src={Props.imagePath}
            alt={"Harmony"}
            width={325}
            height={180}
            className={"rounded-xl"}/>
        </Link>
      </div>
    </Tilt>
  )
}