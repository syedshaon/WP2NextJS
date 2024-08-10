"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/blog": {
    name: "Blog",
  },
  "/contact-us": {
    name: "Contact Us",
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" mt-4   text-lg    p-2 md:p-3   ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" text-3xl flex  font-jakartaSans  items-center hover:text-green-400 transition-all duration-300 font-semibold ">
          Sky Enterprise
        </Link>
        <div className="hidden lg:flex lg:items-center space-x-6 ml-auto mr-5">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path} className="transition-all  duration-300 hover:text-green-400 capitalize px-3">
                {name}
              </Link>
            );
          })}
        </div>

        <div className="lg:hidden ml-auto mr-5 mt-1">
          <button onClick={toggleMenu} className="ham-button   focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className=" lg:hidden text-white p-4 md:p-6  bg-black    fixed top-0 left-0 w-screen h-screen flex justify-center items-center flex-col z-50">
          <div className="lg:hidden absolute   top-5    right-12">
            <button aria-label="mobile menu" onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              <span className="sr-only">Menu Button</span>
            </button>
          </div>

          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link onClick={toggleMenu} key={path} href={path} className="capitalize transition-all block px-4 py-2   border-transparent hover:border-b-white  border-b-2">
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
