import React, { useRef, useState } from "react";
import NewGameModal from "./NewGameModal/NewGameModal";
import JoinGameModal from "./JoinGameModal/JoinGameModal";
import PlayModal from "./PlayModal/PlayModal";
import RequestModal from "./RequestModal/RequestModal";
import "./Modal.css";

const Modal = ({ modalName, setShowModal, onAnswerHandler }) => {
  const modalRef = useRef(null);
  const onCloseModalHandler = () => {
    setShowModal(false);
  };
  let content = null;
  switch (modalName) {
    case "NewGameModal":
      content = (
        <NewGameModal
          setShowModal={setShowModal}
          onCloseModalHandler={onCloseModalHandler}
        ></NewGameModal>
      );

      break;
    case "JoinGameModal":
      content = (
        <JoinGameModal
          setShowModal={setShowModal}
          onCloseModalHandler={onCloseModalHandler}
        ></JoinGameModal>
      );
      break;
    case "PlayModal":
      content = (
        <PlayModal onCloseModalHandler={onCloseModalHandler}></PlayModal>
      );
      break;
    case "RequestModal":
      content = (
        <RequestModal
          setShowModal={setShowModal}
          onCloseModalHandler={onCloseModalHandler}
          onAnswerHandler={onAnswerHandler}
        ></RequestModal>
      );
      break;
    default:
      content = <h1>Rien</h1>;
      break;
  }
  return (
    <div ref={modalRef} className="modal">
      {content}
    </div>
  );
};
export default Modal;
