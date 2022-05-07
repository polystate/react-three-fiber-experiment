import React, { useRef, useState } from "react";
import { canvas, useFrame } from "@react-three/fiber";
// import Spin from "./actions/Spin";

const Octahedron = (props) => {
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
        <octahedronGeometry args={geometry} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

export default Octahedron;

// myMesh.current.rotation.z = Math.tan(clock.getElapsedTime()); shake and bake effect

// return (
//   <group ref={myMesh}>
//     <mesh position={position}>
//       <octahedronGeometry args={geometry} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   </group>
// );
// };
