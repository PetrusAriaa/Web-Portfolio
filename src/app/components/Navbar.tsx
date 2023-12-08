import Link from "next/link";

import {scroller} from "react-scroll";
import {MobileDrawer} from "./MobileDrawer";

const handleScroll = (target: string) => {
  scroller.scrollTo(target, {
    duration: 1500,
    delay: 100,
    smooth: "easeInOut",
    offset: -110,
  });
};

export const Navbar = () => {
  return (
    <>
      <nav className="text-myWhite top-0 z-[999] sticky bg-transparent md:bg-myBlack/50 backdrop-blur-0 md:backdrop-blur-sm border-0 md:border-b md:border-b-myWhite/25">
        <ul className="hidden md:flex flex-row justify-center items-center py-4 px-78 space-x-24 text-lg font-medium">
          <li>
            <button
              onClick={() => handleScroll("hero")}
              className="hover:text-myBlue1"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-myBlue1"
            >
              Know Me
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
      </nav>
      <nav className="bottom-10 right-5 fixed z-[999] md:hidden">
        <MobileDrawer />
      </nav>
    </>
  );
};
