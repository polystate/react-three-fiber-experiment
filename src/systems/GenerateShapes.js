import React from "react";
import Octahedron from "../shapes/Octahedron";
import CubeBox from "../shapes/CubeBox";
import { useRef } from "react";

const GenerateShapes = (props) => {
  const { amount, shape, positionRange, geometryRange } = props;
  const groupRef = useRef();
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getShape = (index) => {
    switch (shape) {
      case "Octahedron":
        return (
          <Octahedron
            key={index}
            position={[
              getRandomInt(...positionRange),
              getRandomInt(...positionRange),
              getRandomInt(...positionRange),
            ]}
            geometry={[
              getRandomInt(...geometryRange),
              getRandomInt(...geometryRange),
            ]}
            color={`rgb(${getRandomInt(0, 256)},${getRandomInt(
              0,
              256
            )},${getRandomInt(0, 256)})`}
          />
        );
        break;
      case "CubeBox":
        return (
          <CubeBox
            key={index + "c"}
            position={[
              getRandomInt(...positionRange),
              getRandomInt(...positionRange),
              getRandomInt(...positionRange),
            ]}
            geometry={[
              getRandomInt(...geometryRange),
              getRandomInt(...geometryRange),
              getRandomInt(...geometryRange),
            ]}
            color={`rgb(${getRandomInt(0, 256)},${getRandomInt(
              0,
              256
            )},${getRandomInt(0, 256)})`}
          />
        );
        break;
      default:
        console.log("Shape unknown");
    }
  };

  return (
    <>
      {new Array(amount).fill("").map((iterate, index) => {
        return getShape(index);
      })}
    </>
  );
};

export default GenerateShapes;
