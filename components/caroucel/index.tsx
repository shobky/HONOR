"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination } from "swiper";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrows from "@/public/arrows.svg";

export default function Caroucel({ slides }: { slides: any[] }) {
  const [isHolding, setIsHolding] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (event: MouseEvent) => {
//     setPosition({
//       x: event.clientX - 35 + window.pageXOffset,
//       y: event.clientY - 35 + window.pageYOffset,
//     });
//   };
//   useEffect(() => {
//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };

  return (
    <div className="bg-black h-[120vh]" id="caroucel">
      {/* <Image
        src={arrows}
        alt=""
        className={` ${
          isHolding ? "opacity-0" : "cursor-grab"
        } absolute z-20 invert w-14 ease-in-out duration-75 pointer-events-none border opacity-90 border-black p-3 box-border rounded-full  select-none`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      /> */}
      <Swiper
        speed={300}
        parallax={true}
        // navigation={true}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        className={`mySwiper cursor-grab ${isHolding && "cursor-grabbing"}`}
        threshold={0}
        loop={true}
        effect="flip"
        modules={[Parallax, Pagination, handleMouseDown, handleMouseUp]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <span
              className={`w-full h-screen bg-black absolute left-0 top-0 z-10 opacity-30 ease-in-out duration-1000 ${
                isHolding && "h-[82%]"
              }`}
            ></span>
            <div className="w-full h-screen overflow-hidden  ">
              <Image
                className={`live-photo w-full h-screen object-cover z-10 ease-in-out duration-1000  ${
                  isHolding && "scale-[.7]"
                }`}
                src={slide.img}
                alt=""
              /> 
            </div>
            <h1
              className={` relative -top-[45vh] z-20 ml-[10%] slide-text  w-[85%]  text-white text-[2.3rem] md:text-[3.50rem] leading-none font-bold  select-none  pointer-events-none`}
              data-swiper-parallax="-500"
            >
              {slide.title}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
