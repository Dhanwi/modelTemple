// File: components/Hero.jsx

import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Temple_Model from "./Temple_Model";
import heroGsap from "../utils/GSAP_animation/heroGsap";

// Import Tailwind classes
import { heroStyles } from "../utils/tailwindStyles/heroStyles";


const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const cleanup = heroGsap(heroRef); // Initialize GSAP animations

    return () => cleanup(); // Cleanup animations on unmount
  }, []);

  return (
    <div className={heroStyles.container}>
      {/* Navbar */}
      <div className={heroStyles.navbarWrapper}>
        <Navbar />
      </div>

      {/* 3D Model Section */}
      <div id='model' style={{ width: "100vw", height: "75vh" }} className={heroStyles.modelWrapper}>
        {/* <Temple_Model /> */}
      </div>

      {/* Overlay Section */}
      <div
        className={heroStyles.overlay}
        style={{ backgroundColor: "rgba(100, 116, 139, 60%)" }} // Inline styles for transparency
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
      </div>
    </div>
  );
};

export default Hero;
