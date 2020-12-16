import React, { useState, useRef } from "react";
import StartDice from "./StartDice/StartDice";
import Modal from "./Modal/Modal";
import "./HomeScreen.css";

const HomeScreen = () => {
  const onlineRef = useRef(null);
  const offlineRef = useRef(null);
  const [modalName, setModalName] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const onGoOnlineHandler = () => {
    onlineRef.current.style.display = "block";
    offlineRef.current.style.display = "none";
  };
  const onGoOfflineHandler = () => {
    offlineRef.current.style.display = "block";
    onlineRef.current.style.display = "none";
  };
  const onNewGameHandler = () => {
    setModalName("NewGameModal");
    setShowModal(true);
  };
  const onJoinGameHandler = () => {
    setModalName("JoinGameModal");
    setShowModal(true);
  };
  const onPlayHandler = () => {
    setModalName("PlayModal");
    setShowModal(true);
  };

  return (
    <section>
      <div className="container">
        <header className="nav">
          <div className="logo">
            <span className="Logo-text"> Dice Game</span>
          </div>

          <div className="buttons">
            <button className="btn btn1" onClick={onGoOnlineHandler}>
              Online
            </button>
            <button className="btn btn2" onClick={onGoOfflineHandler}>
              Offline
            </button>
          </div>
        </header>
        <div className="sides">
          <div className="side1">
            <div className="btn-online" ref={onlineRef} id="online">
              <button className="btn" onClick={onNewGameHandler} id="newGame">
                New Game
              </button>
              <button className="btn" onClick={onJoinGameHandler} id="JoinGame">
                Join Game
              </button>
            </div>
            <div className="btn-offline" ref={offlineRef} id="offline">
              <button className="btn" onClick={onPlayHandler} id="play">
                Play
              </button>
            </div>
          </div>
          <div className="side2">
            <StartDice></StartDice>
          </div>
        </div>
      </div>
      {showModal ? (
        <Modal modalName={modalName} setShowModal={setShowModal} />
      ) : null}
    </section>
  );
};
export default HomeScreen;
