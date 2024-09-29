import Image from "next/image";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <div id="contact" className="p-4 w-full mt-28 mb-14 flex flex-col justify-center items-center">
      <div id="projects" className="pt-16">
        <h1 className="font-gallient text-6xl md:text-7xl lg:text-8xl text-center text-[#1E1E1E]">
          GET INTO
        </h1>
        <div className="flex gap-6 justify-center items-start pt-3 pl-4 md:pl-12">
          <h3 className="text-center text-4xl md:text-5xl lg:text-6xl font-gallient text-[#1E1E1E]">
            TOUCH
          </h3>
          <Image src="/Group 121.png" width={40} height={40} className="md:w-[50px] md:h-[50px]" />
        </div>
      </div>

        <div className="w-full flex justify-center">
          <form className="py-5 flex flex-col items-center gap-12 w-full max-w-4xl" action="">
            <div className="flex flex-col sm:flex-row justify-between gap-6 w-full px-4">
              <div className="flex flex-col w-full sm:w-1/2">
                <h1 className="mb-2">Name?*</h1>
                <input
                  className="bg-transparent border-b-[1px] border-black w-full"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                <h1 className="mb-2">Email?*</h1>
                <input
                  className="bg-transparent border-b-[1px] border-black w-full"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="w-full px-4">
              <h1 className="mb-2">Message*</h1>
              <textarea
                className="bg-transparent border-b-[1px] border-black w-full h-40 resize-none"
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
