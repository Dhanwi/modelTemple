import React from "react";
import { navLists, navSideLists } from "../constants";

const Navbar = () => {
  return (
    <div className=' w-full py-5 sm:px-10 px-5 flex justify-between items-center text-center '>
      <div>navbar</div>
      <div className='flex flex-1 justify-center max-sm:hidden'>
        {navLists.map(nav => {
          <div key={nav} className=' px-5 text-sm cursor-pointer transition-all font-bold text-white'>
            {nav}
          </div>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
