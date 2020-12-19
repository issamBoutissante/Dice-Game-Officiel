import React, { Component } from "react";
import { InfoContext } from "../../InfoContext/InfoContext";
import Dice from "./GameDice/GameDice";
import "./Game.css";
import LittleCube from "../LittleCube/LittleCube";
import { Redirect } from "react-router-dom";

export default class Game extends Component {
  static contextType = InfoContext;
  state = {
    message: "",
    messages: [],
    BackToHome: false,
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
  onBackToHomeHandler() {
    this.setState({ BackToHome: true });
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
      player1StyleRef,
      player2StyleRef,
      CubeRef,
    } = this.props;
    return (
      <div className="GameNontainer">
        <div className="GameNav-container">
          <div className="chat-icon">
            <i
              class="fas fa-arrow-circle-left back"
              onClick={this.onBackToHomeHandler}
            ></i>
            <i className="fas fa-comments chat"></i>
          </div>
          <div className="goNewGame">
            <i className="far fa-plus-square"></i>
            <span>New Game</span>
          </div>
          <div className="GameClose-icon">
            <span className="GameClose">&times;</span>
          </div>
        </div>
        <div className="layout-container">
          <div className="side-container active" ref={player1StyleRef}>
            <div className="player-name">
              <span>{player1}</span>
              <LittleCube></LittleCube>
            </div>
            <div className="total-point">
              <span id="total-score">{player1Total} </span>
            </div>
            <div className="current-point">
              <span>Current</span>
              <div>
                <span id="current-score">{player1Score}</span>
              </div>
            </div>
          </div>
          <div className="side-container notActive" ref={player2StyleRef}>
            <div className="player-name">
              <span>{player2}</span>
              <LittleCube></LittleCube>
            </div>
            <div className="total-point">
              <span id="total-score">{player2Total} </span>
            </div>
            <div className="current-point">
              <span>Current</span>
              <div>
                <span id="current-score">{player2Score}</span>
              </div>
            </div>
          </div>
        </div>
        <Dice CubeRef={CubeRef} onRollDiceHandler={onRollDiceHandler}></Dice>
        <div className="hold-container">
          <button id="holdbtn" onClick={onHoldHandler}>
            HOLD
          </button>
        </div>
        {this.BackToHome ? <Redirect to="/"></Redirect> : null}
      </div>
    );
  }
}
