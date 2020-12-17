import React from "react";
import Modal from "../Modal/Modal";
const RequestModal = ({ onAnswerHandler, CloseModal }) => {
  return (
    <Modal CloseModal={CloseModal}>
      <div>
        <label for="name">Did you accept chaimae to join you:</label>
        <div class="acceptRefuse">
          <button onClick={onAnswerHandler.bind(null, true)}>Accept</button>
          <button onClick={onAnswerHandler.bind(null, false)}>Refuse</button>
        </div>
      </div>
    </Modal>
  );
};
export default RequestModal;
