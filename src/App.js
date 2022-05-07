import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import "./App.css";
import Octahedron from "./shapes/Octahedron";
import Spin from "./actions/Spin";
import GenerateShapes from "./systems/GenerateShapes";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const App = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="gold" position={[0, 0, 5]} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls />

        <GenerateShapes amount={100} />
        {/* <Octahedron
            position={[0, 0, 0]}
            geometry={[0.5, 1]}
            color={"green"}
          />
          <Octahedron
            position={[10, 10, 10]}
            geometry={[2, 1]}
            color={"purple"}
          /> */}
      </Canvas>
    </div>
  );
};

export default App;

//create a realistic photo background world, then use individual data points to represent different spiritual aspects of the photo, rather through subentities that pop out of different regions of the photo or audio effects
