import React, { useState, useContext, useEffect, useRef } from "react";
import { InfoContext } from "../../../../InfoContext/InfoContext";
import { Redirect } from "react-router-dom";
import RequestModal from "../RequestModal/RequestModal";

const NewGameModal = ({ onCloseModalHandler }) => {
  const {
    setRoomId,
    Socket,
    RoomId,
    setHosterName,
    setFriendName,
    HosterName,
  } = useContext(InfoContext);
  const [showId, setShowId] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [FriendId, setFriendId] = useState("");
  const [showGame, setShowGame] = useState(false);
  const RoomIdRef = useRef(null);
  const ToolTipRef = useRef(null);
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
        setShowDialog(true);
      });
    });
  };
  //Copy functions
  const onCopyFunction = () => {
    let copyText = document.getElementById("userId");
    RoomIdRef.current.select();
    RoomIdRef.current.setSelectionRange(0, 99999);
    document.execCommand("copy");
    ToolTipRef.current.innerHTML = "Copied: " + copyText.value;
  };
  const onOutFunction = () => {
    ToolTipRef.current.innerHTML = "Copy to clipboard";
  };
  return (
    <div class="modal-name">
      <span class="close" onClick={onCloseModalHandler}>
        &times;
      </span>
      <div class="login">
        {showId ? (
          <div id="id-container">
            <label for="id">Your ID is:</label>
            <input
              type="text"
              name="id"
              id="userId"
              ref={RoomIdRef}
              value={RoomId}
            />
            <div class="tooltip">
              <i
                class="far fa-clipboard"
                onClick={onCopyFunction}
                onMouseOut={onOutFunction}
              >
                <span class="tooltiptext" ref={ToolTipRef} id="myTooltip">
                  Copy to clipboard
                </span>
              </i>
            </div>
          </div>
        ) : (
          <div id="name-container">
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
        {showGame ? <Redirect to={"/GameScreen"}></Redirect> : null}
        {showDialog ? (
          <RequestModal onAnswerHandler={onAnswerHandler}></RequestModal>
        ) : null}
      </div>
    </div>
  );
};
export default NewGameModal;
