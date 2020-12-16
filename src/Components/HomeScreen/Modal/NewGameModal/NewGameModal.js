import React, { useState, useContext, useEffect, useRef } from "react";
import InfoContext from "../../../../InfoContext/InfoContext";

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
      //window.location.href = `/GameScreen?friendName=${friendName}&hosterName=${hosterName}&Socket=${Socket}&roomId=${RoomId}`;
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
  return (
    <div class="modal-name">
      <span class="close" onClick={onCloseModalHandler}>
        &times;
      </span>
      <div class="login">
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
                onMouseOut="outFunc()"
              >
                <span class="tooltiptext" ref={ToolTipRef} id="myTooltip">
                  Copy to clipboard
                </span>
              </i>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default NewGameModal;
