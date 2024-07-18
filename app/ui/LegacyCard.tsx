import Image from "next/image";
import React from "react";

type LegacyCardProps = {
  bgClassName: string;
  imagePath: string;
  imageDescription: string;
  date: string;
  tagline: React.JSX.Element;
  description: React.JSX.Element;
  winner: string;
};

export default function LegacyCard(Props: LegacyCardProps) {
  return (
    <div
      className={
        "flex w-3/5 flex-row items-center gap-x-5 rounded-xl bg-gray-900"
      }
    >
      <div
        className={`h-full flex-1 ${Props.bgClassName} flex items-center justify-center rounded-xl`}
      >
        <Image
          src={Props.imagePath}
          alt={Props.imageDescription}
          width={300}
          height={300}
        />
      </div>
      <div className={"flex flex-1 flex-col gap-y-4 p-5 text-left"}>
        <div className={"text-xs font-normal"}>{Props.date}</div>
        <div className={"text-3xl font-bold"}>{Props.tagline}</div>
        <div className={"text-base font-normal"}>{Props.description}</div>
        <div className={"text-sm"}>{Props.winner}</div>
      </div>
    </div>
  );
}
