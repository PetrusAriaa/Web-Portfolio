import Image from "next/image"
import {FiArrowDown} from "react-icons/fi";

export const Hero = () => {
  return (
    <section about="jumbotron" className="flex flex-col justify-center text-myWhite font-semibold text-5xl pb-56">
      <Image src='/assets/Me.svg' alt='border' width={9000} height={1} className="absolute float-right "/>
      <Image src='/assets/Lightning1.svg' alt='border' width={5000} height={9} className="absolute z-[43] w-screen"/>
      <Image src='/assets/Lightning2.svg' alt='border' width={9000} height={9} className="absolute z-[42] w-screen"/>
      <Image src='/assets/Lightning3.svg' alt='border' width={9000} height={9} className="absolute z-[41] w-screen"/>
      <Image src='/assets/Border.svg' alt='border' width={100} height={9} className="absolute z-40 w-screen"/>
      <div className="pt-36 pb-24 px-10 md:px-36 lg:px-64 z-[47]">
        <h1 className="">Hi, traveller</h1>
        <h1 className="text-myBlue1 font-bold text-7xl">{"I\'m Petrus Aria"}</h1>
        <h1 className="">{"and I\'m a Website Developer"}</h1>
        <div className="flex mt-36">
          <button className="m-auto bg-slate-400/50 p-3 rounded-full"><FiArrowDown size={30}/></button>
        </div>
      </div>
    </section>
  )
}