import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./round.css";
import { roundMenu } from "../utils/tailwindStyles/roundMenu";
import Info from "./Info";
import { cardContents } from "../constants";

const RoundM = () => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(null); // State to track the active card index
  const rotatorRef = useRef(null); // Ref for the rotator element
  const listItemsRef = useRef([]); // Ref for list items

  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Ensure elements exist before setting animations
    if (!rotatorRef.current) return;

    // Define the animation duration
    const duration = 7;
    const moveDistance = 200; // Adjust distance for left movement

    // Set initial transform origin for rotation
    gsap.set(rotatorRef.current, { transformOrigin: "center center" });
    gsap.set(listItemsRef.current, { transformOrigin: "center center" });

    // Create the rotation animation timeline
    const rotationTimeline = gsap.timeline({
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
      .from([rotatorRef.current, ...listItemsRef.current], {
        opacity: 0,
        delay: 0.1,
        scale: 2,
      })
      .to(rotatorRef.current, {
        duration: duration,
        rotation: "+=360", // Rotate a full circle
        repeat: -1,
        ease: "linear",
      })
      .to(
        listItemsRef.current,
        {
          duration: duration,
          rotation: "-=360", // Rotate in the opposite direction
          ease: "linear",
          repeat: -1,
        },
        0
      ); // Start both animations at the same time

    const handleCardAnimation = () => {
      gsap.to(rotatorRef.current, {
        x: `-=${moveDistance}`, // Move left
        scale: 0.5, // Decrease size
        duration: 0.6,
        ease: "power2.out",
      });
      // gsap.fromTo(
      //   ".info-card",
      //   {
      //     x: "100vw", // Start from the right
      //   },
      //   {
      //     x: "0",
      //     duration: 0.6,
      //     ease: "power2.out",
      //   }
      // );
    };

    // Use ScrollTrigger to start the animation when the rotator section comes into view
    ScrollTrigger.create({
      trigger: rotatorRef.current, // Element that triggers the animation
      start: "top 80%", // Start animation when the top of the rotator is 80% from the top of the viewport
      onEnter: () => rotationTimeline.play(), // Play the rotation animation on enter
      onLeave: () => rotationTimeline.pause(), // Pause the animation if scrolled away
      onEnterBack: () => rotationTimeline.play(), // Resume animation when scrolling back into view
      onLeaveBack: () => rotationTimeline.pause(), // Pause animation when scrolling back out of view
    });

    // Add hover event listeners to pause and resume the animation on list items
    listItemsRef.current.forEach(item => {
      item.addEventListener("mouseenter", () => {
        rotationTimeline.pause(); // Pause animation on hover
      });

      item.addEventListener("mouseleave", () => {
        rotationTimeline.play(); // Resume animation on mouse leave
      });
    });

    // Cleanup function to remove event listeners and reset animations
    return () => {
      listItemsRef.current.forEach(item => {
        item.removeEventListener("mouseenter", () => rotationTimeline.pause());
        item.removeEventListener("mouseleave", () => rotationTimeline.play());
      });
      ScrollTrigger.kill(); // Cleanup ScrollTrigger instances
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to handle list item click
  const handleClick = index => {
    // Trigger the card animation
    // handleCardAnimation();
    gsap.to(rotatorRef.current, {
      x: -500, // Move the rotator to the left
      scale: 0.6, // Decrease size
      duration: 0.5,
      ease: "power1.inOut",
    });

    setVisibleCardIndex(index); // Set the index of the visible card based on the clicked item

    gsap.to(".info-card", {
      opacity: 0,
    });
  };

  return (
    <div className='h-[120vh] flex bg-gradient-to-t from-light-creamy-pink via-light-pink to-dark-Pink items-center justify-center relative'>
      {/* Removed buttons for clarity */}

      {/* Center Circle */}
      <div className='circleMid bg-transparent rounded-full border-black border-t-2 border-b-4 h-[10vh] w-[10vh] absolute z-10'></div>

      {/* Rotating Circle Container */}
      <div className='relative'>
        <ul
          ref={rotatorRef}
          className='rotator h-[60vh] w-[60vh] border-white border-t-4 rounded-full border-b-4 text-transparent flex items-center justify-center relative'
        >
          {/* List Items */}
          {cardContents.map((content, index) => (
            <li
              key={index}
              className={`${roundMenu.list} ${content.className}`} // Use dynamic class names
              onClick={() => handleClick(index)} // Handle click to show the corresponding card
              ref={el => (listItemsRef.current[index] = el)} // Assign ref to each list item
            >
              <a href='#'>
                <span>{index + 1}</span> {/* Display item number or custom text */}
              </a>
            </li>
          ))}
        </ul>
        {visibleCardIndex !== null && (
          <Info
            className='info-card'
            title={cardContents[visibleCardIndex].title}
            description={cardContents[visibleCardIndex].description}
            LearnMore={cardContents[visibleCardIndex].LearnMore}
            src={cardContents[visibleCardIndex].src}
            alt={cardContents[visibleCardIndex].alt}
            url={cardContents[visibleCardIndex].url}
            isVisible={true} // Always true since this component only renders if a card is selected
          />
        )}
      </div>
    </div>
  );
};

export default RoundM;
