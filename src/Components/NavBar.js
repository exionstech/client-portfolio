import React from 'react';
import { MdArrowRight } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter(); 


  const isActiveRoute = (path) => router.pathname === path;

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
          <MdArrowRight className={`text-2xl ${isActiveRoute('/#projects') ? 'text-black' : 'text-white'}`} />
          <Link href='/#projects' className='text-left'>PROJECTS</Link>
        </div>

        {/* Contact */}
        <div className='flex items-center gap-1'> 
          <MdArrowRight className={`text-2xl ${isActiveRoute('/#contact') ? 'text-black' : 'text-white'}`} />
          <Link href='/#contact' className='text-left'>CONTACT</Link>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
