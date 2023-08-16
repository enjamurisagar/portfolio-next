"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//global
import { useActiveSectionContext } from "@/context/active-section-context";

function About() {
  const { setActive, timeOfLastClick } = useActiveSectionContext();

  //react-observer
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive("About");
    }
  }, [inView, setActive, timeOfLastClick]);

  return (
    <section
      className="my-[4rem] leading-10 scroll-mt-24 "
      id="about"
      ref={ref}
    >
      <motion.div
        className="about w-full"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.175 }}
      >
        <p className="text-center text-[25px]">About Me</p>
        <p className="text-gray-500  text-center my-[1.5rem] mx-[30%] auto space-y-2">
          Right now, I'm gonna be graduating from{" "}
          <span className="text-white text-[18px] underline">
            {" "}
            <Link rel="noopener noreferrer" href="https://www.vardhaman.org/">
              Vardhaman College of Engineeing (VMEG)
            </Link>
          </span>
          , probably in 2024. My selected stream in Electrical and Electronics
          Engineering. But interested in the{" "}
          <span className="text-white text-[18px] italic">
            World of Development
          </span>
          . I started writing my first code in my IInd yr. of Graduation and got
          very curious about Software rather than selected courses. I love
          making beautiful responsive websites and web apps. I've been doing the
          websites using{" "}
          <span className="text-white text-[18px] underline">
            <Link href="https://www.reactjs.org/">React JS</Link>
          </span>
          , and{" "}
          <span className="text-white text-[18px] underline">
            <Link href="https://www.nodejs.org/">Node JS</Link>
          </span>{" "}
          for the server side coding. Done so many websites and gained much
          knowledge in it.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
