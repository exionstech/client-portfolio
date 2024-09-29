import React from 'react';
import { FaCaretRight } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();  // Get current route information

  return (
    <div className='flex justify-between pt-2 pl-4 pr-4'>
      <h1 className='font-gallient font-thin text-base'>ASHNA MONGA</h1>
      <div>
        <ul>
          <li className='font-gallient font-thin flex items-center mr-2'>
            {router.pathname === '/' && <FaCaretRight  />} 
            <Link href="/">
              HOME
            </Link>
          </li>
          <li className='font-gallient font-thin flex items-center mr-2'>
            {router.pathname === '/AboutUs' && <FaCaretRight />} 
            <Link href="/AboutUs">
              ABOUT 
            </Link>
          </li>
          <li className='font-gallient font-thin flex items-center mr-2' >
            {router.pathname === '/#projects' && <FaCaretRight  />} 
            <Link href="/#projects">
              PROJECTS
            </Link>
          </li>
          <li className='font-gallient font-thin flex items-center"mr-2'>
            {router.pathname === '/#contact' && <FaCaretRight  />} 
            <Link href="/#contact">
              CONTACT 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
