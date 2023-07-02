"use client";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TopLeftImg from "./components/TopLeftImg";
import "./globals.css";
import { Sora } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "./components/Transition";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Myk Portfolio",
  description: "Portfolio website for Myk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        {/* <Header /> */}

        <AnimatePresence mode="wait">
          <motion.div key={pathname} className="h-full">
            <Transition />
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
