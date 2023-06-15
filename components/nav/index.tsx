import React from "react";

export default function Nav() {
  return (
    <div className="absolute mx-[10%] top-0 z-20 w-[50%] md:w-fit box-border">
      <h1 className="bg-white text-2xl p-8 font-medium "> Honor</h1>
      <ul className="flex gap-14 md:gap-28 text-white py-10 md:p-10 text-xs ">
        <li className=" cursor-pointer "><a href="#services">SERVICES</a></li>
        <li className=" cursor-pointer"><a href="#about">ABOUT US</a></li>
      </ul>
    </div>
  );
}
