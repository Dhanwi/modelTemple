// File: animations/heroGsap.js

import gsap from "gsap";

// Define a function that sets up GSAP animations
const heroGsap = heroRef => {
  const tl = gsap.timeline();

  // Use GSAP's matchMedia for responsive animations
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    // Large screen animations (lg and above)
    tl.from(heroRef.current, {
      opacity: 0,
      scale: 10,
      rotateY: 360,
      duration: 3,
      delay: 1,
    }).to(heroRef.current, {
      x: 480,
      y: -90,
      rotateY: 360,
      duration: 3,
      scale: 1,
      opacity: 1,
    });
  });

  mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
    // Medium screen animations (md)
    tl.from(heroRef.current, {
      opacity: 0,
      scale: 8,
      rotateY: 360,
      duration: 3,
      delay: 1,
    }).to(heroRef.current, {
      x: 350, // Less x value for md
      y: -90,
      rotateY: 360,
      duration: 3,
      scale: 1,
      opacity: 1,
    });
  });

  mm.add("(max-width: 767px)", () => {
    // Small screen animations (sm and below)
    tl.from(heroRef.current, {
      opacity: 0,
      scale: 5,
      rotateY: 360,
      duration: 3,
      delay: 1,
    }).to(heroRef.current, {
      x: 180, // Even less x value for sm
      y: -45,
      rotateY: 360,
      duration: 3,
      scale: 1,
      opacity: 1,
    });
  });

  // Cleanup GSAP matchMedia on unmount
  return () => mm.revert();
};

export default heroGsap;
