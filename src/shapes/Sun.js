import React from "react";

const Sun = (props) => {
  const { lightSourcePosition, color } = props;
  return (
    <mesh position={[100, 200, lightSourcePosition + 50]}>
      <sphereGeometry args={[25, 32, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Sun;

//weird sun {[25, 32, 16, 5, 8, 12]}
