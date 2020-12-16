import React from "react";

const PlayModal = ({ onCloseModalHandler }) => {
  return (
    <div class="modal-name">
      <span class="close" onClick={onCloseModalHandler}>
        &times;
      </span>
      <div class="login">
        <div id="name-container">
          <label for="name">Enter first player name:</label>
          <input
            type="text"
            name="name"
            id="name1"
            placeholder="Enter first player name.."
          />
          <br />
          <label for="name">Enter second player name:</label>
          <input
            type="text"
            name="name"
            id="name2"
            placeholder="Enter second player name.."
          />
          <button onclick="sendName()">Start</button>
        </div>
      </div>
    </div>
  );
};
export default PlayModal;
