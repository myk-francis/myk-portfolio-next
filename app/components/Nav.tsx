"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center gap-y-4 fixed h-max bottom-0 mt-auto z-50 top-0 w-full xl:justify-center xl:w-16 xl:max-w-md xl:right-[2%] xl:h-screen ">
      <div className="flex w-full h-[80px] items-center justify-between gap-y-10 px-4 md:px-40 xl:flex-col xl:justify-center xl:px-0 bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {links.map((link, index) => (
          <Link
            className={`${
              link.path === pathname ? "text-accent" : ""
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            key={index}
            href={link.path}
          >
            {/* Tool tip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex items-center text-primary p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                {/* Triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>

            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
