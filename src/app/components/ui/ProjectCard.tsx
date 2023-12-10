import {FC, HTMLAttributes} from "react";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

export interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  img: string;
  title: string;
  desc: string;
  flexJustify: string;
  offset: string;
  projectLink: string;
  stack: Array<string>;
}

export const ProjectCard: FC<ProjectCardProps> = ({img, title, ...props}) => {
  return (
    <div className={"flex flex-row w-full " + props.className}>
      <Tilt
        style={{
          transformStyle: "preserve-3d",
        }}
        tiltMaxAngleX={15}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
          }}
          className={
            "py-4 w-min bg-transparent flex flex-row items-top cursor-pointer "
          }
        >
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(51px)",
            }}
            className="rounded-2xl w-full h-full absolute z-[4]"
          />
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(50px)",
            }}
            className="w-[10rem] pt-10 z-[2] absolute p-3"
          >
            <h4 className="font-semibold text-xl text-myWhite">{title}</h4>
          </div>
          <div
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(10px)",
            }}
            className="bg-myBlack/50 h-56 blur-2xl aspect-square rounded-r-full absolute z-[1] -ml-16"
          />
          <div
            style={{
              transformStyle: "preserve-3d",
            }}
            className="py-2 relative z-[0] ml-16 w-[256px] h-[144px] md:w-[448px] md:h-[252px]"
          >
            <Image
              onLoad={() => <div className="bg-slate-200 animate-pulse"></div>}
              width={16 * 28}
              height={9 * 28}
              alt="project image"
              className="object-cover bg-slate-200"
              src={img}
            />
          </div>
        </div>
      </Tilt>
    </div>
  );
};
