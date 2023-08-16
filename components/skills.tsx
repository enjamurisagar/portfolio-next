"use client";
import React, { useEffect } from "react";

import { skills } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";

export default function Skills() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
      },
    }),
  };

  const { setActive, timeOfLastClick } = useActiveSectionContext();

  //react-observer
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive("Skills");
    }
  }, [inView, setActive, timeOfLastClick]);

  return (
    <section className="my-[4rem] scroll-mt-28 w-full" id="skills" ref={ref}>
      <h1 className="text-[25px] text-center">My Skills</h1>
      <div className="skills w-[50%] mx-auto leading-10 my-[2rem]">
        <ul className="flex flex-wrap gap-x-2 gap-y-6 justify-center text-lg">
          {skills.map((skill, i) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={i}
              key={i}
              className="bg-none border rounded-xl px-5 py-3 shadow-lg shadow-cyan-500/50 bg-black text-white hover:bg-white hover:text-black"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
