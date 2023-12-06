"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pages = [
    "home",
    "by-year",
    "by-city",
    "biggest-crimes",
    "lies-by-israel",
    "documentaries",
  ];
  const pathname = usePathname();
  return (
    <>
      <div className="flex navbar self-center">
        {pages.map((page, index) => (
          <Link
            key={index}
            className={` ${
              pathname === `/${page}`
                ? " bg-white rounded-3xl text-black-500 py-2 px-5"
                : "text-white"
            }`}
            href={`/${page}`}
          >
            {page}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
