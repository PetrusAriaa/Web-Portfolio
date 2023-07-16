import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { TbMail } from "react-icons/tb";
import { GoLocation, GoOrganization } from "react-icons/go";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer id="footer" className="flex flex-col justify-center pt-36 px-64 bg-myBlack2">
            <div className="space-y-4">
                <h1 className="text-myBlue1 font-semibold text-5xl">Petrus Aria</h1>
                <h1 className="text-myWhite font-semibold text-5xl">Website Developer</h1>
            </div>
            <div className="flex flex-row space-x-10 mt-20">
                <div className="flex flex-row space-x-2 items-center">
                    <GoLocation color="#6BE7F1"/>
                    <p className="text-myWhite">Indonesia</p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                    <GoOrganization color="#6BE7F1"/>
                    <p className="text-myWhite">Universitas Gadjah Mada</p>
                </div>
            </div>
            <div className="flex flex-row space-x-2 items-center">
                <TbMail color="#6BE7F1"/>
                <p className="text-myWhite">petrusariacr25@gmail.com</p>
            </div>
            <section id="Socials" className="py-4 mt-4">
                <div className="flex flex-row justify-center items-center gap-10">
                <Link href={'#'} className="p-3 rounded-full transition-colors duration-200 hover:bg-slate-800 active:scale-95 focus:outline focus:outline-2 focus:outline-myBlue1 focus:outline-offset-2">
                    <SiGithub color="#6BE7F1" size={25}/>
                </Link>
                <Link href={'#'} className="p-3 rounded-full transition-colors duration-200 hover:bg-slate-800 active:scale-95 focus:outline focus:outline-2 focus:outline-myBlue1 focus:outline-offset-2">
                    <SiLinkedin color="#6BE7F1" size={25}/>
                </Link>
                <Link href={'#'} className="p-3 rounded-full transition-colors duration-200 hover:bg-slate-800 active:scale-95 focus:outline focus:outline-2 focus:outline-myBlue1 focus:outline-offset-2">
                    <SiInstagram color="#6BE7F1" size={25}/>
                </Link>
                </div>
            </section>
        </footer>
    )
}