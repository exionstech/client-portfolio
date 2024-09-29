import Image from "next/image";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className=" sm:p-4 w-[100%] mt-28 mb-14 flex flex-col justify-center items-center ">
        <div className="font-gallient text-right text-6xl md:text-7xl lg:text-8xl">
          <div>GET INTO</div>
          <div className="text-4xl md:text-5xl lg:text-6xl ">
            TOUCH
          <Image src="/Group 121.png" width={40} height={40} className="md:w-[50px] md:h-[50px]" />
        </div>
      </div>

        <div>
          <form
            className=" sm:px-0 py-5 flex flex-col justify-center items-center gap-12"
            action=""
          >
            <div className="flex flex-col gap-10 w-full items-center sm:gap-24 sm:flex-row">
              <div className="w-[80%]">
                <h1>Name?*</h1>
                <input className="bg-transparent border-b-[1px] border-black w-full" type="text"  required />
              </div>
              <div className="w-[80%]">
                <h1>Email?*</h1>
                <input type="email" className="bg-transparent border-b-[1px] border-black w-full"  required />
              </div>
            </div>

            <div className="mx-12 sm:mx-0"> 
                <h1>Message*</h1>
            <textarea
                className="bg-transparent w-full border-b-[1px] border-black  resize-none"
                rows={6} 
                cols={60}
               
                required
              ></textarea>
            </div>

            <button className="bg-[#363636] text-white px-12 py-2" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
