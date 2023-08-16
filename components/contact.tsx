"use client";
import React, { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

//server
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { setActive, timeOfLastClick } = useActiveSectionContext();

  //react-observer
  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActive("Contact");
    }
  }, [inView, setActive, timeOfLastClick]);

  return (
    <motion.section
      className="my-[4rem]    w-full"
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <h3 className="text-[25px] text-center">Contact Me</h3>
      <p className="my-2 text-center ">
        Contact me directly from here{" "}
        <a
          href="mailto:enjamurisagar@gmail.com"
          className="font-semibold underline"
          target="_blank"
        >
          enjamurisagar@gmail.com
        </a>
      </p>
      <div className="form-contact w-full flex justify-center">
        <form
          className="bg-white flex flex-col justify-center p-[1rem] w-[30%] my-[1.5rem] rounded-lg"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully");
          }}
        >
          <input
            type="email"
            name="email"
            required
            maxLength={100}
            placeholder="example@example.com"
            className="my-[1.5rem] outline-none py-3 w-[80%] mx-auto px-2 bg-black text-white rounded-lg"
          />
          <textarea
            required
            name="message"
            rows={5}
            maxLength={1000}
            className="bg-black w-[80%] mx-auto  px-2 py-3 outline-none rounded-lg"
            placeholder="Your message"
          />
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
