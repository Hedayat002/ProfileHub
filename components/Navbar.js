"use client";
import React from "react";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);

  
  return (
    <>
      {showNavbar &&  <nav className="bg-[#e9c0e9] flex justify-between h-[12vh] w-full fixed p-5 px-7">
          <div className="logo flex items-center lg:gap-20 md:gap-10 gap-5">
            <Link href="/">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                title="Linktree Logo"
              >
                <path d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path>
              </svg>
            </Link>
            <ul className="hidden md:flex lg:gap-10 md:gap-5">
              <Link href="/">
                <li className="hover:text-purple-700">Templates</li>
              </Link>
              <Link href="/">
                <li className="hover:text-purple-700">Marketplace</li>
              </Link>
              <Link href="/">
                <li className="hover:text-purple-700">Discover</li>
              </Link>
              <Link href="/">
                <li className="hover:text-purple-700">Pricing</li>
              </Link>
              <Link href="/">
                <li className="hover:text-purple-700">Learn</li>
              </Link>
            </ul>
          </div>
          <div className="flex gap-3 items-center">
            {session && (
              <button
                className="text-white w-fit bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </button>
            )}
            {!session && (
              <Link href={"/login"}>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
                  Login
                </button>
              </Link>
            )}
          </div>
        </nav>
      }
    </>
  );
};

export default Navbar;
