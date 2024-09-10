import React, { useRef, useEffect } from "react"; // Ensure useEffect is imported
import gsap from "gsap";

const Info = ({ title, description, LearnMore, src, alt, url, isVisible }) => {
  const infoRef = useRef();

  useEffect(() => {
    if (isVisible) {
      // Create animation when card becomes visible
      const card = gsap.timeline();
      card.fromTo(
        infoRef.current,
        {
          x: 600,
          opacity: 0,
        },

        { x: 160, y: -200, z: 0, opacity: 1, duration: 0.4, ease: "power1.out", scale: 1.4 }
      );
    } else {
      // Optionally, reset animation or remove any GSAP effects
      gsap.set(infoRef.current, { clearProps: "all" });
    }
  }, [isVisible]); // Trigger animation on visibility change

  // If not visible, don't render the component
  if (!isVisible) return null;

  return (
    <div
      ref={infoRef}
      className='bg-dark-Pink hover:bg-light-pink opacity-5 border-t-2 border-b-4 border-white h-[50vh] w-[40vh] hover:border-t-4 hover:border-b-8 hover:border-s-dark-Pink rounded-tl-3xl rounded-br-3xl shadow-black shadow-2xl hover:shadow-2xl hover:shadow-white'
    >
      <div className='flex flex-col justify-center items-center'>
        <div className='text-white text-lg font-black mt-6 mb-5'>
          <h5>{title}</h5>
        </div>
        <div className='h-[10vh] w-[20vh] rounded-t-3xl rounded-b-xl border-white border-l-2 border-r-2 shadow-md shadow-pink-800 hover:shadow-lg hover:shadow-dark-Pink hover:border-t-2 hover:border-b-2 hover:border-t-light-pink hover:border-transparent mb-4 relative overflow-hidden'>
          <img src={src} alt={alt} className='w-full h-full object-cover' />
        </div>

        <div className='flex items-center text-center mt-2 text-sm font-bold px-3 text-balance text-white hover:text-dark-Pink'>
          <p>{description}</p>
        </div>
        {/* Updated the onClick handler to open the URL */}
        <button
          className='mt-5 font-bold text-xs text-white shadow-sm shadow-light-creamy-pink hover:shadow-white hover:shadow-md rounded-t-3xl rounded-b-3xl border-2 border-light-creamy-pink w-[14vh] hover:text-dark-Pink'
          onClick={() => window.open(url, "_blank")}
        >
          {LearnMore}
        </button>
      </div>
    </div>
  );
};

export default Info;
