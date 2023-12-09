import ProjectAlbum from "../ui/ProjectAlbum";

export const Projects = () => {
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
        <ProjectAlbum />
      </div>
    </section>
  );
};
