"use client";

import React, { useEffect, useState } from "react";
import { BiMoon, BiSolidSun } from "react-icons/bi";

//global
import { useActiveSectionContext } from "@/context/active-section-context";

export default function ThemeSwitch() {
  const { theme, setTheme } = useActiveSectionContext();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    }
  };
  console.log(theme);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as
      | typeof theme
      | null;
    if (localTheme) setTheme(localTheme);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("light");
    }
  }, []);
  return (
    <button
      className={`fixed bottom-5 right-5  text-[20px] backdrop-blur-[0.5rem] text-black p-2 rounded-full hover:scale-125 transition-all ${
        theme === "dark" ? "bg-white text-black" : "bg-black text-white"
      } `}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BiSolidSun /> : <BiMoon />}
    </button>
  );
}
