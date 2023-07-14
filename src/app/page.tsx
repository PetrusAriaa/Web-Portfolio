import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import {FiArrowDown} from "react-icons/fi";
import {SiJavascript, SiTypescript,
        SiPython, SiExpress} from "react-icons/si";
import { LanguageBadge } from "./components/ui/LanguageBadge";


export default function Home() {
  return (
    <main className="bg-myBlack scroll-smooth">
      <Navbar />
      <section about="jumbotron" className="flex flex-col justify-center text-myWhite font-semibold text-5xl">
        <div className="pt-36 pb-24 px-10 md:px-36 lg:px-64">
          <h1 className="">Hi, traveller</h1>
          <h1 className="text-myBlue1 font-bold text-7xl">{"I\'m Petrus Aria"}</h1>
          <h1 className="">{"and I\'m a Website Developer."}</h1>
          <div className="flex mt-36">
            <button className="m-auto bg-slate-400/50 p-3 rounded-full"><FiArrowDown size={30}/></button>
          </div>
        </div>
      </section>
      <div className="px-10 md:px-36 lg:px-64">
        <section id="about" className="flex flex-col justify-center text-myWhite font-semibold py-24">
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
        <section id="projects" className="flex flex-col justify-center text-myWhite font-semibold py-24">
          <div className="space-y-4">
          <h1 className="text-myBlue1 text-5xl">Recent Works</h1>
          <h1 className="text-myWhite font-normal text-lg">{"As a blacksmith, these are his projects"}</h1>
          </div>
          <div className="flex flex-row justify-end">
            <button className="bg-myBlue1 px-6 py-1 rounded-lg">More</button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
