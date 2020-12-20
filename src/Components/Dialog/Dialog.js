import React from "react";
import Modal from "../HomeScreen/Modal/Modal";
import { remote } from "electron";
const { app } = remote;

const Dialog = ({ CloseModal }) => {
  const onCloseAppHandler = () => {
    app.quit();
  };
  return (
    <Modal CloseModal={CloseModal}>
      <div>
        <label for="name">Are you sure you want to close the game ?</label>
        <div class="acceptRefuse">
          <button onClick={CloseModal}>Cancel</button>
          <button onClick={onCloseAppHandler}>Close</button>
        </div>
      </div>
    </Modal>
  );
};
export default Dialog;
