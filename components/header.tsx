"use client";

import React from "react";
import { motion } from "framer-motion";

//links
import { links } from "@/lib/data";
import Link from "next/link";

//clsx
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { active, setActive, setTimeOfLastClick, theme } =
    useActiveSectionContext();

  return (
    <header className={` z-[999] flex justify-center relative`}>
      <motion.div
        className={`${
          theme === "dark" ? "bg-slate-200" : "bg-black"
        } wrapper fixed top-[2rem] h-[3rem]  rounded-full md:w-[70%] sm:w-full  lg:w-[40%] `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="w-full h-full flex items-center justify-center px-5 ">
          <ul className="flex w-full gap-10  items-center justify-center  text-gray-600 ">
            {links.map((link) => (
              <li
                className="relative flex w-full items-center justify-center hover:text-black "
                key={link.hash}
              >
                <Link
                  href={link.hash}
                  className={clsx("  duration-500 text-[14px] py-1 px-2", {
                    "text-white": active === link.link,
                    "hover:text-none": active === link.link,
                  })}
                  onClick={() => {
                    setActive(link.link);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.link}
                </Link>
                {link.link === active && (
                  <motion.span
                    layoutId="active"
                    transition={{ type: "spring", stiffness: 380, damping: 20 }}
                    className="bg-black p-2 rounded-full absolute w-full h-full -z-20"
                  ></motion.span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
