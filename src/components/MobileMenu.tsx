import Link from "next/link"

interface IProps {
  navLinks: { to: string, title: string }[]
}


const MobileMenu = ({ navLinks }: IProps) => {
  return (
    <ul className="md:hidden mt-4 space-y-4">
      {navLinks.map((link, idx) => (
        <li key={idx}>
          <Link href="#"
            className="block relative text-gray-500 hover:text-black after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:scale-0 hover:after:scale-100 after:bg-orange-500 after:transition-transform"
          >
            {link.title}
          </Link>

        </li>
      ))}

    </ul>
  )
}

export default MobileMenu