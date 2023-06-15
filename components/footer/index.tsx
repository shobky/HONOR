import React from "react";
import Img1 from "@/public/footer/0x0.webp";
import Img2 from "@/public/footer/7EENTR3HFBMMRC3XV3PJAMVHCA-Copy.webp";
import Img3 from "@/public/footer/Klaus-Schwab.webp";
import Img4 from "@/public/footer/RYANLASH_TEDPBS_0780.webp";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-white ">
      <ul className="grid  md:flex  px-[5%] md:px-[10%] pt-[20%] pb-[10%] gap-6 md:gap-24 cursor-pointer justify-end ">
        <li className=" text-zinc-800 underline">
          {" "}
          <a href="#caroucel">back to top^</a>
        </li>
        <li className=" text-zinc-800 underline">
          {" "}
          <a href="#about">about us^</a>
        </li>
        <li className=" text-zinc-800 underline">
          {" "}
          <a href="#services">services^</a>
        </li>
        <li className=" text-zinc-800 underline"> clients^</li>
      </ul>
      <div className="flex">
        <div className="w-1/3 md:w-1/4  h-[15rem] md:h-[30rem] overflow-hidden">
          <Image
            className=" w-full h-full object-cover "
            width="500"
            height="500"
            alt=""
            src={Img1}
          />
        </div>
        <div className="w-1/3 md:w-1/4  h-[15rem] md:h-[30rem] overflow-hidden">
          <Image
            className=" w-full h-full object-cover "
            width="500"
            height="500"
            alt=""
            src={Img2}
          />
        </div>
        <div className="w-1/3 md:w-1/4  h-[15rem] md:h-[30rem] overflow-hidden">
          <Image
            className=" w-full h-full object-cover"
            width="500"
            height="500"
            alt=""
            src={Img3}
          />
        </div>
        <div className="w-1/4  h-[30rem] overflow-hidden hidden md:block">
          <Image
            className=" w-full h-full object-cover   "
            width="500"
            height="500"
            alt=""
            src={Img4}
          />
        </div>
      </div>
    </div>
  );
}
