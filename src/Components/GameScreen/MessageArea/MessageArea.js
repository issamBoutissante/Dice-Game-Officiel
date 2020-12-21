import React from "react";
import "./MessageArea.css";

export default function MessageArea() {
  return (
    <div id="mySideChat" class="sideChat">
      <a href="javascript:void(0)" class="closebtn" onclick="closeChat()">
        &times;
      </a>
      <div class="chat">
        <div class="chat-title">
          <h1>Hamood</h1>
        </div>
        <div class="messages">
          <div class="messages-content">
            <ul style="text-decoration: none">
              <li class="message">Hello Chaimae</li>
              <li class="message message-personal">Hi Dude</li>
              <li class="message">What are you doing?</li>
              <li class="message message-personal">nothing!</li>
              <li class="message">You are lazy</li>
              <li class="message message-personal">not as you bitch</li>
              <li class="message">You are lazy</li>
              <li class="message message-personal">not as you bitch</li>
            </ul>
          </div>
        </div>

        <div class="message-box">
          <textarea
            type="text"
            class="message-input"
            placeholder="Type message..."
          ></textarea>
          <button type="submit" class="message-submit">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
