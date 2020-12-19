import React, { useState, useContext, useRef } from "react";
import Modal from "../Modal/Modal";
import "./StartNewGame.css";
import { InfoContext } from "../../../InfoContext/InfoContext";

export default function StartNewGame({ CloseModal }) {
  const [showId, setShowId] = useState(false);
  const RoomIdRef = useRef(null);
  const ToolTipRef = useRef(null);
  const { setRoomId, Socket, RoomId, setHosterName, HosterName } = useContext(
    InfoContext
  );

  const onStartNewGameHandler = () => {
    Socket.emit("startNewGame", { name: HosterName }, ({ roomId }) => {
      setRoomId(roomId);
      setShowId(true);
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
    </>
  );
}
