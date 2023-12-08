"use client";

import {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import SwiperContent from "./SwiperContent";
import SkillCategoryButton from "./SkillCategoryButton";

const SkillSet = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeSwiper, setActiveSwiper] = useState<number>(0);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        about="navigation"
        className="flex flex-row gap-2 md:gap-4 lg:gap-6 justify-center lg:justify-start w-full"
      >
        <SkillCategoryButton
          onClick={() => {
            setActiveSwiper(0);
            swiper.slideTo(0);
          }}
          activeSwiper={activeSwiper}
          buttonIndex={0}
          title="Languages & Tools"
        />
        <SkillCategoryButton
          onClick={() => {
            setActiveSwiper(1);
            swiper.slideTo(1);
          }}
          activeSwiper={activeSwiper}
          buttonIndex={1}
          title="Frontend"
        />
        <SkillCategoryButton
          onClick={() => {
            setActiveSwiper(2);
            swiper.slideTo(2);
          }}
          activeSwiper={activeSwiper}
          buttonIndex={2}
          title="Backend"
        />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor
        autoplay
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {
          setActiveSwiper(swiper.activeIndex);
        }}
        style={{width: "100%", height: "20rem"}}
        className="bg-myBlack/50 rounded-md"
      >
        <SwiperSlide>
          <SwiperContent category="Languages" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent category="Frontend" />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperContent category="Backend" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SkillSet;
