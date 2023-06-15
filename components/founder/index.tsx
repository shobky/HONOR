import Image from "next/image";
import React from "react";
import sharon from "@/public/sharon.webp";

export default function Founder() {
  return (
    <div className="bg-white text-black  px-[5%] md:px-[10%] py-[10%]  ">
      <p className="text-2xl font-light opacity-80 "> MEET OUR FOUNDER</p>
      <div className="md:flex md:gap-12 items-end justify-between">
        <p className="text-2xl font-light mt-8 md:w-[55%]">
          <Image
            src={sharon}
            width="900"
            height="900"
            alt="Sharon Ezzeldin.(Founder of honor)"
            className=" block md:hidden w-[100%]  mb-4 md:h-full founder-pic"
          />
          <span className="text-6xl">Sharon Ezzeldin </span> has been recognized
          as an expert in shaping modern leadership and has been working with a
          global cadre of high-level profiles through every phase of thought
          leadership, from developing to writing and producing. She has spent 20
          years in corporate communications and public relations as a global
          media strategist, working with renowned organizations such as Sony,
          NBC News Group, Warner Bros Discovery, the New York Times, Newsweek,
          and the New Statesman.
        </p>
        <Image
          src={sharon}
          width="900"
          height="900"
          alt="Sharon Ezzeldin.(Founder of honor)"
          className=" hidden md:block w-[35%] md:h-[35%] founder-pic"
        />
      </div>
      <p className="text-2xl font-light mt-4  w-[100%]">
        Sharon has been a significant contributor to the growth of the
        communications industry in recent years. Her notable achievements
        include building News weeks first-ever global communications function in
        the U.K., leading a successful turnaround in Europe, and enhancing the
        publications credibility and profile. She is renowned for her expertise
        in setting ground-level communications practices and has received
        multiple awards for her outstanding work with publishers and broadcast
        networks internationally.
      </p>
    </div>
  );
}
