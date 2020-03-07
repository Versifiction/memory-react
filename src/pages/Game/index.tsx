import React, { useState } from "react";

import Nav from "../../components/molecules/Nav";
import Board from "../../components/molecules/Board";
import Footer from "../../components/molecules/Footer";
import "./Game.css";

function Game() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return (
    <div className="Game">
      <Nav />
      <Board />
      <Footer />
    </div>
  );
}

export default Game;
