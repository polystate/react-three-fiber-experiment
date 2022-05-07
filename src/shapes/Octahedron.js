import React, { useRef, useState } from "react";
import { canvas, useFrame } from "@react-three/fiber";

const Octahedron = (props) => {
  const { position, geometry, color } = props;
  const myMesh = useRef();
  // useFrame(() => {
  //   myMesh.current.rotation.x += 0.01;
  //   myMesh.current.rotation.y += 0.01;
  //   myMesh.current.rotation.z += 0.01;
  //   // myMesh.current.position.x -= 0.01;
  //   // myMesh.current.position.y += 0.02;
  //   // myMesh.current.position.z -= 0.01;
  // });
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
    myMesh.current.rotation.y = Math.cos(clock.getElapsedTime());
    // myMesh.current.rotation.z = Math.tan(clock.getElapsedTime());
    myMesh.current.position.x = Math.sin(clock.getElapsedTime());
  });

  return (
    <group ref={myMesh}>
      <mesh position={position}>
        <octahedronGeometry args={geometry} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

export default Octahedron;
