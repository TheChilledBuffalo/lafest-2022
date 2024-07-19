import { Helvetica } from "@/app/ui/fonts";
import LegacyCard from "@/app/ui/LegacyCard";
import { Separator } from "@/components/ui/separator";

export default function Legacy() {
  return (
    <div
      className={`${Helvetica.className} mt-5 flex w-full flex-col justify-center p-5 text-center font-semibold`}
    >
      <div>
        In November 1996, Vivek Krishnan, Harish K., Rahul Warrier and their
        12th standard classmates pleaded with the class teacher:
        <br />
        "Madam, we need a break from the grind of textbooks and classes... let's
        organise an inter-school arts festival."
        <br />
        The idea gathered momentum among students. But somebody had to get the
        green signal from the Principal Fr. Mani Manimala.
        <br />
        One afternoon, as the school bell rang, the teacher surrounded by
        students egging her on told Fr. Mani,
        <br />
        'The students have been saying that they want to organise a festival for
        schools in the city.' The Principal, full of energy
        <br /> but looking stern as ever, replied,
        <br />
        'If you are ready to take full responsibility, go ahead.'
        <br />
        The students who overheard this were ecstatic.
        <br />
        The teacher who had bravely conveyed the proposal could not back out.
        <br />
        Her students would ensure that, year after year.
      </div>
      <Separator className={"my-10 w-2/3 self-center lg:w-2/5"} />
      <div className={"mb-10 flex h-full flex-col items-center gap-y-10"}>
        <LegacyCard
          bgClassName={"bg-[#aa9250]"}
          imagePath={"/prev_year_logos/2010.png"}
          imageDescription={"LA Fest 2010 Logo"}
          date={"July 3, 2010"}
          tagline={<div>Where Wars are Staged not Waged</div>}
          description={
            <div>
              Relive the day.
              <br />
              Relive the art.
              <br />
              Relive awesomeness.
              <br />
              Relive the art of waging wars on stage.
              <br />
              Relive LA Fest 2010, where there was life in every art.
              <br />
            </div>
          }
          winner={"Christ Nagar ISC emerges as the overall Champions."}
        />
        <LegacyCard
          bgClassName={"bg-[#19191b]"}
          imagePath={"/prev_year_logos/2011.jpg"}
          imageDescription={"LA Fest 2011 Logo"}
          date={"July 9, 2011"}
          tagline={<div>Your Tryst with 7th Heaven</div>}
          description={
            <div>
              16 years down the line, the legacy continues… <br />
              LA Fest the first ever inter-school fest still holds an enviable
              position even in the face of present day stiff competition.
            </div>
          }
          winner={"Holy Angels ISC emerges as the overall Champions."}
        />
        <LegacyCard
          bgClassName={"bg-[#494846]"}
          imagePath={"/prev_year_logos/2012.jpg"}
          imageDescription={"LA Fest 2012 Logo"}
          date={"June 30, 2012"}
          tagline={<div>Experience the Ethereal Aura of Seventeen</div>}
          description={
            <div>
              An idea to create something new...
              <br />
              Something that would change the face of humanity in Trivandrum…{" "}
              <br />
              An idea to bring Life and Arts together in an ethereal melting pot
              of talent…
              <br />
            </div>
          }
          winner={
            "At the end of the day, Holy Angels ISC emerges as the overall champions."
          }
        />
        <LegacyCard
          bgClassName={"bg-[#00121a]"}
          imagePath={"/prev_year_logos/2013.jpg"}
          imageDescription={"LA Fest 2013 Logo"}
          date={"June 29, 2013"}
          tagline={<div>Our Plot. Your Story.</div>}
          description={
            <div>
              The meticulous craftsmanship of 17 long years.
              <br />
              A fusillade of sheer ingenuity that tugs at your heartstrings and
              astounds with its aesthetic appeal.
              <br />
              We provide the plot. Unravel your story in our theatre of dreams.
            </div>
          }
          winner={"Holy Angels ISC retains the Nataraja once again."}
        />
        <LegacyCard
          bgClassName={"bg-[#ded3e1]"}
          imagePath={"/prev_year_logos/2014.jpg"}
          imageDescription={"LA Fest 2014 Logo"}
          date={"June 28, 2014 "}
          tagline={<div>A Million Stars. One Supernova.</div>}
          description={
            <div>
              Empires aren't built in a day but legacy is made in one.
              <br />
              A legacy of 18 has come to pass.
              <br />
              Now the stars are realigning.
              <br />
              Be a part of the supernova.
            </div>
          }
          winner={"Sarvodaya Vidyalaya emerges as the overall Champions."}
        />
        <LegacyCard
          bgClassName={"bg-[#2c2827]"}
          imagePath={"/prev_year_logos/2015.jpg"}
          imageDescription={"LA Fest 2015 Logo"}
          date={"June 20, 2015"}
          tagline={<div>Behold The 20th Dimension of The Elysium</div>}
          description={
            <div>
              As the heavens stand still and the gates to Arcadia open...
              <br />
              Experience the twentieth chapter of the eternal saga which
              celebrates the art of life.
            </div>
          }
          winner={"Saraswathi Vidyalaya emerges as the overall Champions."}
        />
        <LegacyCard
          bgClassName={"bg-[#b0b0b0]"}
          imagePath={"/prev_year_logos/2016.jpg"}
          imageDescription={"LA Fest 2016 Logo"}
          date={"June 25, 2016"}
          tagline={
            <div>
              2 Decades Of Legacy
              <br />1 Day For Legends
            </div>
          }
          description={
            <div>
              The prophecy written by the ancients two decades ago has come to
              pass.
              <br />
              The wheels of the celestial machinery have ever since been
              spinning…churning out champions.
              <br />
              It is time to inscribe your name in the hall of legends.
            </div>
          }
          winner={"Saraswathi Vidyalaya retains the Nataraja yet again."}
        />
      </div>
    </div>
  );
}
