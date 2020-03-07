import React, { FunctionComponent, ReactElement } from "react";
import { FormattedMessage } from "react-intl";

import "./Title.css";

const Title: FunctionComponent<{}> = (): ReactElement => {
  return (
    <div className="Title">
      <h1>
        <FormattedMessage id="home.title" />
      </h1>
    </div>
  );
};

export default Title;
