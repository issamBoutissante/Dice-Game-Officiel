import React from "react";
import Modal from "../Modal/Modal";
export default function ErrorModal({ CloseModal }) {
  return (
    <Modal height="150px" CloseModal>
      <div id="Refuse-container" style={{ paddingTop: "25px" }}>
        <label id="message">Did you accept chaimae to join you:</label>
        <button>OK</button>
      </div>
    </Modal>
  );
}
