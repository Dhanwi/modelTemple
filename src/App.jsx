import React from "react";

import Hero from "./component/Hero";

import TestAnimation from "./utils/GSAP_animation/TestAnimation";

import Info from "./component/Info";
import RoundM from "./component/RoundM";

const App = () => {
  return (
    <>
      <Hero />
      {/* <Info /> */}
      <RoundM />
      <TestAnimation />
    </>
  );
};

export default App;
