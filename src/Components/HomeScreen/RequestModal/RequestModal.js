import React from "react";
import Modal from "../Modal/Modal";
const RequestModal = ({ onAnswerHandler, CloseModal, friendName }) => {
  return (
    <Modal CloseModal={CloseModal}>
      <div>
        <label for="name">
          {friendName} wants to play with you. Do you Accept ?
        </label>
        <div class="acceptRefuse">
          <button onClick={onAnswerHandler.bind(null, true)}>Accept</button>
          <button
            style={{ backgroundColor: "#ccc" }}
            onClick={onAnswerHandler.bind(null, false)}
          >
            Refuse
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default RequestModal;
