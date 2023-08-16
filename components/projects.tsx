"use client";

import React, { useEffect } from "react";

import Project from "./project";

//projects data
import { projects } from "@/lib/data";
import { useInView } from "react-intersection-observer";

//global
import { useActiveSectionContext } from "@/context/active-section-context";

function Projects() {
  //react-observer
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const { setActive, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive("Projects");
    }
  }, [inView, setActive, timeOfLastClick]);

  return (
    <section className="my-[4rem] scroll-mt-24 " id="projects" ref={ref}>
      <p className="text-[25px] text-center">My Projects</p>
      <div className="projects-div">
        {projects.map((proj, i) => (
          <React.Fragment key={i}>
            <Project {...proj} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
