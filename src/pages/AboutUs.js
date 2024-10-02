"use client"
import Image from 'next/image'
import { GoArrowUpRight } from "react-icons/go";
import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/Components/ui/infinite-moving-cards";

const services = [
  {

  },
  {

  },
  {

  },
  {

  },
];

function AboutUs() {
  return (
    <div className='pt-16'>
      {/* Title Section */}
      <motion.h1
        className="font-gallient text-6xl sm:text-[100px] md:text-[140px] lg:text-[200px] text-center text-[#1E1E1E]"
        initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
        whileInView={{ x: 0, opacity: 1 }} // Move to original position and become visible
        transition={{ duration: 0.5 }} // Animation duration
        viewport={{ once: true }} // Animation occurs only once
      >
        MY LITTLE
      </motion.h1>
      <div className="flex gap-2 sm:gap-4 justify-center items-start pl-32 md:pl-96 lg:pl-96">
        <motion.h3
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-gallient text-[#1E1E1E]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          BIT ABOUT
        </motion.h3>
        <Image
          src="/Group 121.png"
          width={35}
          height={35}
          className="sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]"
        />
      </div>

      {/* About Section */}
      <div className='my-16 flex flex-col md:flex-row justify-center items-center gap-10 pt-8'>
        <Image
          src='/About.png'
          width={300}
          height={700}
          className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px]" // Responsive image size
        />
        <div className="text-center md:text-left">
          <div className='w-full md:w-96 lg:w-[700px]'>
            <p className='font-gotu text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
              I'm Ashna, a vibrant and passionate UX designer and researcher with an artistic flair. From Pastry Artist to UX Designer, I bring creativity, user understanding, and a passion for delightful experiences. Let's craft extraordinary digital journeys together.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className='bg-[#363636] text-white border-none font-gotu mt-6 pl-4 pr-4 pt-1 pb-1 flex justify-center gap-1 items-center'>
                Resume <GoArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services Section */}
      <div className='pt-20 md:pt-40'>
        <motion.h1
          className="font-gallient text-6xl sm:text-[100px] md:text-[140px] lg:text-[200px] text-center text-[#1E1E1E]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          FEATURED
        </motion.h1>
        <div className="flex gap-2 sm:gap-4 justify-center items-start pl-32 md:pl-96 lg:pl-96">
          <motion.h3
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-gallient text-[#1E1E1E]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            SERVICES
          </motion.h3>
          <Image
            src="/Group 121.png"
            width={35}
            height={35}
            className="sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]"
          />
        </div>
      </div>

      <div className='my-16 w-[80%] m-auto'>
        <InfiniteMovingCards
          items={services}
          direction="right"
          speed="normal"
        />
      </div>

      {/* Follow Section */}
      <div className='flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-center pt-24 pb-16'>
        <div className='text-center md:text-left'>
          <motion.h1
            className='font-gallient text-[80px] md:text-[200px] text-[#1E1E1E]'
            style={{ lineHeight: '1.1' }} // Custom line height
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            FOLLOW
          </motion.h1>
          <motion.h3
            className='text-[60px] md:text-[140px] font-gallient text-[#1E1E1E] pl-0 md:pl-[560px]'
            style={{ lineHeight: '1.1' }} // Custom line height
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ME
          </motion.h3>
        </div>
        <div className='flex justify-center items-center'>
          <h4 className='font-gotu rotate-[270deg] sm:text-lg md:text-xl lg:text-2xl mb-0 hidden md:block'>CONNECT WITH ME <span className='text-red-600'>*</span></h4>
          <div className='flex flex-col justify-start items-center md:ml-1'>
            <ul>
              <li className='font-gotu sm:text-lg md:text-xl lg:text-2xl mb-4 cursor-pointer'>LINKEDIN</li>
              <li className='font-gotu sm:text-lg md:text-xl lg:text-2xl mb-4 cursor-pointer'>INSTAGRAM</li>
              <li className='font-gotu sm:text-lg md:text-xl lg:text-2xl mb-4 cursor-pointer'>TWITTER</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
