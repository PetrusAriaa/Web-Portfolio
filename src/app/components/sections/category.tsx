import {
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
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiPostman,
  SiDocker,
  SiFigma,
} from "react-icons/si";

export const CATEGORIES = {
  LanguagesTools: [
    {
      title: "Javascript",
      icon: <SiJavascript size={20} />,
      color: "bg-[#EFD81D] text-myBlack",
    },
    {
      title: "Python",
      icon: <SiPython size={20} />,
      color: "bg-[#366C9C] text-myBlack",
    },
    {
      title: "Typescript",
      icon: <SiTypescript size={20} />,
      color: "bg-[#2F74C0] text-myWhite",
    },
    {
      title: "Go",
      icon: <SiGo size={20} />,
      color: "bg-[#67D0DE] text-myBlack",
    },
    {
      title: "Git",
      icon: <SiGit />,
      color: "bg-[#E84D31] text-myBlack",
    },
    {
      title: "Docker",
      icon: <SiDocker />,
      color: "bg-[#2391E6] text-myBlack",
    },
    {
      title: "Postman",
      icon: <SiPostman />,
      color: "bg-[#F56933] text-myWhite",
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
      title: "MySQL",
      icon: <SiMysql />,
      color: "bg-[#005D88] text-myWhite",
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "bg-[#31648C] text-myWhite",
    },
    {
      title: "SQLite",
      icon: <SiSqlite />,
      color: "text-[#31648C] bg-myWhite",
    },
  ],
};
