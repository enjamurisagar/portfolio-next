"use client";

import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//data
import { educationData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export default function Education() {
  //react-observer
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const { setActive, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive("Education");
    }
  }, [inView, setActive, timeOfLastClick]);

  return (
    <section className="my-[4rem]" id="education" ref={ref}>
      <h1 className="text-[25px] text-center">My Education</h1>

      <VerticalTimeline>
        {educationData.map((edu, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              contentStyle={{
                borderRadius: "20px",
                color: "black",
                padding: "1rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #ffffdf",
              }}
              date={edu.duration}
              icon={edu.icon}
              iconStyle={{
                background: "white",
                color: "black",
              }}
            >
              <p className="!text-[20px] !m-0 font-semibold">{edu.title}</p>
              <p>
                <Link href={edu.link} className="underline my-2 text-[15px]">
                  {edu.college}
                </Link>
              </p>
              <p className="text-[13px]">{edu.place}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
