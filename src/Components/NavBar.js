import React from 'react';
import { MdArrowRight } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';  

function NavBar() {
  const router = useRouter(); 

  const isActiveRoute = (path) => router.pathname === path;

  const handleScrollToSection = (section) => {
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
        });
      });
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }
  };

  return (
    <div className=' right-0 flex justify-between backdrop-blur-sm z-50 p-4'>
      <h1 className='font-gallient font-thin text-base sm:text-lg md:text-xl lg:text-2xl'>ASHNA MONGA</h1>
      <div className='flex flex-col font-gallient'> 
        
        {/* Home */}
        <div className='flex items-center gap-1'> 
          <MdArrowRight className={`text-2xl ${isActiveRoute('/') ? 'text-black' : 'text-white'}`} />
          <Link href='/' className='text-left text-base sm:text-lg md:text-xl lg:text-2xl'>HOME</Link>
        </div>

        {/* About */}
        <div className='flex items-center gap-1'> 
          <MdArrowRight className={`text-2xl ${isActiveRoute('/AboutUs') ? 'text-black' : 'text-white'}`} />
          <Link href='/AboutUs' className='text-left text-base sm:text-lg md:text-xl lg:text-2xl'>ABOUT</Link>
        </div>

        {/* Projects */}
        <div className='flex items-center gap-1'> 
          <MdArrowRight className={`text-2xl ${router.asPath === '/#projects' ? 'text-black' : 'text-white'}`} />
          <div
            className='cursor-pointer text-left text-base sm:text-lg md:text-xl lg:text-2xl'
            onClick={() => handleScrollToSection("projects")}
          >
            PROJECTS
          </div>
        </div>

        {/* Contact */}
        <div className='flex items-center gap-1'> 
          <MdArrowRight className={`text-2xl ${router.asPath === '/#contact' ? 'text-black' : 'text-white'}`} />
          <div
            className='cursor-pointer text-left text-base sm:text-lg md:text-xl lg:text-2xl'
            onClick={() => handleScrollToSection("contact")}
          >
            CONTACT
          </div>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
