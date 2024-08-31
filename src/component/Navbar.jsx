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
        className='object-cover items-center h-10 w-10 sm:h-15 sm:w-15 lg:h-20 lg:w-20 shadow-lg shadow-red-200 rounded-full hover:shadow-2xl hover:shadow-white cursor-pointer'
      >
        <img src={ShivJiLogo} />
      </div>
      <div className='flex justify-center max-sm:hidden'>
        <div className='flex flex-row items-center '>
          {navLists.map(nav => (
            <div key={nav} className=' px-5 text-xs md:text-sm cursor-pointer transition-all font-bold text-white'>
              {nav}
            </div>
          ))}
        </div>
        <div className='flex flex-row items-center ml-10'>
          {navSideLists.map(nav => (
            <div
              key={nav}
              className='px-3 text-xs md:text-sm cursor-pointer transition-all font-bold shadow-md shadow-white mr-5 text-white'
            >
              {nav}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
