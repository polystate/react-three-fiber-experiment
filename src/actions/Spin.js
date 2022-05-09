import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Spin = ({ children }) => {
  const actionRef = useRef();

  useFrame(({ clock }) => {
    actionRef.current.rotation.x = Math.sin(clock.getElapsedTime());
    actionRef.current.rotation.y = Math.cos(clock.getElapsedTime());
    actionRef.current.position.x = Math.sin(clock.getElapsedTime());
  });
  return <group ref={actionRef}>{children}</group>;
};

export default Spin;
