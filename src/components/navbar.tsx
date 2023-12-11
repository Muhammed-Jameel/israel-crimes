"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { default as MenuIcon } from "../assets/menu-burger.svg";
const Navbar = () => {
  const pages = [
    "home",
    "by-year",
    "by-city",
    "biggest-crimes",
    "lies-by-israel",
    "documentaries",
  ];

  const [showNav, setShowNav] = useState<boolean>(false);

  const pathname = usePathname();
  console.log("This is the pathname: ", pathname);
  return (
    <>
      <nav className="flex lg:w-11/12 py-2 w-full h-max lg:text-2xl text-sm bg-[#1e1e1e] font-medium self-center lg:rounded-full lg:mt-4 justify-around items-center">
        {/* <img src={MenuIcon} alt="menuIcon" /> */}
        <div className="text-white md:hidden w-full bg-[#1e1e1e] h-full px-8">
          <button onClick={() => setShowNav(!showNav)}>
            <Image src={MenuIcon} alt="Menu Icon" width={28} height={28} />
          </button>
          <div
            className={`${
              showNav
                ? "w-full h-screen z-50 flex flex-col justify-start items-center gap-12 mt-10"
                : "hidden"
            }`}
          >
            {pages.map((page, index) => (
              <Link
                key={index}
                className={` ${
                  pathname.includes(page)
                    ? " bg-white rounded-3xl text-[#1e1e1e] py-2 px-5"
                    : "text-white font-[inter]"
                }`}
                href={`/${page}`}
              >
                {page}
              </Link>
            ))}
          </div>
        </div>

        {pages.map((page, index) => (
          <Link
            key={index}
            className={` ${
              pathname.includes(page)
                ? " bg-white rounded-3xl text-[#1e1e1e] py-2 px-5 font-[inter] hidden md:block"
                : "text-white font-[inter] hidden md:block"
            }`}
            href={`/${page}`}
          >
            {page}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
