import React from "react";
import Dice from "./GameDice/GameDice";
import "./GameScreen.css";

const GameScreen = () => {
  return (
    <div class="GameNontainer">
      <div class="GameNav-container">
        <div class="chat-icon">
          <i class="fas fa-comments chat"></i>
        </div>
        <div class="goNewGame">
          <i class="far fa-plus-square"></i>
          <span>New Game</span>
        </div>
        <div class="GameClose-icon">
          <span class="GameClose">&times;</span>
        </div>
      </div>
      <div class="layout-container">
        <div class="side-container">
          <div class="player-name">
            <span>Chaimae</span>
          </div>
          <div class="total-point">
            <span id="total-score">60 </span>
          </div>
          <div class="current-point">
            <span>Current</span>
            <div>
              <span id="current-score">6</span>
            </div>
          </div>
        </div>
        <div class="side-container">
          <div class="player-name">
            <span>Hamood</span>
          </div>
          <div class="total-point">
            <span id="total-score">50 </span>
          </div>
          <div class="current-point">
            <span>Current</span>
            <div>
              <span id="current-score">8</span>
            </div>
          </div>
        </div>
      </div>
      <Dice></Dice>
      <div class="hold-container">
        <button id="holdbtn">HOLD</button>
      </div>
    </div>
  );
};
export default GameScreen;
