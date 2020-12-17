import Reac, { useRef, useState } from "react";
import CloseAppIcon from "./CloseAppIcon/CloseAppIcon";
import HomeScreenDice from "./HomeScreenDice/HomeScreenDice";
import StartNewGame from "./StartNewGame/StartNewGame";
import JoinGame from "./JoinGame/JoinGame";
import PlayOffline from "./PlayOffline/PlayOffline";
import "./HomeScreen.css";
import InfoModal from "./InfoModal/InfoModal";

const HomeScreen = () => {
  const onlineRef = useRef(null);
  const offlineRef = useRef(null);
  const [showNewGame, setshowNewGame] = useState(false);
  const [showJoinGame, setShowJoinGame] = useState(false);
  const [showPlayOffline, setshowPlayOffline] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const onGoOnlineHandler = () => {
    onlineRef.current.style.display = "block";
    offlineRef.current.style.display = "none";
  };
  const onGoOfflineHandler = () => {
    offlineRef.current.style.display = "block";
    onlineRef.current.style.display = "none";
  };
  const onNewGameHandler = () => {
    setshowNewGame(true);
  };
  const onJoinGameHandler = () => {
    setShowJoinGame(true);
  };
  const onPlayHandlerOffline = () => {
    setshowPlayOffline(true);
  };
  return (
    <>
      <div class="container">
        <CloseAppIcon></CloseAppIcon>
        <div class="info-icon" id="Info" onClick={() => setShowInfoModal(true)}>
          <i class="fas fa-info-circle"></i>
        </div>
        <header class="nav">
          <div class="logo">
            <span class="Logo-text"> Dice Game</span>
          </div>

          <div class="buttons">
            <button class="btn btn1" onClick={onGoOnlineHandler}>
              Online
            </button>
            <button class="btn btn2" onClick={onGoOfflineHandler}>
              Offline
            </button>
          </div>
        </header>
        <div class="sides">
          <div class="side1">
            <div class="btn-online" ref={onlineRef}>
              <button class="btn" onClick={onNewGameHandler}>
                New Game
              </button>
              <button class="btn" onClick={onJoinGameHandler}>
                Join Game
              </button>
            </div>
            <div class="btn-offline" ref={offlineRef}>
              <button class="btn" onClick={onPlayHandlerOffline}>
                Play
              </button>
            </div>
          </div>
          <div class="side2">
            <HomeScreenDice></HomeScreenDice>
          </div>
        </div>
      </div>
      {showNewGame ? (
        <StartNewGame CloseModal={() => setshowNewGame(false)}></StartNewGame>
      ) : null}
      {showJoinGame ? (
        <JoinGame CloseModal={() => setShowJoinGame(false)}></JoinGame>
      ) : null}
      {showPlayOffline ? (
        <PlayOffline CloseModal={() => setshowPlayOffline(false)}></PlayOffline>
      ) : null}
      {showInfoModal ? (
        <InfoModal CloseModal={() => setShowInfoModal(false)}></InfoModal>
      ) : null}
    </>
  );
};
export default HomeScreen;
