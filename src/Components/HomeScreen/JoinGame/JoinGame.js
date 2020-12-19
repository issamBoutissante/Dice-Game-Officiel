import React, { useContext, useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { Redirect } from "react-router-dom";
import { InfoContext } from "../../../InfoContext/InfoContext";
//import ErrorModal from "../ErrorModal/ErrorModal";

export default function JoinGame({ CloseModal }) {
  const {
    setRoomId,
    Socket,
    RoomId,
    setFriendName,
    setHosterName,
    FriendName,
  } = useContext(InfoContext);
  // const [Error, setError] = useState("Something Wrong Happend!!!");
  // const [showError, setShowError] = useState(false);
  const [showGame, setShowGame] = useState(false);
  useEffect(() => {
    Socket.on("GameStarted", ({ hosterName }) => {
      setHosterName(hosterName);
      setShowGame(true);
    });
  }, []);
  const onJoinGameHandler = () => {
    // Socket.on("requestAccepted", ({ confirmPassword }) => {
    //   Socket.emit("joinAndStartGame", { confirmPassword });
    // });
    // Socket.on("requestError", ({ error }) => {
    //   setError(error);
    //   setShowError(true);
    //   Socket.emit("leave", { roomId: RoomId });
    // });
    Socket.emit(
      "joinGame",
      { name: FriendName, roomId: RoomId },
      ({ error }) => {
        if (error) alert(error);
      }
    );
  };

  return (
    <Modal height="50%" CloseModal={CloseModal}>
      <div id="name-container">
        <label htmlFor="name">Enter your name:</label>
        <input
          autoComplete="false"
          type="text"
          name="name"
          id="name"
          onChange={(e) => setFriendName(e.target.value)}
          placeholder="Enter your name.."
        />
        <br />
        <label htmlFor="name">Enter Room ID:</label>
        <input
          autoComplete="false"
          type="text"
          name="id"
          id="roomID"
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
          placeholder="Enter Room ID.."
        />
        <button onClick={onJoinGameHandler}>Join</button>
      </div>
      {showGame ? <Redirect to="/GameScreen"></Redirect> : null}
      {/* {showError ? (
        <ErrorModal
          error={Error}
          CloseModal={() => setShowError(false)}
        ></ErrorModal>
      ) : null} */}
    </Modal>
  );
}
