import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import Scores from "./pages/Scores";
import Error from "./pages/Error";

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={Game} />
      <Route path="/rules" exact component={Rules} />
      <Route path="/scores" exact component={Scores} />
      <Route component={Error} />
    </Switch>
  );
}

export default Router;
