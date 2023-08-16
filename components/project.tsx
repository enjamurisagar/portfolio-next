"use client";

import { projects } from "@/lib/data";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { BiLinkAlt } from "react-icons/bi";
import Link from "next/link";

type Props = (typeof projects)[number];

function Project({ title, desc, liveLink, imageUrl, tags }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="group w-[50%] mx-auto my-[1rem] bg-[#1a1919] border-2 border-white rounded-3xl p-5 leading-relaxed relative overflow-hidden hover:bg-[#1e1e1e] transition">
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: scrollYProgress }}
        className=""
      >
        <div className="le w-[50%] flex flex-col group-even:ml-[50%]">
          <p className="text-[25px] my-2 flex items-center gap-3">
            {title}
            <Link href={liveLink}>
              <BiLinkAlt />{" "}
            </Link>
          </p>
          <p className="text-[13px] ">{desc}</p>
          <ul className="grid grid-cols-3 mt-4">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="bg-white text-black text-center m-1 py-1 px-2 text-[11px] rounded-full uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="project"
          className="absolute top-8 -right-[25rem] rounded-t-lg group-even:-right-[initial] group-even:-left-[25rem] group-hover:-rotate-3 group-hover:-translate-x-3 group-hover:translate-y-3  group-even:group-hover:rotate-3  group-even:group-hover:translate-x-3  group-even:group-hover:-translate-y-3 transition group-hover:scale-[1.08]"
        />
      </motion.div>
    </section>
  );
}

export default Project;
