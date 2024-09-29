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
      <hr className='mt-0 bg-black h-[2px]' /> 
      <hr className='mt-1 bg-black h-[2px]' /> 
      <div className='p-10'> 
        <div className='flex justify-between items-center'> 
          <p className='font-gotu text-sm text-center w-full'>
            Copyright 2024 By Exions Tech
          </p>
          <button
            onClick={scrollToTop}  
            className='text-sm flex gap-1 border-none font-gotu whitespace-nowrap justify-center items-center'
          >
            <IoIosArrowRoundUp className='text-2xl' /> Back on Top
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
