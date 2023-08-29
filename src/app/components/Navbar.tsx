import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="text-myWhite top-0 z-[999] sticky bg-myBlack/50 backdrop-blur-sm border-b border-b-myWhite/25">
      <ul className="hidden md:flex flex-row justify-center items-center py-4 px-78 space-x-24 text-lg font-medium">
        <li>
          <Link href={"/about"}>
            <button className="hover:text-myBlue1">About</button>
          </Link>
        </li>
        <li>
          <Link href={"/projects"}>
            <button className="hover:text-myBlue1">Projects</button>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <button className="hover:text-myBlue1">Contact</button>
          </Link>
        </li>
        <li>
          <Link href={"/blog"}>
            <button className="hover:text-myBlue1">Blog</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
