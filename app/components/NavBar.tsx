"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

function NavBar() {
  const [openSideBarStatus, setOpenSideBarStatus] = useState(false);

  const toggleMenu = () => {
    setOpenSideBarStatus(!openSideBarStatus);
  };
  const closeMenu = () => {
    setOpenSideBarStatus(false);
  };

  return (
    <div className="bg-black/50  shadow-xl backdrop-blur-md rounded-b-3xl">
      <div className="mx-auto px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={toggleMenu} className={`rounded-lg z-50 text-gray-400 transition duration-200 ${openSideBarStatus ? 'hover:text-white bg-transparent ' : 'hover:text-white hover:bg-transparent'} `} aria-label="Toggle menu">
            {openSideBarStatus ? <X/>:<MenuIcon />}
          </button>

          <nav className="flex items-center justify-end">
            <ul className="flex justify-center items-center">
              <Link href="/" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2 ">
                Home
              </Link>
              <Link href="/login" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2 ">
                Login
              </Link>
              <Link href="/signup" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2 ">
                SignUp
              </Link>
            </ul>
          </nav>
        </div> 
      </div>

      {
        openSideBarStatus && (
          <div className="fixed inset-0 z-40  backdrop-blur-lg transform transition-transform duration-700 ease-in-out " onClick={closeMenu}>
            <div className="absolute bg-black/80 w-72 backdrop-blur-lg rounded-r-lg" onClick={(e) => e.stopPropagation()} style={{minHeight:'100vh'}}>
              <nav className="flex flex-col py-6 pe-3  space-y-1 ml-5 mt-10">
                <Link href="/" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2 " onClick={closeMenu}>
                  Home
                </Link>
                <Link href="/login" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2 " onClick={closeMenu}>
                  Login
                </Link>
                <Link href="/signup" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2 " onClick={closeMenu}>
                  SignUp
                </Link>
              </nav>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default NavBar;

