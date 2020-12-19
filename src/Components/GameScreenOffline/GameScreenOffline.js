import React, { Component } from "react";
import { InfoContext } from "../../InfoContext/InfoContext";
import Game from "../Game/Game";
const position = {
  1: ["rotateX(180deg) rotateY(1260deg)", "rotateX(-180deg) rotateY(-1260deg)"],
  2: [
    "rotateX(1620deg) rotateY(1800deg)",
    "rotateX(-1620deg) rotateY(-1800deg)",
  ],
  3: ["rotateX(1620deg) rotateY(90deg)", "rotateX(-1620deg) rotateY(-90deg)"],
  4: ["rotateX(360deg) rotateY(1170deg)", "rotateX(-360deg) rotateY(-1170deg)"],
  5: [
    "rotateX(1350deg) rotateY(1710deg)",
    "rotateX(-1350deg) rotateY(-1710deg)",
  ],
  6: ["rotateX(810deg) rotateY(1890deg)", "rotateX(-810deg) rotateY(-1890deg)"],
};
export default class GameScreenOffline extends Component {
  static contextType = InfoContext;
  constructor(props) {
    super(props);
    this.player1StyleRef = React.createRef();
    this.player2StyleRef = React.createRef();
    this.CubeRef = React.createRef();
  }
  state = {
    finalScore: 15,
    player1: "",
    player2: "",
    currentPlayer: "",
    player1Total: 0,
    player2Total: 0,
    player1Score: 0,
    player2Score: 0,
  };
  //When a player Click Dice
  onRollDiceHandler() {
    let ranNum = Math.floor(Math.random() * 6 + 1);
    setTimeout(() => {
      this.CubeRef.current.style.transform = position[ranNum][0];
      this.CubeRef.current.classList.remove("RollDice");
      this.ChangeScore({ ranNum });
    }, 4000);
    this.CubeRef.current.style.setProperty("--halfRoll", position[ranNum][0]);
    this.CubeRef.current.style.setProperty("--fullRoll", position[ranNum][1]);
    this.CubeRef.current.classList.add("RollDice");
  }
  //ChangeScore
  ChangeScore({ ranNum }) {
    if (ranNum === 1) {
      //Here we have to add a sound for losing score
      //and vibre the cube
      this.togglePlayer();
      this.resetScore();
    } else {
      if (this.state.currentPlayer === this.state.player1) {
        let time = 0;
        for (
          let i = this.state.player1Score;
          i < this.state.player1Score + ranNum;
          i++
        ) {
          time += 200;
          setTimeout(() => {
            this.setState((prev) => {
              return {
                player1Score: prev.player1Score + 1,
              };
            });
          }, time);
        }
      } else {
        let time = 0;
        for (
          let i = this.state.player2Score;
          i < this.state.player2Score + ranNum;
          i++
        ) {
          time += 200;
          setTimeout(() => {
            this.setState((prev) => {
              return {
                player2Score: prev.player2Score + 1,
              };
            });
          }, time);
        }
      }
    }
  }
  //When a player click hold
  onHoldHandler() {
    if (this.state.currentPlayer === this.state.player1) {
      let time = 0;
      for (
        let i = this.state.player1Score;
        i < this.state.player1Score + ranNum;
        i++
      ) {
        time += 200;
        setTimeout(() => {
          this.setState((prev) => {
            return {
              player1Total: prev.player1Total + prev.player1Score,
            };
          });
        }, time);
      }
    } else {
      let time = 0;
      for (
        let i = this.state.player1Score;
        i < this.state.player1Score + ranNum;
        i++
      ) {
        time += 200;
        setTimeout(() => {
          this.setState((prev) => {
            return {
              player2Total: prev.player2Total + prev.player2Score,
            };
          });
        }, time);
      }
    }
    this.CheckWinner();
    this.resetScore();
  }
  //this function will run whene the game over
  onGameOverHandler(PlayerRef) {
    //here we will change the winner style witch in this case PlayerRef
  }
  //this player will toggle players and their style
  togglePlayer() {
    if (this.state.currentPlayer === this.state.player1) {
      this.player1StyleRef.current.classList.add("notActive");
      this.player1StyleRef.current.classList.remove("active");
      this.player2StyleRef.current.classList.add("active");
      this.player2StyleRef.current.classList.remove("notActive");
    } else {
      this.player2StyleRef.current.classList.add("notActive");
      this.player2StyleRef.current.classList.remove("active");
      this.player1StyleRef.current.classList.add("active");
      this.player1StyleRef.current.classList.remove("notActive");
    }
    this.setState((prev) => {
      return {
        currentPlayer:
          prev.currentPlayer === prev.player1 ? prev.player2 : prev.player1,
      };
    });
  }
  //this will set the players score to 0
  resetScore() {
    this.setState({
      player1Score: 0,
      player2Score: 0,
    });
  }
  //this function will check if there is a winner
  CheckWinner() {
    if (this.state.player1Total >= this.state.finalScore) {
      this.onGameOverHandler(this.player1StyleRef);
    } else if (this.state.player2Total >= this.state.finalScore) {
      this.onGameOverHandler(this.player2StyleRef);
    } else {
      this.togglePlayer();
    }
  }
  componentDidMount() {
    const { HosterName, FriendName } = this.context;
    this.setState({
      player1: HosterName,
      player2: FriendName,
      currentPlayer: HosterName,
    });
  }

  render() {
    return (
      <Game
        player1={this.state.player1}
        player2={this.state.player2}
        player1Score={this.state.player1Score}
        player2Score={this.state.player2Score}
        player1Total={this.state.player1Total}
        player2Total={this.state.player2Total}
        onRollDiceHandler={this.onRollDiceHandler.bind(this)}
        onHoldHandler={this.onHoldHandler.bind(this)}
        player1StyleRef={this.player1StyleRef}
        player2StyleRef={this.player2StyleRef}
        CubeRef={this.CubeRef}
      ></Game>
    );
  }
}
