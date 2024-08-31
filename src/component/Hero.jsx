import React, { useRef } from "react";
import Navbar from "./Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Temple_Model from "./Temple_Model";

const Hero = () => {
  const heroRef = useRef();
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(heroRef.current, {
      opacity: 0,

      scale: 10,
      rotateY: 360,
      // z:-6,
      // repeat:1,
      duration: 3,
      delay: 1,
    });
    tl.to(heroRef.current, {
      x: 550,
      y: -90,
      rotateY: 360,
      duration: 3,
      scale: 1,
      opacity: 10,
    });
  });

  

  return (
    <div className="bg-[url('/assets/image/redMountain.jpg')] lg:bg-[url('/assets/image/mountain_crop.jpg')] bg-cover bg-no-repeat bg-fixed h-[200vh] overflow-hidden ">
      {/* <img src="/assets/image/pinkCloud.jpg" alt="Background" /> */}
      <div className="fixed">
        <Navbar />
      </div>
      <div id="model" style={{ width: '100vw', height: '100vh' }} className="items-center mt-44">
      <Temple_Model />
      </div>
      <div
        className=' bg-slate-900 h-[70vh] ml-4 mr-4 rounded-tl-3xl rounded-tr-3xl -z-10 border-y-white border-t-8'
        style={{ backgroundColor: "rgba(100, 116, 139, 60%)" }}
      >
        {/* here 60% means, 60% transparent */}
        <div style={{ width: '100vw', height: '100vh' }}>
          <Temple_Model />
        </div>

        <div ref={heroRef} className='z-20 flex flex-col h-[80vh] items-center text-transparent'>
          <div className='flex'>
            <div className='bg-custom-gradient opacity-100 h-[10vh] w-[14vh] ml-4 mr-0 rounded-tl-3xl rounded-tr-full rounded-bl-full border-white border-t-4'>
              <p>hello there, a</p>
            </div>
            <div className='bg-custom-gradient opacity-100 h-[10vh] w-[14vh] ml-4 mr-0 rounded-tl-full rounded-tr-3xl rounded-br-full border-white border-t-4'>
              <p>hello there, a</p>
            </div>
          </div>
          <div className='bg-custom-gradient opacity-100 h-[5vh] w-[5vh] items-center text-center text-transparent ml-4 rounded-t-full rounded-b-full border-white border-t-4'>
            {" "}
            <p>helooo</p>
            <br />
          </div>
          <div className='flex'>
            <div className='bg-custom-gradient opacity-100 h-[6vh] w-[4vh] ml-4 mr-0 rounded-tl-full rounded-br-full border-white border-b-4'>
              <p>hello there, a</p>
            </div>
            <div className='bg-custom-gradient opacity-100 h-[6vh] w-[4vh] ml-4 mr-0 rounded-tl-3xl rounded-tr-full rounded-bl-full border-white border-b-4'>
              <p>hell0 there, a</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
