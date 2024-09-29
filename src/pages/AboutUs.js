import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function AboutUs() {
  return (
    <div className='pt-16'>
      <h1 className='font-gallient text-8xl text-center text-[#1E1E1E]'>MY LITTLE</h1>
      <div className='flex gap-6 justify-center items-start pt-3 pl-24'>
        <h3 className='text-center text-6xl font-gallient text-[#1E1E1E]'>BIT ABOUT</h3>
        <Image src='/Group 121.png' width={50} height={50} />
      </div>
      <div className='flex justify-center items-center gap-10 pt-8'>
        <Image src='/About.png'
          width={300}
          height={700}
        />
        <div>
          <div className='w-96'>
            <p className='font-gotu'>
              I'm Ashna, a vibrant and passionate UX designer and researcher with an artistic flair. From Pastry Artist to UX Designer, I bring creativity, user understanding, and a passion for delightful experiences. Let's craft extraordinary digital journeys together.
            </p>
            <button className='bg-[#363636] text-white border-none font-gotu mt-6 pl-4 pr-4 pt-1 pb-1 flex justify-center gap-1 items-center'>
              Resume <GoArrowUpRight />
            </button>
          </div>

        </div>
      </div>
      <div className='pt-40'>
        <h1 className='font-gallient text-8xl text-center text-[#1E1E1E]'>FEATURED</h1>
        <div className='flex gap-6 justify-center items-start pt-3 pl-24'>
          <h3 className='text-center text-6xl font-gallient text-[#1E1E1E]'>SERVICES</h3>
          <Image src='/Group 121.png' width={50} height={50} />
        </div>
      </div>
      <div className='flex gap-4 justify-center items-center pt-3 pb-6'>
        <div className='w-72 h-72 bg-slate-800'></div>
        <div className='w-72 h-72 bg-slate-800'></div>
        <div className='w-72 h-72 bg-slate-800'></div>
      </div>
      <div className='flex gap-24 justify-center items-center pt-24 pb-16'>
        <div className=''>
          <h1 className='font-gallient text-8xl text-[#1E1E1E]'>FOLLOW</h1>

          <h3 className='text-6xl font-gallient text-[#1E1E1E] pl-72'>ME</h3>
        </div>
        <div className='flex justify-center items-center'>
          <h4 className='font-gotu rotate-[270deg] text-[14px] mb-0'>CONNECT WITH ME <span className='text-red-600'>*</span></h4>
          <div className='flex flex-col justify-start items-center ml-1'>
            <ul>
              <li className='font-gotu text-xl mb-4 cursor-pointer'>LINKEDIN</li>
              <li className='font-gotu text-xl mb-4 cursor-pointer'>INSTAGRAM</li>
              <li className='font-gotu text-xl mb-4 cursor-pointer'>TWITTER</li>
            </ul>
          </div>
        </div>


      </div>

    </div>
  )
}

export default AboutUs