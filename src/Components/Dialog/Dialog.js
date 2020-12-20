import React from "react";
import Modal from "../HomeScreen/Modal/Modal";
//const { ipcRenderer } = window.require("electron");

const Dialog = ({ CloseModal }) => {
  const onCloseAppHandler = () => {
    //  ipcRenderer.send("CloseApp");
  };
  return (
    <Modal CloseModal={CloseModal}>
      <div>
        <label for="name">Are you sure you want to close the game ?</label>
        <div class="acceptRefuse">
          <button onClick={onCloseAppHandler}>Close</button>
          <button style={{ backgroundColor: "#ccc" }} onClick={CloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default Dialog;
