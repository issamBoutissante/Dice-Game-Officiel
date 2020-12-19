import React from "react";
import InfoContextProvider from "./InfoContext/InfoContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import GameScreen from "./Components/GameScreen/GameScreen";
import GameScreenOffline from "./Components/GameScreenOffline/GameScreen";

function App() {
  return (
    <InfoContextProvider>
      <div>
        <BrowserRouter>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/GameScreen" exact component={GameScreen}></Route>
          <Route
            path="/GameScreenOffline"
            exact
            component={GameScreenOffline}
          ></Route>
        </BrowserRouter>
      </div>
    </InfoContextProvider>
  );
}

export default App;
