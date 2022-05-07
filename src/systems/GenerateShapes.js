import React from "react";
import Octahedron from "../shapes/Octahedron";
import CubeBox from "../shapes/CubeBox";

const GenerateShapes = (props) => {
  const { amount, shape, positionRange, geometryRange, groupRef } = props;
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };
  const getComponent = (index) => {
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

  const shapeArr = new Array(amount).fill("");

  return (
    <>
      {shapeArr.map((Shape, index) => {
        let ourShape = getComponent(index);
        return ourShape;
      })}
    </>
  );
};

export default GenerateShapes;
