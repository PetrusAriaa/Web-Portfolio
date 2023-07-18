import {SiJavascript, SiTypescript,
        SiPython} from "react-icons/si";
import { LanguageBadge } from "../ui/LanguageBadge";

export const About = () => {
  return(
    <section id="about" className="flex flex-col justify-center text-myWhite font-semibold">
      <div className="space-y-4">
        <h1 className="text-myBlue1 text-5xl">Backstory</h1>
        <h1 className="text-myWhite font-normal text-lg">{"Petrus Aria is an Information Engineering student from Indonesia. He started his journey on Web Development from college. He has an interest on Cloud Computing. Watch out! He can turn into avocado anytime."}</h1>
      </div>
      <div className="flex flex-row justify-between mt-24">
      <div>
        <ul className="grid grid-cols-3 text-center gap-x-4 gap-y-4">
          <li> <LanguageBadge color={'bg-[#EFD81D] text-myBlack'} icon={<SiJavascript size={20}/>}>Javascript</LanguageBadge></li>
          <li> <LanguageBadge color={'bg-[#2F74C0] text-myBlack'} icon={<SiTypescript size={20}/>}>Typescript</LanguageBadge></li>
          <li> <LanguageBadge color={'bg-[#366C9C] text-myBlack'} icon={<SiPython size={20}/>}>Python</LanguageBadge></li>
        </ul>
      </div>
      <h1>.</h1>
      </div>
    </section>
  )
}