import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
