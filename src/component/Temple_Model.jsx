import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TempModel } from "./Temple21";

const Scene = () => {
  const modelRef = useRef();

  // Rotate the model
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.02; // Adjust rotation speed as needed
    }
  });

  return (
    <>
      {/* Ref applied to the model */}
      {/* <Model ref={modelRef} /> */}
      <TempModel ref={modelRef} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  );
};

const Temple_Model = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 10] }}>
      <OrbitControls autoRotate={false} />
      <Scene />
    </Canvas>
  );
};

export default Temple_Model;
