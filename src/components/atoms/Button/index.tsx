import React, { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import "./Button.css";

type ButtonProps = {
  isCentered: boolean;
  label: string;
};

const Button: FunctionComponent<ButtonProps> = ({ isCentered, label }) => {
  return (
    <div className={`Button ${isCentered ? "centered" : ""}`}>
      <Link to="/game">
        <button className="btn-large play" type="submit" name="action">
          <FormattedMessage id={`${label}`} />
          <i className="material-icons right">send</i>
        </button>
      </Link>
    </div>
  );
};

export default Button;
