import React from 'react';
import { MdArrowRight } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Link as ScrollLink, scroller } from 'react-scroll';  // Import scroller from react-scroll

function NavBar() {
  const router = useRouter(); 

  const isActiveRoute = (path) => router.pathname === path;

  // Function to handle scroll navigation, even when on a different page
  const handleScrollToSection = (section) => {
    if (router.pathname !== '/') {
      // Navigate to home and then scroll to the section after the page loads
      router.push('/').then(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
        });
      });
    } else {
      // If already on the home page, scroll directly
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }
  };

  return (
    <div className='flex justify-between pt-2 pl-4 pr-4'>
      <h1 className='font-gallient font-thin text-base'>ASHNA MONGA</h1>
      <div className='flex flex-col font-gallient'> 
      
        {/* Home */}
        <div className='flex items-center gap-1'> 
          <MdArrowRight className={`text-2xl ${isActiveRoute('/') ? 'text-black' : 'text-white'}`} />
          <Link href='/' className='text-left'>HOME</Link>
        </div>

        {/* About */}
        <div className='flex items-center gap-1'> 
          <MdArrowRight className={`text-2xl ${isActiveRoute('/AboutUs') ? 'text-black' : 'text-white'}`} />
          <Link href='/AboutUs' className='text-left'>ABOUT</Link>
        </div>

        {/* Projects */}
        <div className='flex items-center gap-1'> 
          <MdArrowRight className={`text-2xl ${router.asPath === '/#projects' ? 'text-black' : 'text-white'}`} />
          <div
            className='cursor-pointer text-left'
            onClick={() => handleScrollToSection("projects")}
          >
            PROJECTS
          </div>
        </div>

        {/* Contact */}
        <div className='flex items-center gap-1'> 
          <MdArrowRight className={`text-2xl ${router.asPath === '/#contact' ? 'text-black' : 'text-white'}`} />
          <div
            className='cursor-pointer text-left'
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
