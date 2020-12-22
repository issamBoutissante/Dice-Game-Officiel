import React, { Component } from "react";
import { InfoContext } from "../../InfoContext/InfoContext";
import Dice from "./GameDice/GameDice";
import "./Game.css";
import LittleCube from "../LittleCube/LittleCube";
import { Redirect } from "react-router-dom";
import Modal from "../HomeScreen/Modal/Modal";

export default class Game extends Component {
  static contextType = InfoContext;
  state = {
    message: "",
    messages: [],
    BackToHome: false,
    showDialogModal: false,
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
      onPlayAgainHandler,
    } = this.props;
    return (
      <div className="GameNontainer">
        <div className="GameNav-container">
          <div className="chat-icon">
            <i
              class="fas fa-arrow-circle-left back"
              onClick={this.onBackToHomeHandler.bind(this)}
            ></i>
            {this.props.showMessageIcon ? (
              <i className="fas fa-comments chat"></i>
            ) : null}
          </div>
          <div className="goNewGame" onClick={onPlayAgainHandler}>
            <i className="far fa-plus-square"></i>
            <span>New Game</span>
          </div>
          <div
            className="GameClose-icon"
            onClick={() => this.setState({ showDialogModal: true })}
          >
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
        {this.state.BackToHome ? <Redirect to="/"></Redirect> : null}
        {this.state.showDialogModal ? (
          <Modal CloseModal={this.setState({ showDialogModal: false })}></Modal>
        ) : null}
      </div>
    );
  }
}
