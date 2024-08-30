import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Temple_Model from "./component/Temple_Model";
import TestAnimation from "./utils/GSAP_animation/TestAnimation";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Temple_Model />
      <TestAnimation />
    </>
  );
};

export default App;
