"use client"
import { useCart } from "@/hook/useCart";
import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import avatar from "../assets/image-avatar.png";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";

const navLinks = [
  {
    to: "#",
    title: "Collections"
  },
  {
    to: "#",
    title: "Men"
  },
  {
    to: "#",
    title: "Women"
  },
  {
    to: "#",
    title: "About"
  },
  {
    to: "#",
    title: "Contact"
  },
]


export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { quantity } = useCart();


  return (
    <nav className="border-b border-gray-200">
      <div className="container mx-auto px-8 lg:px-24 py-5">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-8">

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="md:hidden"
            >
              <Menu />
            </button>

            <h1 className="text-3xl font-bold">
              sneakers
            </h1>

            <ul className="hidden md:flex gap-8 text-gray-500">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.to}
                    className="relative hover:text-black after:absolute after:left-0 after:-bottom-9 after:h-0.75 after:w-full after:scale-0 hover:after:scale-100 after:bg-orange-500 after:transition-transform"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          <div className="flex items-center gap-8 relative">

            <button
              onClick={() => setOpenCart(!openCart)}
              className="relative"
            >
              <ShoppingCart size={22} />

              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] px-1.5 rounded-full">
                {quantity}
              </span>
            </button>

            <Image
              src={avatar}
              alt=""
              className="w-12 rounded-full cursor-pointer hover:border-2 hover:border-orange-500"
            />

            {openCart && (
              <Cart />
            )}
          </div>
        </div>

        {openMenu && (
          <MobileMenu navLinks={navLinks} />
        )}
      </div>
    </nav>
  );
}