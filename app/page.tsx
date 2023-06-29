"use client";
import Image from "next/image";
import ProjectsBtn from "./components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function Home() {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center fkex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-lg mx-auto xl:mx-8 mb-10 xl:mb-3 leading-[1.8] text-white/60 font-light text-xs xl:text-sm"
          >
            I’m a full-stack developer specializing in building exceptional
            digital experiences. Currently, I’m focused on building responsive
            full-stack web applications with React and Nextjs.
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            className="hidden xl:flex"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div>Image</div>
    </div>
  );
}
