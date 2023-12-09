"use client";

import {FC, HTMLAttributes, useEffect, useState} from "react";

import {useMediaQuery} from "@chakra-ui/react";

import ProjectCardDesktop from "./ProjectCard.Desktop";

export interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  img: string;
  title: string;
  desc: string;
  flexJustify: string;
  offset: string;
  projectLink: string;
  stack: Array<string>;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  img,
  title,
  desc,
  stack,
  projectLink,
  flexJustify,
  offset,
}) => {
  return (
    <div>
      <div className="hidden md:block">
        <ProjectCardDesktop
          img={img}
          title={title}
          desc={desc}
          stack={stack}
          projectLink={projectLink}
          flexJustify={flexJustify}
          offset={offset}
        />
      </div>
      <div className="block md:hidden">haha</div>
    </div>
  );
};
