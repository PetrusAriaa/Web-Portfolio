"use client";

import {LanguageBadge} from "../ui/LanguageBadge";
import {useState} from "react";
import {category} from "./category";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Me2 from "../../../../public/assets/Me2.svg";

export const About = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeSwiper, setActiveSwiper] = useState(0);
  return (
    <section
      id="about"
      className="relative py-20 -mt-2 md:py-10 lg:py-0 lg:mt-0 z-[20] bg-myBlack flex flex-col items-center justify-center min-h-screen"
    >
      <div className="w-4/5 flex flex-col gap-5 lg:gap-4 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-myBlue1 text-3xl font-semibold md:text-5xl">
            Backstory
          </h1>
          <h1 className="text-myWhite font-normal text-sm md:text-base lg:text-lg">
            Petrus Aria is an Information Engineering student from Indonesia. He
            started his journey on Web Development from college. He has an
            interest on Cloud Computing. Watch out! He can turn into avocado
            anytime.
          </h1>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 lg:h-[60vh]">
          {/* Swiper */}
          <div className="w-full md:w-2/3 flex flex-col gap-6 lg:gap-10">
            <div className="flex flex-row justify-center md:justify-start gap-4 lg:gap-8">
              <div
                onClick={() => {
                  setActiveSwiper(0);
                  swiper.slideTo(0);
                }}
                className={
                  `cursor-pointer text-xs sm:text-sm select-none transition-colors duration-200 font-medium py-1 flex flex-col gap-2 after:h-[2px] after:bg-myBlue1 after:transition-transform hover:text-myBlue1 ` +
                  (activeSwiper === 0
                    ? "after:scale-x-100 text-myBlue1"
                    : "after:scale-x-0 text-myWhite")
                }
              >
                Languages
              </div>
              <div
                onClick={() => {
                  setActiveSwiper(1);
                  swiper.slideTo(1);
                }}
                className={
                  `cursor-pointer text-xs sm:text-sm select-none transition-colors duration-200 font-medium py-1 flex flex-col gap-2 after:h-[2px] after:bg-myBlue1 after:transition-transform hover:text-myBlue1 ` +
                  (activeSwiper === 1
                    ? "after:scale-x-100 text-myBlue1"
                    : "after:scale-x-0 text-myWhite")
                }
              >
                Frontend
              </div>
              <div
                onClick={() => {
                  setActiveSwiper(2);
                  swiper.slideTo(2);
                }}
                className={
                  `cursor-pointer text-xs sm:text-sm select-none transition-colors duration-200 font-medium py-1 flex flex-col gap-2 after:h-[2px] after:bg-myBlue1 after:transition-transform hover:text-myBlue1 ` +
                  (activeSwiper === 2
                    ? "after:scale-x-100 text-myBlue1"
                    : "after:scale-x-0 text-myWhite")
                }
              >
                Backend
              </div>
              <div
                onClick={() => {
                  setActiveSwiper(3);
                  swiper.slideTo(3);
                }}
                className={
                  `cursor-pointer text-xs sm:text-sm select-none transition-colors duration-200 font-medium py-1 flex flex-col gap-2 after:h-[2px] after:bg-myBlue1 after:transition-transform hover:text-myBlue1 ` +
                  (activeSwiper === 3
                    ? "after:scale-x-100 text-myBlue1"
                    : "after:scale-x-0 text-myWhite")
                }
              >
                Tools
              </div>
            </div>
            <div className="h-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={100}
                className="!overflow-y-visible h-full"
                grabCursor
                onSwiper={setSwiper}
                onSlideChange={(swiper) => setActiveSwiper(swiper.activeIndex)}
              >
                <SwiperSlide>
                  <div className="grid grid-cols-3 text-center gap-2 md:gap-y-4 md:gap-x-5 lg:gap-y-8 lg:gap-x-10">
                    {category.Languages.map((item, index) => {
                      return (
                        <LanguageBadge
                          key={index}
                          color={
                            item.color ? item.color : "bg-myWhite text-myBlack"
                          }
                          icon={item.icon}
                        >
                          {item.title}
                        </LanguageBadge>
                      );
                    })}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-3 text-center gap-2 md:gap-y-4 md:gap-x-5 lg:gap-y-8 lg:gap-x-10">
                    {category.Frontend.map((item, index) => {
                      return (
                        <LanguageBadge
                          key={index}
                          color={
                            item.color ? item.color : "bg-myWhite text-myBlack"
                          }
                          icon={item.icon}
                        >
                          {item.title}
                        </LanguageBadge>
                      );
                    })}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-3 text-center gap-2 md:gap-y-4 md:gap-x-5 lg:gap-y-8 lg:gap-x-10">
                    {category.Backend.map((item, index) => {
                      return (
                        <LanguageBadge
                          key={index}
                          color={
                            item.color ? item.color : "bg-myWhite text-myBlack"
                          }
                          icon={item.icon}
                        >
                          {item.title}
                        </LanguageBadge>
                      );
                    })}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="grid grid-cols-3 text-center gap-2 md:gap-y-4 md:gap-x-5 lg:gap-y-8 lg:gap-x-10">
                    {category.Tools.map((item, index) => {
                      return (
                        <LanguageBadge
                          key={index}
                          color={
                            item.color ? item.color : "bg-myWhite text-myBlack"
                          }
                          icon={item.icon}
                        >
                          {item.title}
                        </LanguageBadge>
                      );
                    })}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center w-full h-44 md:h-64">
            <Image src={Me2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
