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
    <div className="flex flex-col gap-4">
      <div
        about="navigation"
        className="flex flex-row gap-2 md:gap-4 lg:gap-6 justify-center md:justify-left overflow-x-clip min-w-fit max-w-[40rem]"
      >
        <SkillCategoryButton
          onClick={() => {
            setActiveSwiper(0);
            swiper.slideTo(0);
          }}
          activeSwiper={activeSwiper}
          buttonIndex={0}
          title="Languages"
        />
        <SkillCategoryButton
          onClick={() => {
            setActiveSwiper(1);
            swiper.slideTo(1);
          }}
          activeSwiper={activeSwiper}
          buttonIndex={1}
          title="Fronted"
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
        <SkillCategoryButton
          onClick={() => {
            setActiveSwiper(3);
            swiper.slideTo(3);
          }}
          activeSwiper={activeSwiper}
          buttonIndex={3}
          title="Tools"
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
        className="h-unit-6xl max-w-[30rem] md:max-w-[25rem] bg-red-500/25 lg:max-w-[40rem]"
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
        <SwiperSlide>
          <SwiperContent category="Tools" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SkillSet;
