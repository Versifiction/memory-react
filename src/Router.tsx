import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Error from "./pages/Error";

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={Game} />
      <Route component={Error} />
    </Switch>
  );
}

export default Router;
