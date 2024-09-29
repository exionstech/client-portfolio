import ContactUs from "@/Components/ContactUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="font-gallient text-[60px] md:text-[80px] lg:text-[100px] flex justify-center items-start text-[#363636]">
          CREA
          <span>
            <Image src="/Hero.png" height={80} width={80} className="md:h-[110px] md:w-[110px]" />
          </span>
          TIVE
        </h1>
        <h1 className="font-gallient text-[60px] md:text-[80px] lg:text-[100px] flex justify-center text-[#363636]">
          UI/UX
        </h1>
        <h1 className="font-gallient text-[60px] md:text-[80px] lg:text-[100px] flex justify-center text-[#363636]">
          DESIGNER
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center bg-white py-12">
        <div className="max-w-sm mr-6 text-center lg:text-left lg:mr-6">
          <p className="text-md md:text-lg font-gotu">
            With over three years of experience in design, I transform
            concepts into extraordinary projects through the realm of
            creativity and interactive design.
          </p>
        </div>
        <div className="relative w-48 h-64 lg:order-2">
          <svg
            className="absolute"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: 'rotate(15deg)',
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
          >
            <ellipse cx="100" cy="100" rx="80" ry="120" fill="#d1d5db" />
          </svg>
          <div className="absolute flex items-center justify-center w-full h-full">
            <div className="relative z-10">
              <img
                src="/graphic.png"
                alt="Person Illustration"
                className="block w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="pt-16">
        <h1 className="font-gallient text-6xl md:text-7xl lg:text-8xl text-center text-[#1E1E1E]">
          SELECTED
        </h1>
        <div className="flex gap-6 justify-center items-start pl-4 md:pl-12 lg:pl-24">
          <h3 className="text-center text-4xl md:text-5xl lg:text-6xl font-gallient text-[#1E1E1E]">
            PROJECTS
          </h3>
          <Image src="/Group 121.png" width={40} height={40} className="md:w-[50px] md:h-[50px]" />
        </div>
      </div>

      {/* Project List */}
      <div className="pt-8">
  <div className="flex justify-center items-center text-[#363636]">
    <div>
      <hr />
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-32 font-SourceSerif p-10 text-center md:text-left">
        <div className="w-72">
          <h2 className="text-4xl">ICING ON THE CAKE</h2>
        </div>
        <p className="text-sm">Web Application</p>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row items-center justify-between font-SourceSerif p-10 text-center md:text-left">
        <div className="w-72">
          <h2 className="text-4xl">NIGHT OWL</h2>
        </div>
        <p className="text-sm">Mobile Application</p>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row items-center justify-between font-SourceSerif p-10 text-center md:text-left">
        <div className="w-72">
          <h2 className="text-4xl">LOGO & WEBSITE DESIGN</h2>
        </div>
        <p className="text-sm">Visual Design</p>
      </div>
    </div>
  </div>
</div>
<div className="p-5">
            <ContactUs/>
</div>
    </>
  );
}
