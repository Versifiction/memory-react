/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import Button from "../../atoms/Button";
import cardsJson from "../../../utils/cards.json";
import "./Board.css";

function Board() {
  const [cards, setCards] = useState(cardsJson.cards);
  const [cardsShuffled, setCardsShuffled] = useState(
    cardsJson.cards.concat(cards).sort(() => 0.5 - Math.random())
  );
  const [firstGuess, setFirstGuess] = useState();
  const [secondGuess, setSecondGuess] = useState();
  const [count, setCount] = useState(0);
  const [pairFound, setPairFound] = useState();
  const [previousTarget, setPreviousTarget] = useState(null);
  const [delay, setDelay] = useState(1200);

  function clickCard(e: any) {
    const clicked = e.target;

    function match() {
      var selected = document.querySelectorAll(".selected");
      selected.forEach(function(card) {
        card.classList.add("match");
      });
    }

    function resetGuesses() {
      setFirstGuess("");
      setSecondGuess("");
      setCount(0);
      setPreviousTarget(null);

      var selected = document.querySelectorAll(".selected");
      selected.forEach(function(card) {
        card.classList.remove("selected");
      });
    }

    if (
      clicked.nodeName === "SECTION" ||
      clicked === previousTarget ||
      clicked.parentNode.classList.contains("selected") ||
      clicked.parentNode.classList.contains("match")
    ) {
      return;
    }

    if (count < 2) {
      setCount(count + 1);
      if (count === 1) {
        setFirstGuess(clicked.parentNode.dataset.name);
        clicked.parentNode.classList.add("selected");
      } else {
        setSecondGuess(clicked.parentNode.dataset.name);
        clicked.parentNode.classList.add("selected");
      }

      if (firstGuess && secondGuess) {
        if (firstGuess === secondGuess) {
          setTimeout(match, delay);
          setPairFound(pairFound + 1);
        }
        setTimeout(resetGuesses, delay);
      }
      setPreviousTarget(clicked);
    }
  }

  return (
    <div className="Board">
      <div className="container">
        <div className="progress">
          <div className="determinate" style={{ width: "100%" }}></div>
        </div>
        <section id="tray">
          {cardsShuffled &&
            cardsShuffled.map((card: any) => (
              <div
                key={card.name}
                className={`cardHero ${card.name}`}
                onClick={e => {
                  clickCard(e);
                }}
              >
                <div className="front"></div>
                <div
                  className="back"
                  style={{
                    backgroundImage: `url(${require(`../../../assets/images/${card.img}`)})`,
                    transform: "rotateY(180deg)",
                    backgroundColor: "#61dafb",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center"
                  }}
                ></div>
              </div>
            ))}
        </section>
        <div className="Button centered">
          <Link to="/rules">
            <button className="btn-large play" type="submit" name="action">
              <FormattedMessage id="board.restart" />
              <i className="material-icons right">send</i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Board;
