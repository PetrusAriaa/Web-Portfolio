import {Button, Card} from "@nextui-org/react";
import Image from "next/image";
import Me2 from "../../../../public/assets/Me2.svg";
import SkillSet from "../ui/SkillSet";
import Link from "next/link";

export const About = () => {
  return (
    <section className="relative py-20 -mt-2 md:py-10 lg:py-0 lg:mt-0 z-[20] px-0 md:px-10 bg-myBlack flex flex-col items-center justify-center md:min-h-[35rem] lg:min-h-[50rem]">
      <div className="flex flex-col-reverse px-2 md:flex-row items-center justify-center w-full md:w-[90%]">
        <Card
          id="about"
          className="relative z-10 w-full md:w-[90%] md:max-w-[70rem] flex flex-col gap-5 lg:gap-4 px-4 py-2 md:px-10 md:py-20 bg-transparent backdrop-blur-md bg-gradient-to-bl from-myBlack2/30 to-myBlue1/10 border-t-2 border-r-2 border-myBlue1/30 shadow-myBlue1/20 shadow-lg md:drop-shadow-lg"
        >
          <div className="flex flex-col gap-4 w-full md:w-4/5">
            <h1 className="text-myBlue1 text-3xl font-semibold md:text-5xl">
              Backstory
            </h1>
            <h1 className="text-myWhite font-normal text-sm md:text-base lg:text-lg">
              Petrus Aria is an Information Engineering student from Indonesia.
              He started his journey on Web Development from college. He has an
              interest on Cloud Computing. Watch out! He can turn into avocado
              anytime.
            </h1>
            <div className="flex flex-row justify-end md:justify-start">
              <Button as={Link} href="/knowme">
                Know me more!
              </Button>
            </div>
          </div>
        </Card>
        <Image
          src={Me2}
          alt=""
          className="p-8 w-[18rem] md:w-[20rem] lg:w-[36rem] relative md:-ml-36 lg:-ml-56 z-[11]"
        />
      </div>
      <div className="w-full md:w-[90%] flex flex-row justify-start md:justify-center relative z-[13] px-2 py-8 md:p-0">
        <div className="w-full flex justify-end max-w-[70rem]">
          <Card className="bg-transparent w-full md:w-[65%] lg:w-[55%] min-w-[4rem] rounded-lg md:-mt-32 p-4 bg-gradient-to-bl from-myBlack2/80 to-myBlue1/60 border-t-2 border-r-2 border-myBlue1/30 shadow-myBlue1/20 shadow-2xl">
            <SkillSet />
          </Card>
        </div>
      </div>
      <div className="w-full absolute top-5">
        <h1 className="w-4/5 md:w-full text-[7rem] font-semibold text-myBlue1/20 leading-[6rem]">
          Backstory
        </h1>
      </div>
    </section>
  );
};
