"use client";

import {FC, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import SwiperContent from "./SwiperContent";
import SkillCategoryButton from "./SkillCategoryButton";
import {CATEGORIES} from "../sections/category";
import {Category} from "./SwiperContent";

interface CategorySelectorProps {
  onSwipe: (id: number) => Function;
  swiper: any;
  activeSwiper: number;
  categories: string[];
}

const categories = Object.values(CATEGORIES);

const CategorySelector: FC<CategorySelectorProps> = ({
  onSwipe,
  swiper,
  activeSwiper,
  categories,
}) => {
  return (
    <div
      about="navigation"
      className="flex flex-row gap-2 md:gap-4 lg:gap-6 justify-center lg:justify-start w-full"
    >
      {categories.map((category, index) => (
        <SkillCategoryButton
          key={index}
          onClick={() => {
            onSwipe(index);
            swiper.slideTo(index);
          }}
          activeSwiper={activeSwiper}
          buttonIndex={index}
          title={category}
        />
      ))}
    </div>
  );
};

const SkillSet = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeSwiper, setActiveSwiper] = useState<number>(0);
  return (
    <div className="flex flex-col gap-4 w-full">
      <CategorySelector
        onSwipe={() => setActiveSwiper}
        swiper={swiper}
        activeSwiper={activeSwiper}
        categories={Object.keys(CATEGORIES)}
      />

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
        {categories.map((cat: Category, index: number) => (
          <SwiperSlide key={index}>
            <SwiperContent key={index} category={cat} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillSet;
