import React from "react";
const RequestModal = ({ onCloseModalHandler, onAnswerHandler }) => {
  return (
    <div class="modal-name">
      <span class="RequestClose" onClick={onCloseModalHandler}>
        &times;
      </span>
      <div class="login">
        <div id="name-container">
          <label for="name">Did you accept chaimae to join you:</label>
          <div class="acceptRefuse">
            <button onClick={onAnswerHandler.bind(null, true)}>Accept</button>
            <button onClick={onAnswerHandler.bind(null, false)}>Refuse</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestModal;
