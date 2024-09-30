import ContactUs from "@/Components/ContactUs";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project data including images
  const projects = [
    {
      title: "ICING ON THE CAKE",
      description: "Web Application",
      image: "/iceing-on-the-cake.png",
    },
    {
      title: "NIGHT OWL",
      description: "Mobile Application",
      image: "/night-owl.png",
    },
    {
      title: "LOGO & WEBSITE DESIGN",
      description: "Visual Design",
      image: "/logo-design.png",
    },
  ];

  return (
    <>
<div className="text-center">
  <h1 className="font-gallient text-[70px] md:text-[90px] lg:text-[200px] flex justify-center items-start text-[#363636] m-0">
    CREA
    <span>
      <Image 
        src="/Hero.png" 
        height={80} 
        width={80} 
        className="md:h-[120px] md:w-[120px] lg:h-[180px] lg:w-[180px] sm:h-[100px] sm:w-[100px] min-w-[80px] min-h-[80px]"
      />
    </span>
    TIVE
  </h1>
  <h1 className="font-gallient text-[70px] md:text-[90px] lg:text-[200px] flex justify-center text-[#363636] m-0">
    UI/UX
  </h1>
  <h1 className="font-gallient text-[70px] md:text-[90px] lg:text-[200px] flex justify-center text-[#363636] m-0">
    DESIGNER
  </h1>
</div>


{/* Intro Section */}
<div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-20 bg-white py-4">
  <div className="w-full lg:w-[600px] mr-4 text-center lg:text-left">
    <p className="text-xl md:text-2xl lg:text-4xl font-gotu">
      With over three years of experience in design, I transform
      concepts into extraordinary projects through the realm of
      creativity and interactive design.
    </p>
  </div>
  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 lg:order-2">
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
          className="block w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>




      {/* Projects Section */}
      <div id="projects" className="pt-12">
      <h1 className="font-gallient text-6xl sm:text-[100px] md:text-[140px] lg:text-[200px] text-center text-[#1E1E1E]">
          SELECTED 
        </h1>
        <div className="flex gap-2 sm:gap-4 justify-center items-start pl-32 md:pl-96 lg:pl-96">
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-gallient text-[#1E1E1E]">
            PROJECTS
          </h3>
          <Image
            src="/Group 121.png"
            width={35}
            height={35}
            className="sm:w-[45px] sm:h-[45px] md:w-[55px] md:h-[55px]"
          />
        </div>
      </div>

      {/* Project List */}
      <div className="pt-32">
  <div className="flex justify-center items-center text-[#363636]">
    <div className="w-full px-4 md:px-8">
      {projects.map((project, index) => (
        <div key={index}>
          <hr />
          <div
            className="h-96 md:h-60 lg:h-60 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-16 xl:gap-28 font-SourceSerif p-4 md:p-6 text-center md:text-left relative group"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Title */}
            <div className="w-full md:w-2/3 lg:w-1/2">
              <h2 className="text-[24px] md:text-[40px] lg:text-[50px] xl:text-[60px]">{project.title}</h2>
            </div>

            {/* Container for the image and button */}
            <div className="relative w-full md:w-[800px] lg:w-[880px] h-full md:h-[400px] lg:h-[480px] overflow-hidden">
              <div
                className={`absolute inset-0 bg-slate-400 opacity-0 transition-opacity duration-100 ${hoveredProject === index ? "opacity-100" : ""}`}
              ></div>

              {hoveredProject === index && (
                <>
                  {/* Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                    <button className="bg-slate-700 text-white w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full z-10 text-xl md:text-2xl lg:text-3xl">
                      View
                    </button>
                  </div>

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover border-8 md:border-8 border-slate-200"
                    style={{ borderWidth: '35px' }}
                  />
                </>
              )}
            </div>

            {/* Project Description */}
            <p className="w-full md:w-1/3 lg:w-1/4 text-md md:text-lg lg:text-xl">{project.description}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  </div>
</div>






      {/* Contact Us Section */}
      <div className="p-4">
        <ContactUs />
      </div>
    </>
  );
}
