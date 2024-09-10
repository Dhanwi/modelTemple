// File: components/Hero.jsx

import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Temple_Model from "./Temple_Model";
import heroGsap from "../utils/GSAP_animation/heroGsap";

// Import Tailwind classes
import { heroStyles } from "../utils/tailwindStyles/heroStyles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef();
  const imgRef = useRef();
  const imgRef1 = useRef();
  const sunRef = useRef();
  const paraRef = useRef();
  const para1ref = useRef();
  const para2ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cleanup = heroGsap(heroRef); // Initialize GSAP animations

    const imgtl = gsap.timeline();
    const img1tl = gsap.timeline();
    const suntl = gsap.timeline();
    const para1tl = gsap.timeline({
      yoyo: true,
      repeat: -1,
    });
    const para2tl = gsap.timeline({
      yoyo: true,
      repeat: -1,
    });

    // Image Timeline (Mountain)
    img1tl
      .from(imgRef1.current, {
        opacity: 0,
        y: 400,
        x: 200,
        duration: 3,
        scale: 2,
      })
      .to(imgRef1.current, {
        opacity: 0.9,
        y: 350,
        scale: 1.3,
        duration: 6,
      })
      .to(imgRef1.current, {
        x: 220,
        opacity: 1,
        duration: 20,
        ease: "power1.inOut",
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse back
      });
    imgtl
      .from(imgRef.current, {
        opacity: 0,
        y: 500,
        x: 200,
        duration: 3,
        scale: 2,
      })
      .to(imgRef.current, {
        opacity: 0.7,
        y: 250,
        scale: 1.3,
        duration: 6,
      })
      .to(imgRef.current, {
        x: 220,
        opacity: 1,
        duration: 25,
        ease: "power1.inOut",
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse back
      });

    // Sun Timeline
    suntl
      .from(sunRef.current, {
        opacity: 0, // Keep it at 0 for a longer time
        y: 200,
        scale: 0.5,
        duration: 10, // Increased to give the mountain more time
      })
      .to(sunRef.current, {
        opacity: 0.9, // Sun comes in after mountain starts moving
        y: 20,
        scale: 1.2,
        duration: 5,
        ease: "power2.out", // Smooth easing
      })
      .to(sunRef.current, {
        rotate: 360,
        repeat: -1, // Infinite rotation
        yoyo: true, // Reverse the rotation
        duration: 25,
        scale: 1.4,
        ease: "linear",
      });

    para1tl
      .from(para1ref.current, {
        opacity: 1,
        x: 50,
        duration: 13,
        delay: 0.1,
      })
      .to(para1ref.current, {
        opacity: 0,
        x: -150,
        duration: 5,
        // yoyo: true,
      });

    para2tl
      .from(para2ref.current, {
        opacity: 1,
        x: -150,
        duration: 13,
        delay: 0.1,
      })
      .to(para2ref.current, {
        opacity: 0,
        x: 50,
        duration: 5,
        // yoyo: true,
      });

    return () => {
      ScrollTrigger.kill();
      cleanup();
    }; // Cleanup animations on unmount
  }, []);

  return (
    <div className={heroStyles.container}>
      {/* Animated Image as Background */}
      <div ref={imgRef} className='w-full h-full fixed bottom-16 left-0 z-0 flex overflow-hidden'>
        <img src='/assets/image/mountain_range.png' className='object-cover' />

        <img src='/assets/image/mountain_range.png' className='object-cover rotate-180 mt-11' />
        <img src='/assets/image/mountain_range.png' className='object-cover rotate-180 mt-11' />
      </div>

      <div ref={imgRef1} className='w-full h-full fixed bottom-16 left-0 z-0 flex overflow-hidden'>
        <img src='/assets/image/mountain_range.png' className='object-cover' />

        <img src='/assets/image/mountain_range.png' className='object-cover rotate-180 mt-11' />
        <img src='/assets/image/mountain_range.png' className='object-cover rotate-180 mt-11' />
      </div>

      {/* Sun and Clouds */}
      <div className=' absolute top-32 left-1/2 transform -translate-x-1/2 -z-55'>
        <img ref={sunRef} src='/assets/image/sun.png' className=' w-[15vw] h-[15vw]' />
      </div>

      {/* Navbar */}
      <div className={`${heroStyles.navbarWrapper} z-10 relative`}>
        <Navbar />
      </div>

      {/* 3D Model Section */}
      <div id='model' style={{ width: "100vw", height: "90vh" }} className={heroStyles.modelWrapper}>
        {/* <Temple_Model /> */}
      </div>

      {/* Overlay Section */}
      <div
        ref={paraRef}
        className={heroStyles.overlay}
        style={{ backgroundColor: "rgba(255, 8, 68, 20%)" }}
        // Inline styles for transparency
      >
        <div ref={heroRef} className={heroStyles.heroSection}>
          <div className='flex'>
            <div className={heroStyles.customBox1}>
              <p>hello there, a</p>
            </div>
            <div className={heroStyles.customBox2}>
              <p>hello there, a</p>
            </div>
          </div>

          <div className={heroStyles.customCircle}>
            <p>helooo</p>
          </div>

          <div className='flex'>
            <div className={heroStyles.customBox3}>
              <p>hello there, a</p>
            </div>
            <div className={heroStyles.customBox4}>
              <p>hello there, a</p>
            </div>
          </div>
        </div>
        <div className=' text-balance items-end text-right justify-between text-white flex flex-col mr-6 z-10'>
          <p ref={para1ref} className='para1 font-semibold flex text-lg text-white mr-7  '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis
            euismod malesuada. Nullam ac magna bibendum, dictum elit sit amet, tristique lorem. Praesent at ante vel odio consequat tempus.
            Sed facilisis leo sit amet nibh efficitur, ut congue lorem vehicula. Etiam vehicula neque et est aliquam, ut facilisis eros
            ultrices.
          </p>
          <p ref={para2ref} className=' para2 font-semibold flex text-lg text-white mt-5 mr-7'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin accumsan metus at dolor commodo,
            non tempor nulla convallis. Suspendisse potenti. Fusce euismod consequat risus, ac pretium sapien cursus ut. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
