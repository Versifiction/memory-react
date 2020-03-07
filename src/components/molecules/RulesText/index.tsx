import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import Button from "../../atoms/Button";
import "./RulesText.css";

function RulesText() {
  return (
    <div className="RulesText">
      <div className="container">
        <h1>
          <FormattedMessage id="nav.rules" />
        </h1>
        <p>
          <FormattedMessage id="rules.text1" />
        </p>
        <p>
          <FormattedMessage id="rules.text2" />
          &nbsp;
          <span className="blueText">
            <FormattedMessage id="rules.text3" />
          </span>
        </p>
        <p>
          <FormattedMessage id="rules.text4" />
        </p>
        <p>
          <FormattedMessage id="rules.text5" />
        </p>
        <span className="blueText">
          <FormattedMessage id="rules.text6" />
        </span>
        <span className="bold">
          <p>
            <FormattedMessage id="rules.text7" />
          </p>
        </span>
        <div className="Button">
          <Link to="/game">
            <button className="btn-large play" type="submit" name="action">
              <FormattedMessage id="nav.play" />
              <i className="material-icons right">send</i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RulesText;
