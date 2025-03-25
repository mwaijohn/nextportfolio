import Link from "next/link"

const Header = () => {
    return (
        <nav className="flex justify-between py-4 font-bold mx-auto px-4">
            <Link href="#home">HOME</Link>
            <Link href="#experience">EXPERIENCE</Link>
            <Link href="#contacts">CONTACTS</Link>
            <Link href="#projects">PROJECT</Link>
        </nav>
    )
}

export default Header