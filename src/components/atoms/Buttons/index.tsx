import React, { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import "./Buttons.css";

const Buttons: FunctionComponent<{}> = () => {
  return (
    <div className="Buttons">
      <Link to="/rules">
        <button className="btn-large rules" type="submit" name="action">
          <FormattedMessage id="nav.rules" />
          <i className="material-icons right">menu</i>
        </button>
      </Link>
      <Link to="/game">
        <button className="btn-large play" type="submit" name="action">
          <FormattedMessage id="nav.play" />
          <i className="material-icons right">send</i>
        </button>
      </Link>
    </div>
  );
};

export default Buttons;
