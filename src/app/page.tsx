import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-slate-800">
      <Navbar />
      <div className="px-10 md:px-36 lg:px-64">
      <section about="jumbotron" className="flex flex-col justify-center text-myWhite font-semibold text-5xl pt-36 pb-24">
        <h1 className="">Hi, traveller</h1>
        <h1 className="text-myBlue1 font-bold text-7xl">{"I\'m Petrus Aria"}</h1>
        <h1 className="">{"and I\'m a Website Developer."}</h1>
        <div className="flex mt-36">
          <button className="m-auto bg-slate-400/50 px-5 py-2.5 rounded-full">V</button>
        </div>
      </section>
      </div>
    </main>
  )
}
