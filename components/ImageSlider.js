"use client";
import { useEffect, useRef } from "react";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let intervalId;
    const slider = sliderRef.current;

    const slideNext = () => {
      slider.style.transform = "translateX(-50%)";
    };

    const slideBack = () => {
      slider.style.transform = "translateX(0)";
    };

    const autoSlide = () => {
      intervalId = setInterval(() => {
        if (slider.style.transform === "translateX(0px)") {
          slideNext();
        } else {
          slideBack();
        }
      }, 8000);
    };

    autoSlide();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[555px] ">
      <div className="absolute w-full  -top-2 z-10  flex justify-end">
        <div className="h-3 w-[333px] bg-[#FDB002]"></div>
        <div className="h-3 w-[333px] bg-[#E4353D]"></div>
        <div className="h-3 w-[333px] bg-[#0B0332]"></div>
      </div>
      <div className="relative overflow-hidden rounded-tl-[100px] w-full h-[555px]">
        <div
          ref={sliderRef}
          className="flex transition-transform w-full h-full duration-500 ease-in-out"
          style={{ width: "200%", transform: "translateX(0)" }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("/imgs/Asset-2.png")' }}
          >
            <div className=" inset-0 bg-gradient-to-r h-full w-full  from-black to-transparent opacity-50 flex items-start p-24 justify-between flex-col">
              <h1 className="text-white text-4xl font-bold">Slide 1</h1>
              <h1 className="text-white text-4xl font-bold">Slide 1</h1>
            </div>
          </div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url("/imgs/Asset-1.png")' }}
          >
            <div className=" inset-0 bg-gradient-to-r h-full w-full from-black to-transparent opacity-50 flex flex-col p-24 items-start justify-between">
              <h1 className="text-white text-4xl font-bold">Slide 2</h1>
              <h1 className="text-white text-4xl font-bold">Slide 2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
