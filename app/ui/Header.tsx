import Link from "next/link";

export default function Header() {
     return (
         <div className={"w-screen p-5 flex flex-row items-center font-semibold tracking-wide antialiased"}>
              <Link href={'/'} className={"header text-3xl"}>
                   LA FEST
              </Link>
             <div className={"flex flex-row absolute right-0 p-5 gap-x-10 text-lg"}>
                 <Link href={'../legacy'}>LEGACY</Link>
                 <Link href={'../events'}>EVENTS</Link>
                 <Link href={'../rules'}>RULES</Link>
                 <Link href={'../about-us'}>ABOUT US</Link>
             </div>
         </div>
     )
}