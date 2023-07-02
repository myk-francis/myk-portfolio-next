import Link from "next/link";
import React from "react";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"/"}
        className="hover:text-accent transition-all duration-300"
      >
        <AiFillGithub />
      </Link>
      <Link
        href={"/"}
        className="hover:text-accent transition-all duration-300"
      >
        <AiFillTwitterCircle />
      </Link>
      <Link
        href={"/"}
        className="hover:text-accent transition-all duration-300"
      >
        <AiFillLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
