import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import StartNewGame from "./StartNewGame/StartNewGame";
import JoinGame from "./JoinGame/JoinGame";
import GameScreen from "../GameScreen/GameScreen";
export default function OnlinePlay() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact>
          <NavLink style={{ marginRight: "30px" }} to="/StartNewGame">
            Start New Game
          </NavLink>
          <NavLink to="JoinGame">Join Game</NavLink>
        </Route>
        <Route path="/StartNewGame" exact component={StartNewGame}></Route>
        <Route path="/JoinGame" exact component={JoinGame}></Route>
        <Route path="/GameScreen" exact component={GameScreen}></Route>
      </BrowserRouter>
    </div>
  );
}