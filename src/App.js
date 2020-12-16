import React from "react";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import InfoContextProvider from "./InfoContext/InfoContext";
import GameScreen from "./Components/GameScreen/GameScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <InfoContextProvider>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/GameScreen" exact component={GameScreen}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </InfoContextProvider>
  );
}

export default App;
