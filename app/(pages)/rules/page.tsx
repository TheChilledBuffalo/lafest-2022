import { Helvetica, RussoOne } from "@/components/fonts";

export default function Rules() {
  return (
    <div>
      <div className={`${RussoOne.className} flex justify-center p-5 text-3xl`}>
        General Rules
      </div>
      <div
        className={`${Helvetica.className} flex justify-center px-10 pb-10 text-xl`}
      >
        <ol className={"flex list-decimal flex-col gap-3"}>
          <li>
            Registration is free for all schools. All students above Std IX are
            eligible to participate. The reporting time is 7:30 am.
          </li>
          <li>A school is expected to participate in at least three events.</li>
          <li>A student can participate in a maximum of three events.</li>
          <li>Maximum number of non-participants from a school is 40.</li>
          <li>Two green rooms will be provided for each school.</li>
          <li>
            Food coupons will cost Rs.350. Booking of food coupons closes a day
            prior to the event. Cancellation is not possible.
          </li>
          <li>
            LA Fest badges will be distributed at the registration desk.
            Participants and non-participants have to display their badges
            throughout the event.
          </li>
          <li>
            Vulgarity or obscenity in language or actions will lead to
            disqualification.
          </li>
          <li>
            Completed forms should be submitted on or before 10 June 2022.
          </li>
          <li>Food and beverages will not be allowed in the Indoor Stadium.</li>
          <li>
            Participants are requested to cooperate with the organisers and
            maintain a spirit of healthy competition.
          </li>
          <li>
            All participants and non-participants should be in their respective
            school uniforms.
          </li>
          <li>Decision of the judges will be final.</li>
        </ol>
      </div>
    </div>
  );
}
