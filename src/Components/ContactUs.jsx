import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <>
      <div id="contact" className="px-4 sm:p-4 w-full mt-28 mb-14 flex flex-col justify-center items-center">
      <motion.h1
        className="font-gallient text-6xl sm:text-[100px] md:text-[140px] lg:text-[200px] text-center text-[#1E1E1E]"
        initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
        whileInView={{ opacity: 1, x: 0 }} // Move to the right when in view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true }} // Animation occurs once, not every time it's in view
      >
        GET INTO
      </motion.h1>

      {/* Sub-title and image */}
      <motion.div
        className="flex gap-2 sm:gap-4 justify-center items-start pl-32 md:pl-96 lg:pl-96"
        initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
        whileInView={{ opacity: 1, x: 0 }} // Move to the right when in view
        transition={{ duration: 1.2, delay: 0.3 }} // Delay the animation slightly
        viewport={{ once: true }} // Trigger animation only once
      >
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-gallient text-[#1E1E1E]">
          TOUCH
        </h3>
        <Image
          src="/Group 121.png"
          width={35}
          height={35}
          className="sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]"
          alt="Selected Projects Icon"
        />
      </motion.div>
      </div>

      <div className="w-full flex justify-center">
        <form
          className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-5 flex flex-col justify-center items-center gap-8 sm:gap-12"
          action=""
        >
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 w-full items-center justify-between">
            <div className="w-full sm:w-[45%]">
              <h1 className="mb-2">Name?*</h1>
              <input
                className="bg-transparent border-b-[1px] border-black w-full"
                type="text"
                required
              />
            </div>
            <div className="w-full sm:w-[45%]">
              <h1 className="mb-2">Email?*</h1>
              <input
                type="email"
                className="bg-transparent border-b-[1px] border-black w-full"
                required
              />
            </div>
          </div>

          <div className="w-full">
            <h1 className="mb-2">Message*</h1>
            <textarea
              className="bg-transparent w-full border-b-[1px] border-black resize-none"
              rows={6}
              required
            ></textarea>
          </div>

          <button className="bg-[#363636] text-white px-8 py-2" type="submit">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}
