"use client";

import { InterFont, RussoOne } from "@/components/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Dance() {
  const { scrollY } = useScroll();
  const slowerScrollValue = useTransform(scrollY, (value) => value * 0.4);

  return (
    <div className={"absolute top-0 h-full w-full bg-[#562bbb]"}>
      <section
        className={
          "relative flex h-screen w-full flex-col items-center justify-center overflow-hidden before:absolute before:bottom-0 before:z-50 before:h-40 before:w-full before:bg-linear-to-t before:from-[#7732A5] before:to-transparent"
        }
      >
        <motion.div
          style={{ translateY: slowerScrollValue }}
          className={
            "absolute hidden h-full w-full mix-blend-hard-light md:block"
          }
        >
          <Image
            src={"/dance/girl.png"}
            alt={"Girl Dancing"}
            width={2049}
            height={1152}
            className={"absolute h-full w-full object-cover"}
          />
        </motion.div>
        <motion.div
          style={{ translateY: slowerScrollValue }}
          className={
            "absolute hidden h-full w-full mix-blend-hard-light md:block"
          }
        >
          <Image
            src={"/dance/man.png"}
            alt={"Man Dancing"}
            width={2049}
            height={1152}
            className={"absolute h-full w-full object-cover"}
          />
        </motion.div>
        <Image
          src={"/dance/new_back.png"}
          alt={"Mountains behind"}
          width={2049}
          height={1152}
          className={"absolute h-full w-full object-cover"}
        />
        <h2 className={"z-20 text-center text-7xl lg:text-9xl"}>
          Dance O' Mania
        </h2>
        <motion.button
          className={`${InterFont.className} z-40 mt-10 inline-block rounded-3xl bg-white px-6 py-2 text-xl font-semibold text-[#a200ff] lg:text-2xl`}
        >
          <Link href={"/events"}>Back to Events</Link>
        </motion.button>
      </section>
      <div
        className={
          "relative z-50 flex flex-col gap-y-5 bg-[#7732A5] px-5 py-5 lg:px-24"
        }
      >
        <h2
          className={`${RussoOne.className} text-xl font-medium tracking-wide text-white lg:text-2xl`}
        >
          For the people who get the steps right to beat, those who bust out
          moves that are very neat, for the dancers who make the audience jump
          out of their seats. Let your passion flow free and entertain the
          audience. We welcome you to set the stage on fire with your groove in
          Dance O' Mania.
        </h2>
        <h3
          className={`${RussoOne.className} text-lg font-medium text-white lg:text-xl`}
        >
          This dance competition requires the participants to put their body and
          soul into their performance, as they will represent the emblem of LA
          Fest, the “Nataraja”. Let your body flow perfectly like a river out to
          sea, in tandem with the music acting like the delta that contains it.
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
              Only one team consisting of eight to sixteen participants is
              allowed from each school.
            </li>
            <li>Performance should not exceed eight minutes.</li>
            <li>Choose any music or track.</li>
            <li>Party poppers or any such explosive items are not allowed.</li>
            <li>All sequences must be performed onstage.</li>
            <li>
              Obscenity or vulgarity (in the songs or actions during
              performances) is not allowed.
            </li>
            <li>Backup USBs can be brought by the contestants.</li>
            <li>
              Special stage settings are allowed but with prior arrangements
              with the event heads.
            </li>
            <li>Special lighting will not be available. </li>
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
            <li>Choreography</li>
            <li>Coordination</li>
            <li>Innovation</li>
            <li>Costume design</li>
            <li>Props</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
