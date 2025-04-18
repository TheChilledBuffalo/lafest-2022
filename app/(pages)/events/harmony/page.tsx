"use client";

import { InterFont, RussoOne } from "@/components/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Harmony() {
  const { scrollY } = useScroll();
  const scrollValue = scrollY;
  const negativeScrollValue = useTransform(scrollValue, (value) => -value);
  const fasterScrollValue = useTransform(scrollValue, (value) => value * 1.8);

  return (
    <div className={"absolute top-0 h-full w-full bg-[#0199FF]"}>
      <section
        className={
          "relative flex h-screen w-full flex-col items-center justify-center overflow-hidden before:absolute before:bottom-0 before:z-50 before:h-40 before:w-full before:bg-linear-to-t before:from-[#350053] before:to-transparent"
        }
      >
        <Image
          src={"/harmony/stars.png"}
          alt={"Stars"}
          width={2049}
          height={1152}
          className={"absolute h-full w-full object-cover"}
        />
        <motion.div
          style={{ translateX: scrollValue }}
          className={"absolute h-full w-full"}
        >
          <Image
            src={"/harmony/pat.png"}
            alt={"Music"}
            width={2049}
            height={1152}
            className={"h-full w-full object-cover"}
          />
        </motion.div>
        <motion.div
          style={{ translateY: fasterScrollValue }}
          className={"absolute h-full w-full mix-blend-screen"}
        >
          <Image
            src={"/harmony/moon.png"}
            alt={"Moon"}
            width={2049}
            height={1152}
            className={"h-full w-full object-cover"}
          />
        </motion.div>
        <Image
          src={"/harmony/pat2.png"}
          alt={"Music2"}
          width={2049}
          height={1152}
          className={"absolute h-full w-full object-cover"}
        />
        <Image
          src={"/harmony/mountains_behind.png"}
          alt={"Mountains behind"}
          width={2049}
          height={1152}
          className={"absolute h-full w-full object-cover"}
        />
        <motion.h2
          className={"absolute z-20 text-7xl lg:text-9xl"}
          style={{ translateX: negativeScrollValue }}
        >
          Harmony
        </motion.h2>
        <motion.button
          className={`${InterFont.className} fixed z-40 mt-40 inline-block rounded-3xl bg-white px-6 py-2 text-xl font-semibold text-[#a200ff] lg:mt-52 lg:text-2xl`}
        >
          <Link href={"/events"}>Back to Events</Link>
        </motion.button>
        <Image
          src={"/harmony/mountains_front.png"}
          alt={"Mountains front"}
          width={2049}
          height={1152}
          className={"z-30 h-full w-full object-cover"}
        />
      </section>
      <div
        className={
          "relative z-50 flex flex-col gap-y-5 bg-[#350351] px-5 py-5 lg:px-24"
        }
      >
        <h2
          className={`${RussoOne.className} text-xl font-medium tracking-wide text-white lg:text-2xl`}
        >
          The Muses await in the Colosseum to meet their equals. Enchant the
          crowd with your musical prowess. Modulate your pitch, notes and chords
          to bewitch and sway the audience with your performances. Break away
          from the humdrum of everyday life; stand apart and dance to your own
          music.
        </h2>
        <h3
          className={`${RussoOne.className} text-lg font-medium text-white lg:text-xl`}
        >
          Express your passion through the music you compose. The symphony your
          school band creates through their voice and instruments will lead you
          to victory. Scintillate the atmosphere as you compete for the prize in
          this music event.
        </h3>
        <h2
          className={`${RussoOne.className} text-xl font-medium text-white lg:text-2xl`}
        >
          Rules:
        </h2>
        <div
          className={`${InterFont.className} mt-[-10px] px-6 text-lg font-medium lg:text-xl`}
        >
          <ol className={"flex list-decimal flex-col gap-3"}>
            <li>
              A minimum of six and a maximum of ten participants are allowed in
              a team.
            </li>
            <li>
              Six output cables, five mics, two keyboard stands and a standard
              drum kit will be provided.
            </li>
            <li>
              Each participating team has eight minutes for performance and two
              minutes for stage setting.
            </li>
            <li>
              A minimum of three instruments and a maximum of six instruments
              are required, including the drums which will be provided. Each
              team can have a maximum of four vocalists.
            </li>
            <li>Devotional songs and classical songs are not allowed.</li>
            <li>
              Additional instruments and accessories should be brought by the
              contestants if required. Amplifiers will be made available to
              teams upon request.
            </li>
            <li>
              The use of rhythm boxes, pre-recorded MIDI files (other than those
              used as per the rule below), karaoke, drum pads and rhythm pads is
              not permitted.
            </li>
            <li>
              USB-MIDI controllers, synthesisers and shoulder synthesisers are
              permitted on condition that they are pre-recorded MIDI loops.
            </li>
            <li>A Maximum of four vocalists are allowed.</li>
          </ol>
        </div>
        <h2
          className={`${RussoOne.className} text-xl font-medium text-white lg:text-2xl`}
        >
          Judging Criteria:
        </h2>
        <div
          className={`${InterFont.className} mt-[-10px] px-6 text-lg font-medium lg:text-xl`}
        >
          <ol className={"flex list-decimal flex-col gap-3"}>
            <li>Vocal Quality</li>
            <li>Coordination</li>
            <li>Creativity</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
