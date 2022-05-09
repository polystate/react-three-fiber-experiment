import React, { useRef } from "react";

const CubeBox = (props) => {
  const { position, color, geometry } = props;
  const myMesh = useRef();

  return (
    <mesh ref={myMesh} position={position}>
      <boxGeometry args={geometry} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default CubeBox;
