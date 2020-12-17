import React, { useState, useContext, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import RequestJoinModal from "../RequestModal/RequestModal";
import "./StartNewGame.css";
import { InfoContext } from "../../../InfoContext/InfoContext";
import { Redirect } from "react-router-dom";
export default function StartNewGame({ CloseModal }) {
  const [showId, setShowId] = useState(false);
  const RoomIdRef = useRef(null);
  const ToolTipRef = useRef(null);
  const {
    setRoomId,
    Socket,
    RoomId,
    setHosterName,
    setFriendName,
    HosterName,
  } = useContext(InfoContext);
  const [showRequestJoin, setShowRequestJoin] = useState(false);
  const [FriendId, setFriendId] = useState("");
  const [showGame, setShowGame] = useState(false);
  useEffect(() => {
    Socket.on("GameStarted", ({ friendName }) => {
      setShowGame(true);
    });
  }, []);
  const onAnswerHandler = (isAccepted) => {
    Socket.emit("requestAnswer", {
      isAccepted,
      name: HosterName,
      nameId: FriendId,
    });
  };
  const onStartNewGameHandler = () => {
    Socket.emit("startNewGame", { name: HosterName }, ({ roomId }) => {
      setRoomId(roomId);
      setShowId(true);
      Socket.on("joinRequest", ({ name, nameId }) => {
        setFriendName(name);
        setFriendId(nameId);
        setShowRequestJoin(true);
      });
    });
  };
  //this functions for copying
  const onCopyHandler = () => {
    RoomIdRef.current.select();
    RoomIdRef.current.setSelectionRange(0, 99999);
    document.execCommand("copy");

    ToolTipRef.current.innerHTML = "Copied: " + RoomIdRef.current.value;
  };
  const onOutHanlder = () => {
    ToolTipRef.current.innerHTML = "Copy to clipboard";
  };
  return (
    <>
      <Modal CloseModal={CloseModal}>
        {showId ? (
          <div>
            <label htmlFor="id">Your ID is:</label>
            <input type="text" name="id" ref={RoomIdRef} value={RoomId} />
            <div className="tooltip">
              <i
                className="far fa-clipboard"
                onClick={onCopyHandler}
                onMouseOut={onOutHanlder}
              >
                <span className="tooltiptext" ref={ToolTipRef}>
                  Copy to clipboard
                </span>
              </i>
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor="name">Enter your name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setHosterName(e.target.value);
              }}
              placeholder="Enter your name.."
            />
            <button onClick={onStartNewGameHandler}>submit</button>
          </div>
        )}
      </Modal>
      {showRequestJoin ? (
        <RequestJoinModal
          onAnswerHandler={onAnswerHandler}
          CloseModal={() => {
            setShowRequestJoin(false);
          }}
        ></RequestJoinModal>
      ) : null}
      {showGame ? <Redirect to="/GameScreen"></Redirect> : null}
    </>
  );
}
