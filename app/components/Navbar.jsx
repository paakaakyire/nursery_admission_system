'use client';

import React, { useState } from 'react'
import { navbarLinks } from '../constants'
import Link from 'next/link';
import { LuMenu } from "react-icons/lu";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header>
        <nav className="nav">
            <Link href={"/"} className="text-2xl font-bold">Nursery</Link>
             <div className="links_lable">
                 {navbarLinks.map((item) => (
                   <Link className='text-[#222]' href={item.link} key={item.name}>
                      {item.name}
                   </Link>
                 ))}
             </div>
              <div className="flex gap-8 items-center">
              <Link className='bg-blue-700 text-white text-[1.05rem] rounded-md py-[0.45rem] px-[1.5rem] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-blue-700' href={"/login"}>Login</Link>
              <Link className='bg-indigo-700 text-white text-[1.05rem] rounded-md py-[0.45rem] px-[1.2rem] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-indigo-700' href={"/register"}>Register</Link>
              </div>

              {/* mobile screens */}

              <div className="hidden">
            {menu 
              ? <GrClose className='cursor-pointer' size={24} onClick={() => setMenu(false)}/>
              : <LuMenu className='cursor-pointer' size={24} onClick={() => setMenu(true)}/>
             }
             {menu && (
               <div className='slideInRight'>
                   {navbarLinks.map((item) => (
                   <Link className='text-[#222]' href={item.link} key={item.name}>
                      {item.name}
                   </Link>
                 ))}
                 <div className="flex gap-8 items-center">
              <Link className='bg-blue-700 text-white text-[1.05rem] rounded-md py-[0.45rem] px-[1.5rem] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-blue-700' href={"/login"}>Login</Link>
              <Link className='bg-indigo-700 text-white text-[1.05rem] rounded-md py-[0.45rem] px-[1.2rem] hover:bg-gradient-to-tr hover:from-orange-700 hover:to-indigo-700' href={"/register"}>Register</Link>
              </div>
               </div>
             )}
        </div>
        </nav>
    </header>
  )
}

export default Navbar