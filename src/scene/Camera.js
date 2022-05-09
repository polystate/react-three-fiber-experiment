import React, { useRef, useEffect, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";

const Camera = (props) => {
  const { lightSourcePosition } = props;
  const startPosition = [0, 0, lightSourcePosition / 2];
  const orbitControlsRef = useRef();
  const [currentPosition, updatePosition] = useState(startPosition);

  // useFrame((state) => {
  //   if (orbitControlsRef.current.update()) {

  //     console.log(orbitControlsRef.current.target);
  //   }

  // updatePosition(orbitControlsRef.current.target);
  //USE THREE() to conver tto three JS and use getDistance() method for simplification
  //also ask how to keep useEffect going over and over
  useEffect(() => {
    console.log(orbitControlsRef.current.target);
    updatePosition(orbitControlsRef.current.target);
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={startPosition} />
      <OrbitControls ref={orbitControlsRef} />
    </>
  );
};

export default Camera;
