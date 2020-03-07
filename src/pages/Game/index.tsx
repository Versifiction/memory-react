import * as React from "react";

import Nav from "../../components/molecules/Nav";
import Board from "../../components/molecules/Board";
import Footer from "../../components/molecules/Footer";
import "./Game.css";

function Game() {
  return (
    <div className="Game">
      <Nav />
      <Board />
      <Footer />
    </div>
  );
}

export default Game;
