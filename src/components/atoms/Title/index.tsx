import * as React from "react";
import { FormattedMessage } from "react-intl";

import "./Title.css";

function Title() {
  return (
    <div className="Title">
      <h1>Le Memory des Super-Héros</h1>
      <h1>
        <FormattedMessage id="home.title" />
      </h1>
    </div>
  );
}

export default Title;
