import React, { Component } from "react";
import { InfoContext } from "../../../../InfoContext/InfoContext";
import Dice from "./GameDice/GameDice";
import "./Game.css";

export default class Game extends Component {
  static contextType = InfoContext;
  state = {
    message: "",
    messages: [],
  };
  onSendMessageHandler() {
    const { Socket, RoomId } = this.context;
    Socket.emit("SendMessage", { RoomId, message: this.state.message });
  }
  onNewMessageHandler({ message }) {
    this.setState((prev) => {
      return {
        messages: [...prev.messages, message],
      };
    });
  }
  componentDidMount() {
    const { Socket } = this.context;
    Socket.on("NewMessage", this.onNewMessageHandler.bind(this));
  }
  render() {
    const {
      player1,
      player2,
      player1Score,
      player2Score,
      player1Total,
      player2Total,
      onRollDiceHandler,
      onHoldHandler,
      randomNumber,
      player1StyleRef,
      player2StyleRef,
      CubeRef,
    } = this.props;
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
              <span>{player1}</span>
            </div>
            <div class="total-point">
              <span id="total-score">{player1Total} </span>
            </div>
            <div class="current-point">
              <span>Current</span>
              <div>
                <span id="current-score">{player1Score}</span>
              </div>
            </div>
          </div>
          <div class="side-container">
            <div class="player-name">
              <span>{player2}</span>
            </div>
            <div class="total-point">
              <span id="total-score">{player2Total} </span>
            </div>
            <div class="current-point">
              <span>Current</span>
              <div>
                <span id="current-score">{player2Score}</span>
              </div>
            </div>
          </div>
        </div>
        <Dice CubeRef={CubeRef} onRollDiceHandler={onRollDiceHandler}></Dice>
        <div class="hold-container">
          <button id="holdbtn" onClick={onHoldHandler}>
            HOLD
          </button>
        </div>
      </div>
    );
  }
}
