import Link from "next/link";
import React from "react";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-6 py-8 lg:flex-row">
          {/* Logo */}
          <Link href={"/"}>
            <span className="text-3xl font-poppins font-extrabold text-pink-700">
              Michael Mugendi
            </span>
          </Link>
          {/* Socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
