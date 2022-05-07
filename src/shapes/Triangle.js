import React, { useRef, useState } from "react";
import { canvas, useFrame } from "@react-three/fiber";

const Triangle = (props) => {
  const { position, geometry, color } = props;
  const myMesh = useRef();
  const groupRef = useRef();
  useFrame(({ clock }) => {
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime());
    groupRef.current.rotation.y = Math.cos(clock.getElapsedTime());
    groupRef.current.position.x = Math.sin(clock.getElapsedTime());
  });

  return (
    <group ref={groupRef}>
      <mesh ref={myMesh} position={position}>
        <triangleGeometry args={geometry} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

export default Triangle;
