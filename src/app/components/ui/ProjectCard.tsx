"use client";

import Image from "next/image";
import {FC} from "react";
import Link from "next/link";
import {useState} from "react";

interface projectCard {
  img: string;
  title: string;
  desc: string;
  stack: Array<string>;
}

export const ProjectCard: FC<projectCard> = ({
  img,
  title,
  desc,
  stack,
  ...props
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Link
      href="/"
      className="p-4 flex flex-col min-h-[20rem] md:min-h-[25rem] gap-8 hover:bg-myWhite/5 transition-colors duration-500"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={img}
          alt=""
          fill
          className={
            "object-contain transition-transform duration-500 " +
            (isHover ? "scale-110" : "scale-100")
          }
        />
      </div>
      <div>
        <h1 className="text-myWhite text-lg md:text-2xl font-semibold">
          {title}
        </h1>
        <p className="text-myWhite/30 line-clamp-2 md:line-clamp-3">{desc}</p>
        <div className="flex justify-end py-4">
          <button className="text-myBlue1 hover:underline">Inspect</button>
        </div>
      </div>
    </Link>
  );
};
