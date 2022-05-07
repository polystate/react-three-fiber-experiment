import React, { useRef, children } from "react";
import { canvas, useFrame } from "@react-three/fiber";

const Spin = () => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return <group ref={ref}>{children}</group>;
};

export default Spin;
