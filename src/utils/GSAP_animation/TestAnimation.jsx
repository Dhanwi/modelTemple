import { useRef } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

gsap.registerPlugin(useGSAP);

export default function TestAnimation() {
  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".box", { rotation: 360 }); // <-- automatically reverted
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <div ref={container} className='w-40 h-40 bg-white text-black font-black text-center -z-10'>
      <div className='box text-6xl'>Hello</div>
    </div>
  );
}
