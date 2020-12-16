import React, { useRef } from "react";
import "./Dice.css";
const position = {
  1: "rotateX(180deg) rotateY(1260deg)",
  2: "rotateX(1620deg) rotateY(1800deg)",
  3: "rotateX(1620deg) rotateY(90deg)",
  4: "rotateX(360deg) rotateY(1170deg)",
  5: "rotateX(1350deg) rotateY(1710deg)",
  6: "rotateX(810deg) rotateY(1890deg)",
};
const Dice = () => {
  const CubeRef = useRef(null);
  const onClickHandler = () => {
    //this random number (between 1 and 6) will come from the server
    let random = Math.floor(Math.random() * 6 + 1);
    alert(random);
    CubeRef.current.style.transform = position[random];
  };
  return (
    <div className="cubeContainer">
      <div id="Cube" ref={CubeRef} onClick={onClickHandler}>
        <div className="side face1">
          <div className="dot1 dot"></div>
        </div>
        <div className="side face2">
          <div className="dot1 dot"></div>
          <div className="dot2 dot"></div>
        </div>
        <div className="side face3">
          <div className="dot1 dot"></div>
          <div className="dot2 dot"></div>
          <div className="dot3 dot"></div>
        </div>
        <div className="side face4">
          <div className="dot1 dot"></div>
          <div className="dot2 dot"></div>
          <div className="dot3 dot"></div>
          <div className="dot4 dot"></div>
        </div>
        <div className="side face5">
          <div className="dot1 dot"></div>
          <div className="dot2 dot"></div>
          <div className="dot3 dot"></div>
          <div className="dot4 dot"></div>
          <div className="dot5 dot"></div>
        </div>
        <div className="side face6">
          <div className="dot1 dot"></div>
          <div className="dot2 dot"></div>
          <div className="dot3 dot"></div>
          <div className="dot4 dot"></div>
          <div className="dot5 dot"></div>
          <div className="dot6 dot"></div>
        </div>
      </div>
    </div>
  );
};
export default Dice;
