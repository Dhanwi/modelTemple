import React from "react";

import Hero from "./component/Hero";

import TestAnimation from "./utils/GSAP_animation/TestAnimation";

import Info from "./component/Info";
import RoundM from "./component/RoundM";
import Section3 from "./component/Section3";

const App = () => {
  return (
    <>
      <Hero />
      <Info />
      <RoundM />
      <Section3 />
      <TestAnimation />
    </>
  );
};

export default App;
