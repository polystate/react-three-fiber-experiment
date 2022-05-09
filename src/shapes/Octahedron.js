import React, { useRef } from "react";

const Octahedron = (props) => {
  const { position, geometry, color } = props;
  const myMesh = useRef();

  return (
    <mesh ref={myMesh} position={position}>
      <octahedronGeometry args={geometry} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Octahedron;

// myMesh.current.rotation.z = Math.tan(clock.getElapsedTime()); shake and bake effect
