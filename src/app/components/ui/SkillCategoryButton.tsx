"use client";

import {useEffect, useState, FC, HTMLAttributes} from "react";

interface SkillCategoryButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  activeSwiper: number;
  buttonIndex: number;
}

const SkillCategoryButton: FC<SkillCategoryButtonProps> = ({
  title,
  buttonIndex,
  activeSwiper,
  ...props
}) => {
  const [openShader, setOpenShader] = useState<boolean>(false);
  useEffect(() => {
    setOpenShader(buttonIndex === activeSwiper);
  }, [activeSwiper, buttonIndex]);
  return (
    <button
      className={
        "hover:text-myBlue1 transition-colors text-sm relative p-2 flex items-center justify-center border-b-2 border-transparent hover:border-myBlue1 " +
        (openShader ? "border-myBlue1 text-myBlue1" : "text-myWhite")
      }
      onClick={props.onClick}
    >
      <div className="relative">{title}</div>
      <div
        className={
          "absolute w-full duration-200 ease-in-out bg-gradient-to-b from-myBlue1/50 to-transparent top-0 rounded-t-lg " +
          (openShader ? "h-8" : "h-0")
        }
      ></div>
      <div
        className={
          "absolute w-full blur-sm duration-200 ease-in-out bg-gradient-to-b from-myBlue1/50 to-transparent top-0 rounded-t-sm " +
          (openShader ? "h-8" : "h-0")
        }
      ></div>
    </button>
  );
};

export default SkillCategoryButton;
