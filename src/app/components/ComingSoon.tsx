import Image from "next/image";
import Working from "../../../public/assets/Working.svg";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="bg-myBlack py-20 w-full min-h-screen flex overflow-hidden flex-col justify-center items-center">
      <div className="w-4/5 md:min-w-[75rem] flex flex-col items-center gap-8">
        <h1 className="text-myWhite font-semibold text-3xl text-center">
          {"I'm still working on this page ..."}
        </h1>
        <div className="relative min-h-[25rem] min-w-[20rem] md:min-w-[75rem] object-contain">
          <Image src={Working} fill alt="working avocado" />
        </div>
        <Link href={"/"}>
          <button className="px-5 py-2.5 bg-myBlue1 text-myBlack rounded-md active:scale-95">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
