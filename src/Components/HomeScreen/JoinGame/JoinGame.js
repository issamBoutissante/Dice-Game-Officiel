import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import { InfoContext } from "../../../InfoContext/InfoContext";

export default function JoinGame({ CloseModal }) {
  const { setRoomId, Socket, RoomId, setFriendName, FriendName } = useContext(
    InfoContext
  );
  const onJoinGameHandler = () => {
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
          style={{ color: "#50abf1" }}
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
          style={{ color: "#50abf1" }}
          name="id"
          id="roomID"
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
          placeholder="Enter Room ID.."
        />
        <button onClick={onJoinGameHandler}>Join</button>
      </div>
    </Modal>
  );
}
