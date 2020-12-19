import React from "react";
import Modal from "../Modal/Modal";
export default function ErrorModal({ CloseModal, error }) {
  return (
    <Modal height="150px" CloseModal>
      <div id="Refuse-container" style={{ paddingTop: "25px" }}>
        <label>{error}</label>
        <button onClick={CloseModal}>OK</button>
      </div>
    </Modal>
  );
}
