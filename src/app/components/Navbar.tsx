import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="text-myWhite">
            <ul className="hidden md:flex flex-row justify-center items-center py-4 px-78 space-x-24 text-lg font-medium">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'} >About</Link></li>
                <li><Link href={'/projects'} >Projects</Link></li>
                <li><Link href={'/blog'} >Blog</Link></li>
            </ul>
        </nav>
    )
}