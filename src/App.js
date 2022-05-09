import { Canvas } from "@react-three/fiber";
import "./App.css";
import Sun from "./shapes/Sun";
import Spin from "./actions/Spin";
import GenerateShapes from "./systems/GenerateShapes";
import Camera from "./scene/Camera";
import React, { useFrame } from "react";

const App = () => {
  const lightSourcePosition = 200;

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="gold" position={[0, 0, lightSourcePosition]} />
        <Camera lightSourcePosition={lightSourcePosition} />
        <Sun lightSourcePosition={lightSourcePosition} color={"orange"} />
        <Spin>
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
        </Spin>
        <GenerateShapes
          amount={50}
          shape={"Octahedron"}
          positionRange={[25, 125]}
          geometryRange={[2, 4]}
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
