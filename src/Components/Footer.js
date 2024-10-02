import React from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  
    });
  };

  return (
    <>
      <hr className='mt-0 bg-black h-[3px]' /> 
      <hr className='mt-1 bg-black h-[2px]' /> 
      <div className='p-10'> 
        <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center '> 
          <p className='font-gotu text-lg text-center w-full md:pl-32 lg:pl-32'>
            Copyright 2024 By Exions Tech
          </p>
          <button
            onClick={scrollToTop}  
            className='text-sm flex gap-1 border-none font-gotu whitespace-nowrap justify-center items-center'
          >
            <IoIosArrowRoundUp className='text-4xl' /> Back on Top
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
