import React, { useRef } from "react";
import { navLists, navSideLists } from "../constants";
import { ShivJiLogo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const shivRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(shivRef.current, {
      opacity: 0,
      scale: 2,
      duration: 1,
      delay: 1,
      rotateY: 360,
    });

    // tl.to('#shivJiLogo' , {
    //   duration:1,
    //   scale:2,
    //   delay:1,

    // })
  });

  return (
    <div className='w-full py-5 sm:px-10 px-5 flex justify-between items-center text-center fixed'>
      <div
        ref={shivRef}
        className='object-cover flex items-center h-10 w-10 sm:w-12 sm:h-12 md:h-20 md:w-20 lg:h-20 lg:w-20 shadow-md shadow-dark-Pink rounded-full hover:shadow-6xl hover:shadow-white border-t-2 border-b-4 border-white cursor-pointer focus:ring focus:ring-gray-50 mr-8'
      >
        <img src={ShivJiLogo} className='w-full h-full object-cover rounded-full' />
      </div>
      <div className='flex flex-grow justify-center max-sm:hidden'>
        <div className='flex flex-row items-center '>
          {navLists.map(nav => (
            <div
              key={nav}
              className=' ml-2 lg:ml-5 text-xs lg:text-sm cursor-pointer transition-all font-normal lg:font-bold md:font-semibold text-white'
            >
              {nav}
            </div>
          ))}
        </div>
        <div className=' md:flex-row items-center md:ml-8 lg:ml-16 ml-3 hidden md:flex'>
          {navSideLists.map(nav => (
            <div key={nav} className=' text-xs lg:text-sm cursor-pointer transition-all md:font-semibold font-normal mr-3 text-white'>
              {nav}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
