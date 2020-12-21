import React from "react";

export default function WinnerLayout() {
  return (
    // <!-- The Modal Info-->
    <div class="modal" id="modalWinner">
      {/* <!-- Modal content for Info --> */}
      <div class="modal-name">
        <canvas id="Canvas"> </canvas>
        <img src="win.png" />
        <div id="winner-container">
          <span class="close">&times;</span>
          <span class="winner-name">Chimae Wins!</span>
          <div class="btnWin">
            <button>NEW GAME</button>
            <button>START MENU</button>
          </div>
        </div>
      </div>
    </div>
  );
}
