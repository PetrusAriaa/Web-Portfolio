import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="text-myWhite top-0 z-50 sticky bg-myBlack/50 backdrop-blur-sm border-b border-b-myWhite/25">
            <ul className="hidden md:flex flex-row justify-center items-center py-4 px-78 space-x-24 text-lg font-medium">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'#about'} >About</Link></li>
                <li><Link href={'/projects'} >Projects</Link></li>
                <li><Link href={'/blog'} >Blog</Link></li>
            </ul>
        </nav>
    )
}