import React, { useContext, useState, useEffect } from "react";
import { InfoContext } from "../../../../InfoContext/InfoContext";
import { Redirect } from "react-router-dom";

const JoinGameModal = ({ onCloseModalHandler }) => {
  const {
    setRoomId,
    Socket,
    RoomId,
    setFriendName,
    setHosterName,
    FriendName,
  } = useContext(InfoContext);
  const [showGame, setShowGame] = useState(false);
  useEffect(() => {
    Socket.on("GameStarted", ({ hosterName }) => {
      setHosterName(hosterName);
      setShowGame(true);
    });
  }, []);
  const onJoinGameHandler = () => {
    Socket.on("requestAccepted", ({ confirmPassword }) => {
      Socket.emit("joinAndStartGame", { confirmPassword });
    });
    Socket.on("requestError", ({ error }) => {
      alert(error);
      Socket.emit("leave", { roomId: RoomId });
    });
    Socket.emit(
      "joinGame",
      { name: FriendName, roomId: RoomId },
      ({ error }) => {
        if (error) alert(error);
      }
    );
  };

  return (
    <div class="modal-name" style={{ height: "230px", bottom: "50px" }}>
      <span class="close" onClick={onCloseModalHandler}>
        &times;
      </span>
      <div class="login">
        <div id="name-container">
          <label for="name">Enter your name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setFriendName(e.target.value)}
            placeholder="Enter your name.."
          />
          <br />
          <label for="name">Enter Room ID:</label>
          <input
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
      </div>
      {showGame ? <Redirect to="/GameScreen"></Redirect> : null}
    </div>
  );
};
export default JoinGameModal;
