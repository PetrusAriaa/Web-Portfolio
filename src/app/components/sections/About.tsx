"use client"

import {LanguageBadge} from "../ui/LanguageBadge";
import { useState } from "react";
import {category} from "./category"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const About = () => {
  const [currCategory, setCurrCategory] = useState(category.Languages)
  const [swiper, setSwiper] = useState<any>(null)
  const [activeSwiper, setActiveSwiper] = useState(0)
  return (
    <section
      id="about"
      className="relative z-[20] bg-myBlack flex flex-col items-center justify-center text-myWhite font-semibold min-h-screen"
    >
      <div className="w-4/5 flex flex-col gap-4 ">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-myBlue1 text-5xl">Backstory</h1>
          <h1 className="text-myWhite font-normal text-lg">
            Petrus Aria is an Information Engineering student from Indonesia. He
            started his journey on Web Development from college. He has an
            interest on Cloud Computing. Watch out! He can turn into avocado
            anytime.
          </h1>
        </div>
        <div className="flex flex-row justify-center gap-10 ">
          <div className="w-2/3 flex flex-col gap-10">
            <div className="flex flex-row gap-8">
              <div onClick={()=>{
                setActiveSwiper(0)
                swiper.slideTo(0)
                }}
                className={`cursor-pointer transition-colors duration-200 font-medium py-1 flex flex-col gap-2 after:h-[2px] after:bg-myBlue1 after:transition-transform hover:text-myBlue1 `+(
                  activeSwiper === 0 ? "after:scale-x-100 text-myBlue1" : "after:scale-x-0"
                )}>
                  Languages</div>
              <div onClick={()=>{
                setActiveSwiper(1)
                swiper.slideTo(1)
                }}
                className={`cursor-pointer transition-colors duration-200 font-medium py-1 flex flex-col gap-2 after:h-[2px] after:bg-myBlue1 after:transition-transform hover:text-myBlue1 `+(
                  activeSwiper === 1 ? "after:scale-x-100 text-myBlue1" : "after:scale-x-0"
                )}>
                  Frontend</div>
              <div onClick={()=>{
                setActiveSwiper(2)
                swiper.slideTo(2)
                }}
                className={`cursor-pointer transition-colors duration-200 font-medium py-1 flex flex-col gap-2 after:h-[2px] after:bg-myBlue1 after:transition-transform hover:text-myBlue1 `+(
                  activeSwiper === 2 ? "after:scale-x-100 text-myBlue1" : "after:scale-x-0"
                )}>
                  Backend</div>
              <div onClick={()=>{
                setActiveSwiper(3)
                swiper.slideTo(3)
                }}
                className={`cursor-pointer transition-colors duration-200 font-medium py-1 flex flex-col gap-2 after:h-[2px] after:bg-myBlue1 after:transition-transform hover:text-myBlue1 `+(
                  activeSwiper === 3 ? "after:scale-x-100 text-myBlue1" : "after:scale-x-0"
                )}>
                  Tools</div>
            </div>
            <div className="min-h-[20vw] bg-red-500/25">
              <Swiper
                slidesPerView={1}
                spaceBetween={100}
                className="w-[90%] !overflow-y-visible"
                grabCursor
                onSwiper={setSwiper}
                onSlideChange={(swiper)=>setActiveSwiper(swiper.activeIndex)}
              >
                <SwiperSlide>
                  <div className=" bg-red-500/25">
                    <div className="grid grid-cols-3 text-center gap-y-8">
                      {category.Languages.map((item, index)=>{
                        return <LanguageBadge key={index} color={item.color ? item.color : "bg-myWhite text-myBlack"} icon={item.icon}>{item.title}</LanguageBadge>
                      })}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div className="grid grid-cols-3 text-center gap-y-8">
                    {category.Frontend.map((item, index)=>{
                      return <LanguageBadge key={index} color={item.color ? item.color : "bg-myWhite text-myBlack"} icon={item.icon}>{item.title}</LanguageBadge>
                    })}
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div className="grid grid-cols-3 text-center gap-y-8">
                    {category.Backend.map((item, index)=>{
                      return <LanguageBadge key={index} color={item.color ? item.color : "bg-myWhite text-myBlack"} icon={item.icon}>{item.title}</LanguageBadge>
                    })}
                  </div>
                </SwiperSlide>
                <SwiperSlide >
                  <div className="grid grid-cols-3 text-center gap-4">
                    {category.Tools.map((item, index)=>{
                      return <LanguageBadge key={index} color={item.color ? item.color : "bg-myWhite text-myBlack"} icon={item.icon}>{item.title}</LanguageBadge>
                    })}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-3/5 flex justify-center">
            <div className="h-96 w-72 bg-slate-300/30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
