import React, { useRef } from "react";
import "./Modal.css";

const Modal = ({ children, height, CloseModal, width }) => {
  return (
    <div className="modal">
      <div className="modal-name" style={{ height: height, width: width }}>
        <span className="close" onClick={CloseModal}>
          &times;
        </span>
        <div className="login">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
