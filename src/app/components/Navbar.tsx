import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="text-myWhite top-0 z-50 sticky bg-myBlack/50 backdrop-blur-sm border-b border-b-myWhite/25">
      <ul className="hidden md:flex flex-row justify-center items-center py-4 px-78 space-x-24 text-lg font-medium">
        <li><Link href={'/'}><button className="disabled:cursor-not-allowed" >About</button></Link></li>
        <li><Link href={'/'}><button className="disabled:cursor-not-allowed" >Projects</button></Link></li>
        <li><Link href={'/'}><button className="disabled:cursor-not-allowed" >Contact</button></Link></li>
        <li><Link href={'/'}><button className="disabled:cursor-not-allowed" disabled>Blog</button></Link></li>
      </ul>
    </nav>
  )
}