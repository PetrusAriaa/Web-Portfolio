import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiDocker,
  SiFigma,
  SiLinux,
  SiNginx,
} from "react-icons/si";

export const CATEGORIES = {
  "Languages & Tools": [
    {
      title: "HTML",
      icon: <SiHtml5 size={20} />,
      color: "bg-[#DD4B25] text-myWhite",
    },
    {
      title: "CSS",
      icon: <SiCss3 size={20} />,
      color: "bg-[#254BDD] text-myWhite",
    },
    {
      title: "Javascript",
      icon: <SiJavascript size={20} />,
      color: "bg-[#EFD81D] text-myBlack",
    },
    {
      title: "Typescript",
      icon: <SiTypescript size={20} />,
      color: "bg-[#2F74C0] text-myWhite",
    },
    {
      title: "Python",
      icon: <SiPython size={20} />,
      color: "bg-[#366C9C] text-myBlack",
    },
    {
      title: "Go",
      icon: <SiGo size={20} />,
      color: "bg-[#67D0DE] text-myWhite",
    },
    {
      title: "Linux",
      icon: <SiLinux />,
      color: "bg-myWhite text-myBlack",
    },
    {
      title: "Docker",
      icon: <SiDocker />,
      color: "bg-[#2391E6] text-myWhite",
    },
    {
      title: "Git",
      icon: <SiGit />,
      color: "bg-[#E84D31] text-myWhite",
    },
    {
      title: "Figma",
      icon: <SiFigma />,
      color: "bg-[#9D56F7] text-myBlack",
    },
  ],

  Frontend: [
    {
      title: "ReactJs",
      icon: <SiReact size={20} />,
      color: "bg-[#5ED3F3] text-myBlack",
    },
    {
      title: "NextJs",
      icon: <SiNextdotjs size={20} />,
      color: "bg-myWhite text-myBlack",
    },
    {
      title: "Tailwindcss",
      icon: <SiTailwindcss size={20} />,
      color: "bg-[#47A6AE] text-myBlack",
    },
  ],

  Backend: [
    {
      title: "NodeJs",
      icon: <SiNodedotjs />,
      color: "bg-[#6EA45F] text-myBlack",
    },
    {
      title: "Express",
      icon: <SiExpress />,
      color: "bg-myWhite text-myBlack",
    },
    {
      title: "Flask",
      icon: <SiFlask />,
      color: "bg-[#3BA9BF] text-myBlack",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />,
      color: "bg-[#08EE69] text-[#082532]",
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "bg-[#31648C] text-myWhite",
    },
    {
      title: "SQLite",
      icon: <SiSqlite />,
      color: "bg-myWhite text-[#31648C]",
    },
    {
      title: "NGINX",
      icon: <SiNginx />,
      color: "bg-[#08993F] text-myWhite",
    },
  ],
};
