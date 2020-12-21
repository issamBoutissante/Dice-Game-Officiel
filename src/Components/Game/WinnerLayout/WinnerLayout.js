import React, { useEffect } from "react";
import WinImage from "../../../assets/win.png";
import "./WinnerLayout.css";
import ScriptTag from "react-script-tag";
export default function WinnerLayout() {
  useEffect(() => {
    // let script = window.document.createElement("script");
    // script.src = ScriptUrl;
    // script.async = true;
    // window.document.body.appendChild(script);
  }, []);
  return (
    <>
      {/* //  <!-- The Modal Info--> */}
      <div class="modalWinner">
        {/* <!-- Modal content for Info --> */}
        <div class="modal-win">
          <canvas id="Canvas"> </canvas>
          <img src={WinImage} />
          <div id="winner-container">
            <span class="closeWin">&times;</span>
            <span class="winner-name">Chimae Wins!</span>
            <div class="btnWin">
              <button>NEW GAME</button>
              <button>START MENU</button>
            </div>
          </div>
        </div>
      </div>
      <ScriptTag type="text/javascript" src="/app.js"></ScriptTag>
    </>
  );
}
