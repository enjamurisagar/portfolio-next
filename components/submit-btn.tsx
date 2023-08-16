import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as FormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = FormStatus();
  return (
    <div className="btn flex w-[80%] mx-auto justify-start items-center my-3">
      <motion.button
        whileHover={{
          scale: 1.05,
          // transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        className="bg-black w-[30%] flex items-center justify-center gap-2 rounded-lg text-[15px]  my-2 px-3 py-2 "
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5  animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit
            <FaPaperPlane />
          </>
        )}
      </motion.button>
    </div>
  );
}
