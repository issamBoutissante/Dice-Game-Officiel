import React from "react";

const JoinGameModal = ({ onCloseModalHandler }) => {
  return (
    <div class="modal-name">
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
            placeholder="Enter your name.."
          />
          <br />
          <label for="name">Enter Room ID:</label>
          <input
            type="text"
            name="id"
            id="roomID"
            placeholder="Enter Room ID.."
          />
          <button onclick="sendName()">Join</button>
        </div>
      </div>
    </div>
  );
};
export default JoinGameModal;
