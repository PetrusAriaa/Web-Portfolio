import Image from "next/image"
import {FiArrowDown} from "react-icons/fi";
import Avatar from "../../../../public/assets/Me.svg"
import Lightning1 from "../../../../public/assets/Lightning1.svg"
import Lightning2 from "../../../../public/assets/Lightning2.svg"
import Lightning3 from "../../../../public/assets/Lightning3.svg"
import Boulder from "../../../../public/assets/Border.svg"

export const Hero = () => {
  return (
    <section about="jumbotron" className="flex flex-col items-center justify-center text-myWhite font-semibold text-5xl min-h-screen w-full bg-red-500/25">
      <Image src={Avatar} alt="My Avatar" className="absolute w-screen"/>
      <Image src={Lightning1} alt="lightning1" className="absolute z-[43] w-screen"/>
      <Image src={Lightning2} alt="lightning2" className="absolute z-[42] w-screen"/>
      <Image src={Lightning3} alt="lightning3" className="absolute z-[41] w-screen"/>
      <Image src={Boulder} alt="boulder" className="absolute z-40 w-screen"/>
      <div className="z-[47] bg-red-500/25 w-2/3 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="">Hi, traveller</h1>
            <h1 className="text-myBlue1 font-bold text-7xl">{"I\'m Petrus Aria"}</h1>
            <h1 className="">{"and I\'m a Website Developer"}</h1>
          </div>
          <div className="flex">
            <button className="m-auto bg-slate-400/50 p-3 rounded-full"><FiArrowDown size={30}/></button>
          </div>
        </div>
      </div>
    </section>
  )
}