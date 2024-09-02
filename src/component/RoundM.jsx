import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./round.css";
import { roundMenu } from "../utils/tailwindStyles/roundMenu";

const RoundM = () => {
  const listRef = useRef();
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Define the animation duration
  const duration = 7;

  // Set initial transform origin for rotation
  gsap.set(".rotator, .rotator li", { transformOrigin: "center center" });

  // Create the rotation animation timeline
  const rotationTimeline = gsap.timeline({
    // repeat: -1, // Infinite repeat
    paused: true, // Start paused; will be triggered by ScrollTrigger
  });

  // Define the animation for rotating the .rotator and its list items
  rotationTimeline
    .to(".circleMid", {
      rotation: "+=360",
      scale: 3,
      duration: 10,
      opacity: 0,
      ease: "sine.in",
    })
    .from([".rotator", ".rotator li"], {
      opacity: 0,
      delay: 0.1,
      scale: 2,
    })
    .to(".rotator", {
      duration: duration,
      rotation: "+=360", // Rotate a full circle
      repeat: -1,

      ease: "linear",
    })
    .to(
      ".rotator li",
      {
        duration: duration,
        rotation: "-=360", // Rotate in the opposite direction
        ease: "linear",
        repeat: -1,
      },
      0
    ); // Start both animations at the same time

  // Use ScrollTrigger to start the animation when the rotator section comes into view
  ScrollTrigger.create({
    trigger: ".rotator", // Element that triggers the animation
    start: "top 80%", // Start animation when the top of the rotator is 80% from the top of the viewport
    onEnter: () => rotationTimeline.play(), // Play the rotation animation on enter
    onLeave: () => rotationTimeline.pause(), // Pause the animation if scrolled away
    onEnterBack: () => rotationTimeline.play(), // Resume animation when scrolling back into view
    onLeaveBack: () => rotationTimeline.pause(), // Pause animation when scrolling back out of view
  });

  // Add hover event listeners to pause and resume the animation on list items
  document.querySelectorAll(".rotator li").forEach(item => {
    item.addEventListener("mouseenter", () => {
      rotationTimeline.pause(); // Pause animation on hover
    });

    item.addEventListener("mouseleave", () => {
      rotationTimeline.play(); // Resume animation on mouse leave
    });
  });

  return (
    <div className='h-[120vh] bg-slate-800 flex items-center justify-center relative'>
      {/* Removed buttons for clarity */}

      {/* Center Circle */}
      <div className='circleMid bg-transparent rounded-full border-black border-t-2 border-b-4 h-[10vh] w-[10vh] absolute z-10'></div>

      {/* Rotating Circle Container */}
      <div className='relative'>
        <ul className='rotator h-[60vh] w-[60vh] border-white border-t-4 rounded-full border-b-4 text-transparent flex items-center justify-center relative'>
          {/* List Items */}
          <li className={`${roundMenu.list} m1`}>
            <a href='/'>
              <span>1</span>
            </a>
          </li>
          <li className={`${roundMenu.list} m2`}>
            <a href='/'>
              <span>2</span>
            </a>
          </li>
          <li className={`${roundMenu.list} m3`}>
            <a href='/'>
              <span>3</span>
            </a>
          </li>
          <li className={`${roundMenu.list} m4`}>
            <a href='/'>
              <span>4</span>
            </a>
          </li>
          <li className={`${roundMenu.list} m5`}>
            <a href='/'>
              <span>5</span>
            </a>
          </li>
          <li className={`${roundMenu.list} m6`}>
            <a href='/'>
              <span>6</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoundM;
