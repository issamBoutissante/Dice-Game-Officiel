import React, { useEffect, useState, useContext, Component } from "react";
import { InfoContext } from "../../InfoContext/InfoContext";
import Dice from "./Dice/Dice";
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
    } = this.props;
    return (
      <section className="GameContainer">
        <section className="GameScene">
          <ul className="MessagesArea">
            {this.state.messages.map((mes) => (
              <li>{mes}</li>
            ))}
            <input
              onChange={(e) => this.setState({ message: e.target.value })}
            ></input>
            <button onClick={this.onSendMessageHandler.bind(this)}>Send</button>
          </ul>
          <section
            ref={player1StyleRef}
            className="player1 player activePlayer"
          >
            <section className="GessedNumberArea">
              <h1>{player1}</h1>
              <h1 className="total_1 number">{player1Total}</h1>
            </section>
            <section className="playerPoints">
              <p>current</p>
              <h1 className="current_1">{player1Score}</h1>
            </section>
          </section>
          <div className="buttons Buttons above newGame">New Game</div>
          <div className="Dice">
            <Dice></Dice>
          </div>
          <div className="buttons Buttons below hold" onClick={onHoldHandler}>
            Hold
          </div>
          <section ref={player2StyleRef} className="player2 player">
            <section className="GessedNumberArea">
              <h1>{player2}</h1>
              <h1 className="total_2 number">{player2Total}</h1>
            </section>
            <section className="playerPoints">
              <p>current</p>
              <h1 className="current_2">{player2Score}</h1>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
