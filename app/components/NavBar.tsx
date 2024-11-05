"use client";
import React,{ useState } from "react";
import Link from "next/link";
import { MenuIcon, X as CloseIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

function NavBar() {
  const [openSideBarStatus, setOpenSideBarStatus] = useState(false);

  const toggleMenu = () => {
    setOpenSideBarStatus((prevStatus) => !prevStatus);
  };

  const handleCloseMenu = () => {
    setOpenSideBarStatus(false);
  };

  const {data: session} = useSession();

  return (
    <div className="bg-black/50 shadow-xl backdrop-blur-md rounded-b-3xl relative z-20">
      <div className="mx-auto px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={toggleMenu}
            className={`rounded-lg z-50 text-gray-400 transition duration-200 hover:text-white`}
            aria-label="Toggle menu"
            aria-expanded={openSideBarStatus}
          >
            {openSideBarStatus ? <CloseIcon /> : <MenuIcon />}
          </button>

          <nav className="flex items-center justify-end">
            {
              session?(
                <ul className="flex justify-center items-center">
              <li>
                <Link href="/" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2">
                  Home
                </Link>
              </li>
              <p className="text-green-400 font-semibold">
                {session.user?.name?.slice(0,(session.user?.name?.indexOf(' ')))}
              </p>
              <li>
                <Link href="" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2" onClick={()=>signOut()}>
                  LogOut
                </Link>
              </li>
            </ul>
              ):(
                <ul className="flex justify-center items-center">
              <li>
                <Link href="/" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/login" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2">
                  SignUp
                </Link>
              </li>
            </ul>
              )
            }
          </nav>
        </div>
      </div>

      {openSideBarStatus && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-lg rounded-b-3xl" onClick={handleCloseMenu}>
          <div
            className="absolute top-0 left-0 w-72 bg-black/90 backdrop-blur-3xl rounded-r-lg z-50"
            style={{ minHeight: '100vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col py-6 pe-3 space-y-1 ml-5 mt-10">
              <Link href="/" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2" onClick={handleCloseMenu}>
                Home
              </Link>
              <Link href="/login" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2" onClick={handleCloseMenu}>
                Login
              </Link>
              <Link href="/signup" className="font-semibold text-white hover:text-black hover:bg-[#F5F5DC]/70 rounded-lg transition duration-150 px-4 py-2" onClick={handleCloseMenu}>
                SignUp
              </Link>
            </nav>
          </div>
        </div>
      )}
      <div className={openSideBarStatus ? "blur-lg transition duration-300" : "transition duration-300"}></div>
    </div>
  );
}

export default NavBar;
