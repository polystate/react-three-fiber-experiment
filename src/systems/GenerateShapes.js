import React from "react";
import Octahedron from "../shapes/Octahedron";

const GenerateShapes = (props) => {
  const { amount, shape } = props;

  const shapeArr = new Array(amount).fill(shape);
  console.log(shapeArr);
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <>
      {shapeArr.map((elem, index) => {
        return (
          <Octahedron
            key={index}
            position={[
              getRandomInt(-5, 5),
              getRandomInt(-5, 5),
              getRandomInt(-5, 5),
            ]}
            geometry={[getRandomInt(1, 2), 1]}
            color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
          />
        );
      })}
    </>
  );
};

export default GenerateShapes;
