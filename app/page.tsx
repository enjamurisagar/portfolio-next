import React from "react";
import Intro from "@/components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="">
      <Intro />
      <div className="h-[1px] w-[60%] m-auto   bg-gray-700"></div>
      <About />
      <div className="h-[1px] w-[60%] m-auto  bg-gray-700"></div>
      <Projects />
      <div className="h-[1px] w-[60%] m-auto  bg-gray-700"></div>
      <Skills />
      <div className="h-[1px] w-[60%] m-auto  bg-gray-700"></div>
      <Education />
      <div className="h-[1px] w-[60%] m-auto  bg-gray-700"></div>
      <Contact />
    </main>
  );
}
