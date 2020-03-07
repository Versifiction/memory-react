import * as React from "react";
import { FormattedMessage } from "react-intl";

import "./ScoresText.css";

function ScoresText() {
  return (
    <div className="ScoresText">
      <div className="container">
        <h1>
          <FormattedMessage id="nav.scores" />
        </h1>
      </div>
    </div>
  );
}

export default ScoresText;
