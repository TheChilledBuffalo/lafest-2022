import { Elianto, InterFont, RussoOne } from "@/components/fonts";

export default function About() {
  return (
    <div className={"h-full w-full"}>
      <div
        className={
          "absolute top-0 h-96 w-full bg-[url('/loyola_basketball_court.jpg')] bg-cover bg-center"
        }
      ></div>
      <div
        className={
          "absolute mt-80 flex w-full flex-col items-center justify-center gap-y-7 p-10"
        }
      >
        <h2
          className={`text-center text-4xl font-black uppercase tracking-wider ${RussoOne.className}`}
        >
          Legacy Repeats
        </h2>
        <div
          className={`${InterFont.className} flex flex-col gap-y-3 text-center text-xl font-bold`}
        >
          <p>
            The Colosseum reopens after an interlude of VI years. Here the fight
            isn't over till only the winner stands.
          </p>
          <p>
            New heroes will rise as the giants fall, who will guide their
            legions to ultimate glory?
          </p>
          <p>
            Your victory here carves your names into, not just the walls of the
            Colosseum, but into the hearts of your aides.
          </p>
          <p>Colosseum, but into the hearts of your aides.</p>
          <p>The promised land awaits your arrival.</p>
          <p>Can you rise up to the vexillum left by your predecessors?</p>
          <p>
            Can you make the scales of the 22nd iteration tilt in your favour?
          </p>
        </div>
        <h2
          className={`mt-5 text-center text-4xl font-black uppercase tracking-wider ${RussoOne.className}`}
        >
          Event Heads
        </h2>
        <div
          className={`${InterFont.className} m-5 flex flex-col gap-y-10 text-center text-lg font-semibold`}
        >
          <div
            className={
              "flex flex-col items-center justify-center gap-x-40 gap-y-10 lg:flex-row lg:items-start"
            }
          >
            <div className={"flex flex-col items-center justify-center"}>
              <h2
                className={`text-2xl uppercase tracking-wide ${Elianto.className}`}
              >
                Harmony
              </h2>
              <p>Ashish S.</p>
              <p>Dhruv V. Nair</p>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              <h2
                className={`text-2xl uppercase tracking-wide ${Elianto.className}`}
              >
                Enquesta
              </h2>
              <p>Adithya Kishor</p>
              <p>Rohan Deepu Oomen</p>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              <h2
                className={`text-2xl uppercase tracking-wide ${Elianto.className}`}
              >
                Block N' Tangles
              </h2>
              <p>Suryakanth Krishnaprasad</p>
              <p>Joshua Suvy Manuel</p>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              <h2
                className={`text-2xl uppercase tracking-wide ${Elianto.className}`}
              >
                Dance O' Mania
              </h2>
              <p>Alvin Noble</p>
              <p>Sooraj J.U.</p>
            </div>
          </div>
          <div
            className={
              "flex flex-col items-center justify-center gap-x-40 gap-y-10 lg:flex-row lg:items-start"
            }
          >
            <div className={"flex flex-col items-center justify-center"}>
              <h2
                className={`text-2xl uppercase tracking-wide ${Elianto.className}`}
              >
                LA Persona
              </h2>
              <p>Viswajith G.</p>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              <h2
                className={`text-2xl uppercase tracking-wide ${Elianto.className}`}
              >
                L'Attire
              </h2>
              <p>Abin S. Manoj</p>
              <p>Joseph S. Mathew</p>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
              <h2
                className={`text-2xl uppercase tracking-wide ${Elianto.className}`}
              >
                L'Ebate
              </h2>
              <p>Goutham S Nair</p>
            </div>
          </div>
        </div>
        <h2
          className={`text-center text-4xl font-black uppercase tracking-wider ${RussoOne.className}`}
        >
          Media Team '23
        </h2>
        <div
          className={`${InterFont.className} flex flex-col items-center justify-center gap-y-5 text-center text-2xl font-bold`}
        >
          <div
            className={
              "flex flex-col items-center justify-center gap-x-40 gap-y-5 lg:flex-row"
            }
          >
            <div>Akshaj Deepak</div>
            <div>Abin S. Manoj</div>
            <div>Jithin Rajesh</div>
            <div>Abhishek G.S.</div>
          </div>
          <div
            className={
              "flex flex-col items-center justify-center gap-x-40 gap-y-5 lg:flex-row"
            }
          >
            <div>Kevin Salins</div>
            <div>Navneeth Krishna</div>
            <div>Georgy Mathew</div>
          </div>
        </div>
      </div>
    </div>
  );
}
