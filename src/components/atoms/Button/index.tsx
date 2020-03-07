import React, { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import "./Button.css";

const Button: FunctionComponent<{}> = () => {
  return (
    <div className="Button">
      <Link to="/game">
        <button className="btn-large play" type="submit" name="action">
          <FormattedMessage id="nav.play" />
          <i className="material-icons right">send</i>
        </button>
      </Link>
    </div>
  );
};

export default Button;
