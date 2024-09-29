import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="p-4 w-[100%] mt-28 mb-14 flex flex-col justify-center items-center ">
        <div className="font-gallient text-8xl text-right">
          <div>GET INTO</div>
          <div className="text-6xl ">
            TOUCH
            <img
              className="inline ml-4"
              src="Group 121.png"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div>
          <form
            className="py-5 flex flex-col justify-center items-center gap-12"
            action=""
          >
            <div className="flex gap-24">
              <div>
                <h1>Name?*</h1>
                <input className="bg-transparent border-b-[1px] border-black" type="text"  required />
              </div>
              <div>
                <h1>Email?*</h1>
                <input type="email" className="bg-transparent border-b-[1px] border-black"  required />
              </div>
            </div>

            <div> 
                <h1>Message*</h1>
            <textarea
                className="bg-transparent border-b-[1px] border-black h-40 resize-none"
                rows={100} cols={60}
                required
            ></textarea>
            </div>
            <button
            className="bg-[#363636] text-[#FFFF] px-12 py-2"
             type="submit">SEND</button>
          </form>
        </div>
      </div>
    </>
  );
}
