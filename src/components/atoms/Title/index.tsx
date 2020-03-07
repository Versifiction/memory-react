import React, { FunctionComponent, ReactElement, useEffect } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import { useStoreState } from "../../../store/hooks";
import "./Title.css";

type TitleProps = {
  intl: any;
};

const Title: FunctionComponent<TitleProps> = ({ intl }): ReactElement => {
  const locale = useStoreState(state => state.intl.locale);

  useEffect(() => {
    console.log("locale ", locale);
  }, []);

  return (
    <div className="Title">
      <h1>
        <FormattedMessage id="home.title" />
      </h1>
    </div>
  );
};

export default injectIntl(Title);
