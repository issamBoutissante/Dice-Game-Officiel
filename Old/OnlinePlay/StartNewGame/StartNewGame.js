import React, { useState, useEffect, useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import Dialog from "../../Dialog/Dialog";
import { InfoContext } from "../../InfoContext/InfoContext";

export default function StartNewGame() {
  return (
    <div>
      <input
        type="text"
        placeholder="enter you name"
        onChange={(e) => setHosterName(e.target.value)}
      ></input>
      <button onClick={onStartNewGameHandler}>Start Game</button>
      <NavLink to="/"> Back</NavLink>
      {showId ? (
        <input type="text" value={`this is your id : ${RoomId}`}></input>
      ) : null}
      {showDialog ? <Dialog onAnswerHandler={onAnswerHandler}></Dialog> : null}
      {showGame ? <Redirect to={"/GameScreen"}></Redirect> : null}
    </div>
  );
}
