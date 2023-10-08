import Link from "next/link";
import {MobileDrawer} from "./MobileDrawer";

export const Navbar = () => {
  return (
    <>
      <nav className="text-myWhite top-0 z-[999] sticky bg-transparent md:bg-myBlack/50 backdrop-blur-0 md:backdrop-blur-sm border-0 md:border-b md:border-b-myWhite/25">
        <ul className="hidden md:flex flex-row justify-center items-center py-4 px-78 space-x-24 text-lg font-medium">
          <li>
            <Link href={"/"}>
              <button className="hover:text-myBlue1">About</button>
            </Link>
          </li>
          <li>
            <Link href={"/projects"}>
              <button className="hover:text-myBlue1">Projects</button>
            </Link>
          </li>
          <li>
            <Link href={"/knowme"}>
              <button className="hover:text-myBlue1">Know Me</button>
            </Link>
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
