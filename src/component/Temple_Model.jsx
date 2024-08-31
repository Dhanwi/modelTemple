import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TempModel } from "./Temple21";

const Scene = () => {
  const modelRef = useRef();

// Use a variable to control movement
let positionIncrement = 100; // Small increment to move the model

// Continuous updates using useFrame
useFrame((state, delta) => {
  if (modelRef.current) {
    // Rotate around the Y axis slowly
    modelRef.current.rotation.y += 0.01; 

    // Incrementally change position to simulate smooth movement
    modelRef.current.position.x += positionIncrement; 

    // Example: Change scale smoothly
    modelRef.current.scale.x = 100 + Math.sin(state.clock.elapsedTime) * 0.5;
    modelRef.current.scale.y = 5 + Math.sin(state.clock.elapsedTime) * 0.5;
    modelRef.current.scale.z = 100 + Math.sin(state.clock.elapsedTime) * 0.5;

    // Add logic to reset position or limit the movement
    if (modelRef.current.position.x > 5 || modelRef.current.position.x < -5) {
      positionIncrement = -positionIncrement; // Reverse direction when it hits a limit
    }
  }
});


  return (
    <>
      {/* Applying ref to the TempModel */}
      <TempModel ref={modelRef} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  );
};

const Temple_Model = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ fov: 70, position: [0, 0, 10] }} style={{ width: '100%', height: '100%' }}>
        <OrbitControls autoRotate={true} />
        <Scene />
      </Canvas>
    </div>
  );
};

export default Temple_Model;
