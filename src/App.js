import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import "./App.css";
import Octahedron from "./shapes/Octahedron";
import Sun from "./shapes/Sun";
import CubeBox from "./shapes/CubeBox";
import Spin from "./actions/Spin";
import GenerateShapes from "./systems/GenerateShapes";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const App = () => {
  const lightSourcePosition = 200;
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="gold" position={[0, 0, lightSourcePosition]} />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, lightSourcePosition / 2]}
        />
        <OrbitControls />
        <Sun lightSourcePosition={lightSourcePosition} color={"orange"} />
        <GenerateShapes
          amount={100}
          shape={"Octahedron"}
          positionRange={[-15, 15]}
          geometryRange={[1, 3]}
        />

        <GenerateShapes
          amount={50}
          shape={"CubeBox"}
          positionRange={[-40, -25]}
          geometryRange={[1, 3]}
        />
      </Canvas>
    </div>
  );
};

export default App;

//create a realistic photo background world, then use individual data points to represent different spiritual aspects of the photo, rather through subentities that pop out of different regions of the photo or audio effects

{
  /* <Octahedron
            position={[0, 0, 0]}
            geometry={[0.5, 1]}
            color={"green"}
          />
          <Octahedron
            position={[10, 10, 10]}
            geometry={[2, 1]}
            color={"purple"}
          /> */
}
