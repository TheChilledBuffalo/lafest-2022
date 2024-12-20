'use client'

import Image from "next/image";
import Link from "next/link";
import { InterFont, RussoOne } from "@/components/fonts";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Harmony() {
  const { scrollY } = useScroll();
  const scrollValue = scrollY;
  const negativeScrollValue = useTransform(scrollValue, (value) => -value);
  const fasterScrollValue = useTransform(scrollValue, (value) => value * 1.8);

  return (
    <div className={"bg-[#0199FF] absolute top-0 h-full w-full"}>
      <section
        className={"h-screen w-full flex flex-col justify-center items-center relative overflow-hidden before:z-[1000] before:absolute before:bottom-0 before:w-full before:h-40 before:bg-gradient-to-t before:from-[#350053] before:to-transparent"}>
        <Image src={"/harmony/stars.png"} alt={"Stars"} width={2049} height={1152}
               className={"absolute object-cover h-full w-full"} />
        <motion.div style={{translateX: scrollValue}} className={"absolute w-full h-full"}>
          <Image src={"/harmony/pat.png"} alt={"Music"} width={2049} height={1152}
                 className={"object-cover h-full w-full"} />
        </motion.div>
        <motion.div style={{translateY: fasterScrollValue}} className={"absolute mix-blend-screen h-full w-full"}>
          <Image src={"/harmony/moon.png"} alt={"Moon"} width={2049} height={1152}
                 className={"object-cover h-full w-full"} />
        </motion.div>
        <Image src={"/harmony/pat2.png"} alt={"Music2"} width={2049} height={1152}
               className={"absolute object-cover h-full w-full"} />
        <Image src={"/harmony/mountains_behind.png"} alt={"Mountains behind"} width={2049} height={1152}
               className={"absolute object-cover h-full w-full"}/>
        <motion.h2 className={"absolute z-20 text-7xl lg:text-9xl"} style={{translateX: negativeScrollValue}}>Harmony</motion.h2>
        <motion.button
          className={`${InterFont.className} fixed inline-block z-40 mt-40 lg:mt-52 py-2 px-6 text-xl lg:text-2xl rounded-3xl bg-white text-[#a200ff] font-semibold`}
        >
          <Link href={"/events"}>
            Back to Events
          </Link>
        </motion.button>
        <Image src={"/harmony/mountains_front.png"} alt={"Mountains front"} width={2049} height={1152}
               className={"z-30 object-cover h-full w-full"}/>
      </section>
      <div className={"bg-[#350351] relative px-5 py-5 lg:px-24 flex flex-col gap-y-5 z-50"}>
        <h2 className={`${RussoOne.className} font-medium text-white text-xl lg:text-2xl tracking-wide`}>
          The Muses await in the Colosseum to meet their equals. Enchant the crowd with your musical prowess.
          Modulate your pitch, notes and chords to bewitch and sway the audience with your performances.
          Break away from the humdrum of everyday life; stand apart and dance to your own music.
        </h2>
        <h3 className={`${RussoOne.className} font-medium text-white text-lg lg:text-xl`}>
          Express your passion through the music you compose. The symphony your school band creates through their voice
          and instruments will lead you to victory. Scintillate the atmosphere as you compete for the prize in this
          music event.
        </h3>
        <h2 className={`${RussoOne.className} font-medium text-white text-xl lg:text-2xl`}>Rules:</h2>
        <div className={`${InterFont.className} font-medium text-lg lg:text-xl mt-[-10px] px-6`}>
          <ol className={"list-decimal flex flex-col gap-3"}>
            <li>A minimum of six and a maximum of ten participants are allowed in a team.</li>
            <li>Six output cables, five mics, two keyboard stands and a standard drum kit will be provided.</li>
            <li>Each participating team has eight minutes for performance and two minutes for stage setting.</li>
            <li>A minimum of three instruments and a maximum of six instruments are required, including the drums
              which will be provided. Each team can have a maximum of four vocalists.
            </li>
            <li>Devotional songs and classical songs are not allowed.</li>
            <li>Additional instruments and accessories should be brought by the contestants if required. Amplifiers will
              be made available to teams upon request.
            </li>
            <li>The use of rhythm boxes, pre-recorded MIDI files (other than those used as per the rule below), karaoke,
              drum pads and rhythm pads is not permitted.
            </li>
            <li>
              USB-MIDI controllers, synthesisers and shoulder synthesisers are permitted on condition that they are
              pre-recorded MIDI loops.
            </li>
            <li>A Maximum of four vocalists are allowed.</li>
          </ol>
        </div>
        <h2 className={`${RussoOne.className} font-medium text-white text-xl lg:text-2xl`}>Judging Criteria:</h2>
        <div className={`${InterFont.className} font-medium text-lg lg:text-xl mt-[-10px] px-6`}>
          <ol className={"list-decimal flex flex-col gap-3"}>
            <li>Vocal Quality</li>
            <li>Coordination</li>
            <li>Creativity</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
