import React, { useContext } from "react";
import "./MessageArea.css";
import { InfoContext } from "../../../InfoContext/InfoContext";

export default function MessageArea({
  ChatRef,
  setMessageHandler,
  message,
  messages,
  onSendMessageHandler,
}) {
  const { isHoster } = useContext(InfoContext);
  const onCloseChatHandler = () => {
    ChatRef.current.style.width = "0";
  };
  return (
    <div id="mySideChat" ref={ChatRef} className="sideChat">
      <a className="closebtn" onClick={onCloseChatHandler}>
        &times;
      </a>
      <div className="chat">
        <div className="chat-title">
          <h1>Hamood</h1>
        </div>
        <div className="messages">
          <div className="messages-content">
            {/* <ul style="text-decoration: none">
              {messages.map((mes) => {
                if (isHoster) {
                  return <li className="message message-personal">{mes}</li>;
                } else {
                  return <li className="message">{mes}</li>;
                }
              })}
            </ul> */}
          </div>
        </div>

        <div className="message-box">
          <textarea
            value={message}
            type="text"
            className="message-input"
            placeholder="Type message..."
            onChange={setMessageHandler}
          ></textarea>
          <button onClick={onSendMessageHandler} className="message-submit">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
