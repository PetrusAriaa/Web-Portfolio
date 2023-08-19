export const  Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen flex flex-col justify-center text-myWhite font-semibold bg-amber-500/25">
      <div className="space-y-4">
        <h1 className="text-myBlue1 text-5xl">Recent Works</h1>
        <h1 className="text-myWhite font-normal text-lg">{"As a blacksmith, these are his projects"}</h1>
      </div>
      <div className="flex flex-row justify-end">
        <button className="bg-myBlue1 px-6 py-1 rounded-lg">More</button>
      </div>
    </section>
  )
}