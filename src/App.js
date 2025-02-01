import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to Tic-Tac-Toe</h1>
        <Switch>
          <Route exact path="/" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
