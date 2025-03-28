import Link from "next/link"

const Header = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-6 md:px-12 font-semibold text-sm uppercase tracking-wide w-full lg:w-1/2 mx-auto">
            <Link href="#home" className="hover:text-green-600 transition">Home</Link>
            <Link href="#experience" className="hover:text-green-600 transition">Experience</Link>
            <Link href="#contacts" className="hover:text-green-600 transition">Contacts</Link>
            <Link href="#certifications" className="hover:text-green-600 transition">Certifications</Link>
        </nav>
    )
}

export default Header
