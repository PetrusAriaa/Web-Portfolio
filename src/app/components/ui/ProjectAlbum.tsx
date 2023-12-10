import {ProjectCard} from "./ProjectCard";

// TODO: Conditionally render album for mobile and desktop device
const ProjectAlbum = () => {
  return (
    <div className="mt-10 relative">
      <ProjectCard
        img="/projects/Screenshot from 2023-08-28 20-54-10.png"
        title="PPSMB Kesatria 2023"
        desc="PPSMB Kesatria adventure – a project where I proudly put on my web developer cape! Picture this: a journey filled with lines of code, pixels coming to life, and a sprinkle of tech wizardry. As the web developer of 'PPSMB Kesatria,' I was like a modern-day digital bard, crafting an interactive symphony for users to dance through."
        stack={["aaa"]}
        projectLink="https://ppsmb-ft.vercel.app/"
        flexJustify="justify-start"
        offset="z-[0]"
      />
      <ProjectCard
        img="/projects/Screenshot 2023-10-02 190111.png"
        title="Komunitas Profesi GKIPI"
        desc="Web Application for Komunitas Profesi GKIPI"
        stack={["aaa"]}
        projectLink="https://komunitasprofesigkipi.org/"
        flexJustify="justify-center"
        offset="-mt-16 ml-16 z-[1]"
        className="justify-start md:justify-end"
      />
    </div>
  );
};

export default ProjectAlbum;
