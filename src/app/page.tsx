import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Hero } from "./components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-myBlack scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  )
}
