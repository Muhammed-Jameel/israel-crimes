import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex navbar self-center">
        <Link href="/home">Home</Link>
        <Link href="/by-year">By yaer</Link>
        <Link href="/by-city">By city</Link>
        <Link href="/biggest-crimes">Biggest crimes</Link>
        <Link href="/lies-by-israel">Lies by israel</Link>
        <Link href="/documentaries">Documentaries</Link>
      </div>
    </>
  );
};

export default Navbar;
