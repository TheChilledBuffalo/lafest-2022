import EventCard from "@/app/ui/EventCard";

export default function Events() {
  return(
    <div className={"flex flex-row items-center justify-center gap-72 m-10"}>
      <div className={"flex flex-col h-full gap-20"}>
        <EventCard shadow={"hover:shadow-[1px_4px_37px_1px_#1ED760]"} imagePath={"/events/harmony.png"} linkPath={"events/harmony"} />
        <EventCard shadow={"hover:shadow-[1px_4px_37px_1px_#00bfff]"} imagePath={"/events/lebate.jpg"} linkPath={"events/lebate"} />
      </div>
      <div className={"flex flex-col h-full gap-20"}>
        <EventCard shadow={"hover:shadow-[1px_4px_37px_1px_#EDCE80]"} imagePath={"/events/dance.png"} linkPath={"events/dance"} />
        <EventCard shadow={"hover:shadow-[1px_4px_37px_1px_#ffffff]"} imagePath={"/events/lapersona.jpg"} linkPath={"events/lapersona"} />
        <EventCard shadow={"hover:shadow-[1px_4px_37px_1px_#7200fd]"} imagePath={"/events/enquesta.jpg"} linkPath={"events/enquesta"} />
      </div>
      <div className={"flex flex-col h-full gap-20"}>
        <EventCard shadow={"hover:shadow-[1px_4px_37px_1px_#FF3F01]"} imagePath={"/events/block.png"} linkPath={"events/block"} />
        <EventCard shadow={"hover:shadow-[1px_4px_37px_1px_#342dfc]"} imagePath={"/events/lattire.png"} linkPath={"events/lattire"} />
      </div>
    </div>
  );
}
