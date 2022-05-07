import React, { useRef, children } from "react";
import { canvas, useFrame } from "@react-three/fiber";

const Spin = () => {
  const myMesh = useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
    myMesh.current.rotation.y = Math.cos(clock.getElapsedTime());
    myMesh.current.position.x = Math.sin(clock.getElapsedTime());
  });
  return <group ref={myMesh}>{children}</group>;
};

export default Spin;
