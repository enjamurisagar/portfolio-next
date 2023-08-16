"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Me from "@/public/assets/me.jpg";
import Wave from "@/public/assets/waving-hand.gif";

//icons
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCloudDownload } from "react-icons/bi";

import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

//observer
import { useInView } from "react-intersection-observer";

function Intro() {
  const { setActive, timeOfLastClick, setTimeOfLastClick } =
    useActiveSectionContext();

  //react-observer
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive("Home");
    }
  }, [inView, setActive, timeOfLastClick]);

  return (
    <section className="my-[10rem] scroll-mt-32" id="home" ref={ref}>
      <div className="flex justify-center items-center">
        <motion.div
          className="grid items-cente"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Image
            src={Me}
            alt="ME"
            width={220}
            height={220}
            quality={95}
            priority
            className="rounded-full border-[0.35rem] h-60  w-60 border-white object-cover"
          />

          <Image
            src={Wave}
            alt="waving-hand"
            width={36}
            height={36}
            priority
            className="-rotate-45 relative left-[4.75rem] -top-[2rem]"
          />
        </motion.div>
      </div>
      <motion.div
        className="content text-gray-300 text-center py-1 my-[2rem]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <p className="mx-[25%] auto ">
          Hello,{" "}
          <span className="font-bold text-[25px]">I'm Enjamuri Sagar.</span> I'm
          a{" "}
          <span className="font-bold text-[25px]">full stack developer. </span>I
          love doing Websites and Apps. My focus is{" "}
          <span className="font-bold text-[25px]">React JS.</span>
        </p>
      </motion.div>
      <motion.div
        className="btns flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            // transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="m-3 group flex justify-center items-center my-[1rem] text-white border-2 border-white border-dashed px-2 py-3 rounded-lg rounded-tl-none rounded-br-none hover:rounded-tl-lg hover:rounded-br-lg  hover:rounded-tr-none hover:rounded-bl-none"
        >
          <Link
            href="#contact"
            onClick={() => {
              setActive("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact Me
          </Link>
          <AiOutlineArrowRight className="mx-2 text-[20px] group-hover:translate-x-2 transition" />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.05,
            // transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="m-3 group flex justify-center items-center text-white border-2 border-white border-dashed px-2 py-3 rounded-lg rounded-bl-none rounded-tr-none hover:rounded-bl-lg hover:rounded-tr-lg  hover:rounded-br-none hover:rounded-tl-none"
        >
          CV
          <BiCloudDownload className="mx-2 text-[20px] group-hover:translate-y-1 transition" />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Intro;
