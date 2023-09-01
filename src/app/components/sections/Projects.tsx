import Link from "next/link";
import {ProjectCard} from "../ui/ProjectCard";

import PocketBase from "pocketbase";
import {useEffect} from "react";

export const Projects = () => {
  const pb = new PocketBase("https://mashed-potato.pockethost.io");

  const getProjectsData = async () => {
    const res = await pb.collection("projects").getFullList();

    console.log(res);
  };

  useEffect(() => {
    getProjectsData();
  }, []);
  return (
    <section
      id="projects"
      className="w-full min-h-[50rem] flex flex-col items-center justify-center pb-20"
    >
      <div className="w-4/5 md:max-w-[75rem] flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-myBlue1 text-3xl font-semibold md:text-5xl">
            Recent Works
          </h1>
          <h1 className="text-myWhite font-normal text-sm md:text-base lg:text-lg">
            As a blacksmith, these are his projects
          </h1>
        </div>
        <div className="flex flex-row justify-end">
          <Link href={"/"}>
            <button className="bg-myBlue1 px-5 py-1 rounded-md text-sm font-medium select-none">
              More
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProjectCard
            img="/projects/Screenshot from 2023-08-28 20-54-10.png"
            title="PPSMB Kesatria 2023"
            desc="PPSMB Kesatria adventure – a project where I proudly put on my web developer cape! Picture this: a journey filled with lines of code, pixels coming to life, and a sprinkle of tech wizardry. As the web developer of 'PPSMB Kesatria,' I was like a modern-day digital bard, crafting an interactive symphony for users to dance through."
            stack={["aaa"]}
          />
          <ProjectCard
            img="/projects/Screenshot from 2023-08-28 20-54-10.png"
            title="PPSMB Kesatria 2023"
            desc="PPSMB Kesatria adventure – a project where I proudly put on my web developer cape! Picture this: a journey filled with lines of code, pixels coming to life, and a sprinkle of tech wizardry. As the web developer of 'PPSMB Kesatria,' I was like a modern-day digital bard, crafting an interactive symphony for users to dance through."
            stack={["aaa"]}
          />
          <ProjectCard
            img="/projects/Screenshot from 2023-08-28 20-54-10.png"
            title="PPSMB Kesatria 2023"
            desc="PPSMB Kesatria adventure – a project where I proudly put on my web developer cape! Picture this: a journey filled with lines of code, pixels coming to life, and a sprinkle of tech wizardry. As the web developer of 'PPSMB Kesatria,' I was like a modern-day digital bard, crafting an interactive symphony for users to dance through."
            stack={["aaa"]}
          />
        </div>
      </div>
    </section>
  );
};
