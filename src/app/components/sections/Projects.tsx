import Link from "next/link";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-4/5 flex flex-col gap-4">
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
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full aspect-video bg-slate-500/50 animate-pulse"></div>
          <div className="w-full aspect-video bg-slate-500/50 animate-pulse"></div>
          <div className="w-full aspect-video bg-slate-500/50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
