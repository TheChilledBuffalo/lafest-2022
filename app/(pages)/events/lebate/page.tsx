"use client";

import { InterFont, RussoOne } from "@/components/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Lebate() {
  const { scrollY } = useScroll();
  const slowerScrollValue = useTransform(scrollY, (value) => value * 0.5);

  return (
    <div className={"absolute top-0 h-full w-full bg-[#4e93e8]"}>
      <section
        className={
          "relative flex h-screen w-full flex-col items-center justify-center before:absolute before:bottom-0 before:z-50 before:h-40 before:w-full before:bg-linear-to-t before:from-[#4e93e8] before:to-transparent"
        }
      >
        <Image
          src={"/lebate/color_pattern.png"}
          alt={"Color Pattern Top"}
          width={2049}
          height={1152}
          className={
            "absolute top-[-10rem] block h-full w-full origin-center rotate-180 object-cover lg:hidden"
          }
        />
        <motion.div
          style={{ translateY: slowerScrollValue }}
          className={"absolute hidden h-full w-full lg:block"}
        >
          <Image
            src={"/lebate/right.png"}
            alt={"Debater 1"}
            width={2049}
            height={1152}
            className={"h-full w-full object-cover"}
          />
        </motion.div>
        <motion.div
          style={{ translateY: slowerScrollValue }}
          className={"absolute hidden h-full w-full lg:block"}
        >
          <Image
            src={"/lebate/left.png"}
            alt={"Debater 1"}
            width={2049}
            height={1152}
            className={"h-full w-full object-cover"}
          />
        </motion.div>
        <Image
          src={"/lebate/color_pattern.png"}
          alt={"Color Pattern Bottom"}
          width={2049}
          height={1152}
          className={
            "pointer-events-none absolute bottom-0 z-10 h-full w-full object-cover"
          }
        />
        <div
          className={
            "fixed flex h-full w-full flex-col items-center justify-center pb-40 pr-0 lg:absolute lg:pb-0 lg:pr-40"
          }
        >
          <button
            className={`${InterFont.className} mt-40 inline-block rounded-3xl bg-white px-6 py-2 text-xl font-semibold text-[#76A4DC] lg:mt-52 lg:text-2xl`}
          >
            <Link href={"/events"}>Back to Events</Link>
          </button>
          <h2 className={"absolute text-7xl lg:text-9xl"}>L'ebate</h2>
        </div>
      </section>
      <div
        className={
          "relative z-50 flex flex-col gap-y-5 bg-[#4e93e8] px-5 py-5 lg:px-24"
        }
      >
        <h2
          className={`${RussoOne.className} text-xl font-medium tracking-wide text-white lg:text-2xl`}
        >
          Tune into your inner scholars, and unleash all your knowledge in this
          battle of the words. Leave no fact unchecked as you try to pin down
          your opponents with your well-built opinions. Use all your verbal
          strength, and fasten your seatbelts for an engaging battle of wits.
        </h2>
        <h3
          className={`${RussoOne.className} text-lg font-medium text-white lg:text-xl`}
        >
          Arm yourselves with sharp replies and defend yourselves with strong
          rebuttals in this debate event. Your statements can and will be used
          against you, so be alert. One moment of epiphany can make you the hero
          of this debate.
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
            <li>Two participants per team.</li>
            <li>
              One offstage preliminary round will determine the four teams that
              would qualify for the Finals.
            </li>
            <li>Only one team can represent each school.</li>
            <li>
              Prelims rules: Speakers will be allowed two minutes to deliver
              their points, after which the opposition can ask questions for a
              maximum of four minutes. A maximum of three questions are allowed.
            </li>
            <li>
              Finals rules: The proposing team will be given five minutes to
              deliver their points, after which three opponents from any of the
              teams can ask one question each.
            </li>
            <li>
              Participants will not be allowed to change their stand during the
              course of the debate.
            </li>
            <li>
              No new arguments may be introduced in the rebuttal period. During
              the rebuttal session, the speaker is not allowed to seek the help
              of his teammate.
            </li>
            <li>
              In the questioning period, the questioner may ask any fair, clear
              question that has a direct bearing on the debate. Cross
              questioning is not allowed.
            </li>
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
            <li>Analysis</li>
            <li>Evidence and reasoning</li>
            <li>Organization of ideas</li>
            <li>Mode of delivery (voice, language and deportment)</li>
            <li>Command over the language</li>
            <li>Adherence to the time limit</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
