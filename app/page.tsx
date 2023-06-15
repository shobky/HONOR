import Caroucel from "@/components/caroucel";
import React from "react";

import slide1 from "@/public/pexels-amit-chowdhury-12905383.jpg";
import slide2 from "@/public/pexels-steve-johnson-1044989.jpg";
import slide3 from "@/public/pexels-merlin-lightpainting-14032494.jpg";
import Services from "@/components/services";
import About from "@/components/about";
import Founder from "@/components/founder";

export default function Home() {
  const slides = [
    {
      img: slide1,
      title: "We are PR architects, Debate shapers, and Solution finders.",
    },
    {
      img: slide2,
      title:
        "A global service specialist profile building & reputation managment PR agency.",
    },
    {
      img: slide3,
      title:
        "We give visionaries the chance to display their accomplishments seamlessly.",
    },
  ];
  return (
    <div className="bg-black ">
        {/* @ts-ignore server-component */}
        <Caroucel slides={slides} />
        <Services />
        <About />
        <Founder />
    </div>
  );
}
