import Link from "next/link";

import {Navbar} from "@nextui-org/react";
import {scroller} from "react-scroll";

const handleScroll = (target: string) => {
  scroller.scrollTo(target, {
    duration: 1500,
    delay: 100,
    smooth: "easeInOut",
    offset: -110,
  });
};
const MediumNavbar = () => {
  return (
    <>
      <Navbar
        shouldHideOnScroll
        className="text-myWhite hidden md:flex justify-center bg-transparent md:bg-myBlack/80 backdrop-blur-0 md:backdrop-blur-sm border-0 md:border-b md:border-b-myWhite/25"
      >
        <ul className="w-full flex flex-row justify-center items-center py-4 px-78 space-x-24 text-lg font-medium">
          <li>
            <button
              onClick={() => handleScroll("hero")}
              className="hover:text-myBlue1"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-myBlue1"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className="hover:text-myBlue1"
            >
              Projects
            </button>
          </li>
          <li>
            <Link href={"/blog"}>
              <button className="hover:text-myBlue1">Blog</button>
            </Link>
          </li>
        </ul>
      </Navbar>
    </>
  );
};

export default MediumNavbar;
