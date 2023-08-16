"use client";
import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["link"];

type ActiveSectionContextType = {
  active: SectionName;
  setActive: React.Dispatch<
    React.SetStateAction<
      "Home" | "About" | "Projects" | "Skills" | "Education" | "Contact"
    >
  >;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};
type Theme = "light" | "dark";
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<SectionName>("Home");

  //avoid switching of top-nav
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  //theme switch
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <ActiveSectionContext.Provider
      value={{
        active,
        setActive,
        timeOfLastClick,
        setTimeOfLastClick,
        theme,
        setTheme,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
