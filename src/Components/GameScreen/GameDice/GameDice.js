import React, { useRef } from "react";
import "./GameDice.css";

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
    <div class="cubeContainer">
      <div id="GameCube">
        <div class="GameSide GameFace1">
          <div class="GameDot1 GameDot"></div>
        </div>
        <div class="side GameFace2">
          <div class="GameDot1 GameDot"></div>
          <div class="GameDot2 GameDot"></div>
        </div>
        <div class="side GameFace3">
          <div class="GameDot1 GameDot"></div>
          <div class="GameDot2 GameDot"></div>
          <div class="GameDot3 GameDot"></div>
        </div>
        <div class="side GameFace4">
          <div class="GameDot1 GameDot"></div>
          <div class="GameDot2 GameDot"></div>
          <div class="GameDot3 GameDot"></div>
          <div class="GameDot4 GameDot"></div>
        </div>
        <div class="side GameFace5">
          <div class="GameDot1 GameDot"></div>
          <div class="GameDot2 GameDot"></div>
          <div class="GameDot3 GameDot"></div>
          <div class="GameDot4 GameDot"></div>
          <div class="GameDot5 GameDot"></div>
        </div>
        <div class="side GameFace6">
          <div class="GameDot1 GameDot"></div>
          <div class="GameDot2 GameDot"></div>
          <div class="GameDot3 GameDot"></div>
          <div class="GameDot4 GameDot"></div>
          <div class="GameDot5 GameDot"></div>
          <div class="GameDot6 GameDot"></div>
        </div>
      </div>
    </div>
  );
};
export default Dice;
