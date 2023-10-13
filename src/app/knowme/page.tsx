import Image from "next/image";
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";
import Profile from "../../../public/assets/Profile.png";

export default function KnowMe() {
  return (
    <div className="bg-myBlack">
      <Navbar />
      <main className="flex flex-col justify-center items-center">
        <div className="w-4/5 lg:w-3/5 md:max-w-[75rem] flex flex-col gap-16 md:gap-28 py-28">
          <div className="md:flex md:flex-row md:items-center">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h1 className="text-myBlue1 font-bold text-2xl md:text-5xl lg:text-7xl">
                Petrus Aria C Rambing
              </h1>
              <h2 className="text-myWhite font-semibold text-lg md:text-2xl lg:text-3xl">
                Web Developer
              </h2>
            </div>
            <div className="relative">
              <div className="relative aspect-square h-56 md:h-64 lg:h-96 m-auto md:m-0">
                <Image src={Profile} fill alt="profile-pict" priority />
              </div>
            </div>
          </div>
          <p className="text-myWhite">
            Hi! I&apos;m a <span className="text-myBlue1">Web Developer</span>{" "}
            with experience in developing Web Applications using{" "}
            <span className="text-myBlue1">NextJS</span> and
            <span className="text-myBlue1"> MERN</span> stack. I use NextJS or
            React for the front-end side while exploring much about the back-end
            side. <span className="text-myBlue1">ExpressJS</span> is one of my
            tools to do back-end stuff. <span className="text-myBlue1">Go</span>{" "}
            is another language I use to learn{" "}
            <span className="text-myBlue1">back-end</span>. I am still in my
            early stage in Go and excited to explore more.
            <br />
            <br />
            I&apos;m currently a student of{" "}
            <span className="text-myBlue1">
              Information Engineering at Universitas Gadjah Mada
            </span>
            , Indonesia. I learned a lot about IT things such as Web App
            Development, Networks, and Cloud. This is where things get more
            interesting.
            <br />
            <br /> I&apos;m eager to learn about{" "}
            <span className="text-myBlue1">Cloud Computing</span> and experiment
            with my projects. I also learned about back-end and cloud from
            courses. I joined a Student Activity named{" "}
            <span className="text-myBlue1">GAMAFORCE UGM</span> as a Software
            Programmer. We research Unmanned Aerial Vehicle (UAV) and Ground
            Control Station Systems. Our team successfully managed to get 1st
            place in Ground Control Station System research in KRTI 2023.
            <br />
            <br />I am a life-learner developer so I need to interact with
            another developer. I am good at{" "}
            <span className="text-myBlue1">teamwork and speaking</span> in
            public. I am looking for any opportunity where I can improve more of
            my skills and have an impact to others.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
