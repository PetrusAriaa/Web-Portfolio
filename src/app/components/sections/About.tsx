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
            <ul className="flex flex-row gap-8">
              <li onClick={()=>setCurrCategory(category.Languages)} className="cursor-pointer font-medium py-1">Languages</li>
              <li onClick={()=>setCurrCategory(category.Frontend)} className="cursor-pointer font-medium py-1">Frontend</li>
              <li onClick={()=>setCurrCategory(category.Backend)}  className="cursor-pointer font-medium py-1">Backend</li>
              <li onClick={()=>setCurrCategory(category.Tools)} className="cursor-pointer font-medium py-1">Tools</li>
            </ul>
            <div className="">
              <Swiper
                slidesPerView={1}
                spaceBetween={100}
                className="w-[90%] !overflow-y-visible"
                grabCursor
                onSwiper={setSwiper}
                onSlideChange={(swiper)=>console.log(swiper.activeIndex)}
              >
                <SwiperSlide>
                    <div className="grid grid-cols-3 text-center gap-y-8">
                      {category.Languages.map((item, index)=>{
                        return <LanguageBadge key={index} color={item.color ? item.color : "bg-myWhite text-myBlack"} icon={item.icon}>{item.title}</LanguageBadge>
                      })}
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
