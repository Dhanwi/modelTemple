// RoundMenu.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Function to initialize GSAP animations
export const initRoundMenuAnimation = (rotatorRef, listItemsRef, setVisibleCardIndex) => {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Ensure elements exist before setting animations
  if (!rotatorRef.current) return;

  // Define the animation duration
  const duration = 7;

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
      duration: 5,
      opacity: 0,
      ease: "none",
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

  // Function to handle list item click
  const handleClick = index => {
    // Trigger the card animation and set visible card index
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

  return handleClick;
};
