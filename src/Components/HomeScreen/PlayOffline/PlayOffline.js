import React from "react";
import Modal from "../Modal/Modal";
export default function PlayOffline({ CloseModal }) {
  return (
    <Modal height="50%" CloseModal={CloseModal}>
      {" "}
      <div>
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
    </Modal>
  );
}
