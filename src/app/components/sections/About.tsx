"use client"

import {LanguageBadge} from "../ui/LanguageBadge";
import { useState } from "react";
import {category} from "./category"

export const About = () => {
  const [currCategory, setCurrCategory] = useState(category.Languages)
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-myWhite font-semibold w-full min-h-screen"
    >
      <div className="w-2/3 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-myBlue1 text-5xl">Backstory</h1>
          <h1 className="text-myWhite font-normal text-lg">
            Petrus Aria is an Information Engineering student from Indonesia. He
            started his journey on Web Development from college. He has an
            interest on Cloud Computing. Watch out! He can turn into avocado
            anytime.
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <ul className="flex flex-row gap-8">
              <li onClick={()=>setCurrCategory(category.Languages)} className="cursor-pointer font-medium py-1 hover:border-b">Languages</li>
              <li onClick={()=>setCurrCategory(category.Frontend)} className="cursor-pointer font-medium py-1 hover:border-b">Frontend</li>
              <li onClick={()=>setCurrCategory(category.Backend)}  className="cursor-pointer font-medium py-1 hover:border-b">Backend</li>
              <li onClick={()=>setCurrCategory(category.Tools)} className="cursor-pointer font-medium py-1 hover:border-b">Tools</li>
            </ul>
            <div className="grid grid-cols-3 text-center gap-4">
              {
                currCategory.map((item, i)=>{
                  return(
                    <LanguageBadge key={i} color={item.color ? item.color : "bg-[#2F74C0] text-myBlack"} icon={item.icon}>{item.title}</LanguageBadge>
                  )
                })
              }
            </div>
          </div>
          <div className="h-96 w-72 bg-slate-300/30 animate-pulse"></div>
          {/* <div>
            <ul className="grid grid-cols-3 text-center gap-x-4 gap-y-4">
              <li>
                <LanguageBadge
                  color={"bg-[#EFD81D] text-myBlack"}
                  icon={<SiJavascript size={20} />}
                >
                  Javascript
                </LanguageBadge>
              </li>
              <li>
                <LanguageBadge
                  color={"bg-[#2F74C0] text-myBlack"}
                  icon={<SiTypescript size={20} />}
                >
                  Typescript
                </LanguageBadge>
              </li>
              <li>
                <LanguageBadge
                  color={"bg-[#366C9C] text-myBlack"}
                  icon={<SiPython size={20} />}
                >
                  Python
                </LanguageBadge>
              </li>
            </ul>
          </div> */}
      </div>
      </div>
    </section>
  );
};
