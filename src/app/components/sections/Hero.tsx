"use client";
import Image from "next/image";
import {useParallax} from "react-scroll-parallax";
import {FiArrowDown} from "react-icons/fi";
import {scroller} from "react-scroll";

import Avatar from "../../../../public/assets/Me.svg";
import Lightning1 from "../../../../public/assets/Lightning1.svg";
import Lightning2 from "../../../../public/assets/Lightning2.svg";
import Lightning3 from "../../../../public/assets/Lightning3.svg";
import Boulder from "../../../../public/assets/Border.svg";

const ScrollButton = () => {
  const handleScroll = () =>
    scroller.scrollTo("about", {
      duration: 1500,
      delay: 100,
      smooth: "easeInOut",
      offset: -110,
    });
  return (
    <section className="flex relative z-[49]">
      <button
        onClick={handleScroll}
        className="m-auto animate-bounce bg-slate-400/50 p-3 rounded-full"
      >
        <FiArrowDown size={30} />
      </button>
    </section>
  );
};

export const Hero = () => {
  const avatar = useParallax<HTMLImageElement>({
    translateY: ["-60px", "100px"],
  });
  const lightning1 = useParallax<HTMLImageElement>({
    translateY: ["180px", "-80px"],
    translateX: ["-10px", "10px"],
    scale: [1, 1.25],
  });
  const lightning2 = useParallax<HTMLImageElement>({
    translateX: ["-60px", "100px"],
    scale: [1, 1.1],
  });
  const lightning3 = useParallax<HTMLImageElement>({
    translateX: ["60px", "-100px"],
    scale: [1, 1.6],
  });
  return (
    <section
      about="jumbotron"
      className="relative overflow-hidden z-[10] py-56 md:py-72 flex flex-col items-center justify-center text-myWhite font-semibold min-h-screen w-full"
    >
      <Image
        ref={avatar.ref}
        src={Avatar}
        alt="My Avatar"
        className="absolute w-screen bottom-0"
      />
      <Image
        ref={lightning1.ref}
        src={Lightning1}
        alt="lightning1"
        className="absolute z-[43] bottom-0"
      />
      <Image
        ref={lightning2.ref}
        src={Lightning2}
        alt="lightning2"
        className="absolute z-[42] w-screen bottom-0"
      />
      <Image
        ref={lightning3.ref}
        src={Lightning3}
        alt="lightning3"
        className="absolute z-[41] w-screen bottom-0"
      />
      <Image
        src={Boulder}
        alt="boulder"
        className="absolute z-40 w-screen bottom-0"
      />
      <div className="z-[47] w-2/3 flex flex-col justify-center items-center absolute">
        <div className="flex flex-col gap-8 relative">
          <div>
            <h1 className="text-3xl md:text-5xl">Hi, traveller</h1>
            <h1 className="text-myBlue1 font-bold text-5xl md:text-7xl">
              {"I'm Petrus Aria"}
            </h1>
            <h1 className="text-3xl md:text-5xl">
              {"and I'm a Website Developer"}
            </h1>
          </div>

          <ScrollButton />
          <div className="w-full h-0 sm:h-16 md:h-56"></div>
        </div>
      </div>
      <div className=" w-full h-24 bg-gradient-to-t from-myBlack to-transparent absolute bottom-0 z-[50]"></div>
    </section>
  );
};
