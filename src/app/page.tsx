import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-myBlack scroll-smooth">
      <Navbar />
      <section about="jumbotron" className="flex flex-col justify-center text-myWhite font-semibold text-5xl">
        <div className="pt-36 pb-24 px-10 md:px-36 lg:px-64 border">
          <h1 className="">Hi, traveller</h1>
          <h1 className="text-myBlue1 font-bold text-7xl">{"I\'m Petrus Aria"}</h1>
          <h1 className="">{"and I\'m a Website Developer."}</h1>
          <div className="flex mt-36">
            <button className="m-auto bg-slate-400/50 px-5 py-2.5 rounded-full">V</button>
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
                <li className="bg-myWhite/25 px-8 rounded-md">HTML</li>
                <li className="bg-myWhite/25 px-8 rounded-md">CSS</li>
                <li className="bg-myWhite/25 px-8 rounded-md">Javascript</li>
                <li className="bg-myWhite/25 px-8 rounded-md">React</li>
                <li className="bg-myWhite/25 px-8 rounded-md">Next</li>
                <li className="bg-myWhite/25 px-8 rounded-md">Express</li>
                <li className="bg-myWhite/25 px-8 rounded-md">Python</li>
                <li className="bg-myWhite/25 px-8 rounded-md">Flask</li>
                <li className="bg-myWhite/25 px-8 rounded-md">Tailwind</li>
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
